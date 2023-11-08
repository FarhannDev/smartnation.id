
<script lang="ts" setup>
import { PropType } from "vue"
import { PostsDataType } from "~/utils/data/getInitialPostsData";


const props = defineProps({
  posts: { type: Object as PropType<PostsDataType> },
  isBackground: { type: Boolean },
  isDescription: { type: Boolean, default: true }
})


</script>

<template>
  <article class="d-grid gap-2  article-list-item">
    <div v-for="post in posts" :key="post.id" class="card border-0 rounded-0 mb-3">

      <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`">
        <NuxtImg :class="'card-img-top img-fluid article-thumbnail'" :src="post.featured_media" :height="253"
          loading="lazy" :alt="post.title.rendered" format="webp" :quality="50" />
      </NuxtLink>
      <div class="card-body px-0 mx-0">

        <div class="d-flex flex-wrap mb-2">
          <span :class="`${isBackground ? 'article-timestamp__background' : 'article-timestamp '}`">
            <BootstrapIcon name="clock" class=" article-timestamp-icon" /> {{
              useTimestamps(post.date_gmt) }}
          </span>
        </div>
        <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`"
          :class="`card-title text-start  text-wrap lh-base link-offset-2 link-underline link-underline-opacity-0 ${isBackground ? 'article-title__background' : 'article-title'} `">
          {{ post.title.rendered.length >= 80
            ? `${post.title.rendered.substring(0, 80)}...`
            : post.title.rendered
          }}
        </NuxtLink>

        <div v-show="isDescription"
          :class="`card-text text-start lh-base ${isBackground ? 'article-desc__background' : 'article-desc'}   py-3`"
          v-html="post.excerpt.rendered.length >= 250
            ? `${post.excerpt.rendered.substring(0, 250)}...`
            : post.excerpt.rendered
            "> </div>

        <ArticlesArticleCategories v-for="(category, index) in post.categories.slice(0, 3)" :key="index"
          :categoryId="category" />

      </div>
    </div>
  </article>
</template>


<style scoped>
.card {
  background-color: transparent;
}

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
  color: #D71149 !important;
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

.article-title__background {
  color: #fff;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  transition: ease-in 300ms;
}

.article-title__background:hover {
  color: #D1D1D1;
}

.article-desc__background {
  overflow: hidden;
  color: #fff;
  text-align: start;
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
}


.article-timestamp__background {
  color: #D1D1D1;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
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

.dark-mode .article-title {
  color: #fafafa;
}

.dark-mode .article-timestamp {
  color: #fafafa;
}

.dark-mode .article-desc {
  color: rgba(255, 255, 255, 0.90);
}

/* / Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {}

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {}

/* // Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .card .article-thumbnail {
    min-height: 253px;
    width: 100%;
    max-width: 1000px !important;
    object-position: center;
  }

  /* .article-thumbnail {
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  min-height: 253px;
  border-radius: 8px;
  /* margin-left: 30px; */
  /* animation: animate__zoomIn; */
  /* animation-duration: 1ms; */

  /* } */
}

/* // X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .card .article-thumbnail {
    min-height: 253px;
    width: 100%;
    max-width: 1000px !important;
    object-position: center;
  }
}

/* // XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {
  .card .article-thumbnail {
    min-height: 253px;
    width: 100%;
    max-width: 1000px !important;
    object-position: center;
  }

}

/* // `sm` applies to x-small devices (portrait phones, less than 576px) */
@media (max-width: 575.98px) {
  .card .article-thumbnail {
    max-height: 100%;
    width: 100%;
    max-width: 1000px !important;
    position: relative !important;
    justify-content: center !important;
    align-items: center;
  }
}

/* // `md` applies to small devices (landscape phones, less than 768px) */
@media (max-width: 767.98px) {
  .card .article-thumbnail {
    max-height: 100%;
    width: 100%;
    max-width: 1000px !important;
    position: relative !important;
    justify-content: center !important;
    align-items: center;
  }
}

/* // `lg` applies to medium devices (tablets, less than 992px) */
@media (max-width: 991.98px) {
  .card .article-thumbnail {
    max-height: 100%;
    width: 100%;
    max-width: 1000px !important;
    position: relative !important;
    justify-content: center !important;
    align-items: center;
  }
}

/* // `xl` applies to large devices (desktops, less than 1200px) */
@media (max-width: 1199.98px) {
  .card .article-thumbnail {
    max-height: 100%;
    width: 100%;
    max-width: 1000px !important;
    position: relative !important;
    justify-content: center !important;
    align-items: center;
  }
}

/* // `xxl` applies to x-large devices (large desktops, less than 1400px) */
@media (max-width: 1399.98px) {
  .card .article-thumbnail {
    max-height: 100%;
    display: flex;
    text-align: center;
    max-width: 1000px !important;
  }
}
</style>

