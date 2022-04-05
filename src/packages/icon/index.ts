import {App} from 'vue'
import Icon from './icon.vue';
import '../../style/icon.scss';

export default {
  install (app: App) {
    app.component(Icon.name, Icon)
  }
}