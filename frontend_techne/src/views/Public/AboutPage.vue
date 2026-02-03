<template>
  <div class="services-page">
    <HeroSection />
    <AboutSection />
    <ContactUsSection/>
  </div>
</template>

<script setup>
import HeroSection from '@/components/public/about/AboutHero.vue'; // <--- Import the new component
import AboutSection from '@/components/public/about/AboutSection.vue'; // <--- Import the new component
import ContactUsSection from '@/components/public/ContactUsSection.vue'; // <--- Import the new component
</script>


<style scoped>

</style>