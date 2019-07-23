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
          this.$router.push('/home')
      }
  }
}
</script>

<style>

</style>
