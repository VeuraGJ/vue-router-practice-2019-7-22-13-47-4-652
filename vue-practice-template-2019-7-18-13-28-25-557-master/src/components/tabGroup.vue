<template>
    <ul class="listKind">
      <li v-for="(tab,index) in tabs" :key="index" @click="switchTab(tab)">{{tab}}</li>
    </ul>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'listKind',
  data(){
    return {
      currentTab: 'All'
    }
  },
  props:{
    tabs:Array
  },
 methods:{
   ...mapMutations(['filterItem']),
    switchTab(tab){
      this.currentTab = tab;
      this.filterItem(this.currentTab);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/style.css";
</style>
