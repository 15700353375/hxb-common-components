import Vue from 'vue'
import Header from './Header.vue'
import HelloWorld from './HelloWorld.vue'
const Components = {
  Header,
  HelloWorld
}
 
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})
 
export default Components