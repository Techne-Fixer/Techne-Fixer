<!-- src/components/public/TestimonialsSection.vue -->
<template>
  <section class="testimonials-section">
    <div class="testimonials-container">
      <div class="section-header">
        <div class="tag-badge">Testimonials</div>
        <h2>Here's what clients love about working with Techne-Fixer.</h2>
      </div>

      <!-- Desktop Grid -->
      <div v-if="!isMobile" class="testimonials-grid">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="testimonial-card"
        >
          <div class="card-header">
            <div class="client-info">
              <div class="avatar">{{ testimonial.initial }}</div>
              <div class="client-details">
                <h3>{{ testimonial.name }}</h3>
                <p class="role">{{ testimonial.role }}</p>
                <p class="company">{{ testimonial.company }}</p>
              </div>
            </div>
            <div class="quote-icon">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M10 18C10 16.8954 9.10457 16 8 16C6.89543 16 6 16.8954 6 18C6 19.1046 6.89543 20 8 20C9.10457 20 10 19.1046 10 18Z" fill="currentColor" opacity="0.2"/>
                <path d="M8 8V14C8 15.1046 8.89543 16 10 16H14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                <path d="M18 8V14C18 15.1046 18.8954 16 20 16H24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
          </div>

          <div class="testimonial-content">
            <p>{{ testimonial.feedback }}</p>
          </div>

          <div class="rating" v-if="testimonial.rating">
            <span v-for="star in 5" :key="star" class="star" :class="{ filled: star <= testimonial.rating }">★</span>
          </div>
        </div>
      </div>

      <!-- Mobile Carousel -->
      <div v-else class="mobile-carousel-wrapper">
        <button 
          class="carousel-btn prev" 
          @click="prevSlide" 
          :disabled="currentSlide === 0"
          aria-label="Previous testimonial">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <div class="carousel-track-container">
          <div 
            class="carousel-track"
            :style="carouselStyle"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
          >
            <div 
              v-for="(testimonial, index) in testimonials" 
              :key="index"
              class="testimonial-card-mobile"
            >
              <div class="testimonial-card">
                <div class="card-header">
                  <div class="client-info">
                    <div class="avatar">{{ testimonial.initial }}</div>
                    <div class="client-details">
                      <h3>{{ testimonial.name }}</h3>
                      <p class="role">{{ testimonial.role }}</p>
                      <p class="company">{{ testimonial.company }}</p>
                    </div>
                  </div>
                  <div class="quote-icon">
                    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                      <path d="M10 18C10 16.8954 9.10457 16 8 16C6.89543 16 6 16.8954 6 18C6 19.1046 6.89543 20 8 20C9.10457 20 10 19.1046 10 18Z" fill="currentColor" opacity="0.2"/>
                      <path d="M8 8V14C8 15.1046 8.89543 16 10 16H14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                      <path d="M18 8V14C18 15.1046 18.8954 16 20 16H24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                  </div>
                </div>

                <div class="testimonial-content">
                  <p>{{ testimonial.feedback }}</p>
                </div>

                <div class="rating" v-if="testimonial.rating">
                  <span v-for="star in 5" :key="star" class="star" :class="{ filled: star <= testimonial.rating }">★</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button 
          class="carousel-btn next" 
          @click="nextSlide"
          :disabled="currentSlide >= maxSlide"
          aria-label="Next testimonial">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <div v-if="isMobile" class="carousel-dots">
        <button 
          v-for="(dot, index) in testimonials.length" 
          :key="index"
          class="dot"
          :class="{ active: index === currentSlide }"
          @click="goToSlide(index)"
          :aria-label="`Go to testimonial ${index + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const currentSlide = ref(0);
const isMobile = ref(false);
const touchStartX = ref(0);
const touchEndX = ref(0);

const testimonials = ref([
  {
    name: 'Natalie Joy Veluz',
    role: 'Client',
    company: 'DesignPro',
    initial: 'N',
    feedback: 'An amazing tool that simplifies complex tasks. Highly recommended for professionals in the industry.',
    rating: 5
  },
  {
    name: 'Natalie Joy Veluz',
    role: 'Client',
    company: 'TechStart',
    initial: 'N',
    feedback: 'Highly recommend! Super legit finished the task in 1 day',
    rating: 5
  },
  {
    name: 'Christian Francisco',
    role: 'Client',
    company: 'InnovateCo',
    initial: 'C',
    feedback: '100% Legit and professional service. Outstanding output quality and timely delivery.',
    rating: 5
  },
  {
    name: 'Maria Santos',
    role: 'CEO',
    company: 'Digital Solutions',
    initial: 'M',
    feedback: 'Working with this team has been transformational for our business. Their expertise and dedication are unmatched.',
    rating: 5
  },
  {
    name: 'John Rodriguez',
    role: 'Product Manager',
    company: 'StartupHub',
    initial: 'J',
    feedback: 'Exceptional work and great communication throughout the project. Will definitely work with them again.',
    rating: 5
  },
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'CloudWorks',
    initial: 'S',
    feedback: 'The level of technical expertise and problem-solving skills is remarkable. Highly professional team.',
    rating: 5
  }
]);

const maxSlide = computed(() => testimonials.value.length - 1);

const carouselStyle = computed(() => {
  const offset = currentSlide.value * 100;
  return {
    transform: `translateX(-${offset}%)`,
    transition: 'transform 0.5s ease'
  };
});

