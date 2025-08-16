<script setup>
const links = [
  { kind: 'patreon', href: 'https://www.patreon.com/assettoserver', label: 'Patreon' },
  { kind: 'discord', href: 'https://discord.gg/uXEXRcSkyz', label: 'Discord' },
  { kind: 'website', href: 'https://assettoserver.org/', label: 'assettoserver.org' },
  { kind: 'github',  href: 'https://github.com/compujuckel', label: 'GitHub' },
]
</script>

<CreatorProfile
  avatar="https://github.com/compujuckel.png"
  name="compujuckel"
  caption="Developer of AssettoServer"
  quote="Say something, compu!"
  :links="links"
>

<!--- to fill with info abt this person -->

<div class="key-projects">
  <h2 class="kp-title">Key Projects</h2>
  <div class="kp-grid">
    
  </div>
</div>

</CreatorProfile>