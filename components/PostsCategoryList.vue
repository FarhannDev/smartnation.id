<script lang="ts" setup>
import axios from "axios";


const props = defineProps({ categoryId: Number })

const imageSourceUrl = ref()

const apiBaseUrl: string = 'https://smartnation.id/wp-json/wp/v2';

const { data: posts, pending, error } = await useFetch(`/posts?categories=${props.categoryId}`, {
  baseURL: apiBaseUrl,
  transform: (posts: Posts[]) => {
    return Array.from(new Map(posts.map(post => [post.title.rendered, post])).values())
  }
})


const mediaPost = posts.value?.map(post => {
  const sourceId = post.featured_media
  if (sourceId) {
    const mediaResource = axios.get(`https://smartnation.id/wp-json/wp/v2/media/${sourceId}`)
      .then(response => imageSourceUrl.value = response.data)
      .catch(err => console.log(err.message))

    return mediaResource
  }
})



</script>


<template>
  <ul>
    <li v-for="media in imageSourceUrl" :key="media.id">
      {{ media }}
    </li>
  </ul>

  <li v-for="post in posts?.sort().slice(0, 5)" :key="post.id" class="list-group-item mx-md-2 px-md-2 mx-0 px-0 ">
    <div class="vstack g-2">
      <div class="d-flex justify-content-between">
        <div>
          <span class="article-info-timestamps ">
            <BootstrapIcon name="clock" /> {{ useTimestamps(post.date) }}
          </span>
          <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`"
            :class="'article-title link-offset-2   text-wrap d-block link-underline-opacity-0 '">
            {{ post.title.rendered.length >= 80
              ? `${post.title.rendered.substring(0, 80)}...`
              : post.title.rendered
            }}
          </NuxtLink>
          <!-- <ArticlesArticleButton :categories="post.categories" /> -->
        </div>

        <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`">
          <NuxtImg class="article-thumbnail" :src="'/images/artikel/uang-digital-ri-akan-rilis-tahun-depan-86x86.png'"
            :width="86" :height="86" loading="lazy" :alt="post.title.rendered" />
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

.dark-mode,
.article-title,
.article-info-timestamps {
  color: #fafafa;
}
</style>