<script lang="ts" setup>


const props = defineProps({
  link: { type: String, required: true },
  title: { type: String, required: true, default: 'Share Konten' },
  icon: { type: String, required: true, },
})
</script>


<template>
  <div>
    <NuxtLink :to="link" target="_blank" rel="noopener" :title="`Bagikan melalui ${title}`"
      :aria-label="`Bagikan melalui ${title}`" class="link-offset-2 link-underline link-underline-opacity-0 mx-2">
      <BootstrapIcon :name="icon" class="article-details__content__share__medsos" />
    </NuxtLink>

  </div>
</template>

<style scoped>
.article-details__content__share__medsos {
  font-size: 22px;
  color: #d1d1d1;
}
</style>