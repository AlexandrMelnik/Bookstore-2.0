import axios from 'axios';

export default {
  account: {
    signup: data =>
      axios.post('/api/account/signup', { data }).then(res => res.data.user),
    signin: data =>
      axios.post('/api/account/signin', { data }).then(res => res.data.user),
    confirm: token =>
      axios.post('/api/account/confirm', { token }).then(res => res.data.user)
  },
  categories: () =>
    axios.get('/api/categories').then(res => res.data.categories),
  books: {
    popular: () =>
      axios.get('/api/books/popular').then(res => res.data.books)
  }
}
