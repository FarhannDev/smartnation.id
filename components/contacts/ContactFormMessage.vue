<script lang="ts" setup>
const props = defineProps({ title: { type: String }, description: { type: String } })

</script>


<template>
  <div class="d-flex flex-column justify-content-start contact-heading-container g-2">
    <h1 class="contact-title ">{{ title }}</h1>
    <p class="contact-desc">{{ description }}</p>
  </div>
</template>

<style scoped>
.contact-heading-container {
  position: relative;
  padding: 0px;
}

.contact-title {
  color: var(--danger-600, #CE2F2F);
  /* Font/Title 2 Bold */
  font-family: Poppins;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 13px;
  /* 30px */
}


.contact-desc {
  /* position: absolute; */
  color: var(--font-500, #6D6D6D);
  text-align: start;

  /* Font/Title 3 */
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 24px */
}


/* 
  Dark Mode 
*/
.dark-mode .contact-desc {
  color: #fff;
}
</style>