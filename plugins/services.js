import ToDoService from '~/assets/Services/ToDoService'

export default (ctx, inject) => {
  const services = {
    todo: new ToDoService(ctx.$axios)
  }

  inject('services', services)
}