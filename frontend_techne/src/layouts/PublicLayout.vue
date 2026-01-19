<!-- src/layouts/PublicLayout.vue -->
<template>
  <div class="public-layout">
    <Navbar /> <!-- Your Navbar component is now fixed and transparent -->

    <main class="public-content">
      <slot></slot>
    </main>

    <footer class="public-footer">
      <p>&copy; 2026 Techne-Fixer. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import Navbar from '@/components/common/Navbar.vue';
</script>

<style scoped>
.public-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f2f5;
}

.public-content {
  flex-grow: 1;
  /* --- REMOVED: padding-top is no longer needed here --- */
  /* The HeroSection will now sit underneath the transparent Navbar */
}

.public-footer {
  background-color: #35495e;
  color: white;
  text-align: center;
  padding: 1.5rem;
  font-size: 0.9em;
}
</style>
