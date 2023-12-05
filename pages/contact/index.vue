<script lang="ts" setup>
import { ColorModeInstance } from '@nuxtjs/color-mode/dist/runtime/types';

// Set Meta SEO
useSeoMeta({
  title: "Hubungi Kami",
  description: "Jangan ragu untuk menghubungi kami.",
  ogTitle: "Hubungi Kami",
  ogDescription: "Jangan ragu untuk menghubungi kami.",
});

const colorMode: ColorModeInstance = useColorMode();
</script>

<template>
  <div>
    <HeroBackgroundParallax text="Hubungi Kami" desc="Jangan ragu untuk menghubungi kami."
      background="/images/background/bg-contact-me.png" />
    <ContactMessage title="Mari Berbincang!"
      description="Kami sangat ingin mendengar dari Anda! Apakah Anda memiliki pertanyaan, komentar, atau saran yang ingin Anda sampaikan? Jangan ragu untuk menghubungi kami. Kami senantiasa siap menerima pesan Anda." />

    <hr v-if="colorMode.preference === 'dark'" class="text-secondary" />
  </div>
</template>

<style scoped>
/* //Set media query X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .contact-heading-container {
    padding: 12px 12px;
  }
}
</style>
