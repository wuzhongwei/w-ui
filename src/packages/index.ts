import {App} from 'vue';
import Button from './button';
import ButtonGroup from './button-group';
import Icon from './icon';

const plugins = [
  Button,
  ButtonGroup,
  Icon
]
const install = (app:App) => {
  plugins.forEach(component => {
    app.use(component)
  })
}
export default {
  install
}