<template>
  <div class="services-page">
    <div class="page-header">
      <div class="header-content">
        <h1>Manage Services</h1>
        <p class="subtitle">Create and manage your service offerings</p>
      </div>
      <button class="btn-primary" @click="openServiceModal()">
        <span class="icon">➕</span>
        <span>Add Service</span>
      </button>
    </div>

    <!-- Stats Cards -->
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon">🔧</div>
        <div class="stat-content">
          <div class="stat-value">{{ services.length }}</div>
          <div class="stat-label">Total Services</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">✅</div>
        <div class="stat-content">
          <div class="stat-value">{{ activeServices }}</div>
          <div class="stat-label">Active Services</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">⭐</div>
        <div class="stat-content">
          <div class="stat-value">{{ featuredServices }}</div>
          <div class="stat-label">Featured Services</div>
        </div>
      </div>
    </div>

    <!-- Services Table -->
    <div class="services-table-container">
      <div class="table-header">
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Search services..."
            class="search-input"
          />
        </div>
        <div class="filter-controls">
          <select v-model="filterStatus" class="filter-select">
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div class="table-wrapper">
        <table class="services-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Category</th>
              <th>Price</th>
              <th>Status</th>
              <th>Featured</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="service in filteredServices" :key="service.id">
              <td>
                <div class="service-info">
                  <div class="service-icon">{{ service.icon }}</div>
                  <div class="service-details">
                    <div class="service-name">{{ service.name }}</div>
                    <div class="service-desc">{{ truncate(service.description, 50) }}</div>
                  </div>
                </div>
              </td>
              <td>
                <span class="category-badge">{{ service.category }}</span>
              </td>
              <td>
                <span class="price">{{ formatPrice(service.price) }}</span>
              </td>
              <td>
                <span 
                  class="status-badge" 
                  :class="service.status.toLowerCase()">
                  {{ service.status }}
                </span>
              </td>
              <td>
                <button 
                  class="toggle-btn"
                  :class="{ active: service.featured }"
                  @click="toggleFeatured(service.id)">
                  {{ service.featured ? '⭐' : '☆' }}
                </button>
              </td>
              <td>
                <span class="date">{{ formatDate(service.createdAt) }}</span>
              </td>
              <td>
                <div class="action-buttons">
                  <button 
                    class="btn-icon btn-edit" 
                    @click="openServiceModal(service)"
                    title="Edit">
                    ✏️
                  </button>
                  <button 
                    class="btn-icon btn-delete" 
                    @click="confirmDelete(service)"
                    title="Delete">
                    🗑️
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div v-if="filteredServices.length === 0" class="empty-state">
          <div class="empty-icon">📭</div>
          <h3>No services found</h3>
          <p>{{ searchQuery ? 'Try adjusting your search' : 'Get started by adding your first service' }}</p>
        </div>
      </div>
    </div>

    <!-- Service Modal -->
    <ServiceModal 
      v-if="showModal"
      :service="selectedService"
      @close="closeModal"
      @save="handleSave"
    />

    <!-- Delete Confirmation Modal -->
    <ConfirmModal
      v-if="showDeleteModal"
      title="Delete Service"
      :message="`Are you sure you want to delete '${serviceToDelete?.name}'? This action cannot be undone.`"
      confirm-text="Delete"
      cancel-text="Cancel"
      type="danger"
      @confirm="deleteService"
      @cancel="showDeleteModal = false"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ServiceModal from '@/components/common/modals/admin/ServiceModal.vue';
import ConfirmModal from '@/components/common/modals/admin/ConfirmModal.vue';

// Sample data - replace with API calls
const services = ref([
  {
    id: 1,
    name: 'Computer Repair',
    description: 'Professional computer hardware and software repair services',
    icon: '💻',
    category: 'Hardware',
    price: 50,
    status: 'Active',
    featured: true,
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    name: 'Network Setup',
    description: 'Home and office network installation and configuration',
    icon: '🌐',
    category: 'Network',
    price: 75,
    status: 'Active',
    featured: false,
    createdAt: '2024-01-20'
  },
  {
    id: 3,
    name: 'Data Recovery',
    description: 'Recover lost data from damaged or corrupted storage devices',
    icon: '💾',
    category: 'Data',
    price: 100,
    status: 'Active',
    featured: true,
    createdAt: '2024-02-01'
  },
  {
    id: 4,
    name: 'Software Installation',
    description: 'Install and configure software applications and operating systems',
    icon: '📦',
    category: 'Software',
    price: 40,
    status: 'Inactive',
    featured: false,
    createdAt: '2024-02-05'
  }
]);

const searchQuery = ref('');
const filterStatus = ref('all');
const showModal = ref(false);
const showDeleteModal = ref(false);
const selectedService = ref(null);
const serviceToDelete = ref(null);

// Computed properties
const activeServices = computed(() => {
  return services.value.filter(s => s.status === 'Active').length;
});

const featuredServices = computed(() => {
  return services.value.filter(s => s.featured).length;
});

const filteredServices = computed(() => {
  let filtered = services.value;

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase();
    filtered = filtered.filter(service => 
      service.name.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      service.category.toLowerCase().includes(query)
    );
  }

  // Filter by status
  if (filterStatus.value !== 'all') {
    filtered = filtered.filter(service => 
      service.status.toLowerCase() === filterStatus.value
    );
  }

  return filtered;
});

