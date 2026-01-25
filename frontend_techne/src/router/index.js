import { createRouter, createWebHistory } from 'vue-router';

// Import your page components
import Home from '@/views/Public/HomePage.vue';
import Services from '@/views/Public/ServicesPage.vue';
import Portfolio from '@/views/Public/PortfolioPage.vue';
// import About from '@/views/About.vue';
// import Contact from '@/views/Contact.vue';
// import Login from '@/views/Login.vue';
// import Register from '@/views/Register.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
//   {
//     path: '/about',
//     name: 'About',
//     component: About
//   },
//   {
//     path: '/contact',
//     name: 'Contact',
//     component: Contact
//   },
//   {
//     path: '/login',
//     name: 'Login',
//     component: Login
//   },
//   {
//     path: '/register',
//     name: 'Register',
//     component: Register
//   }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

export default router;