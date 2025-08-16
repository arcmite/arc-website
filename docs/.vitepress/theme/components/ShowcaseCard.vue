<!-- docs/.vitepress/theme/components/ShowcaseCard.vue -->
<script setup>
import { withBase } from 'vitepress'
import { Icon } from '@iconify/vue'

defineProps({
  item: {
    type: Object,
    required: true
  }
});

const getPrimaryUrl = (links) => {
  const primaryLink = links.find(l => l.primary);
  return primaryLink ? primaryLink.url : (links.length > 0 ? links[0].url : '#');
};

const getIconForLabel = (label) => {
  const lowerLabel = label.toLowerCase();
  if (lowerLabel.includes('patreon')) return 'simple-icons:patreon';
  if (lowerLabel.includes('download')) return 'mdi:download-box';
  if (lowerLabel.includes('website')) return 'mdi:web';
  if (lowerLabel.includes('discord')) return 'simple-icons:discord';
  if (lowerLabel.includes('youtube')) return 'simple-icons:youtube';
  if (lowerLabel.includes('profile')) return 'mdi:account-circle';
  return 'mdi:arrow-right-thin';
};
</script>

<template>
  <div class="showcase-card">
    <a class="image-link" :href="getPrimaryUrl(item.links)" target="_blank" rel="noopener">
      <img :src="item.image" :alt="item.title" loading="lazy">
      <span class="type-badge">{{ item.type }}</span>

      <!-- NEW: Author Badge -->
      <span v-if="item.screenshotAuthor" class="author-badge">
        <Icon icon="mdi:camera" />
        <span>{{ item.screenshotAuthor }}</span>
      </span>
    </a>
    <div class="card-content">
      <h3 class="title">{{ item.title }}</h3>
      <p class="author">by {{ item.author }}</p>
      <p class="description">{{ item.description }}</p>
      <div class="tags">
        <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
      </div>
    </div>
    <div class="card-footer">
      <a
        v-for="link in item.links"
        :key="link.url"
        :href="link.url"
        :class="['action-button', { primary: link.primary }]"
        target="_blank"
        rel="noopener"
      >
        <Icon :icon="getIconForLabel(link.label)" />
        <span>{{ link.label }}</span>
      </a>
    </div>
  </div>
</template>

<style scoped>
.showcase-card {
  width: 360px;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: border-color 0.2s ease;
}
.showcase-card:hover {
  border-color: var(--vp-c-border);
}

.image-link {
  position: relative;
  display: block;
}
.image-link img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
  margin: 0;
  background-color: var(--vp-c-bg-alt);
}

/* badge base style */
.type-badge, .author-badge {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 4px 10px;
  border-radius: 6px;
  background-color: rgba(0,0,0,0.6);
  color: var(--vp-c-white);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.5px;
  backdrop-filter: blur(4px);
}
.type-badge {
  top: 12px;
  left: 12px;
}
.author-badge {
  bottom: 12px;
  right: 12px;
}

.card-content {
  padding: 1rem;
  flex-grow: 1;
}
.title {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
  color: var(--vp-c-text-1);
}
.author {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0 0 1rem;
}
.description {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  overflow: hidden;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 1rem;
  padding-bottom: 0;
}
.tag {
  padding: 3px 8px;
  border-radius: 12px;
  background-color: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
  font-size: 12px;
  font-weight: 500;
}

.card-footer {
  display: flex;
  gap: 0.75rem;
  padding: 1rem;
  border-top: 1px solid var(--vp-c-divider);
  margin-top: 1rem;
}
.action-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-grow: 1;
  text-align: center;
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
}
.action-button.primary {
  background-color: var(--vp-c-brand-3);
  color: var(--vp-c-white);
  border-color: transparent;
}
.action-button:hover {
  background-color: var(--vp-c-default-2);
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-default-2);
}
.action-button.primary:hover {
  background-color: var(--vp-c-brand-2);
  color: var(--vp-c-white);
}
</style>