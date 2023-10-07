
<script lang="ts" setup>
import { PropType } from "vue"
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
  <ul class="list-group list-group-flush">

    <li v-for="post in posts" :key="post.id" class="list-group-item mx-md-0 px-md-0 mx-xl-2 px-xl-1 mx-0 px-0 ">
      <div class="vstack g-2">
        <div class="d-flex justify-content-between">
          <div>
            <span class="article-info-timestamps ">
              <BootstrapIcon name="clock" /> {{ useTimestamps(post.createdAt) }}
            </span>
            <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`"
              :class="'article-title link-offset-2   text-wrap d-block link-underline-opacity-0 '">
              {{ post.title?.length > 50 ? `${post.title.substring(0, 80)}...`
                : post.title
              }}

            </NuxtLink>
            <ArticlesArticleCategories v-for="(category, index) in post.categories.slice(0, 3)" :key="index"
              :categoryId="category" />
          </div>

          <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title}`">
            <NuxtImg class="article-thumbnail" :src="post.thumbnail" :width="86" :height="86" loading="lazy"
              :alt="post.title" />
          </NuxtLink>
        </div>
      </div>
    </li>

  </ul>
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
  color: #D71149 !important;
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
  width: 86px;
  height: 86px;
  opacity: 1;
  border-radius: 4px;
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

