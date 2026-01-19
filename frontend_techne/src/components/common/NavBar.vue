<!-- src/components/common/Navbar.vue -->
<template>
  <nav class="app-navbar" :class="{ 'scrolled': isScrolled }">
    <div class="navbar-brand">
      <router-link to="/">
        <img :src="logo" alt="Techne-Fixer Logo" class="app-logo" />
        <text class="brand-name">Techne-Fixer</text>
      </router-link>
    </div>
    <div class="navbar-links">
      <router-link to="/" class="nav-button">Home</router-link>
      <router-link to="/services" class="nav-button">Services</router-link>
      <router-link to="/portfolio" class="nav-button">Portfolio</router-link>
      <router-link to="/about" class="nav-button">About</router-link>
      <router-link to="/contact" class="nav-button">Contact</router-link>

      <!-- Public/Guest Links -->
      <template v-if="!isAuthenticated">
        <router-link to="/login" class="btn btn-primary">Login</router-link>
        <router-link to="/register" class="btn btn-secondary">Register</router-link>
      </template>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import logo from '@/assets/images/logo.png';

const isAuthenticated = false;
const isManager = false;
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

const logout = () => {
  console.log('Logout action (UI only)');
};
</script>

<style scoped>
.app-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  padding: 1rem 2rem;
  color: white;
  box-shadow: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
}

/* Navbar when scrolled */
.app-navbar.scrolled {
  background-color: rgba(10, 31, 26, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-brand a {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.brand-name {
  font-size: 1.5em;
  font-weight: bold;
  margin-left: 0.5rem;
  vertical-align: middle;
  color: white;
}

.app-logo {
  height: 60px;
  width: auto;
  vertical-align: middle;
}

.navbar-links {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.navbar-links .nav-button {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: transparent;
  color: white;
  border: 1px solid transparent;
  transition: all 0.3s ease;
  text-decoration: none;
  font-weight: 500;
  white-space: nowrap;
}

.navbar-links .nav-button:hover {
  background-color: rgba(255, 255, 255, 0.15);
  color: #00ff88;
  border-color: #00ff88;
}

.btn {
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  white-space: nowrap;
  text-decoration: none;
  display: inline-block;
}

.btn-primary {
  background-color: #00ff88;
  color: #0a1f1a;
  border: 1px solid #00ff88;
}

.btn-primary:hover {
  background-color: #00dd77;
  border-color: #00dd77;
}

.btn-secondary {
  background-color: transparent;
  color: white;
  border: 1px solid white;
}

.btn-secondary:hover {
  background-color: white;
  color: #0a1f1a;
}

/* Responsive */
@media (max-width: 768px) {
  .navbar-links {
    gap: 0.75rem;
  }
  
  .navbar-links .nav-button {
    padding: 0.4rem 0.8rem;
    font-size: 0.9em;
  }
  
  .brand-name {
    font-size: 1.2em;
  }
  
  .app-logo {
    height: 50px;
  }
}
</style>