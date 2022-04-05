import {App} from 'vue'
import Button from './button.vue';
import '../../style/button.scss';
import '../../style/icon.scss';
export default {
  install(app: App) {
    app.component(Button.name, Button)
  }
}