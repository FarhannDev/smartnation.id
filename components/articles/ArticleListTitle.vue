
<script lang="ts" setup>
import { PropType } from 'vue';

interface Posts {
  id: number | string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  categories: Array<number>;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
}

const props = defineProps({ posts: { type: Object as PropType<Posts[]> } })

</script>

<template>
  <div class="d-flex flex-column pt-4">
    <div class="vstack g-3">
      <div v-for="(post, index) in posts" :key="post.id">
        <div class="d-flex justify-content-arround mb-4 ">
          <span class="article-number me-3">{{ index + 1 }}</span>
          <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`"
            :class="'article-title text-start text-wrap fw-normal fs-6 lh-base link-offset-2 d-block link-underline-opacity-0 '">
            {{ post.title.length >= 80
              ? `${post.title.substring(0, 80)}...`
              : post.title
            }}
          </NuxtLink>
        </div>

      </div>
    </div>
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
  font-size: 14px !important;
  font-style: normal;
  font-weight: 500 !important;
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

