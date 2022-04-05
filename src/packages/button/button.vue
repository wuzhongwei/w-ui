<template>
  <button 
    :class="classs"
    :type="nativeType"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
  >
    <i class="w-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
    <template v-else>
      按钮
    </template>
  </button>
</template>
<script lang="ts"> export default {name: 'WButton'} </script>
<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { ButtonType } from './type';

let props = defineProps({
  type: {
    type: String as PropType<ButtonType>,
    default: 'primary'
  },
  size: String,
  icon: {
    type: String,
    default: ''
  },
  nativeType: {
    type: String,
    default: 'button'
  },
  loading: Boolean,
  disabled: Boolean,
  plain: Boolean,
  round: Boolean,
  circle: Boolean,
  autofocus: Boolean,
})
const buttonDisabled = computed(() => {
  return props.disabled
})
const buttonSize = computed(() => {
  return props.size
})

const classs = computed(() => [
  'w-button',
  `w-button--${props.type}`,
  buttonSize.value ? 'w-button--' + buttonSize.value : '',
  {
    'is-loading': props.loading,
    'is-disabled': buttonDisabled.value,
    'is-plain': props.plain,
    'is-round': props.round,
    'is-circle': props.circle
  }
])


</script>
