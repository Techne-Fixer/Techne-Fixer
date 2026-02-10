// router/index.js
import { createRouter, createWebHistory } from "vue-router";

// Import your page components
import Home from '@/views/Public/HomePage.vue';
import Services from '@/views/Public/ServicesPage.vue';
import Portfolio from '@/views/Public/PortfolioPage.vue';
import About from '@/views/Public/AboutPage.vue';
import Login from '@/views/Auth/Login.vue';

// Admin components
import Dashboard from "@/views/Manager/Dashboard.vue";
import AdminServices from "@/views/Manager/WebsiteContent/Service/Index.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  
  // Admin routes - NO layout wrapper here
  {
    path: '/admin',
    redirect: '/admin/dashboard'
  },
  {
    path: '/admin/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/admin/services',
    name: 'AdminServices',
    component: AdminServices
  }
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
  },
});

export default router;