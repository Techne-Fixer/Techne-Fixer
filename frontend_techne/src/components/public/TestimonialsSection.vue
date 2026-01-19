<!-- src/components/public/TestimonialsSection.vue -->
<template>
  <section class="testimonials-section">
    <div class="testimonials-container">
      <div class="section-header">
        <div class="tag-badge">Testimonials</div>
        <h2>Here's what clients love about working with Techne-Fixer.</h2>
      </div>

      <div class="testimonials-grid">
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
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

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
</script>

<style scoped>
.testimonials-section {
  background: linear-gradient(135deg, #e8eaf6 0%, #f3f4f9 100%);
  padding: 5rem 0;
  position: relative;
  width: 100%;
}

.testimonials-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-header {
  max-width: 800px;
  margin: 0 auto 4rem;
}

.tag-badge {
  display: inline-block;
  background: white;
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
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
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
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
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

.testimonial-content p {
  font-size: 1rem;
  color: #4a4a4a;
  line-height: 1.7;
}

.rating {
  display: flex;
  gap: 0.25rem;
}

.star {
  font-size: 1.25rem;
  color: #e0e0e0;
  transition: color 0.2s ease;
}

.star.filled {
  color: #ffd93d;
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
  
  .testimonials-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .section-header {
    margin-bottom: 2.5rem;
  }
  
  .section-header h2 {
    font-size: 1.75rem;
  }
  
  .testimonial-card {
    padding: 1.5rem;
  }
  
  .avatar {
    width: 48px;
    height: 48px;
    font-size: 1.25rem;
  }
  
  .client-details h3 {
    font-size: 1rem;
  }
  
  .testimonial-content p {
    font-size: 0.95rem;
  }
}
</style>