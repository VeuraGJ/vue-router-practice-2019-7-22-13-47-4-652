<template>
  <div class="addTodo">
    <form action="">
      <input type="text" v-model="inputItem">
      <button type="button" @click="addTodoItem">Add</button>
    </form>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'addTodo',
  data(){
      return{
           inputItem:'',
      }
  },
  methods:{
    ...mapMutations(['addItem']),
    addTodoItem(){
      this.$store.dispatch('addTodoList',{content:this.inputItem,complete:false})
      // this.addItem(this.inputItem);
      this.inputItem ='';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/style.css";
</style>
