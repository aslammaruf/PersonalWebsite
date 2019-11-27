import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faCode , faGlobeEurope, faDatabase, faDesktop} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

library.add(
  faGithub,
  faLinkedinIn,
  faEnvelope,

  faCode,
  faGlobeEurope,

  faDatabase,
  faDesktop
)

AOS.init();
new Vue({
  render: h => h(App),
}).$mount('#app')
