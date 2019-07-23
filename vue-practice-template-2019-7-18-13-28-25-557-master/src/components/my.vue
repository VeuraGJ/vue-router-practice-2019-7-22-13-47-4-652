<template>
  <div>
    <img src="../assets/logo.png">
    <span>{{myname}}</span>
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
