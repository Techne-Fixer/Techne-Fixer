<!-- src/components/public/HeroSection.vue -->
<template>
  <HeroSection
    title="Professional Repair Services For Your Electronics & Appliances"
    description="Expert technicians specializing in Laptops, Printers, Washing Machines, Cellphones, CCTV, Solar Panels & Medical Equipment"
    button-text="Learn More"
    :image="characterImage"
    image-alt="Kenji 'Spark' Tanaka, Electrical Engineer"
    @button-click="handleLearnMore"
  />
</template>

<script setup>
import HeroSection from '@/components/common/HeroSection.vue';
import characterImage from '@/assets/images/character.png';

const handleLearnMore = () => {
  // Handle button click
  console.log('Learn More clicked');
};
</script>