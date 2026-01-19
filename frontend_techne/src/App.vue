<!-- src/App.vue -->
<template>
  <PublicLayout>
    <!-- For now, we'll embed a placeholder page directly. -->
    <!-- Later, this will be replaced by <router-view /> -->
    <HomePage />
  </PublicLayout>
</template>

<script setup>
import PublicLayout from '@/layouts/PublicLayout.vue';
import HomePage from '@/views/HomePage.vue'; // We'll create this next
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
