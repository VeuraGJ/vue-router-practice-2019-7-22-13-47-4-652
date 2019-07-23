import axios from 'axios'
export default{
    getTodoList({ commit }){
        axios.get('http://localhost:3001/todos')
                .then((response)=>{
                    commit('setItems',response.data);
                });
    },
    addTodoList({ commit },item){
        axios.post('http://localhost:3001/todos',item)
                .then((response)=>{
                    commit('setItems',[response.data]);
                });
    },
    updateTodoList({ commit },item){
        axios.put('http://localhost:3001/todos/'+item.id,item)
                .then((response)=>{
                   commit('changeItem',response.data);
                });
    },
    deleteTodoList({ commit },itemId){
        axios.delete('http://localhost:3001/todos/'+itemId)
                .then((response)=>{
                   commit('deleteItem',itemId)
                });
    }
}