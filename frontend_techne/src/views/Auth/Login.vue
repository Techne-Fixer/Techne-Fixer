<!-- src/views/Auth/LoginPage.vue -->
<template>
  <div class="login-page">
    <!-- Animated Background -->
    <div class="login-background">
      <div class="circuit-grid"></div>
      <div class="floating-particles">
        <div v-for="i in 15" :key="i" class="particle" :style="particleStyle(i)"></div>
      </div>
      <div class="gradient-orb orb-1"></div>
      <div class="gradient-orb orb-2"></div>
    </div>

    <!-- Login Container -->
    <div class="login-container">
      <!-- Left Side - Branding -->
      <div class="brand-section">
        <div class="brand-content">
          <div class="logo-wrapper">
            <img :src="logo" alt="Techne-Fixer" class="brand-logo" />
          </div>
          <h1 class="brand-title">Welcome Back</h1>
          <p class="brand-subtitle">Login to access your repair dashboard</p>
          
          <div class="feature-list">
            <div class="feature-item" v-for="(feature, index) in features" :key="index">
              <div class="feature-icon">{{ feature.icon }}</div>
              <div class="feature-text">
                <h3>{{ feature.title }}</h3>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>

          <div class="decorative-element">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style="stop-color:#00ff88;stop-opacity:0.8" />
                  <stop offset="100%" style="stop-color:#558b2f;stop-opacity:0.8" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="100" r="80" fill="none" stroke="url(#techGradient)" stroke-width="2" opacity="0.3"/>
              <path d="M 100,30 Q 160,100 100,170 Q 40,100 100,30" fill="url(#techGradient)" opacity="0.2"/>
              <circle cx="100" cy="100" r="40" fill="none" stroke="#00ff88" stroke-width="3" opacity="0.5">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 100 100"
                  to="360 100 100"
                  dur="20s"
                  repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
        </div>
      </div>

      <!-- Right Side - Login Form -->
      <div class="form-section">
        <div class="form-container">
          <div class="form-header">
            <h2>Sign In</h2>
            <p>Enter your credentials to continue</p>
          </div>

          <form @submit.prevent="handleLogin" class="login-form">
            <!-- Email Input -->
            <div class="input-group" :class="{ 'focused': emailFocused, 'filled': email }">
              <label for="email" class="input-label">Email Address</label>
              <div class="input-wrapper">
                <div class="input-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3 4h14c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" stroke-width="2"/>
                    <path d="M1 6l9 6 9-6" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <input
                  id="email"
                  v-model="email"
                  type="email"
                  placeholder="your.email@example.com"
                  @focus="emailFocused = true"
                  @blur="emailFocused = false"
                  required
                />
              </div>
            </div>

            <!-- Password Input -->
            <div class="input-group" :class="{ 'focused': passwordFocused, 'filled': password }">
              <label for="password" class="input-label">Password</label>
              <div class="input-wrapper">
                <div class="input-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="3" y="9" width="14" height="9" rx="2" stroke="currentColor" stroke-width="2"/>
                    <path d="M6 9V6a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </div>
                <input
                  id="password"
                  v-model="password"
                  :type="showPassword ? 'text' : 'password'"
                  placeholder="Enter your password"
                  @focus="passwordFocused = true"
                  @blur="passwordFocused = false"
                  required
                />
                <button
                  type="button"
                  class="toggle-password"
                  @click="showPassword = !showPassword"
                  tabindex="-1"
                >
                  <svg v-if="!showPassword" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M1 10s3-7 9-7 9 7 9 7-3 7-9 7-9-7-9-7z" stroke="currentColor" stroke-width="2"/>
                    <circle cx="10" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
                  </svg>
                  <svg v-else width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M14.12 14.12A7 7 0 0 1 3 10M9.88 5.88A7 7 0 0 1 17 10M1 1l18 18" stroke="currentColor" stroke-width="2"/>
                  </svg>
                </button>
              </div>
            </div>

            <!-- Remember Me & Forgot Password -->
            <div class="form-options">
              <label class="checkbox-label">
                <input type="checkbox" v-model="rememberMe" />
                <span class="checkbox-custom"></span>
                <span class="checkbox-text">Remember me</span>
              </label>
              <a href="#" class="forgot-link">Forgot password?</a>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="submit-btn" :disabled="isLoading">
              <span v-if="!isLoading" class="btn-content">
                <span>Sign In</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M5 10h10M10 5l5 5-5 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </span>
              <span v-else class="btn-loading">
                <div class="spinner"></div>
                <span>Signing in...</span>
              </span>
            </button>

            <!-- Divider -->
            <div class="divider">
              <span>or continue with</span>
            </div>

            <!-- Social Login -->
            <div class="social-login">
              <button type="button" class="social-btn google">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <path fill="#4285F4" d="M19.6 10.23c0-.82-.07-1.42-.21-2.05H10v3.72h5.51c-.11.89-.71 2.23-2.05 3.13l-.02.13 2.98 2.31.21.02c1.9-1.75 2.99-4.33 2.99-7.26z"/>
                  <path fill="#34A853" d="M10 20c2.7 0 4.96-.89 6.62-2.42l-3.17-2.46c-.85.59-1.98 1-3.45 1-2.63 0-4.87-1.75-5.66-4.17l-.12.01-3.09 2.4-.04.11C2.74 17.71 6.09 20 10 20z"/>
                  <path fill="#FBBC05" d="M4.34 11.95c-.2-.59-.32-1.22-.32-1.87 0-.65.12-1.28.31-1.87l-.01-.14-3.13-2.43-.1.05A9.99 9.99 0 0 0 0 10.08c0 1.61.39 3.14 1.09 4.49l3.25-2.62z"/>
                  <path fill="#EB4335" d="M10 3.83c1.87 0 3.13.81 3.85 1.48l2.82-2.76C14.96.99 12.7 0 10 0 6.09 0 2.74 2.29 1.09 5.53l3.24 2.52C5.13 5.58 7.37 3.83 10 3.83z"/>
                </svg>
                <span>Google</span>
              </button>
              <button type="button" class="social-btn facebook">
                <svg width="20" height="20" viewBox="0 0 20 20">
                  <path fill="#1877F2" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"/>
                </svg>
                <span>Facebook</span>
              </button>
            </div>

            <!-- Sign Up Link -->
            <div class="signup-prompt">
              <p>Don't have an account? <router-link to="/register" class="signup-link">Sign up</router-link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import logo from '@/assets/images/logo.png';

