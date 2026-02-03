<!-- src/components/public/AboutSection.vue -->
<template>
  <section class="about-section">
    <div class="about-container">
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

      <!-- Location Section -->
      <div class="content-card">
        <div class="card-header">
          <span class="icon">📍</span>
          <h2>Visit Our Service Center</h2>
        </div>
        <p class="section-intro">Drop by our location for consultations, walk-in diagnostics, or to pick up completed repairs.</p>

        <div class="location-grid">
          <!-- Map Container -->
          <div class="map-wrapper">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4078.4335142038844!2d125.49317867510116!3d7.027566117100341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f90d345435ca29%3A0x956b6d7472a90432!2sTechne%20Fixer%20Computer%20and%20Laptop%20Repair%20Services%2F%20CCTV%20INSTALLATION!5e1!3m2!1sen!2sph!4v1764341286198!5m2!1sen!2sph"
              class="map-iframe"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Techne-Fixer Location"
            ></iframe>
            <a
              href="https://maps.google.com/?q=Techne+Fixer+Computer+and+Laptop+Repair+Services+CCTV+INSTALLATION"
              target="_blank"
              class="map-button"
            >
              <svg
                class="icon-small"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              View larger map
            </a>
          </div>

          <!-- Business Hours Card -->
          <div class="hours-card">
            <h3 class="hours-title">Business Hours</h3>
            <p class="hours-subtitle">We're here when you need us.</p>

            <div class="hours-schedule">
              <div class="hours-row">
                <span class="hours-day">Monday - Saturday</span>
                <span class="hours-time">9:00 AM – 6:00 PM</span>
              </div>
            </div>

            <div class="info-note">
              <svg class="icon-small" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>Tap the map for directions</span>
            </div>

            <div class="divider"></div>

            <div class="contact-info">
              <div class="contact-item">
                <div class="contact-icon">
                  <svg
                    class="icon-small"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span>Call us for appointments</span>
              </div>
              <div class="contact-item">
                <div class="contact-icon">
                  <svg
                    class="icon-small"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span>Email for inquiries</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="cta-section">
        <h2>Ready to get started?</h2>
        <p>Contact us today for a free consultation or visit our shop in Toril.</p>
        <p class="hours">Open Monday - Saturday: 9:00 AM - 6:00 PM</p>
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
    description: "We're open Monday to Saturday, from 9 AM to 6 PM because we understand that technical issues don't follow a schedule."
  },
  {
    badge: '₱',
    title: 'Transparent Pricing',
    description: 'Every service includes a clear quotation before we begin work. Our diagnostic fee is ₱500, which is waived when you proceed with repairs.'
  },
  {
    badge: '✓',
    title: 'Quality Guaranteed',
    description: 'We work with trusted suppliers and use quality parts backed by warranties. If something isn\'t right, we make it right.'
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

/* Content Cards */
.content-card {
  background: #f8f9fa;
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
  background: white;
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

/* Location Section */
.location-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
}

@media (min-width: 1024px) {
  .location-grid {
    grid-template-columns: 2fr 1fr;
  }
}

.map-wrapper {
  position: relative;
  height: 400px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

@media (min-width: 1024px) {
  .map-wrapper {
    height: 500px;
  }
}

.map-iframe {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.map-button {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: #ffffff;
  color: #1a1a1a;
  padding: 0.75rem 1.25rem;
  border-radius: 8px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  text-decoration: none;
}

.map-button:hover {
  background: #00ff88;
  color: #0a1f1a;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 255, 136, 0.3);
}

.icon-small {
  width: 1.25rem;
  height: 1.25rem;
}

/* Hours Card */
.hours-card {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 2rem;
}

.hours-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
}

.hours-subtitle {
  color: #666;
  margin: 0 0 1.5rem 0;
}

.hours-schedule {
  margin-bottom: 1.5rem;
}

.hours-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.hours-day {
  color: #1a1a1a;
  font-weight: 600;
}

.hours-time {
  color: #00ff88;
  font-weight: 700;
}

.info-note {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: #666;
  background: #e8f5e9;
  border: 1px solid #00ff88;
  border-radius: 8px;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
}

.divider {
  height: 1px;
  background: #e0e0e0;
  margin: 1.5rem 0;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #444;
}

.contact-icon {
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #e8f5e9;
  color: #00ff88;
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