<template>
  <div class="d-flex justify-content-arround mb-4 ">
    <span class="article-number me-3">{{ number + 1 }}</span>
    <NuxtLink :to="`/${postId}`" :aria-label="`Baca Selengkapnya ${title}`"
      :class="'article-title text-start text-wrap fw-normal fs-6 lh-base link-offset-2 d-block link-underline-opacity-0 '">
      {{ title.length >= 80
        ? `${title.substring(0, 80)}...`
        : title
      }}
    </NuxtLink>
  </div>
</template>


<style scoped>
.article-number {
  color: #D71149;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
}

.article-title {
  overflow: hidden;
  color: #5D5D5D;
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-decoration: none;
  text-align: start;
  transition: ease-in 300ms;
  /* 18px */
}

.article-title:hover {
  color: #D71149 !important;
}

/* 
  color mode:dark-mode 
*/
.dark-mode .list-group-item {
  background-color: #262626;
  border-bottom: #5D5D5D;
}

.dark-mode .article-title {
  color: #fafafa;
}
</style>

<script lang="ts" setup>
const props = defineProps({
  number: { type: Number },
  postId: { type: String },
  title: { type: String }
})

</script>