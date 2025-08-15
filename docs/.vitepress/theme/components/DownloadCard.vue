<template>
  <div class="download-card">
    <div class="text-content">
      <p class="title">{{ title }}</p>
      <p v-if="caption" class="caption">{{ caption }}</p>
    </div>
    <a 
      :href="buttonLink" 
      class="download-button" 
      :aria-label="buttonText"
      target="_blank" 
      rel="noopener noreferrer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7l7-7zM5 18v2h14v-2H5z"/></svg>
    </a>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: false
  },
  buttonText: {
    type: String,
    default: 'Download' // default
  },
  buttonLink: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
.download-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem 1.5rem;
  margin: 1.5rem 0;
  border-radius: 8px;
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: border-color 0.25s, box-shadow 0.25s;
}

.download-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: var(--vp-shadow-1);
}

.text-content {
  flex-grow: 1;
}

.title {
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
  line-height: 1.4;
}

.caption {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0.25rem 0 0 0;
  line-height: 1.5;
}

.download-button {
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 40px;
  height: 40px;
  border-radius: 50%; 
  
  background-color: var(--vp-c-brand-3);
  color: var(--vp-c-white);
  transition: background-color 0.2s ease;
}

.download-button:hover {
  background-color: var(--vp-c-brand-2);
  color: var(--vp-c-white);
}

.download-button svg {
  width: 20px;
  height: 20px;
}

@media (max-width: 640px) {
  .download-card {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
}
</style>