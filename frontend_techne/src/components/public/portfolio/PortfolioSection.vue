<!-- src/components/public/PortfolioSection.vue -->
<template>
  <section class="portfolio-section">
    <div class="portfolio-container">
      <div class="section-header">
        <h2>Our Portfolio</h2>
        <p>Successful projects delivered to clients worldwide</p>
      </div>

      <div class="portfolio-grid">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="portfolio-card"
          @click="handleViewProject(project)"
        >
          <!-- Thumbnail Image -->
          <div class="card-thumbnail">
            <img 
              :src="project.thumbnail" 
              :alt="project.title"
              class="thumbnail-image"
            />
          </div>

          <div class="card-header">
            <h3>{{ project.title }}</h3>
          </div>
          
          <div class="card-body">
            <p class="card-description">{{ project.description }}</p>
            
            <div class="project-services">
              <span 
                v-for="(service, sIndex) in project.services" 
                :key="sIndex"
                :class="['service-badge', service.color]"
              >
                <span class="badge-dot"></span>
                {{ service.name }}
              </span>
            </div>
          </div>

          <!-- Hover Overlay -->
          <div class="hover-overlay">
            <button class="view-button">View</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    title: 'Dell Inspiron 15 Complete Overhaul',
    description: 'Professional laptop repair, upgrade, and maintenance services including hardware diagnostics and system optimization.',
    thumbnail: '/images/portfolio/laptop-repair.jpg', // Add your image path
    services: [
      { name: 'Repair', color: 'red' },
      { name: 'Upgrade', color: 'blue' }
    ]
  },
  {
    title: 'HP LaserJet Pro Service',
    description: 'Complete printer repair and maintenance solutions for office equipment.',
    thumbnail: '/images/portfolio/printer-service.jpg', // Add your image path
    services: [
      { name: 'Repair', color: 'red' },
      { name: 'Maintenance', color: 'yellow' }
    ]
  },
  {
    title: 'Samsung Front-Load Washer Repair',
    description: 'Expert washing machine repair and maintenance service with quality parts replacement.',
    thumbnail: '/images/portfolio/washer-repair.jpg', // Add your image path
    services: [
      { name: 'Repair', color: 'red' },
      { name: 'Maintenance', color: 'yellow' }
    ]
  },
  {
    title: 'iPhone Screen & Battery Replacement',
    description: 'Professional smartphone repair service with genuine parts and warranty.',
    thumbnail: '/images/portfolio/phone-repair.jpg', // Add your image path
    services: [
      { name: 'Repair', color: 'red' }
    ]
  },
  {
    title: 'Security Camera System Installation',
    description: 'Complete CCTV surveillance system setup for commercial and residential properties.',
    thumbnail: '/images/portfolio/cctv-installation.jpg', // Add your image path
    services: [
      { name: 'Installation', color: 'blue' },
      { name: 'Maintenance', color: 'yellow' }
    ]
  },
  {
    title: 'Residential Solar Power System',
    description: 'Solar panel installation and maintenance for home energy efficiency and cost savings.',
    thumbnail: '/images/portfolio/solar-system.jpg', // Add your image path
    services: [
      { name: 'Installation', color: 'blue' },
      { name: 'Maintenance', color: 'yellow' }
    ]
  },
  {
    title: 'Medical Equipment Calibration',
    description: 'Professional calibration and maintenance of clinic medical equipment with safety compliance.',
    thumbnail: '/images/portfolio/medical-equipment.jpg', // Add your image path
    services: [
      { name: 'Maintenance', color: 'yellow' }
    ]
  },
  {
    title: 'Office Network Infrastructure Setup',
    description: 'Complete office network installation including routers, switches, and security configuration.',
    thumbnail: '/images/portfolio/network-setup.jpg', // Add your image path
    services: [
      { name: 'Installation', color: 'blue' },
      { name: 'Upgrade', color: 'blue' }
    ]
  }
];

const handleViewProject = (project) => {
  console.log('View project:', project.title, '- Not yet functional');
};
</script>

<style scoped>
.portfolio-section {
  background: #f8f9fa;
  padding: 5rem 0;
  position: relative;
  width: 100%;
}

.portfolio-container {
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

.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 2rem;
}

.portfolio-card {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%; /* Ensure all cards have equal height */
}

.portfolio-card:hover {
  border-color: #00ff88;
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}

.portfolio-card:hover .hover-overlay {
  opacity: 1;
  visibility: visible;
}

.card-thumbnail {
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: #f0f0f0;
  position: relative;
}

.thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.portfolio-card:hover .thumbnail-image {
  transform: scale(1.05);
}

.card-header {
  padding: 1.5rem;
  background: white;
  border-bottom: 2px solid #e0e0e0;
}

.card-header h3 {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  line-height: 1.4;
}

.card-body {
  padding: 1.5rem;
  flex: 1; /* Take up remaining space */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Push badges to bottom */
}

.card-description {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
  margin: 0 0 1.25rem 0; /* Add bottom margin for spacing */
}

.project-services {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto; /* Push to bottom */
}

.service-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.9rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 2px solid;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.badge-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
}

.service-badge.yellow {
  background: #fff9e6;
  border-color: #ffd93d;
  color: #b8860b;
}

.service-badge.yellow .badge-dot {
  background: #ffd93d;
}

.service-badge.red {
  background: #ffe6e6;
  border-color: #ff6b6b;
  color: #c92a2a;
}

.service-badge.red .badge-dot {
  background: #ff6b6b;
}

.service-badge.blue {
  background: #e6f7ff;
  border-color: #40a9ff;
  color: #096dd9;
}

.service-badge.blue .badge-dot {
  background: #40a9ff;
}

/* Hover Overlay */
.hover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle, rgba(10, 31, 26, 0.85) 0%, rgba(10, 31, 26, 0.95) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  border-radius: 10px;
}

.view-button {
  padding: 1rem 2.5rem;
  background: #00ff88;
  color: #0a1f1a;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 255, 136, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.view-button:hover {
  background: #00dd77;
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 255, 136, 0.6);
}

/* Responsive */
@media (max-width: 1024px) {
  .portfolio-grid {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .portfolio-section {
    padding: 3rem 0;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .section-header p {
    font-size: 1rem;
  }
  
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card-header {
    padding: 1.25rem;
  }

  .card-header h3 {
    font-size: 1.1rem;
  }

  .card-body {
    padding: 1.25rem;
  }

  .card-description {
    font-size: 0.9rem;
  }
  
  .service-badge {
    font-size: 0.75rem;
    padding: 0.35rem 0.75rem;
  }
}
</style>