const router = useRouter();

// Form state
const email = ref('');
const password = ref('');
const rememberMe = ref(false);
const showPassword = ref(false);
const isLoading = ref(false);

// Focus states
const emailFocused = ref(false);
const passwordFocused = ref(false);

// Features for branding section
const features = [
  {
    icon: '⚡',
    title: 'Fast Access',
    description: 'Quick login to your dashboard'
  },
  {
    icon: '🔒',
    title: 'Secure',
    description: 'Your data is protected'
  },
  {
    icon: '📊',
    title: 'Track Repairs',
    description: 'Monitor your service requests'
  }
];

// Particle animation styles
const particleStyle = (index) => {
  const randomX = Math.random() * 100;
  const randomDelay = Math.random() * 15;
  const randomDuration = 15 + Math.random() * 10;
  
  return {
    left: `${randomX}%`,
    animationDelay: `${randomDelay}s`,
    animationDuration: `${randomDuration}s`
  };
};

// Handle login
const handleLogin = async () => {
  isLoading.value = true;
  
  try {
    // TODO: Implement actual login logic
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    
    // On success, redirect to dashboard
    router.push('/dashboard');
  } catch (error) {
    console.error('Login failed:', error);
    // TODO: Show error message
  } finally {
    isLoading.value = false;
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Space+Mono:wght@400;700&display=swap');

.login-page {
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  font-family: 'Space Mono', monospace;
}

/* Animated Background */
.login-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a1f1a 0%, #0d2820 50%, #0f2d24 100%);
  z-index: 0;
}

.circuit-grid {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 136, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridPulse 8s ease-in-out infinite;
}

@keyframes gridPulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.6; }
}

.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: #00ff88;
  border-radius: 50%;
  bottom: -10px;
  animation: float-particle linear infinite;
  box-shadow: 0 0 10px #00ff88, 0 0 20px rgba(0, 255, 136, 0.3);
}

@keyframes float-particle {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) translateX(100px);
    opacity: 0;
  }
}

.gradient-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.15;
  animation: float-orb 20s ease-in-out infinite;
}

.orb-1 {
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, #00ff88 0%, transparent 70%);
  top: -100px;
  left: -100px;
}

.orb-2 {
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, #558b2f 0%, transparent 70%);
  bottom: -150px;
  right: -150px;
  animation-delay: -10s;
}

@keyframes float-orb {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

/* Login Container */
.login-container {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1400px;
  margin: 0 auto;
}

/* Brand Section */
.brand-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  position: relative;
}

.brand-content {
  max-width: 500px;
  color: white;
}

.logo-wrapper {
  margin-bottom: 2rem;
  animation: fadeInUp 0.8s ease-out;
}

.brand-logo {
  width: 120px;
  height: auto;
  filter: drop-shadow(0 0 20px rgba(0, 255, 136, 0.5));
}

.brand-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #ffffff 0%, #00ff88 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

.brand-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 3rem;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.feature-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(0, 255, 136, 0.05);
  border: 1px solid rgba(0, 255, 136, 0.2);
  border-radius: 12px;
  transition: all 0.3s ease;
  animation: fadeInUp 0.8s ease-out calc(0.6s + var(--delay, 0s)) both;
}

