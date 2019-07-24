<template>
  <div>
    <img src="../assets/logo.png">
    <p>用户名：{{myname}}</p>
    <p>电话：11111</p>
  </div>
</template>

<script>
export default {
    computed:{
      myname(){
          return this.$route.params.myname
      }
    },
  
}
</script>

<style scoped>

</style>
