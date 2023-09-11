<template>
  <NuxtLink :to="links" :aria-label="title"
    :class="'link-offset-2 link-underline link-underline-opacity-0 post-link__next'">
    {{ title }}
    <slot name="icons" />
    <BootstrapIcon name="chevron-right" />
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: { type: String },
  links: { type: String }
})
</script>

<style scoped>
.post-link__next {
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #FE3565;
}
</style>