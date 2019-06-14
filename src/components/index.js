import Vue from 'vue'
import Header from './Header.vue'
import HelloWorld from './HelloWorld.vue'
import TopBar from './TopBar.vue'
const Components = {
  Header,
  HelloWorld,
  TopBar
}
 
Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name])
})
 
export default Components