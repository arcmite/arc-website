<script setup lang="ts">
import { withBase } from 'vitepress'
import { Icon } from '@iconify/vue'

defineProps<{
  item: {
    src: string
    alt: string
    author: string
    details: {
      ppfilter: string
      car: string
      track: string
    }
  }
}>()
</script>

<template>
  <div class="showcase-card">
    <img :src="withBase(item.src)" :alt="item.alt" class="card-image" loading="lazy" />
    <div class="card-overlay">
      <div class="author-info">
        <Icon icon="mdi:camera" class="icon" />
        <span>{{ item.author }}</span>
      </div>
      <div class="scene-details">
        <div v-if="item.details.ppfilter !== 'N/A'" class="detail-item">
          <Icon icon="mdi:palette" class="icon" />
          <span>{{ item.details.ppfilter }}</span>
        </div>
        <div v-if="item.details.car !== 'N/A'" class="detail-item">
          <Icon icon="mdi:car" class="icon" />
          <span>{{ item.details.car }}</span>
        </div>
        <div v-if="item.details.track !== 'N/A'" class="detail-item">
          <Icon icon="mdi:road-variant" class="icon" />
          <span>{{ item.details.track }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.showcase-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  cursor: pointer;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.card-image {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  margin: 0;
  transition: transform 0.3s ease;
}

.showcase-card:hover .card-image {
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.showcase-card:hover .card-overlay {
  opacity: 1;
}

.author-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
}

.scene-details {
  font-size: 0.85rem;
  line-height: 1.5;
}

.detail-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.25rem;
}

.icon {
  width: 1.1em;
  height: 1.1em;
  flex-shrink: 0;
}
</style>