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
     return this.$store.getters.switchItems(this.$store.state.activeKind);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/style.css";
</style>
