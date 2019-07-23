<template>
  <div>
    <button @click="goBack">返回</button>
    <span>用户名：{{username}}</span>
  </div>
</template>

<script>
export default {
  computed:{
      username(){
          return this.$route.params.username
      }
    },
  methods:{
      goBack(){
          let con = confirm("确认返回欢迎界面？")
          if(con){
              this.$router.go(-1);
          }
      }
  }
}
</script>

<style scoped>

</style>
