import {App} from 'vue';
import ButtonGroup from './button-group.vue';
import '../../style/button-group.scss';

export default {
  install (app: App) {
    app.component(ButtonGroup.name, ButtonGroup)
  }
}