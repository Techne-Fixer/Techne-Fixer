<!-- src/components/public/ServicesCarousel.vue -->
<template>
  <section class="services-section">
    <div class="services-container">
      <div class="section-header">
        <h2>Our Services</h2>
        <p>Comprehensive solutions tailored to your needs</p>
      </div>

      <div class="carousel-wrapper">
        <button 
          class="carousel-btn prev" 
          @click="prevSlide" 
          :disabled="currentIndex === 0"
          aria-label="Previous">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div class="carousel-track-container">
          <div 
            class="carousel-track" 
            :style="trackStyle"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
          >
            <div 
              v-for="(service, index) in services" 
              :key="index"
              class="service-card"
              :style="cardStyle"
            >
              <BaseCard variant="elevated" hoverable padding="large">
                <div class="card-content">
                  <div class="icon-wrapper" :style="{ backgroundColor: service.color }">
                    <span class="service-icon">{{ service.icon }}</span>
                  </div>
                  <h3>{{ service.title }}</h3>
                  <p>{{ service.description }}</p>
                </div>
              </BaseCard>
            </div>
          </div>
        </div>

        <button 
          class="carousel-btn next" 
          @click="nextSlide"
          :disabled="currentIndex >= maxIndex"
          aria-label="Next">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <div class="carousel-dots">
        <button 
          v-for="(dot, index) in totalDots" 
          :key="index"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="goToSlide(index)"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import BaseCard from '@/components/common/cards/BaseCard.vue';

const currentIndex = ref(0);
const visibleSlides = ref(3);
const touchStartX = ref(0);
const touchEndX = ref(0);

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and best practices',
    color: '#ff4757'
  },
  {
    icon: '📱',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps for iOS and Android',
    color: '#ffd93d'
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that users love',
    color: '#00ff88'
  },
  {
    icon: '☁️',
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and deployment services',
    color: '#3742fa'
  },
  {
    icon: '🔧',
    title: 'Maintenance & Support',
    description: '24/7 technical support and ongoing maintenance',
    color: '#ff6b9d'
  },
  {
    icon: '🚀',
    title: 'DevOps',
    description: 'CI/CD pipelines and automated deployment solutions',
    color: '#c56cf0'
  }
];

const maxIndex = computed(() => {
  return Math.max(0, services.length - visibleSlides.value);
});

const totalDots = computed(() => {
  return maxIndex.value + 1;
});

const trackStyle = computed(() => {
  const cardWidth = 100 / visibleSlides.value;
  const offset = currentIndex.value * cardWidth;
  return {
    transform: `translateX(-${offset}%)`,
    transition: 'transform 0.5s ease'
  };
});

const cardStyle = computed(() => {
  return {
    flex: `0 0 ${100 / visibleSlides.value}%`,
    maxWidth: `${100 / visibleSlides.value}%`
  };
});

const nextSlide = () => {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++;
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

// Touch handlers for mobile swipe
const handleTouchStart = (e) => {
  touchStartX.value = e.touches[0].clientX;
};

const handleTouchMove = (e) => {
  touchEndX.value = e.touches[0].clientX;
};

const handleTouchEnd = () => {
  const swipeThreshold = 50;
  const diff = touchStartX.value - touchEndX.value;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      // Swiped left - next slide
      nextSlide();
    } else {
      // Swiped right - previous slide
      prevSlide();
    }
  }
  
  touchStartX.value = 0;
  touchEndX.value = 0;
};

const updateVisibleSlides = () => {
  if (window.innerWidth < 768) {
    visibleSlides.value = 1;
  } else if (window.innerWidth < 1024) {
    visibleSlides.value = 2;
  } else {
    visibleSlides.value = 3;
  }
  
  // Ensure current index is within bounds
  if (currentIndex.value > maxIndex.value) {
    currentIndex.value = maxIndex.value;
  }
};

onMounted(() => {
  updateVisibleSlides();
  window.addEventListener('resize', updateVisibleSlides);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateVisibleSlides);
});
</script>

<style scoped>
.services-section {
  background: #ffffff;
  padding: 5rem 0;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.services-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.section-header p {
  font-size: 1.2rem;
  color: #666;
}

.carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.carousel-track-container {
  overflow: hidden;
  flex: 1;
  touch-action: pan-y;
}

.carousel-track {
  display: flex;
  width: 100%;
  user-select: none;
}

.service-card {
  padding: 0 0.75rem;
  box-sizing: border-box;
  min-width: 0;
}

.card-content {
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem;
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.service-card:hover .icon-wrapper {
  transform: scale(1.1) rotate(5deg);
}

.service-icon {
  font-size: 2.5rem;
}

.card-content h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.75rem;
  word-wrap: break-word;
}

.card-content p {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  word-wrap: break-word;
}

.carousel-btn {
  background: #00ff88;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #0a1f1a;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 255, 136, 0.3);
}

.carousel-btn:hover:not(:disabled) {
  background: #00dd77;
  transform: scale(1.1);
}

.carousel-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
  box-shadow: none;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #ddd;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot.active {
  background: #00ff88;
  width: 32px;
  border-radius: 6px;
}

.dot:hover {
  background: #00ff88;
  opacity: 0.7;
}

/* Responsive */
@media (max-width: 1024px) {
  .section-header h2 {
    font-size: 2rem;
  }
  
  .services-container {
    padding: 0 1.5rem;
  }
}

@media (max-width: 768px) {
  .services-section {
    padding: 3rem 0;
  }
  
  .services-container {
    padding: 0 1rem;
  }
  
  .section-header {
    margin-bottom: 2rem;
  }
  
  .section-header h2 {
    font-size: 1.8rem;
  }
  
  .section-header p {
    font-size: 1rem;
  }
  
  .carousel-wrapper {
    gap: 0.5rem;
  }
  
  .carousel-btn {
    width: 40px;
    height: 40px;
  }
  
  .carousel-btn svg {
    width: 20px;
    height: 20px;
  }
  
  .service-card {
    padding: 0 0.5rem;
  }
  
  .card-content {
    padding: 1.5rem 1rem;
  }
  
  .icon-wrapper {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }
  
  .service-icon {
    font-size: 2rem;
  }
  
  .card-content h3 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  .card-content p {
    font-size: 0.9rem;
    line-height: 1.5;
  }
}

@media (max-width: 480px) {
  .services-section {
    padding: 2.5rem 0;
  }
  
  .services-container {
    padding: 0 0.75rem;
  }
  
  .section-header h2 {
    font-size: 1.5rem;
  }
  
  .carousel-wrapper {
    gap: 0.25rem;
  }
  
  .carousel-btn {
    width: 36px;
    height: 36px;
  }
  
  .service-card {
    padding: 0 0.25rem;
  }
  
  .card-content {
    padding: 1.25rem 0.75rem;
  }
  
  .icon-wrapper {
    width: 50px;
    height: 50px;
  }
  
  .service-icon {
    font-size: 1.75rem;
  }
  
  .card-content h3 {
    font-size: 1.1rem;
  }
  
  .card-content p {
    font-size: 0.85rem;
  }
}
</style>