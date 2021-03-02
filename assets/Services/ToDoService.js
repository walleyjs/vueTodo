import ToDo from '~/assets/data/ToDo.class'


export default class ToDoApi {
    constructor ($axios) {
      this.axios = $axios
    }
  
    findAll () {
      return this.axios({
        method: 'get',
        url: 'http://localhost:8000/newtodo',
        withCredentials: true
      }).then((response) => {
        const todos = []
        response.data.forEach((todo) => {
          todos.push(new ToDo(todo.id, todo.todo, todo.completed))
        })
        return todos
      })


    }
  
    create (title) {
      return this.axios({
        method: 'post',
        url: 'http://localhost:8000/newtodo',
        data: {
        todo: title,
        completed: false
        },
        withCredentials: true
      }).then((response) => {
        return response.data
      })
    }
  
    complete (todo) {
      return this.axios({
        method: 'put',
        url: 'http://localhost:8000/newtodoedit',
        data: {
          id: todo.id,
          title: todo.title,
          completed: true
        },
        withCredentials: true
      }).then((response) => {
        return response.data
      })
    }
  
    deleteItem (id) {
      return this.axios({
        method: 'delete',
        url: 'newtododel',
        withCredentials: true
      })
    }
  }
  