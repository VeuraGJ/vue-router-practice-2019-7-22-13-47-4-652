<template>
  <div>
    <todoTitle :title="title" :subTitle="subTitle"></todoTitle>
    <addTodo></addTodo>
    <todoList/>
    <tabGroup :tabs="tabs"></tabGroup>
  </div>
</template>

<script>
import todoTitle from './todoTitle.vue'
import addTodo from './addTodo.vue'
import todoList from './todoList.vue'
import tabGroup from './tabGroup.vue'
export default {
  data(){
    return{
      title:'Jquery To Do List',
      subTitle:'Simple Todo List with adding and filter by diff status',
      tabs:['All','Active','Complete']
    }
  },
  components: {
    todoTitle,
    addTodo,
    todoList,
    tabGroup
  },
//   mounted:function(){
//     this.$store.dispatch('getTodoList');

//   }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
