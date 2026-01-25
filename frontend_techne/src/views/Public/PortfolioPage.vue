<template>
  <div class="portfolio-page">
    <HeroSection />
    <PortfolioSection />
    <ContactUsSection/>
  </div>
</template>

<script setup>
import HeroSection from '@/components/public/HeroSection.vue'; // <--- Import the new component
import PortfolioSection from '@/components/public/portfolio/PortfolioSection.vue'; // <--- Import the new component
import ContactUsSection from '@/components/public/ContactUsSection.vue'; // <--- Import the new component
</script>


<style scoped>

</style>