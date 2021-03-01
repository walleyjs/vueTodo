<template>
  <div class="container">
    <h1 class="title">
      My To Do List
    </h1>
  </div>
</template>``

<script>

export default {
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