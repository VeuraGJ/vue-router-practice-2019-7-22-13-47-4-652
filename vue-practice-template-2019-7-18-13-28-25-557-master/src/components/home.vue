<template>
  <div>
      <div>
    <button @click="goBack">返回</button>
    <span>用户名：{{name}}</span>
      </div>
    <ul>
        <li @click="todo">TodoList列表</li>
        <li @click="myInfo">我的</li>
    </ul>
    <div class="main">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name:''
    }
  },
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
      },
      todo(){
            // this.$router.push('/home/todoList');
            this.$router.replace({name:'todoList'})
      },
       myInfo(){
            // this.$router.push({name:'my',params:{myname:this.username}})
            this.$router.replace({name:'my',params:{myname:this.name}})
      }
  },
  mounted:function(){
      this.name = this.$route.params.username
  }
}
</script>

<style scoped>
ul{
    width:300px;
    float:left;
}
.main{
    width: 58%;
    height: 400px;
    margin-left: 300px;
    border: 1px solid;
    margin-top: 5px;
}
</style>
