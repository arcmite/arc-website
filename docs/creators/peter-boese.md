<script setup>
const links = [
  { kind: 'patreon', href: 'https://www.patreon.com/peterboese', label: 'Patreon' },
  { kind: 'youtube', href: 'https://www.youtube.com/@onlyletterandnumber', label: 'YouTube' }
]
</script>

<CreatorProfile
  avatar="/images/creators/avatar_boese.png"
  name="Peter Boese"
  caption="Say something, Peter!"
  :links="links"
>

Peter is the creator of **Pure**, a comprehensive weather and lighting framework for Assetto Corsa built on top of Custom Shaders Patch (CSP). Pure provides weather presets, sky models, lighting/shadow tuning, a controller, and a large PPFilter ecosystem.

</CreatorProfile>