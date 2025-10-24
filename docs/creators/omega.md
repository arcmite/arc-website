<script setup>
const links = [
  { kind: 'discord', href: 'https://discord.com/invite/2PvtudAVX3', label: 'Discord' },
  { kind: 'patreon', href: 'https://www.patreon.com/omega_z1z', label: 'Patreon' },
  { kind: 'custom', icon: 'simple-icons:gumroad', href: 'https://tr.ee/ntB72rT1dB', label: 'Gumroad' },
  { kind: 'youtube', href: 'https://tr.ee/2Wmq7Hl6-o', label: 'YouTube' }
]
</script>

<CreatorProfile
  avatar="/images/creators/avatar_omega.png"
  name="OMEGA"
  caption=""
  quote="Tutto Passa"
  :links="links"  >

<div class="key-projects">
  <h2 class="kp-title">Key Projects</h2>
  <div class="kp-grid">
    <div class="kp-card">
      <h3 class="kp-card-title">Omega's Hometown Track</h3>
      <p class="kp-card-desc">OMEGA's Hometown is a german free-roam racetrack made for Assetto Corsa. It takes place in the creators real life hometown so basically around Rheda-Wiedenbrück, Germany.</p>
      <div class="kp-card-links">
        <a class="kp-card-link read-more" href="https://omegastracklab.gumroad.com/l/ligierjs8?layout=profile" target="_blank" rel="noopener">Read More</a>
      </div>
    </div>
  </div>
</div>

</CreatorProfile>