const nextSlide = () => {
  if (currentSlide.value < maxSlide.value) {
    currentSlide.value++;
  }
};

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--;
  }
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

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
      nextSlide();
    } else {
      prevSlide();
    }
  }
  
  touchStartX.value = 0;
  touchEndX.value = 0;
};

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
  if (!isMobile.value) {
    currentSlide.value = 0;
  }
};

onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<style scoped>
.testimonials-section {
  background: #f8f9fa;
  padding: 5rem 0;
  position: relative;
  width: 100%;
  overflow: hidden;
}

.testimonials-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  max-width: 800px;
  margin: 0 auto 4rem;
  text-align: center;
}

.tag-badge {
  display: inline-block;
  background: #f8f9fa;
  border: 2px solid #e0e0e0;
  padding: 0.5rem 1.5rem;
  border-radius: 24px;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #1a1a1a;
  line-height: 1.2;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.testimonial-card {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  min-height: 320px;
  max-height: 420px;
  height: 100%;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  border-color: #00ff88;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;
}

.client-info {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.avatar {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00ff88 0%, #00dd77 100%);
  color: #0a1f1a;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  flex-shrink: 0;
}

.client-details h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
}

.client-details .role {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.1rem;
}

.client-details .company {
  font-size: 0.85rem;
  color: #999;
}

.quote-icon {
  color: #e0e0e0;
  opacity: 0.5;
}

.testimonial-content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 0.5rem;
}

.testimonial-content::-webkit-scrollbar {
  width: 4px;
}

.testimonial-content::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

.testimonial-content::-webkit-scrollbar-thumb {
  background: #00ff88;
  border-radius: 10px;
}

.testimonial-content::-webkit-scrollbar-thumb:hover {
  background: #00dd77;
}

.testimonial-content p {
  font-size: 1rem;
  color: #4a4a4a;
  line-height: 1.7;
}

.rating {
  display: flex;
  gap: 0.25rem;
  flex-shrink: 0;
}

.star {
  font-size: 1.25rem;
  color: #e0e0e0;
  transition: color 0.2s ease;
}

.star.filled {
  color: #ffd93d;
}

/* Mobile Carousel */
.mobile-carousel-wrapper {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.carousel-track-container {
  overflow: hidden;
  flex: 1;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease;
  user-select: none;
}

.testimonial-card-mobile {
  flex: 0 0 100%;
  min-width: 100%;
  padding: 0 0.5rem;
  box-sizing: border-box;
}

.carousel-btn {
  display: none;
  background: #00ff88;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
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
  display: none;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  padding: 0 1rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ddd;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dot.active {
  background: #00ff88;
  width: 28px;
  border-radius: 5px;
}

.dot:hover {
  background: #00ff88;
  opacity: 0.7;
}

/* Responsive */
@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 3rem 0;
  }
  
  .testimonials-container {
    padding: 0 1rem;
  }
  
  .section-header {
    margin-bottom: 2.5rem;
  }
  
  .section-header h2 {
    font-size: 1.75rem;
  }
  
  .carousel-btn {
    display: flex;
    width: 44px;
    height: 44px;
  }
  
  .carousel-btn svg {
    width: 22px;
    height: 22px;
  }
  
  .testimonial-card-mobile .testimonial-card {
    min-height: 320px;
    max-height: 400px;
  }
  
  .testimonial-card {
    padding: 1.5rem;
  }
  
  .testimonial-card:hover {
    transform: none;
  }
  
  .avatar {
    width: 48px;
    height: 48px;
    font-size: 1.25rem;
  }
  
  .client-details h3 {
    font-size: 1rem;
  }
  
  .testimonial-content {
    overflow-y: auto;
    padding-right: 0.25rem;
  }
  
  .testimonial-content p {
    font-size: 0.95rem;
  }
  
  .carousel-dots {
    display: flex;
  }
}

@media (max-width: 480px) {
  .testimonials-section {
    padding: 2.5rem 0;
  }
  
  .testimonials-container {
    padding: 0 0.75rem;
  }
  
  .section-header h2 {
    font-size: 1.5rem;
  }
  
  .tag-badge {
    font-size: 0.85rem;
    padding: 0.4rem 1.25rem;
  }
  
  .carousel-btn {
    width: 40px;
    height: 40px;
  }
  
  .carousel-btn svg {
    width: 20px;
    height: 20px;
  }
  
  .testimonial-card-mobile {
    padding: 0 0.375rem;
  }
  
  .testimonial-card-mobile .testimonial-card {
    min-height: 300px;
    max-height: 380px;
  }
  
  .testimonial-card {
    padding: 1.25rem;
    gap: 1.25rem;
  }
  
  .avatar {
    width: 44px;
    height: 44px;
    font-size: 1.1rem;
  }
  
  .client-details h3 {
    font-size: 0.95rem;
  }
  
  .client-details .role {
    font-size: 0.85rem;
  }
  
  .client-details .company {
    font-size: 0.8rem;
  }
  
  .quote-icon svg {
    width: 24px;
    height: 24px;
  }
  
  .testimonial-content p {
    font-size: 0.875rem;
  }
  
  .star {
    font-size: 1.1rem;
  }
  
  .dot {
    width: 8px;
    height: 8px;
  }
  
  .dot.active {
    width: 24px;
  }
}
</style>