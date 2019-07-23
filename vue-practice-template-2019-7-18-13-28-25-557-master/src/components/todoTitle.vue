<template>
  <div class="todoTitle">
    <h1>Jquery To Do List</h1>
    <p>Simple Todo List with adding and filter by diff status</p>
  </div>
</template>

<script>
export default {
  name: 'todoTitle',
  props:{
      title:String,
      subTitle:String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/style.css";
</style>
