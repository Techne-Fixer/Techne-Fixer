<!-- src/App.vue -->
<template>
  <PublicLayout>
    <router-view />
  </PublicLayout>
</template>

<script setup>
import PublicLayout from '@/layouts/PublicLayout.vue';
</script>

<style>
/* Global styles can go here or in src/styles/main.css */
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>