.feature-item:nth-child(1) { --delay: 0s; }
.feature-item:nth-child(2) { --delay: 0.1s; }
.feature-item:nth-child(3) { --delay: 0.2s; }

.feature-item:hover {
  background: rgba(0, 255, 136, 0.1);
  border-color: rgba(0, 255, 136, 0.4);
  transform: translateX(10px);
}

.feature-icon {
  font-size: 2rem;
  line-height: 1;
}

.feature-text h3 {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: #00ff88;
}

.feature-text p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.decorative-element {
  width: 200px;
  height: 200px;
  margin: 2rem auto 0;
  opacity: 0.6;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Form Section */
.form-section {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(20px);
  border-left: 1px solid rgba(0, 255, 136, 0.1);
}

.form-container {
  width: 100%;
  max-width: 450px;
  background: rgba(10, 31, 26, 0.9);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 3rem;
  border: 1px solid rgba(0, 255, 136, 0.2);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  animation: fadeInScale 0.6s ease-out;
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.form-header {
  margin-bottom: 2.5rem;
  text-align: center;
}

.form-header h2 {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #00ff88;
  margin-bottom: 0.5rem;
}

.form-header p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

/* Input Groups */
.input-group {
  margin-bottom: 1.5rem;
  position: relative;
  transition: all 0.3s ease;
}

.input-label {
  display: block;
  font-size: 0.85rem;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;
}

.input-group.focused .input-label {
  color: #00ff88;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 1rem;
  color: rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  pointer-events: none;
  transition: color 0.3s ease;
  z-index: 1;
}

.input-group.focused .input-icon {
  color: #00ff88;
}

.input-wrapper input {
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  font-family: 'Space Mono', monospace;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.input-wrapper input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.input-wrapper input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.08);
  border-color: #00ff88;
  box-shadow: 0 0 0 4px rgba(0, 255, 136, 0.1);
}

.toggle-password {
  position: absolute;
  right: 1rem;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  transition: color 0.3s ease;
}

.toggle-password:hover {
  color: #00ff88;
}

/* Form Options */
.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  user-select: none;
}

.checkbox-label input[type="checkbox"] {
  display: none;
}

.checkbox-custom {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
}

.checkbox-label input[type="checkbox"]:checked + .checkbox-custom {
  background: #00ff88;
  border-color: #00ff88;
}

.checkbox-label input[type="checkbox"]:checked + .checkbox-custom::after {
  content: '✓';
  color: #0a1f1a;
  font-weight: bold;
  font-size: 14px;
}

.checkbox-text {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.forgot-link {
  color: #00ff88;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.forgot-link:hover {
  text-decoration: underline;
  color: #00dd77;
}

/* Submit Button */
.submit-btn {
  width: 100%;
  padding: 1.2rem;
  background: linear-gradient(135deg, #00ff88 0%, #00dd77 100%);
  border: none;
  border-radius: 12px;
  color: #0a1f1a;
  font-family: 'Orbitron', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 255, 136, 0.3);
}

.submit-btn::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.submit-btn:hover::before {
  width: 300px;
  height: 300px;
}

.submit-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 40px rgba(0, 255, 136, 0.4);
}

.submit-btn:active {
  transform: translateY(0);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.btn-content,
.btn-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  position: relative;
  z-index: 1;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 3px solid rgba(10, 31, 26, 0.3);
  border-top-color: #0a1f1a;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Divider */
.divider {
  margin: 2rem 0;
  text-align: center;
  position: relative;
}

.divider::before,
.divider::after {
  content: '';
  position: absolute;
  top: 50%;
  width: 40%;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.2), transparent);
}

.divider::before {
  left: 0;
}

.divider::after {
  right: 0;
}

.divider span {
  background: rgba(10, 31, 26, 0.9);
  padding: 0 1rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Social Login */
.social-login {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  font-family: 'Space Mono', monospace;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.social-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* Sign Up Prompt */
.signup-prompt {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.signup-prompt p {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.95rem;
}

.signup-link {
  color: #00ff88;
  text-decoration: none;
  font-weight: 700;
  transition: all 0.3s ease;
}

.signup-link:hover {
  text-decoration: underline;
  color: #00dd77;
}

/* Responsive */
@media (max-width: 1024px) {
  .login-container {
    grid-template-columns: 1fr;
  }

  .brand-section {
    display: none;
  }

  .form-section {
    border-left: none;
  }
}

@media (max-width: 600px) {
  .form-section {
    padding: 2rem 1.5rem;
  }

  .form-container {
    padding: 2rem 1.5rem;
  }

  .brand-title {
    font-size: 2.5rem;
  }

  .form-header h2 {
    font-size: 1.75rem;
  }

  .social-login {
    grid-template-columns: 1fr;
  }
}
</style>