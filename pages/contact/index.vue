<script lang="ts" setup>
// Set Meta SEO
useSeoMeta({
  title: "Hubungi Kami",
  description: "Jangan ragu untuk menghubungi kami.",
  ogTitle: "Hubungi Kami",
  ogDescription: "Jangan ragu untuk menghubungi kami.",
});

const colorMode = useColorMode();
</script>

<template>
  <NuxtLayout name="page-layout">
    <!-- hero start -->
    <template #hero>
      <HeroParallaxBackground
        text="Hubungi Kami"
        desc="Jangan ragu untuk menghubungi kami."
        background="/images/background/bg-contact-me.png"
      />
    </template>
    <!-- rendered content main -->
    <main id="content">
      <!-- section kontak start -->
      <section class="contactme-section-container position-relative py-5">
        <div class="container" data-aos="fade-up" data-aos-duration="1500">
          <div class="row justify-content-start align-items-center g-3 py-5">
            <div class="col-lg-6">
              <ContactsContactFormMessage
                title="Mari Berbincang!"
                description="Kami sangat ingin mendengar dari Anda! Apakah Anda memiliki pertanyaan, komentar, atau saran yang ingin Anda sampaikan? Jangan ragu untuk menghubungi kami. Kami senantiasa siap menerima pesan Anda."
              />
            </div>
            <div class="col-lg-6">
              <ContactsContactFormInput />
            </div>
          </div>
        </div>
      </section>
      <!-- section kontak end -->

      <hr v-show="colorMode.preference === 'dark'" />
    </main>
  </NuxtLayout>
</template>

<style scoped>
/* //Set media query X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .contact-heading-container {
    padding: 12px 12px;
  }
}
</style>
