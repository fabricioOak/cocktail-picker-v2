<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'
// import MainFooter from './components/MainFooter.vue'
</script>

<template>
  <div class="flex flex-grow flex-col">
    <MainHeader />
    <RouterView />
    <!-- <MainFooter /> -->
  </div>
</template>

<style>
body {
  @apply dark:bg-slate-800 dark:text-gray-200;
}
</style>
