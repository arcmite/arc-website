<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { withBase } from 'vitepress'

type BuiltinKind = 'github' | 'patreon' | 'x' | 'youtube' | 'discord' | 'website'
type Link =
  | { kind: BuiltinKind; href: string; label?: string }
  | { kind: 'custom'; icon: string; href: string; label?: string }

const props = defineProps<{
  avatar: string
  name: string
  caption?: string
  quote?: string
  links?: Link[]
}>()

const iconName = (kind: BuiltinKind) => {
  switch (kind) {
    case 'github':  return 'simple-icons:github'
    case 'patreon': return 'simple-icons:patreon'
    case 'x':       return 'simple-icons:x'
    case 'youtube': return 'simple-icons:youtube'
    case 'discord': return 'simple-icons:discord'
    case 'website': return 'mdi:web'
  }
}

type NormalizedLink = { href: string; label?: string; icon: string }
const normalizedLinks = computed<NormalizedLink[]>(() =>
  (props.links ?? []).map((l) => {
    if (l.kind === 'custom') return { href: l.href, label: l.label, icon: l.icon }
    return { href: l.href, label: l.label, icon: iconName(l.kind) }
  })
)

const avatarSrc = computed(() => {
  const a = props.avatar ?? ''
  return /^https?:\/\//.test(a) ? a : withBase(a)
})

function hostname(href: string): string {
  try {
    const host = new URL(href).hostname
    return host.startsWith('www.') ? host.slice(4) : host
  } catch {
    return href
  }
}
</script>

<template>
  <div class="creator-profile-layout">
    <aside class="cp-sidebar">
      <div class="cp-sidebar-content">
        <img class="cp-avatar" :src="avatarSrc" :alt="name" loading="lazy" />
        <p v-if="quote" class="cp-quote">"{{ quote }}"</p>
        <nav v-if="normalizedLinks.length" class="cp-links" aria-label="Creator links">
          <a
            v-for="l in normalizedLinks"
            :key="l.href"
            class="cp-link"
            :href="l.href"
            target="_blank"
            rel="noopener"
          >
            <Icon :icon="l.icon" width="20" height="20" />
            <span>{{ l.label ?? hostname(l.href) }}</span>
          </a>
        </nav>
      </div>
    </aside>

    <main class="cp-main">
      <header class="cp-header">
        <h1 class="cp-name">{{ name }}</h1>
        <p v-if="caption" class="cp-caption">{{ caption }}</p>
      </header>
      <div class="cp-body">
        <slot />
      </div>
    </main>
  </div>
</template>

<style scoped>
.creator-profile-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1152px;
  margin: 2rem auto;
}

.cp-sidebar-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 12px;
  border: 1px solid var(--vp-c-divider);
}

.cp-avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--vp-c-bg);
  box-shadow: var(--vp-shadow-2);
  margin-bottom: 1.25rem;
}

.cp-quote {
  font-style: italic;
  text-align: center;
  color: var(--vp-c-text-2);
  margin: 0 0 1.25rem 0;
  padding: 0 0.5rem;
  font-size: 0.95rem;
}

.cp-links {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.cp-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 0.8rem;
  border-radius: 8px;
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: background-color 0.2s, color 0.2s;
}

.cp-link:hover {
  background-color: var(--vp-c-bg-mute);
  color: var(--vp-c-text-1);
}

.cp-main {
  min-width: 0;
}

.cp-header {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 1.5rem;
}

.cp-name {
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  margin: 0;
  color: var(--vp-c-text-1);
  border: none;
}

.cp-caption {
  font-size: 1.2rem;
  color: var(--vp-c-text-2);
  margin-top: 0.5rem;
}

.cp-body {
  padding: 0;
}

/* desktop layout */
@media (min-width: 960px) {
  .creator-profile-layout {
    grid-template-columns: 240px 1fr;
  }
  .cp-sidebar-content {
    position: sticky;
    top: 88px; /* adjust based on nav height */
  }
}

/* mobile layout */
@media (max-width: 959px) {
  .creator-profile-layout {
    margin: 0 auto;
  }
  .cp-name, .cp-caption {
    text-align: center;
  }
  .cp-name {
    font-size: 2.2rem;
  }
}
</style>