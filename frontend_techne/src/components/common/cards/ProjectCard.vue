<!-- src/components/common/ProjectCard.vue -->
<template>
  <div class="project-card">
    <!-- Card Content - 2 Column Layout -->
    <div class="card-content">
      <!-- LEFT COLUMN: Name and Description -->
      <div class="left-column">
        <div class="header-left">
          <div class="icon-container">
            <span class="category-icon">{{ getIconPath(category) }}</span>
          </div>
          <div>
            <h3 class="project-name">{{ name }}</h3>
            <p class="project-category">{{ category }}</p>
          </div>
        </div>
        <p class="project-description">{{ description }}</p>
      </div>

      <!-- RIGHT COLUMN: Services -->
      <div class="right-column">
        <h4 class="section-title">Services Provided</h4>
        
        <!-- Service Type Buttons -->
        <div class="service-tabs">
          <button
            v-for="(service, index) in services"
            :key="index"
            :class="['service-tab', { active: activeService === index }]"
            @click="activeService = index"
          >
            {{ service.type }}
          </button>
        </div>

        <!-- Active Service Scope -->
        <div class="scope-content" v-if="services[activeService]">
          <div class="scope-of-work">
            <div class="scope-label">Scope of Works:</div>
            <ul class="scope-list">
              <li v-for="(item, idx) in services[activeService].scopeOfWork" :key="idx">
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Feedbacks Section -->
    <div class="feedbacks-section">
      <span class="feedbacks-link">> Feedbacks</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  category: {
    type: String,
    default: 'Laptop',
    validator: (value) => {
      return ['Laptop', 'Printer', 'Washing Machine', 'Cellphone', 'CCTV', 'Solar Panel', 'Clinic Equipment'].includes(value);
    }
  },
  name: {
    type: String,
    default: 'Laptop Repair & Upgrade'
  },
  description: {
    type: String,
    default: 'Complete hardware diagnosis and upgrade for a Dell Inspiron 15 laptop including component replacement and system optimization.'
  },
  services: {
    type: Array,
    default: () => [
      {
        type: 'Repair',
        scopeOfWork: [
          'Diagnosed motherboard issues and replaced faulty RAM modules',
          'Cleaned internal components and replaced thermal paste',
          'Fixed overheating issues and fan replacement'
        ]
      },
      {
        type: 'Maintenance',
        scopeOfWork: [
          'Regular system cleaning and dust removal',
          'Software updates and security patches',
          'Performance optimization and diagnostics'
        ]
      },
      {
        type: 'Upgrade',
        scopeOfWork: [
          'Upgraded storage from HDD to 1TB NVMe SSD',
          'Increased RAM from 8GB to 16GB DDR4',
          'Updated BIOS to latest version'
        ]
      },
      {
        type: 'Installation',
        scopeOfWork: [
          'Reinstalled operating system (Windows 11 Pro)',
          'Installed and configured essential drivers',
          'Set up security software and system optimization tools'
        ]
      }
    ]
  }
});

// Active service index (default to first service)
const activeService = ref(0);

// Get icon based on category
const getIconPath = (category) => {
  const icons = {
    'Laptop': '💻',
    'Printer': '🖨️',
    'Washing Machine': '🧺',
    'Cellphone': '📱',
    'CCTV': '📹',
    'Solar Panel': '☀️',
    'Clinic Equipment': '🏥'
  };
  return icons[category] || '🔧';
};
</script>

<style scoped>
.project-card {
  background: linear-gradient(135deg, #0a1f1a 0%, #0d2820 50%, #0f2d24 100%);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

.card-content {
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  flex: 1;
}

/* LEFT COLUMN */
.left-column {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.icon-container {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #00ff88 0%, #00cc70 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  flex-shrink: 0;
}

.category-icon {
  font-size: 2rem;
}

.project-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 0.25rem;
}

.project-category {
  font-size: 0.875rem;
  color: #00ff88;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-description {
  font-size: 1rem;
  color: #b8c5c0;
  line-height: 1.6;
}

/* RIGHT COLUMN */
.right-column {
  display: flex;
  flex-direction: column;
  border-left: 2px solid rgba(0, 255, 136, 0.2);
  padding-left: 2rem;
}

.section-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 1rem;
}

.service-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
}

.service-tab {
  padding: 0.6rem 1.2rem;
  border: 2px solid rgba(0, 255, 136, 0.3);
  background: rgba(0, 255, 136, 0.05);
  color: #b8c5c0;
  border-radius: 8px;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.service-tab:hover {
  border-color: #00ff88;
  color: #00ff88;
  background: rgba(0, 255, 136, 0.1);
  transform: translateY(-2px);
}

.service-tab.active {
  background: #00ff88;
  border-color: #00ff88;
  color: #0a1f1a;
  box-shadow: 0 4px 12px rgba(0, 255, 136, 0.4);
}

.scope-content {
  border-left: 3px solid #00ff88;
  padding-left: 1.5rem;
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.scope-of-work {
  margin-top: 0.5rem;
}

.scope-label {
  font-size: 0.875rem;
  font-weight: 600;
  color: #00ff88;
  margin-bottom: 0.75rem;
}

.scope-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.scope-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  color: #d4ddd9;
  line-height: 1.6;
  font-size: 0.95rem;
}

.scope-list li:last-child {
  margin-bottom: 0;
}

.scope-list li::before {
  content: '–';
  position: absolute;
  left: 0;
  color: #00ff88;
  font-weight: 700;
}

/* Feedbacks Section */
.feedbacks-section {
  border-top: 2px solid rgba(0, 255, 136, 0.2);
  padding: 1.5rem 2rem;
  padding-top: 1.25rem;
}

.feedbacks-link {
  color: #00ff88;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.feedbacks-link:hover {
  color: #00dd77;
  text-decoration: underline;
}

/* Responsive */
@media (max-width: 1024px) {
  .card-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .right-column {
    border-left: none;
    border-top: 2px solid rgba(0, 255, 136, 0.2);
    padding-left: 0;
    padding-top: 1.5rem;
  }
}

@media (max-width: 768px) {
  .card-content {
    padding: 1.5rem;
  }

  .feedbacks-section {
    padding: 1rem 1.5rem;
  }

  .feedbacks-link {
    font-size: 0.875rem;
  }

  .header-left {
    gap: 0.75rem;
  }

  .icon-container {
    width: 50px;
    height: 50px;
  }

  .category-icon {
    font-size: 1.5rem;
  }

  .project-name {
    font-size: 1.25rem;
  }

  .project-category {
    font-size: 0.75rem;
  }

  .project-description {
    font-size: 0.95rem;
  }

  .service-tabs {
    gap: 0.5rem;
  }

  .service-tab {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  .scope-content {
    padding-left: 1rem;
  }

  .scope-list li {
    font-size: 0.9rem;
  }
}
</style>