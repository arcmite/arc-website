<!-- SAMPLE TEMPLATE -->

<script setup>
const links = [
  // possible link icons via creatorprofile.vue
  { kind: 'github', href: 'https://github.com/example', label: 'GitHub' },
  { kind: 'patreon', href: 'https://patreon.com/example', label: 'Patreon' },
  { kind: 'x', href: 'https://x.com/example', label: 'X' },
  { kind: 'youtube', href: 'https://www.youtube.com/@example', label: 'YouTube' },
  { kind: 'discord', href: 'https://discord.gg/example', label: 'Discord' },
  { kind: 'website', href: 'https://example.com', label: 'Website' },

  // if missing from creatorprofile.vue, use custom kind
  // see https://icon-sets.iconify.design/ for list of icons, and look for the icon name
  { kind: 'custom', icon: 'mdi:camera', href: 'https://flickr.com/example', label: 'Flickr' }
]
</script>

<CreatorProfile
  avatar="/images/creators/avatar_placeholder.png"
  name="Foo Bar"
  caption="An example creator profile using all link types"
  :links="links"
>

This is a template biography for **Foo Bar**, demonstrating the CreatorProfile component with all possible link variations.

</CreatorProfile>
