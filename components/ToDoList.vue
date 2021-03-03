<template>
  <div class="to-do-container">
    <div class="create-container">
      <input v-model="titleOfNewToDo" type="text">
      <button @click="create">
        Add
      </button>
    </div>
    <div class="to-do-list-container">
  <to-do-list-item v-for="todo in todos" :key="todo.id" :todo="todo"  />
</div>
  </div>
</template>

<script>
import ToDoListItem from '~/components/ToDoListItem.vue'
export default {
    components: {
    ToDoListItem
  },
  props: {
    todos: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      titleOfNewToDo: '',
    //    todos: this.$props.todos,
    }
  },
  methods: {
   create() {
        this.$services.todo.create(this.titleOfNewToDo).then((data) => {
            //  this.$emit('create', data)
          this.todos= data
             console.log("date",data[0].id)
           this.titleOfNewToDo = ''
        })
    //  this.todos.push({ id: this.titleOfNewToDo, title: this.titleOfNewToDo, completed: false })
    //  this.titleOfNewToDo = ''
   },

}
}
</script>

<style >
.to-do-container {
  width: 400px;
  margin: auto;
  margin-top: 50px;
  display: block;
}
  .create-container {
    width: 100%;
    height: 50px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  }
    input {
      height: 50px;
      width: 250px;
      border: none;
      padding-left: 10px;
      font-family: "Quicksand", "Source Sans Pro", -apple-system,
        BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
        sans-serif;
      font-size: 18px;
      }
    

    button {
      height: 45px;
      float: right;
      background: none;
      width: auto;
      margin: 0;
      border: none;
      cursor: pointer;
      text-align: right;
      padding-right: 20px;
      font-size: 18px;
    
    
  }

.to-do-list-container {
  width: 400px;
  margin: auto;
  margin-top: 50px;
  display: block;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
}
</style>