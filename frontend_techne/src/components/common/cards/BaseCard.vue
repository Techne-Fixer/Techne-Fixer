<!-- src/components/common/BaseCard.vue -->
<template>
  <div class="base-card" :class="cardClasses">
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'elevated', 'outlined', 'flat'].includes(value)
  },
  hoverable: {
    type: Boolean,
    default: false
  },
  padding: {
    type: String,
    default: 'normal',
    validator: (value) => ['none', 'small', 'normal', 'large'].includes(value)
  }
});

const cardClasses = computed(() => {
  return {
    [`card-${props.variant}`]: true,
    'card-hoverable': props.hoverable,
    [`card-padding-${props.padding}`]: true
  };
});
</script>

<style scoped>
.base-card {
  background: #ffffff;
  border-radius: 12px;
  transition: all 0.3s ease;
}

/* Variants */
.card-default {
  border: 1px solid #e0e0e0;
}

.card-elevated {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: none;
}

.card-outlined {
  border: 2px solid #00ff88;
  box-shadow: none;
}

.card-flat {
  box-shadow: none;
  border: none;
  background: transparent;
}

/* Hoverable */
.card-hoverable {
  cursor: pointer;
}

.card-hoverable:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

/* Padding */
.card-padding-none {
  padding: 0;
}

.card-padding-small {
  padding: 1rem;
}

.card-padding-normal {
  padding: 1.5rem;
}

.card-padding-large {
  padding: 2rem;
}
</style>