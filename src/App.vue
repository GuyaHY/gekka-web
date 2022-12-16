<script setup lang="ts">
import { ref } from "vue";

const activeIndex = ref("/");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
          :router="true"
        >
          <el-menu-item index="/">LOGO</el-menu-item>
          <div class="flex-grow" />
          <el-menu-item index="/home">主页</el-menu-item>
          <el-menu-item index="/work">作品</el-menu-item>
          <el-menu-item index="/about">关于社团</el-menu-item>
        </el-menu>
      </el-header>

      <el-main>
        <RouterView />
      </el-main>

      <el-footer> this is footer </el-footer>
    </el-container>
  </div>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
