<!-- src/components/public/PortfolioSection.vue -->
<template>
  <section class="portfolio-section">
    <div class="portfolio-container">
      <div class="section-header">
        <h2>Our Portfolio</h2>
        <p>Successful projects delivered to clients worldwide</p>
      </div>

      <div class="view-toggle">
        <button 
          :class="['toggle-btn', { active: viewMode === 'list' }]"
          @click="viewMode = 'list'"
          aria-label="List view"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="3" y="4" width="14" height="2" fill="currentColor"/>
            <rect x="3" y="9" width="14" height="2" fill="currentColor"/>
            <rect x="3" y="14" width="14" height="2" fill="currentColor"/>
          </svg>
        </button>
        <button 
          :class="['toggle-btn', { active: viewMode === 'grid' }]"
          @click="viewMode = 'grid'"
          aria-label="Grid view"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <rect x="3" y="3" width="6" height="6" fill="currentColor"/>
            <rect x="11" y="3" width="6" height="6" fill="currentColor"/>
            <rect x="3" y="11" width="6" height="6" fill="currentColor"/>
            <rect x="11" y="11" width="6" height="6" fill="currentColor"/>
          </svg>
        </button>
      </div>

      <div :class="['portfolio-table', viewMode]">
        <div class="table-header" v-if="viewMode === 'list'">
          <div class="header-cell number">#</div>
          <div class="header-cell project">PROJECT NAME</div>
          <div class="header-cell services">SERVICES</div>
        </div>

        <div class="table-body">
          <div 
            v-for="(project, index) in projects" 
            :key="index"
            :class="['project-row', viewMode]"
          >
            <div class="row-number" v-if="viewMode === 'list'">{{ index + 1 }}</div>
            
            <div class="project-info">
              <h3>{{ project.title }}</h3>
              <p>{{ project.description }}</p>
            </div>
            
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
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const viewMode = ref('list');

const projects = [
  {
    title: 'Service Marketplace Modernization',
    description: 'A content writing agency based in New York, helping brands globally by creating content that resonates with audiences, engages readers, and delivers measurable results for businesses.',
    services: [
      { name: 'Staff Augmentation', color: 'yellow' },
      { name: 'Web Development', color: 'red' }
    ]
  },
  {
    title: 'Staff Augmentation for Medical Tech',
    description: 'A Silicon Valley-based startup specializing in medical billing automation in the U.S.',
    services: [
      { name: 'Staff Augmentation', color: 'yellow' },
      { name: 'Web Development', color: 'red' }
    ]
  },
  {
    title: 'Team Expansion for Market Research Industry',
    description: 'A platform from New York that rewards users by taking online surveys.',
    services: [
      { name: 'Web Development', color: 'red' },
      { name: 'Staff Augmentation', color: 'yellow' }
    ]
  },
  {
    title: 'Web Development for Drone Systems',
    description: 'Geospatial intelligence technology based in Germany for the industrial sector.',
    services: [
      { name: 'Web Development', color: 'red' },
      { name: 'CI/CD Implementation', color: 'blue' }
    ]
  },
  {
    title: 'Staff Augmentation for Trucking Industry',
    description: 'A mobile app solution for truckers in the USA.',
    services: [
      { name: 'Staff Augmentation', color: 'yellow' },
      { name: 'Mobile App', color: 'red' },
      { name: 'Mobile Product Design', color: 'blue' }
    ]
  },
  {
    title: 'B2B Staff Expansion for Digital Agency',
    description: 'A trusted partner for their code and no-code solutions in Germany.',
    services: [
      { name: 'Staff Augmentation', color: 'yellow' },
      { name: 'Web Development', color: 'red' }
    ]
  }
];
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

.view-toggle {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.toggle-btn {
  background: white;
  border: 2px solid #e0e0e0;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #666;
}

.toggle-btn:hover {
  border-color: #00ff88;
  color: #00ff88;
}

.toggle-btn.active {
  background: #00ff88;
  border-color: #00ff88;
  color: #0a1f1a;
}

.portfolio-table {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.table-header {
  display: grid;
  grid-template-columns: 60px 1fr 1fr;
  gap: 2rem;
  padding: 1.5rem 2rem;
  background: #f8f9fa;
  border-bottom: 2px solid #e0e0e0;
  font-weight: 700;
  font-size: 0.75rem;
  color: #666;
  letter-spacing: 0.5px;
}

.table-body {
  display: flex;
  flex-direction: column;
}

.project-row.list {
  display: grid;
  grid-template-columns: 60px 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  border-bottom: 1px solid #e0e0e0;
  transition: all 0.3s ease;
  align-items: start;
}

.project-row.list:hover {
  background: #f8f9fa;
}

.project-row.list:last-child {
  border-bottom: none;
}

.row-number {
  font-size: 1.2rem;
  font-weight: 600;
  color: #999;
}

.project-info h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.project-info p {
  font-size: 0.95rem;
  color: #666;
  line-height: 1.6;
}

.project-services {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: flex-start;
}

.service-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 2px solid;
  white-space: nowrap;
  transition: all 0.2s ease;
}

.service-badge:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.badge-dot {
  width: 8px;
  height: 8px;
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

/* Grid View */
.portfolio-table.grid .table-body {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
}

.project-row.grid {
  background: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  padding: 2rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.project-row.grid:hover {
  border-color: #00ff88;
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.project-row.grid .project-info {
  flex: 1;
}

/* Responsive */
@media (max-width: 1024px) {
  .table-header,
  .project-row.list {
    grid-template-columns: 50px 1fr;
    gap: 1rem;
  }
  
  .project-services {
    grid-column: 2;
    margin-top: 1rem;
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
  
  .table-header {
    display: none;
  }
  
  .project-row.list {
    grid-template-columns: 1fr;
    padding: 1.5rem;
  }
  
  .row-number {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    font-size: 0.9rem;
  }
  
  .project-row.list {
    position: relative;
  }
  
  .portfolio-table.grid .table-body {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
  
  .project-row.grid {
    padding: 1.5rem;
  }
  
  .service-badge {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>