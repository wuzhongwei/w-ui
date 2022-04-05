<template>
  <div>
    <w-button type="primary" disabled @click="handle">主要的</w-button>
    <w-button type="danger" loading >危险</w-button>
    <w-button type="warning"  @click="handle">警告</w-button>
    <w-button type="success">成功</w-button>
    <w-button type="info">信息</w-button>
    <w-button icon="w-icon-search" type="info" size="medium"></w-button>
    <w-button icon="w-icon-search" type="info" size="small"></w-button>
    <w-button icon="w-icon-search" type="info" size="mini"></w-button>
    <w-button icon="w-icon-search" type="info" plain></w-button>
    <w-button icon="w-icon-search" type="info" round></w-button>
    <w-button icon="w-icon-search" type="info" circle @click="handle" autofocus="autofocus">
      <template #loding>DSADAS</template>
    </w-button>
  </div>
</template>
<script lang="ts" setup>
// import dd from '../packages/index'
// console.log(dd)
const handle = (ev:any) => {
  console.log(2222, ev)
}
</script>

