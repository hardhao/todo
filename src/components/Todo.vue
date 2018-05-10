<template>
  <div class="wrap">
      <Header />
      <TodoList />
      <Form />
      <Actions />
  </div>
</template>

<script>
import Header from "./Header.vue"
import TodoList from "./TodoList.vue"
import Form from "./Form.vue"
import Actions from "./Actions.vue"
export default {
    name:'Todo',
    components:{
        Header,
        TodoList,
        Form,
        Actions
    }
}
</script>

<style>
.wrap{
    width:25%;
    height:600px;
    margin: 0 auto;
    background-color: #FFF5A5;
    box-shadow: 3px 3px 3px 3px #FFAA64;
}
</style>
