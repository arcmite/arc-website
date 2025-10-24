<script setup>
const links = [
  { kind: 'patreon', href: 'https://www.patreon.com/C13Automotive', label: 'Patreon' },
  { kind: 'discord', href: 'https://discord.gg/bxsJPzvDhv', label: 'Discord' }
]
</script>

<CreatorProfile
avatar="/images/creators/avatar_ciba.png"
name="DasCiba"
caption="Developer of C13 Aegis"
quote="Say something, Ciba!"
:links="links"  >

<div class="key-projects">
  <h2 class="kp-title">Key Projects</h2>
  <div class="kp-grid">
    <div class="kp-card">
      <h3 class="kp-card-title">C13 Aegis</h3>
      <p class="kp-card-desc">Largerly regarded as one of the consistently best Post-Processing Filter out there with amazing support and compatability with both Pure Gamma and Pure LCS</p>
      <div class="kp-card-links">
        <a class="kp-card-link read-more" href="https://www.patreon.com/C13Automotive" target="_blank" rel="noopener">Read More</a>
      </div>
    </div>
    <div class="kp-card">
      <h3 class="kp-card-title">Aegis Modern SRP Skin</h3>
      <p class="kp-card-desc">An extensive graphical overhaul that modifies the famous Shutoko Revival Project map to look even better</p>
      <div class="kp-card-links">
        <a class="kp-card-link read-more" href="https://www.patreon.com/posts/aegis-modern-0-9-135056132" target="_blank" rel="noopener">Read More</a>
      </div>
    </div>
  </div>
</div>

</CreatorProfile>
