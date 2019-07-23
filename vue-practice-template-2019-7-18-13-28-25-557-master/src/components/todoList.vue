<template>
  <ul class="taskList">
    <todoItem v-for="(item,index) in todoItems" :key="item.id" :item="item" :index="index">
    </todoItem>
  </ul>
</template>

<script>
import todoItem from './todoItem.vue'
export default {
  name: 'todoList',
  components:{
    todoItem
  },
  computed:{
    todoItems(){
     switch (this.$store.state.activeKind) {
        case "Active":
          return this.$store.state.todoList.filter(n => !n.complete);
        case "Complete":
          return this.$store.state.todoList.filter(n => n.complete);
        case "All":
          return this.$store.state.todoList;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/style.css";
</style>
