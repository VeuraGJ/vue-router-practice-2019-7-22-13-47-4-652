<template>
  <div>
    <input type="text" placeholder="请输入姓名" v-model="inputText">
    <button @click="useButton">开始使用</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
     inputText:''
    }
  },
  methods:{
      useButton(){
        //   this.$router.push('/home')
        this.$router.push({name:'home',params:{username:this.inputText}})
      }
  }
}
</script>

<style>

</style>
