<script lang="ts" setup>
const props = defineProps({ link: { type: String } })
</script>



<template>
  <div>
    <NuxtLink :to="`/article/category/${link}`" aria-label="Lihat Selengkapnya"
      class="link-offset-2 link-underline link-underline-opacity-0  article-link">
      Selengkapnya
    </NuxtLink>
    <BootstrapIcon name="chevron-right" />
  </div>
</template>

<style scoped>
.article-link {
  color: var(--font-500, #6D6D6D);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  /* 19.2px */
}

.dark-mode .article-link {
  color: #fff
}
</style>