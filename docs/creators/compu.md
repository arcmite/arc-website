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
:links="links"  >

<div class="key-projects">
  <h2 class="kp-title">Key Projects</h2>
  <div class="kp-grid">
    <div class="kp-card">
      <h3 class="kp-card-title">AssettoServer</h3>
      <p class="kp-card-desc">AssettoServer is a custom game server for Assetto Corsa developed with freeroam in mind. It greatly improves upon the default game server by fixing various security issues and providing new features like AI traffic and dynamic weather.</p>
      <div class="kp-card-links">
        <a class="kp-card-link read-more" href="https://assettoserver.org/" target="_blank" rel="noopener">Read More</a>
      </div>
    </div>
  </div>
</div>

</CreatorProfile>
