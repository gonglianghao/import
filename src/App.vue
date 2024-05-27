<template>
  <div>
    <el-config-provider :locale="zh">
      <router-view></router-view>
    </el-config-provider>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script setup>
import zh from 'element-plus/es/locale/lang/zh-cn.mjs'
</script>

<style lang="less" scoped>
@import url("//at.alicdn.com/t/c/font_4459112_m1s9ey77eg.css");

</style>