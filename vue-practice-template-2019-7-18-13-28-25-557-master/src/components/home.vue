<template>
  <div>
    <button @click="goBack">返回</button>
  </div>
</template>

<script>
export default {
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

<style>

</style>
