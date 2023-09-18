<template>
  <div class="d-flex justify-content-center mx-auto">
    <div class="d-grid g-2">
      <SubscribeHeadingVue title="Berlangganan Buletin Kami"
        description="Dapatkan pembaruan terbaru kami dengan info terbaru" />
      <SubscribeFormInputVue />
    </div>
  </div>
</template>


<script lang="ts" setup>
import SubscribeFormInputVue from "./SubscribeFormInput.vue";
import SubscribeHeadingVue from "./SubscribeHeading.vue";

</script>