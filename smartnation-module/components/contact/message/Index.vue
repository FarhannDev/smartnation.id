<script lang="ts" setup>

const props = defineProps({ title: { type: String }, description: { type: String } })

</script>

<template>
  <!-- section kontak start -->
  <section class="contactme-section-container position-relative py-5">
    <div class="container" data-aos="fade-up" data-aos-duration="1500">
      <div class="row justify-content-start align-items-center g-3 py-5">
        <ContactMessageHeading class="col-lg-6 col-md-12" :title="title" :description="description" />
        <ContactMessageFormInput class="col-lg-6 col-md-12" />
      </div>
    </div>
  </section>
  <!-- section kontak end -->
</template>

<style scoped>
/* //Set media query X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .contact-heading-container {
    padding: 12px 12px;
  }
}
</style>