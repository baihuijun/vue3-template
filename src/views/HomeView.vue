<script setup lang="ts">
const num = ref(1)
</script>

<template>
  <p>{{ num }}</p>
  <div>
    <el-button type="primary" @click="num++">按钮</el-button>
    <el-button type="success" @click="num++">按钮</el-button>
    <el-button type="warning" @click="num++">按钮</el-button>
    <el-button type="danger" @click="num++">按钮</el-button>
    <el-button type="info" @click="num++">按钮</el-button>
  </div>
</template>
<style lang="scss" scoped>
span {
  font-size: 20px;
}
</style>
