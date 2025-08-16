---
layout: page
---

<script setup>
import { ref, computed, watch } from 'vue'
import { items } from './data.ts'
import ShowcaseCard from '../.vitepress/theme/components/ShowcaseCard.vue'

// state management ---
const activeTypeFilter = ref('All')
const activeTagFilter = ref('All')
const tagSearchQuery = ref('')
const isTagDropdownOpen = ref(false)

// computed data ---
const itemTypes = ['All', ...new Set(items.map(item => item.type))]
const allTags = ['All', ...new Set(items.flatMap(item => item.tags))]

// filter the list of available tags based on the search query
const filteredTags = computed(() => {
  if (!tagSearchQuery.value) {
    return allTags
  }
  return allTags.filter(tag =>
    tag.toLowerCase().includes(tagSearchQuery.value.toLowerCase())
  )
})

// the main logic to filter the showcase items
const filteredItems = computed(() => {
  let filtered = items;
  if (activeTypeFilter.value !== 'All') {
    filtered = filtered.filter(item => item.type === activeTypeFilter.value)
  }
  if (activeTagFilter.value !== 'All') {
    filtered = filtered.filter(item => item.tags.includes(activeTagFilter.value))
  }
  return filtered
})

// funcs //

function setTypeFilter(type) {
  activeTypeFilter.value = type
  // reset tag filter when changing type
  selectTag('All')
}

function selectTag(tag) {
  activeTagFilter.value = tag
  isTagDropdownOpen.value = false
  tagSearchQuery.value = '' // clear search input
}

// watches for changes to the active tag and updates the input's placeholder
const tagInputPlaceholder = computed(() => {
  return activeTagFilter.value === 'All' ? 'Filter by tag...' : `Tag: ${activeTagFilter.value}`
})
</script>

<div class="section-hero">
  <h1>Showcase</h1>
  <p>A curated catalog of high-quality mods, tools, and assets for Assetto Corsa.</p>
</div>

<!-- main type filters -->
<div class="showcase-filters">
  <button
    v-for="type in itemTypes"
    :key="type"
    :class="{ active: activeTypeFilter === type }"
    @click="setTypeFilter(type)"
  >
    {{ type }}
  </button>
</div>

<!-- tag + filter combobox -->
<div class="tag-combobox-wrapper">
  <div class="tag-combobox" @focusout="isTagDropdownOpen = false">
    <input
      type="text"
      :placeholder="tagInputPlaceholder"
      v-model="tagSearchQuery"
      @focus="isTagDropdownOpen = true"
      class="tag-input"
    />
    <button v-if="activeTagFilter !== 'All'" @click.stop="selectTag('All')" class="clear-tag-btn">
      &times;
    </button>
    <div v-if="isTagDropdownOpen" class="tag-dropdown">
      <ul>
        <li
          v-for="tag in filteredTags"
          :key="tag"
          @mousedown.prevent="selectTag(tag)"
          :class="{ active: activeTagFilter === tag }"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
  </div>
</div>


<div class="showcase-grid">
  <ShowcaseCard
    v-for="item in filteredItems"
    :key="item.title"
    :item="item"
  />
</div>

<style>
.showcase-filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  margin: 2rem auto 1.5rem;
}
.showcase-filters button {
  padding: 8px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-2);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}
.showcase-filters button:hover {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-1);
}
.showcase-filters button.active {
  background-color: var(--vp-c-brand-3);
  border-color: var(--vp-c-brand-3);
  color: var(--vp-c-white);
}

/* combo box styles */
.tag-combobox-wrapper {
  display: flex;
  justify-content: center;
  margin: 0 auto 3rem;
}
.tag-combobox {
  position: relative;
  width: 100%;
  max-width: 320px;
}
.tag-input {
  width: 100%;
  padding: 8px 14px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-divider);
  background-color: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 14px;
  transition: border-color 0.2s ease;
}
.tag-input:focus {
  border-color: var(--vp-c-brand-1);
  outline: none;
}
.clear-tag-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 20px;
  color: var(--vp-c-text-3);
  cursor: pointer;
  padding: 0 5px;
}
.tag-dropdown {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  width: 100%;
  max-height: 240px;
  overflow-y: auto;
  background-color: var(--vp-c-bg-elv);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  box-shadow: var(--vp-shadow-3);
  z-index: 10;
}
.tag-dropdown ul {
  list-style: none;
  padding: 0.5rem;
  margin: 0;
}
.tag-dropdown li {
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  color: var(--vp-c-text-1);
}
.tag-dropdown li:hover {
  background-color: var(--vp-c-default-soft);
}
.tag-dropdown li.active {
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.showcase-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}
</style>