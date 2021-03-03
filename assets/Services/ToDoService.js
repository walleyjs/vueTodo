import ToDo from '~/assets/data/ToDo.class'


export default class ToDoApi {
    constructor ($axios) {
      this.axios = $axios
    }
  
    findAll () {
      return this.axios({
        method: 'get',
        url: 'https://vuetodoo.herokuapp.com/newtodo',
        withCredentials: true
      }).then((response) => {
        const todos = []
        response.data.forEach((todo) => {
          todos.push(new ToDo(todo._id, todo.todo, todo.completed))
        })
        return todos
      })


    }
  
    
    create (title) {
      return this.axios({
        method: 'post',
        url: 'https://vuetodoo.herokuapp.com/newtodo',
        data: {
        todo: title,
        completed: false
        },
       
        withCredentials: false
      }).then((response) => {
          
    //    console.log(response.data)
       return this.axios({
        method: 'get',
        url: 'https://vuetodoo.herokuapp.com/newtodo',
        withCredentials: false
      }).then((response) => {
        const todos = []
        response.data.forEach((todo) => {
            // console.log(todo)
          todos.push(new ToDo(todo._id, todo.todo, todo.completed))
        })
        return todos
      })
      })
    }
  
    complete (todo) {
      return this.axios({
        method: 'put',
        url: 'https://vuetodoo.herokuapp.com/newtodoedit',
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
        url: 'https://vuetodoo.herokuapp.com/newtododel',
        data: {
            'tId':id
            },
        withCredentials: false
      })
    }
  }
  