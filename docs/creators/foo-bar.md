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
  // see https://icon-sets.iconify.design/ for list of icons, and look for the iconify icon name
  { kind: 'custom', icon: 'mdi:camera', href: 'https://flickr.com/example', label: 'Flickr' }
]
</script>

<CreatorProfile
  avatar="/images/creators/avatar_placeholder.png"
  name="Foo Bar"
  caption="An example creator profile using all link types"
  quote="This is a sample quote for the creator."
  :links="links"
>

This is a template biography for **Foo Bar**, demonstrating the CreatorProfile component with all possible link variations.

<div class="key-projects">
  <h2 class="kp-title">Key Projects</h2>
  <div class="kp-grid">
    <div class="kp-card">
      <h3 class="kp-card-title">Project Alpha</h3>
      <p class="kp-card-desc">A brief description of a significant project or contribution.</p>
      <!-- add links to relevant guides or external pages -->
      <div class="kp-card-links">
        <a class="kp-card-link open-book" href="/path/to/guide.html">Installation Guide</a>
        <a class="kp-card-link read-more" href="https://example.com" target="_blank" rel="noopener">Read More</a>
      </div>
    </div>
    <div class="kp-card">
      <h3 class="kp-card-title">Project Beta</h3>
      <p class="kp-card-desc">Another project can be highlighted here to showcase the creator's work.</p>
      <!-- this card has no links, showing them are optional -->
    </div>
    <div class="kp-card">
      <h3 class="kp-card-title">Project Charlie</h3>
      <p class="kp-card-desc">Lorem ipsum dolor sit amet.</p>
    </div>
  </div>
</div>

</CreatorProfile>