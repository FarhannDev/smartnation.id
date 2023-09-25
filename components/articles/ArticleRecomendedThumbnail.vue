<template>
  <li class="list-group-item mx-md-2 px-md-2 mx-0 px-0 ">
    <div class="vstack g-2">
      <div class="d-flex justify-content-between">

        <div class="d-flex justify-content-arround ">
          <span class="article-number me-3 align-middle">{{ number + 1 }}</span>
          <NuxtLink :to="`/${postId}`" :aria-label="`Baca Selengkapnya ${title}`"
            :class="'article-title link-offset-2   d-block link-underline-opacity-0 '">
            {{ title.length >= 60
              ? `${title.substring(0, 60)}...`
              : title
            }}
          </NuxtLink>
        </div>

        <NuxtLink :to="`/${postId}`" :aria-label="`Baca Selengkapnya ${title}`">
          <NuxtImg class="article-thumbnail" :src="featuredImage" :width="86" :height="86" loading="lazy" :alt="title" />
        </NuxtLink>
      </div>
    </div>
  </li>
</template>


<style scoped>
.article-title {
  overflow: hidden;
  color: #5D5D5D;
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-decoration: none;
  transition: ease-in 300ms;
  /* 18px */
}


.article-title:hover {
  color: #D71149;
}



.article-info-timestamps {
  color: #888;
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 12px */
}

.article-thumbnail {
  background-size: cover;
  background-repeat: no-repeat;
  width: 81px;
  height: 54px;
  opacity: 1;
  border-radius: 4px;
}

.article-number {
  color: #D71149;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
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


import { PropType } from "vue"

const props = defineProps({
  postId: { type: String },
  number: { type: Number },
  title: { type: String },
  featuredImage: { type: String },
  categories: { type: Object as PropType<Posts[]> },
  timestamp: { type: String }
})

</script>