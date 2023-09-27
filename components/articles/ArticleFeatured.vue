
<script lang="ts" setup>
const props = defineProps({
  postId: { type: String, required: true },
  title: { type: String, required: true },
  excerpt: { type: String, required: true },
  featuredImage: { type: String, required: true },
  categories: { type: Array<String | Number>, required: true },
  timestamp: { type: String, required: true }
})

</script>

<template>
  <div class="card border-0 rounded-0 mb-3">

    <NuxtLink :to="`/${postId}`" :aria-label="`Baca Selengkapnya ${title}`">
      <NuxtImg :class="'card-img-top img-fluid article-thumbnail animate__animated animate__jello'" :src="featuredImage"
        :height="253" loading="lazy" :alt="title" format="webp" />
    </NuxtLink>
    <div class="card-body px-0 mx-0">

      <div class="d-flex flex-wrap mb-2">
        <span class="article-timestamp">
          <BootstrapIcon name="clock" class="article-timestamp-icon " /> {{ useTimestamps(timestamp) }}
        </span>
      </div>
      <NuxtLink :to="`/${postId}`" :aria-label="`Baca Selengkapnya ${title}`"
        :class="'card-title text-start  text-wrap lh-base link-offset-2 link-underline link-underline-opacity-0 article-title'">
        {{ title.length >= 80
          ? `${title.substring(0, 80)}...`
          : title
        }}
      </NuxtLink>

      <div class="card-text text-start lh-base article-desc pt-2" v-html="excerpt.length >= 250
            ? `${excerpt.substring(0, 250)}...`
            : excerpt
          "> </div>

      <ArticlesArticleButton :categories="categories" />
    </div>
  </div>
</template>


<style scoped>
.article-title {
  color: #5D5D5D;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  transition: ease-in 300ms;
}

.article-title:hover {
  color: #D71149;
}

.article-desc {
  overflow: hidden;
  color: #888;
  text-align: justify;
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 18px */
}

.article-timestamp-icon {
  font-size: 12px;
}

.article-timestamp {
  color: var(--font-400, #888);

  /* Font/Caption Reguler */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 12px */
}

.article-thumbnail {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  min-height: 253px;
  border-radius: 8px;
  /* margin-left: 30px; */
  animation: animate__zoomIn;
  animation-duration: 1ms;

}

/* 
  color mode:dark-mode 
*/

.dark-mode .card {
  background-color: #262626;
}

.dark-mode,
.article-title,
.article-timestamp {
  color: #fafafa;
}

.dark-mode .article-desc {
  color: rgba(255, 255, 255, 0.90);
}
</style>

