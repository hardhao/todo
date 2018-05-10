<template>
  <div id="app">
      <Todo />
    
  </div>
</template>

<script>
import Todo from './components/Todo.vue'
export default {
  name: 'app',
  components: {
    Todo
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 100%;
  height: 100vh;
  background-color: #FF6464;
  padding-top: 100px;
}
/* .card{
  background-color: #fff;
  height: 400px;
  width: 400px;
  margin: 0 auto;
} */
button{
  width: 40px;
  height: 40px;
  outline: none;
}
svg{
  width: 30px;
  height: 30px;
}
</style>
