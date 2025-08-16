---
layout: page
---

<script setup>
import { ref, computed } from 'vue'
import { withBase } from 'vitepress' // needed for relative image paths
import VueEasyLightbox from 'vue-easy-lightbox'
import 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css'
import { items } from './data.ts'

const searchQuery = ref('')
const filteredItems = computed(() => {
  if (!searchQuery.value.trim()) {
    return items;
  }
  const lowerCaseQuery = searchQuery.value.toLowerCase();
  return items.filter(item => {
    return (
      item.author.toLowerCase().includes(lowerCaseQuery) ||
      item.details.car.toLowerCase().includes(lowerCaseQuery) ||
      item.details.track.toLowerCase().includes(lowerCaseQuery) ||
      item.details.ppfilter.toLowerCase().includes(lowerCaseQuery)
    );
  });
});

const lightboxItems = computed(() => filteredItems.value.map(item => {
  const details = [
    item.details.ppfilter !== 'N/A' ? `PPFilter: ${item.details.ppfilter}` : null,
    item.details.car !== 'N/A' ? `Car: ${item.details.car}` : null,
    item.details.track !== 'N/A' ? `Track: ${item.details.track}` : null
  ].filter(Boolean).join(' | ');

  return {
    src: withBase(item.src),
    title: `Photo by ${item.author}${details ? ` | ${details}` : ''}`
  };
}));

// reactive variables to control the lightbox
const lightboxVisible = ref(false)
const lightboxIndex = ref(0)

// function to open the lightbox at a specific image index
const showLightbox = (index) => {
  lightboxIndex.value = index
  lightboxVisible.value = true
}

// function to hide the lightbox
const hideLightbox = () => {
  lightboxVisible.value = false
}
</script>

<div class="section-hero">
  <h1>Showcase</h1>
  <p>A curated gallery of what's possible in modded Assetto Corsa. Featuring stunning visuals and unique compositions from the community.</p>
</div>

<div class="showcase-filter">
  <input
    type="text"
    v-model="searchQuery"
    placeholder="Filter by author, car, track..."
    class="filter-input"
    aria-label="Filter showcase items"
  />
</div>

<div class="showcase-grid">
  <ShowcaseCard
    v-for="(item, index) in filteredItems"
    :key="item.src"
    :item="item"
    @click="showLightbox(index)"
  />
</div>

<div v-if="filteredItems.length === 0" class="no-results">
  <p>No results found for "{{ searchQuery }}".</p>
</div>

<VueEasyLightbox
:visible="lightboxVisible"
:imgs="lightboxItems"
:index="lightboxIndex"
@hide="hideLightbox"
/>