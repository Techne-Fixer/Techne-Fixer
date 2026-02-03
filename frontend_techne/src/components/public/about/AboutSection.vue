<!-- src/components/public/AboutSection.vue -->
<template>
  <section class="about-section">
    <div class="about-container">
      <!-- Hero Section -->
      <div class="about-hero">
        <h1>About Us</h1>
        <p class="tagline">Your Trusted Hardware Repair & Maintenance Partner</p>
      </div>

      <!-- Story Section -->
      <div class="content-card">
        <div class="card-header">
          <span class="icon">📖</span>
          <h2>Our Story</h2>
        </div>
        <p>
          Founded in December 2023, our business was born from a passion for solving technical problems 
          and a commitment to excellent service. What started as a small aircon cleaning service during 
          the pandemic has grown into a full-service hardware repair and maintenance shop, serving the 
          Toril community and beyond.
        </p>
        <p>
          Our journey began with hands-on practice and dedication to mastering the craft. With a foundation 
          in mechanical engineering, our CEO combined theoretical knowledge with practical experience, 
          transforming technical concepts into real-world solutions. Through freelancing and continuous 
          learning, we developed the expertise to handle a wide range of hardware challenges—from simple 
          repairs to complex installations.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="content-card">
        <div class="card-header">
          <span class="icon">🔧</span>
          <h2>What We Do</h2>
        </div>
        <p class="section-intro">We specialize in comprehensive hardware repair and maintenance services:</p>
        
        <div class="services-grid">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="service-item"
          >
            <div class="service-icon">{{ service.icon }}</div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>

      <!-- Commitments -->
      <div class="content-card">
        <div class="card-header">
          <span class="icon">✨</span>
          <h2>Our Commitment to You</h2>
        </div>
        
        <div class="commitments-grid">
          <div 
            v-for="(commitment, index) in commitments" 
            :key="index"
            class="commitment-item"
          >
            <div class="commitment-header">
              <span class="commitment-badge">{{ commitment.badge }}</span>
              <h3>{{ commitment.title }}</h3>
            </div>
            <p>{{ commitment.description }}</p>
          </div>
        </div>
      </div>

      <!-- Why Choose Us -->
      <div class="content-card highlight-card">
        <div class="card-header">
          <span class="icon">⭐</span>
          <h2>Why Choose Us?</h2>
        </div>
        
        <div class="features-list">
          <div 
            v-for="(feature, index) in features" 
            :key="index"
            class="feature-item"
          >
            <span class="check-icon">✓</span>
            <div>
              <strong>{{ feature.title }}</strong> - {{ feature.description }}
            </div>
          </div>
        </div>
      </div>

      <!-- Process Section -->
      <div class="content-card">
        <div class="card-header">
          <span class="icon">🔄</span>
          <h2>Our Process</h2>
        </div>
        
        <div class="process-timeline">
          <div 
            v-for="(step, index) in processSteps" 
            :key="index"
            class="process-step"
          >
            <div class="step-number">{{ index + 1 }}</div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="cta-section">
        <h2>Ready to get started?</h2>
        <p>Contact us today for a free consultation or visit our shop in Toril.</p>
        <p class="hours">Open Daily: 8:00 AM - 8:00 PM</p>
        <button class="cta-button">Contact Us</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const services = [
  {
    icon: '❄️',
    title: 'Air Conditioning Services',
    description: 'Cleaning, maintenance, and repair'
  },
  {
    icon: '🔍',
    title: 'Hardware Diagnostics',
    description: 'Professional troubleshooting and assessment'
  },
  {
    icon: '⚙️',
    title: 'Installations & Upgrades',
    description: 'Expert setup of new equipment and system improvements'
  },
  {
    icon: '📹',
    title: 'Security Systems',
    description: 'CCTV installation and maintenance'
  },
  {
    icon: '📦',
    title: 'Equipment Supply',
    description: 'Quality parts and hardware solutions'
  },
  {
    icon: '🛡️',
    title: 'Preventive Maintenance',
    description: 'Regular servicing to keep your equipment running smoothly'
  }
];

const commitments = [
  {
    badge: '24/7',
    title: 'Always Available',
    description: "We're open 7 days a week, including holidays, from 8 AM to 8 PM because we understand that technical issues don't follow a schedule."
  },
  {
    badge: '₱',
    title: 'Transparent Pricing',
    description: 'Every service includes a clear quotation before we begin work. Our diagnostic fee is ₱500, which is waived when you proceed with repairs.'
  },
  {
    badge: '✓',
    title: 'Quality Guaranteed',
    description: 'We work with trusted suppliers and use quality parts backed by warranties. If something isnt right, we make it right.'
  },
  {
    badge: '👥',
    title: 'Professional Team',
    description: 'Our experienced technicians are trained to handle everything from routine maintenance to complex repairs, ensuring your equipment is in capable hands.'
  }
];

