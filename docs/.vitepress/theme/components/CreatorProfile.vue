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
  location?: string
  links?: Link[]
}>()

// iconify my beloved
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

// prefix site base for local avatars
const avatarSrc = computed(() => {
  const a = props.avatar ?? ''
  return /^https?:\/\//.test(a) ? a : withBase(a)
})

// func to avoid `new URL(...)` in template, since volar doesn't know global URL there
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
  <article class="creator-profile">
    <header class="cp-header">
      <img class="cp-avatar" :src="avatarSrc" :alt="name" loading="lazy" />
      <div class="cp-meta">
        <h1 class="cp-name">{{ name }}</h1>
        <p v-if="caption" class="cp-caption">{{ caption }}</p>
        <nav v-if="normalizedLinks.length" class="cp-links" aria-label="Creator links">
          <a
            v-for="l in normalizedLinks"
            :key="l.href"
            class="cp-link"
            :href="l.href"
            target="_blank"
            rel="noopener"
          >
            <Icon :icon="l.icon" width="18" height="18" />
            <span>{{ l.label ?? hostname(l.href) }}</span>
          </a>
        </nav>
      </div>
    </header>

    <div class="cp-body">
      <slot />
    </div>
  </article>
</template>

<style scoped>
.creator-profile {
  max-width: 880px;
  margin: 0 auto;
}

.cp-header {
  display: grid;
  grid-template-columns: 112px 1fr;
  gap: 1.25rem;
  align-items: center;
  padding: 1rem 0 1.25rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.cp-avatar {
  width: 112px;
  height: 112px;
  border-radius: 999px; /* perfect round */
  object-fit: cover;
  border: 1px solid var(--vp-c-bg-soft);
  box-shadow: 0 2px 12px rgba(0,0,0,.15);
  background: var(--vp-c-bg);
}

.cp-meta { min-width: 0; }
.cp-name {
  font-size: 1.8rem;
  margin: 0 0 .25rem 0;
  letter-spacing: -0.01em;
}
.cp-caption {
  margin: 0 0 .75rem 0;
  color: var(--vp-c-text-2);
}

.cp-links {
  display: flex;
  flex-wrap: wrap;
  gap: .5rem;
}
.cp-link {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  padding: .45rem .7rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: .5rem;
  font-size: .9rem;
  transition: border-color .15s, transform .05s;
}
.cp-link:hover { border-color: var(--vp-c-brand-1); }
.cp-link:active { transform: translateY(1px); }

.cp-body { padding: 1.25rem 0 0; }
@media (max-width: 640px) {
  .cp-header { grid-template-columns: 80px 1fr; }
  .cp-avatar { width: 80px; height: 80px; }
}
</style>