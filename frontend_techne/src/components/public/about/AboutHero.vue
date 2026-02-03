<!-- src/components/public/about/AboutHero.vue -->
<template>
  <section class="about-hero">
    <!-- Floating particles -->
    <div class="particles">
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
    </div>

    <div class="hero-main-content-area">
      <div class="hero-content-wrapper">
        <div class="hero-text-content">
          <h1>About Us</h1>
          <p>Your trusted hardware repair and maintenance partner. Built on expertise, driven by quality, and committed to your satisfaction.</p>
          <div class="timeline-badge">
            <span class="badge-icon">📅</span>
            <div class="badge-content">
              <span class="badge-title">Established</span>
              <span class="badge-value">December 2023</span>
            </div>
          </div>
          <div class="values-list">
            <div class="value-item">
              <span class="value-icon">✓</span>
              <span>Quality Service</span>
            </div>
            <div class="value-item">
              <span class="value-icon">✓</span>
              <span>Expert Team</span>
            </div>
            <div class="value-item">
              <span class="value-icon">✓</span>
              <span>24/7 Available</span>
            </div>
          </div>
          <button class="hero-button">
            Our Story <span class="arrow">&gt;</span>
          </button>
        </div>
        <div class="hero-illustration-placeholder">
          <AboutIllustration />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import AboutIllustration from '@/assets/svg/AboutIllustration.vue';
</script>

<style scoped>
/* Hero Section Background */
.about-hero {
  background: linear-gradient(135deg, #0a1f1a 0%, #0d2820 50%, #0f2d24 100%);
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
}

/* Floating particles */
.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 12px;
  height: 12px;
  background: #00ff88;
  border-radius: 50%;
  opacity: 0;
  animation: float-up 15s linear infinite;
  box-shadow: 0 0 20px #00ff88, 0 0 40px rgba(0, 255, 136, 0.5);
}

.particle:nth-child(1) {
  left: 10%;
  animation-delay: 0s;
  animation-duration: 12s;
}

.particle:nth-child(2) {
  left: 25%;
  animation-delay: 3s;
  animation-duration: 15s;
}

.particle:nth-child(3) {
  left: 40%;
  animation-delay: 1s;
  animation-duration: 18s;
}

.particle:nth-child(4) {
  left: 55%;
  animation-delay: 5s;
  animation-duration: 13s;
}

.particle:nth-child(5) {
  left: 70%;
  animation-delay: 2s;
  animation-duration: 16s;
}

.particle:nth-child(6) {
  left: 80%;
  animation-delay: 7s;
  animation-duration: 14s;
}

.particle:nth-child(7) {
  left: 15%;
  animation-delay: 4s;
  animation-duration: 17s;
}

.particle:nth-child(8) {
  left: 90%;
  animation-delay: 6s;
  animation-duration: 19s;
}

@keyframes float-up {
  0% {
    bottom: -10%;
    opacity: 0;
    transform: translateX(0) scale(0.5);
  }
  10% {
    opacity: 0.8;
  }
  50% {
    transform: translateX(20px) scale(1);
  }
  90% {
    opacity: 0.8;
  }
  100% {
    bottom: 110%;
    opacity: 0;
    transform: translateX(-20px) scale(0.5);
  }
}

.hero-main-content-area {
  flex-grow: 1;
  min-height: calc(100vh - 92px);
  display: flex;
  align-items: center;
  padding: 3rem 0;
  position: relative;
  width: 100%;
}

.hero-content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  width: 100%;
  box-sizing: border-box;
}

.hero-text-content {
  flex: 1;
  text-align: left;
  color: #ffffff;
  max-width: 600px;
}

.hero-text-content h1 {
  font-size: 3.5em;
  line-height: 1.1;
  margin-bottom: 0.5em;
  font-weight: 800;
  color: #ffffff;
  word-wrap: break-word;
}

.hero-text-content p {
  font-size: 1.3em;
  line-height: 1.5;
  margin-bottom: 2em;
  color: rgba(255, 255, 255, 0.85);
  word-wrap: break-word;
}

/* Timeline Badge */
.timeline-badge {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  background: rgba(0, 255, 136, 0.1);
  border: 2px solid #00ff88;
  border-radius: 50px;
  padding: 0.8rem 1.5rem;
  margin-bottom: 1.5rem;
}

.badge-icon {
  font-size: 1.5rem;
}

.badge-content {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.badge-title {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.badge-value {
  font-size: 1rem;
  font-weight: 700;
  color: #00ff88;
}

/* Values List */
.values-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.value-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
}

.value-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: #00ff88;
  color: #0a1f1a;
  border-radius: 50%;
  font-weight: 700;
  font-size: 0.9rem;
  flex-shrink: 0;
}

.hero-button {
  background-color: #00ff88;
  color: #0a1f1a;
  border: none;
  padding: 15px 30px;
  font-size: 1.1em;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  box-shadow: 0 0 30px rgba(0, 255, 136, 0.3);
}

.hero-button:hover {
  background-color: #00dd77;
  transform: translateX(4px);
  box-shadow: 0 0 40px rgba(0, 255, 136, 0.5);
}

.hero-button .arrow {
  margin-left: 10px;
  font-size: 1.2em;
  transition: transform 0.3s ease;
}

.hero-button:hover .arrow {
  transform: translateX(5px);
}

.hero-illustration-placeholder {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  max-width: 100%;
}

/* Responsive adjustments */
@media (max-width: 900px) {
  .particles {
    opacity: 0.5;
  }
  
  .hero-main-content-area {
    min-height: calc(100vh - 60px);
    padding: 2rem 0;
  }
  
  .hero-content-wrapper {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 0 1.5rem;
  }
  
  .hero-text-content {
    max-width: 100%;
    text-align: center;
  }
  
  .timeline-badge {
    justify-content: center;
  }
  
  .values-list {
    align-items: center;
  }
  
  .hero-illustration-placeholder {
    width: 100%;
    margin-top: 0;
  }
  
  .hero-text-content h1 {
    font-size: 2.5em;
  }
  
  .hero-text-content p {
    font-size: 1em;
  }
}

@media (max-width: 600px) {
  .hero-content-wrapper {
    padding: 0 1rem;
  }
  
  .hero-text-content h1 {
    font-size: 2em;
  }
  
  .hero-text-content p {
    font-size: 0.95em;
  }
  
  .timeline-badge {
    padding: 0.6rem 1.2rem;
  }
  
  .badge-icon {
    font-size: 1.2rem;
  }
  
  .badge-value {
    font-size: 0.9rem;
  }
  
  .value-item {
    font-size: 1rem;
  }
  
  .hero-button {
    padding: 12px 24px;
    font-size: 1em;
  }
}
</style>