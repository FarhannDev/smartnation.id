<script lang="ts" setup>
defineProps({ title: { type: String, required: true, default: 'Media Content Smart Nation' } })
</script>



<template>
  <h1 class="media-streams__heading">{{ title }}</h1>
</template>

<style scoped>
.media-streams__heading {
  color: var(--Primary-600, #D71149);

  /* Font/Tittle 2 SemiBold */
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 30px */
}
</style>