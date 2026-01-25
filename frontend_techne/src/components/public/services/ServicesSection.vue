<!-- src/components/public/services/ServicesSection.vue -->
<template>
  <section class="services-section">
    <div class="container">
      <div class="section-header">
        <h2>Our Services</h2>
        <p>Professional repair and maintenance for all your equipment</p>
      </div>
      
      <div class="services-grid">
        <ProjectCard
          v-for="project in projects"
          :key="project.id"
          :category="project.category"
          :name="project.name"
          :description="project.description"
          :services="project.services"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from '@/components/common/cards/ProjectCard.vue';

const projects = [
  {
    id: 1,
    category: 'Laptop',
    name: 'Laptop Service',
    description: 'Professional laptop repair, upgrade, and maintenance services.',
    services: [
      { 
        type: 'Repair', 
        scopeOfWork: [
          'Motherboard diagnostics and repair',
          'Component replacement',
          'Thermal paste application'
        ] 
      },
      { 
        type: 'Upgrade', 
        scopeOfWork: [
          'SSD installation and data migration',
          'RAM upgrade',
          'BIOS update'
        ] 
      }
    ]
  },
  {
    id: 2,
    category: 'Printer',
    name: 'Printer Service',
    description: 'Complete printer repair and maintenance solutions.',
    services: [
      { 
        type: 'Repair', 
        scopeOfWork: [
          'Paper jam fixes',
          'Roller replacement',
          'Print head cleaning'
        ] 
      },
      { 
        type: 'Maintenance', 
        scopeOfWork: [
          'Regular cleaning',
          'Firmware updates',
          'Quality calibration'
        ] 
      }
    ]
  },
  {
    id: 3,
    category: 'Washing Machine',
    name: 'Washing Machine Service',
    description: 'Expert washing machine repair and maintenance.',
    services: [
      { 
        type: 'Repair', 
        scopeOfWork: [
          'Drain pump replacement',
          'Door lock repair',
          'Water valve service'
        ] 
      },
      { 
        type: 'Maintenance', 
        scopeOfWork: [
          'Deep cleaning',
          'Filter maintenance',
          'Balance adjustment'
        ] 
      }
    ]
  },
  {
    id: 4,
    category: 'Cellphone',
    name: 'Cellphone Service',
    description: 'Professional smartphone repair with quality parts.',
    services: [
      { 
        type: 'Repair', 
        scopeOfWork: [
          'Screen replacement',
          'Battery replacement',
          'Water damage repair'
        ] 
      }
    ]
  },
  {
    id: 5,
    category: 'CCTV',
    name: 'CCTV Installation',
    description: 'Complete security camera system installation and maintenance.',
    services: [
      { 
        type: 'Installation', 
        scopeOfWork: [
          'Camera installation at strategic locations',
          'NVR setup and configuration',
          'Remote viewing setup'
        ] 
      },
      { 
        type: 'Maintenance', 
        scopeOfWork: [
          'System monitoring',
          'Firmware updates',
          'Cable inspection'
        ] 
      }
    ]
  },
  {
    id: 6,
    category: 'Solar Panel',
    name: 'Solar Panel Installation',
    description: 'Residential and commercial solar power solutions.',
    services: [
      { 
        type: 'Installation', 
        scopeOfWork: [
          'Panel array installation',
          'Inverter setup',
          'Grid connection'
        ] 
      },
      { 
        type: 'Maintenance', 
        scopeOfWork: [
          'Panel cleaning',
          'Performance monitoring',
          'Connection inspection'
        ] 
      }
    ]
  },
  {
    id: 7,
    category: 'Clinic Equipment',
    name: 'Medical Equipment Service',
    description: 'Professional calibration and maintenance of medical devices.',
    services: [
      { 
        type: 'Maintenance', 
        scopeOfWork: [
          'Equipment calibration',
          'Safety compliance check',
          'Sterilization and cleaning'
        ] 
      }
    ]
  }
];
</script>

<style scoped>
.services-section {
  background: #f8f9fa;
  padding: 5rem 0;
}

.container {
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

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .services-section {
    padding: 3rem 0;
  }
  
  .section-header h2 {
    font-size: 2rem;
  }
  
  .section-header p {
    font-size: 1rem;
  }
  
  .services-grid {
    gap: 1.5rem;
  }
}
</style>