const features = [
  {
    title: 'Engineering Expertise',
    description: 'Technical knowledge backed by mechanical engineering principles'
  },
  {
    title: 'Proven Track Record',
    description: 'Serving satisfied customers since 2023'
  },
  {
    title: 'Regular Clients',
    description: 'Trusted for ongoing maintenance contracts'
  },
  {
    title: 'Convenient Location',
    description: 'Easily accessible in Toril'
  },
  {
    title: 'Personal Service',
    description: 'Direct communication with our team throughout the repair process'
  }
];

const processSteps = [
  {
    title: 'Contact Us',
    description: 'Reach out online or visit our shop'
  },
  {
    title: 'Diagnostic Assessment',
    description: '₱500 fee (waived with repair)'
  },
  {
    title: 'Clear Quotation',
    description: 'Transparent pricing before work begins'
  },
  {
    title: '50% Down Payment',
    description: 'Secure your job order'
  },
  {
    title: 'Expert Repair',
    description: 'Quality work by trained technicians'
  },
  {
    title: 'Notification & Pickup',
    description: "We'll contact you when ready"
  },
  {
    title: 'Final Payment & Invoice',
    description: 'Complete transaction and receive your equipment'
  }
];
</script>

<style scoped>
.about-section {
  background: #f8f9fa;
  padding: 5rem 0;
  min-height: 100vh;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.about-hero {
  text-align: center;
  margin-bottom: 4rem;
}

.about-hero h1 {
  font-size: 3.5rem;
  font-weight: 800;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.tagline {
  font-size: 1.5rem;
  color: #666;
  font-weight: 500;
}

/* Content Cards */
.content-card {
  background: white;
  border-radius: 16px;
  padding: 3rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.content-card:hover {
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
}

.highlight-card {
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e9 100%);
  border: 2px solid #00ff88;
}

.card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.card-header .icon {
  font-size: 2rem;
}

.card-header h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.content-card p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 1.5rem;
}

.content-card p:last-child {
  margin-bottom: 0;
}

.section-intro {
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2rem !important;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.service-item {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #e0e0e0;
  transition: all 0.3s ease;
}

.service-item:hover {
  border-color: #00ff88;
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 255, 136, 0.1);
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.service-item h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.service-item p {
  font-size: 1rem;
  color: #666;
  margin: 0;
}

/* Commitments Grid */
.commitments-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.commitment-item {
  position: relative;
}

.commitment-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.commitment-badge {
  background: #00ff88;
  color: #0a1f1a;
  font-weight: 700;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
}

.commitment-item h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
}

.commitment-item p {
  font-size: 1rem;
  color: #666;
  margin: 0;
}

/* Features List */
.features-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  font-size: 1.1rem;
  line-height: 1.6;
}

.check-icon {
  background: #00ff88;
  color: #0a1f1a;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.feature-item strong {
  color: #1a1a1a;
}

/* Process Timeline */
.process-timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  position: relative;
}

.process-timeline::before {
  content: '';
  position: absolute;
  left: 30px;
  top: 30px;
  bottom: 30px;
  width: 2px;
  background: linear-gradient(180deg, #00ff88 0%, #e0e0e0 100%);
}

.process-step {
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  position: relative;
}

.step-number {
  width: 60px;
  height: 60px;
  background: #00ff88;
  color: #0a1f1a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 255, 136, 0.3);
  position: relative;
  z-index: 1;
}

.step-content h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.step-content p {
  font-size: 1rem;
  color: #666;
  margin: 0;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, #0a1f1a 0%, #1a3d2e 100%);
  color: white;
  padding: 4rem;
  border-radius: 16px;
  text-align: center;
  margin-top: 3rem;
}

.cta-section h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #e0e0e0;
}

.hours {
  font-size: 1.1rem;
  color: #00ff88 !important;
  font-weight: 600;
  margin-bottom: 2rem !important;
}

.cta-button {
  background: #00ff88;
  color: #0a1f1a;
  border: none;
  padding: 1rem 3rem;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(0, 255, 136, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 255, 136, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .about-section {
    padding: 3rem 0;
  }

  .about-hero h1 {
    font-size: 2.5rem;
  }

  .tagline {
    font-size: 1.2rem;
  }

  .content-card {
    padding: 2rem;
  }

  .card-header h2 {
    font-size: 1.5rem;
  }

  .services-grid,
  .commitments-grid {
    grid-template-columns: 1fr;
  }

  .process-timeline::before {
    left: 20px;
  }

  .step-number {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
  }

  .process-step {
    gap: 1rem;
  }

  .cta-section {
    padding: 2rem;
  }

  .cta-section h2 {
    font-size: 1.8rem;
  }

  .cta-button {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}
</style>