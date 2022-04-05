<template>
  <i :class="'w-icon-' + props.name"></i>
</template>
<script lang="ts"> export default {name: 'WIcon'} </script>
<script lang="ts" setup>

let props = defineProps({
  name: {
    type: String,
    required: true
  }
})

</script>