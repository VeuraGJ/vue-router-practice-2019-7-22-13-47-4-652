export default{
    setItems(state,items){
        state.todoList.push(...items);
    },
    addItem(state,text){
        const length =state.todoList.length;
        const item ={
          id:length,
          check:false,
          content: text
        }
        state.todoList.push(item);
      },
     changeItem(state,newitem){
        const oldItem = state.todoList.find(item => item.id == newitem.id);
        oldItem.content = newitem.content;
        oldItem.check = newitem.check;
      },
      deleteItem(state,itemId){
          if(itemId === 1){
              state.todoList.shift();
          }else if(itemId === state.todoList.length){
              state.todoList.pop();
          }else{
              state.todoList.splice(itemId-1,1);
          }
      },
      filterItem(state,activeKind){
        state.activeKind = activeKind;
      }
}