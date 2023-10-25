<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const handleClick = () => {
  ElMessage({
    message: 'Hello Vite + Vue 3 + TSX',
    type: 'success'
  })
}
const isDark = useDark()
</script>
<template>
  <div class="h-200 w-200 center bg-amber">文件变化了</div>
  <el-button type="primary" @click="handleClick"> 按钮</el-button>
  <el-icon size="20">
    <IconCustomLogo></IconCustomLogo>
  </el-icon>
  <el-icon size="20" color="purple">
    <IconMdiAccessPoint></IconMdiAccessPoint>
  </el-icon>
  <el-icon size="22" color="red">
    <IconEpEdit />
  </el-icon>
  <el-switch
    v-model="isDark"
    inline-prompt
    active-text="dark"
    size="large"
    inactive-text="light"
    @change="useToggle(isDark)"
  />
</template>

<style scoped></style>
