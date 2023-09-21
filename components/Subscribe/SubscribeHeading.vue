
<template>
  <div class="text-center">
    <h3 class="subscribe-title">{{ title }}</h3>
    <p class="subscribe-subtitle">{{ description }}</p>
  </div>
</template>

<style scoped>
.subscribe-title {
  color: #CE2F2F;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.subscribe-subtitle {
  color: #6D6D6D;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding-top: 5px;
  /* 14.4px */
}
</style>


<script lang="ts" setup>

const props = defineProps({
  title: { type: String },
  description: { type: String },
})

</script>
