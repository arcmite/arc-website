<script setup>
const links = [
  { kind: 'patreon', href: 'https://www.patreon.com/peterboese', label: 'Patreon' },
  { kind: 'youtube', href: 'https://www.youtube.com/@onlyletterandnumber', label: 'YouTube' }
]
</script>

<CreatorProfile
  avatar="/images/creators/avatar_boese.png"
  name="Peter Boese"
  caption="Creator of the Pure weather and lighting framework"
  quote="Say something, Peter!"
  :links="links"
>

Peter Boese is a visionary developer in the Assetto Corsa community, best known as the creator of **Pure**. His work focuses on creating hyper-realistic and dynamic weather and lighting conditions, completely transforming the atmospheric experience of the game. Pure is now considered an essential component for achieving photorealistic visuals in Assetto Corsa.

<div class="key-projects">
  <h2 class="kp-title">Key Projects</h2>
  <div class="kp-grid">
    <div class="kp-card">
      <h3 class="kp-card-title">Pure</h3>
      <p class="kp-card-desc">A comprehensive weather and lighting engine that replaces the game's stock systems. It features a 3D cloud system, realistic sky models, and seamless weather transitions.</p>
      <div class="kp-card-links">
        <a class="kp-card-link install" href="/assetto-corsa-arc/guides/setup/installing-pure.html">Installation Guide</a>
        <a class="kp-card-link read-more" href="https://www.patreon.com/peterboese" target="_blank" rel="noopener">Read More</a>
      </div>
    </div>
    <div class="kp-card">
      <h3 class="kp-card-title">Sol <Badge type="danger" text="Deprecated"/></h3>
      <p class="kp-card-desc">The predecessor to Pure, Sol was a groundbreaking mod that first introduced a full day/night cycle and dynamic weather to Assetto Corsa, paving the way for modern visuals.</p>
    </div>
  </div>
</div>

</CreatorProfile>