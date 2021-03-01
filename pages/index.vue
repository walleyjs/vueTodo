<template>
  <div class="container">
    <h1 class="title">
      My To Do List
    </h1>
    <to-do-list :todos="todos" />
  </div>
</template>

<script>
import ToDoList from '~/components/ToDoList.vue';
export default {
   components: {
    ToDoList
  },
  
  data () {
    return {
      todos: {
        type: Array
      }
    }
  },
  asyncData (ctx) {
    return {
      todos: [
        {
          'id': '1',
          'title': 'A',
          'completed': false
        },
        {
          'id': '2',
          'title': 'B',
          'completed': true
        }
      ]
    }
  }
}
</script>

<style>
.container {
  display: flex;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
