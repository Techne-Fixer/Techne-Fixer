<!-- src/views/HomePage.vue -->
<template>
  <div class="home-page">
    <HeroSection /> <!-- Now using the separated HeroSection component -->
    <ServiceSection /> <!-- Now using the separated ServiceSection component -->
    <PortfolioSection /> <!-- Now using the separated PortfolioSection component -->
    <TestimonialsSection /> <!-- Now using the separated TestimonialsSection component -->
    <ContactUsSection /> <!-- Now using the separated ContactUsSection component -->
  </div>
</template>

<script setup>
import HeroSection from '@/components/public/HeroSection.vue'; // <--- Import the new component
import ServiceSection from '@/components/public/ServicesCarousel.vue'; // <--- Import the new component
import PortfolioSection from '@/components/public/PortfolioSection.vue'; // <--- Import the new component
import TestimonialsSection from '@/components/public/TestimonialsSection.vue'; // <--- Import the new component
import ContactUsSection from '@/components/public/ContactUsSection.vue'; // <--- Import the new component
</script>

<style scoped>
/* Features Section (Content Wrapper for features) - These styles were already here */
.features-section {
  padding: 4rem 0; /* Vertical padding */
}

.features-section .content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.features-section h2 {
  color: #35495e;
  font-size: 2.5em;
  margin-bottom: 30px;
  text-align: center;
}

.feature-cards {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.card {
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 30px;
  width: 300px;
  text-align: left;
}

.card h3 {
  color: #35495e;
  margin-top: 0;
  font-size: 1.5em;
}

.card p {
  color: #666;
}

/* Any global styles that apply specifically to the home page's wrapper can remain here */
.home-page {
  /* text-align: center; */ /* This might not be needed if HeroSection and FeaturesSection manage their own alignment */
}
</style>
