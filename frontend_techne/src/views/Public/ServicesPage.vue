<template>
  <div class="services-page">
    <HeroSection />
    <ServiceSection />
    <ContactUsSection/>
  </div>
</template>

<script setup>
import HeroSection from '@/components/public/services/ServicesHero.vue'; // <--- Import the new component
import ServiceSection from '@/components/public/services/ServicesSection.vue'; // <--- Import the new component
import ContactUsSection from '@/components/public/ContactUsSection.vue'; // <--- Import the new component
</script>


<style scoped>

</style>