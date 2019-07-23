<template>
  <div class="todoItem">
        <li>
          {{index+1}}.
          <input type="checkbox" :checked="item.complete" @change="checkBoxChange(item)">
          <span :class="{cboxActive:item.complete}"  @dblclick="modifyItem()"
          v-if="!ediable">{{item.content}}<button @click="deleteItem(item)">delete</button></span>
         <input type="text" v-else
                 class="newInput"
                 @keyup.enter="enterClick(item)"
                 v-model="content">
        </li>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'todoItem',
  props:{
    item:Object,
    index:Number
  },
  data(){
    return {
        content:'',
        ediable:false,
    }
  },
  methods:{
    ...mapMutations(['changeItem']),
     checkBoxChange(item){
       item.complete = !item.complete
       let updateItem ={id:item.id,content:item.content,complete:item.complete}
       this.$store.dispatch('updateTodoList',updateItem)
      //  this.changeItem(updateItem);
    },
    modifyItem(){
      this.ediable = true;
      this.content = this.item.content;
    },
    enterClick(item){
      item.content = this.content;
      let updateItem ={id:item.id,content:item.content,complete:item.complete}
       this.$store.dispatch('updateTodoList',updateItem)
      //  this.changeItem(updateItem);
      this.ediable = false;
    },
    deleteItem(item){
       this.$store.dispatch('deleteTodoList',item.id)
      //  this.changeItem(updateItem);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .cboxActive{
    text-decoration: line-through;
  }
  button{
    margin-left: 30px;
  }
  @import "../assets/style.css";
</style>