// Methods
const openServiceModal = (service = null) => {
  selectedService.value = service;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedService.value = null;
};

const handleSave = (serviceData) => {
  if (serviceData.id) {
    // Update existing service
    const index = services.value.findIndex(s => s.id === serviceData.id);
    if (index !== -1) {
      services.value[index] = { ...serviceData };
    }
  } else {
    // Add new service
    const newService = {
      ...serviceData,
      id: Date.now(),
      createdAt: new Date().toISOString().split('T')[0]
    };
    services.value.push(newService);
  }
  closeModal();
};

const toggleFeatured = (id) => {
  const service = services.value.find(s => s.id === id);
  if (service) {
    service.featured = !service.featured;
  }
};

const confirmDelete = (service) => {
  serviceToDelete.value = service;
  showDeleteModal.value = true;
};

const deleteService = () => {
  services.value = services.value.filter(s => s.id !== serviceToDelete.value.id);
  showDeleteModal.value = false;
  serviceToDelete.value = null;
};

// Utility functions
const formatPrice = (price) => {
  return `$${price.toFixed(2)}`;
};

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const truncate = (text, length) => {
  return text.length > length ? text.substring(0, length) + '...' : text;
};
</script>

<style scoped>
.services-page {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.header-content h1 {
  font-size: 2rem;
  color: #1a1a1a;
  margin: 0 0 0.25rem 0;
}

.subtitle {
  color: #666;
  margin: 0;
  font-size: 0.95rem;
}

.btn-primary {
  background: linear-gradient(135deg, #00ff88 0%, #00cc6f 100%);
  color: #0a1f1a;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 255, 136, 0.3);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 255, 136, 0.4);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.stat-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.stat-icon {
  font-size: 2.5rem;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #f0fdf7 0%, #e6fcf3 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: #1a1a1a;
  line-height: 1;
  margin-bottom: 0.25rem;
}

.stat-label {
  color: #666;
  font-size: 0.9rem;
}

.services-table-container {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.table-header {
  padding: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.search-box {
  position: relative;
  flex: 1;
  min-width: 250px;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.95rem;
  transition: border-color 0.3s ease;
}

.search-input:focus {
  outline: none;
  border-color: #00ff88;
}

.filter-controls {
  display: flex;
  gap: 0.75rem;
}

.filter-select {
  padding: 0.75rem 1rem;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 0.95rem;
  background: white;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.filter-select:focus {
  outline: none;
  border-color: #00ff88;
}

.table-wrapper {
  overflow-x: auto;
}

.services-table {
  width: 100%;
  border-collapse: collapse;
}

.services-table thead {
  background: #f9fafb;
}

.services-table th {
  padding: 1rem 1.5rem;
  text-align: left;
  font-weight: 600;
  font-size: 0.85rem;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border-bottom: 2px solid #e5e7eb;
}

.services-table td {
  padding: 1.25rem 1.5rem;
  border-bottom: 1px solid #f3f4f6;
}

.services-table tbody tr {
  transition: background-color 0.2s ease;
}

.services-table tbody tr:hover {
  background: #f9fafb;
}

.service-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.service-icon {
  font-size: 2rem;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #f0fdf7 0%, #e6fcf3 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.service-details {
  flex: 1;
  min-width: 0;
}

.service-name {
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.25rem;
  font-size: 0.95rem;
}

.service-desc {
  font-size: 0.85rem;
  color: #666;
}

.category-badge {
  display: inline-block;
  padding: 0.375rem 0.75rem;
  background: #e6fcf3;
  color: #00805c;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
}

.price {
  font-weight: 600;
  color: #1a1a1a;
  font-size: 1rem;
}

.status-badge {
  display: inline-block;
  padding: 0.375rem 0.875rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.status-badge.active {
  background: #d1fae5;
  color: #065f46;
}

.status-badge.inactive {
  background: #fee2e2;
  color: #991b1b;
}

.toggle-btn {
  background: transparent;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  width: 36px;
  height: 36px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.toggle-btn.active {
  background: #fef3c7;
  border-color: #fbbf24;
}

.toggle-btn:hover {
  transform: scale(1.1);
}

.date {
  color: #666;
  font-size: 0.9rem;
}

.action-buttons {
  display: flex;
  gap: 0.5rem;
}

.btn-icon {
  background: transparent;
  border: 1px solid #e5e7eb;
  width: 36px;
  height: 36px;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-edit:hover {
  background: #e6fcf3;
  border-color: #00ff88;
}

.btn-delete:hover {
  background: #fee2e2;
  border-color: #ef4444;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.empty-state h3 {
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
}

.empty-state p {
  color: #666;
  margin: 0;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .services-page {
    padding: 1rem;
  }

  .page-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .stats-grid {
    grid-template-columns: 1fr;
  }

  .table-header {
    flex-direction: column;
    align-items: stretch;
  }

  .search-box {
    min-width: 100%;
  }

  .services-table {
    font-size: 0.85rem;
  }

  .services-table th,
  .services-table td {
    padding: 0.75rem 1rem;
  }

  .service-icon {
    width: 40px;
    height: 40px;
    font-size: 1.5rem;
  }
}
</style>