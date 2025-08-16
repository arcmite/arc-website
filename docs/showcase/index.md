---
layout: page
---

<script setup>
import { ref } from 'vue'
import { withBase } from 'vitepress' // needed for relative image paths
import VueEasyLightbox from 'vue-easy-lightbox'
import 'vue-easy-lightbox/dist/external-css/vue-easy-lightbox.css'
import { items } from './data.ts'

// create an array of just the image URLs for the lightbox component
const imageSources = items.map(item => withBase(item.src))

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

<div class="showcase-grid">
  <div v-for="(item, index) in items" :key="item.src" class="showcase-card" @click="showLightbox(index)">
    <img :src="withBase(item.src)" :alt="item.alt" loading="lazy">
    <div class="card-info">
      <p class="photo-by">Photo by: <strong>{{ item.author }}</strong></p>
      <p class="details">{{ item.details }}</p>
    </div>
  </div>
</div>

<VueEasyLightbox
:visible="lightboxVisible"
:imgs="imageSources"
:index="lightboxIndex"
@hide="hideLightbox"
/>