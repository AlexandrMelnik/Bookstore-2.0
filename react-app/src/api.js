import axios from 'axios';
const serverAPI = 'http://176.122.127.247:8080';

export default {
  account: {
    signup: data =>
      axios.post(serverAPI+'/api/account/signup', { data }).then(res => res.data.user),
    signin: data =>
      axios.post(serverAPI+'/api/account/signin', { data }).then(res => res.data.user),
    confirm: token =>
      axios.post(serverAPI+'/api/account/confirm', { token }).then(res => res.data.user)
  },
  categories: () =>
    axios.get(serverAPI+'/api/categories').then(res => res.data.categories),
  books: {
    all: () =>
      axios.get(serverAPI+'/api/books/all').then(res => res.data.books),
    getBook: id  =>
      axios.post(serverAPI+'/api/books/book', { id }).then(res => res.data.book),
  }
}
