import Header from './Header.html'
import App from './App.html'
import data from './data'

const header = new Header({
  target: document.querySelector('.js-header'),
  data: {
    title: 'Portflio:'
  }
})

const app = new App({
  target: document.querySelector('.js-index'),
  data: data
})

export {
  app,
  header
}
