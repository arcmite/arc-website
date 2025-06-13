---
layout: page
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://github.com/creacher4.png',
    name: 'sql',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/creacher4' }
    ]
  },
  {
    avatar: 'https://github.com/infrect.png',
    name: 'infrect',
    title: 'UI Designer',
    links: [
      { icon: 'github', link: 'https://github.com/infrect' }
    ]
  },
  {
    avatar: 'https://github.com/lint069.png',
    name: 'lint0',
    title: 'Photographer',
    links: [
      { icon: 'github', link: 'https://github.com/lint069' }
    ]
  }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Our Team
    </template>
    <template #lead>
      The development of ARC is guided by a small
      team, some of whom have chosen to be featured below.
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members />
</VPTeamPage>
