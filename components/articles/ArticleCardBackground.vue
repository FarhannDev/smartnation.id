<script lang="ts" setup>
import { PropType } from "vue"
import { PostsDataType } from '~/utils/data/getInitialPostsData';

const props = defineProps({ posts: { type: Object as PropType<PostsDataType> } })


</script>


<template>
  <div v-for="post in posts" :key="post.id" class="d-grid gap-1 col-xxl-3 col-lg-6 col-md-6 col-xl-3 col-ms-12">
    <figure class="figure">
      <NuxtLink :to="`/events/${post.slug}`" aria-label="Baca Selengkapnya">
        <NuxtImg :class="'figure-img img-fluid rounded'" :src="post.featured_media" :alt="post.title.rendered"
          loading="lazy" format="webp" />
        <figcaption class="figure-caption">
          <h5 class="event-cover__title">{{ post.title.rendered.length >= 25
            ? `${post.title.rendered.substring(0, 25)}...`
            : post.title.rendered
          }}</h5>
          <p class="event-cover__desc">{{ post.excerpt.rendered.length >= 50
            ? `${post.excerpt.rendered.substring(0, 50)}...`
            : post.excerpt.rendered }} </p>
        </figcaption>
      </NuxtLink>
    </figure>
  </div>
</template>


<style scoped>
.figure {
  position: relative;
}

.figure .figure-img {
  width: 100%;
  min-height: 160px;
  border-radius: 8px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.65) 100%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(50%);
  overflow: hidden;
  transition: ease-in 500ms;
}

.figure .figure-img:hover {
  filter: brightness(75%);
  opacity: 1;
}

.figure .figure-caption {
  position: absolute;
  top: 50%;
  left: 15px;
  right: 15px;
  overflow: hidden;
  /* white-space: nowrap;
  text-overflow: ellipsis; */
}

.event-cover__title {
  margin-right: 3px;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.80);
  text-overflow: ellipsis;
  text-shadow: 2px 2px 8px #1c1616;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 21.328px */
  white-space: nowrap;
}

.event-cover__desc {
  overflow: hidden;
  color: rgba(255, 255, 255, 0.80);
  text-overflow: ellipsis;
  text-shadow: 2px 2px 8px #1c1616;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 14.218px */
}

@media (min-width: 768px) {
  .figure .figure-caption {
    top: 50% !important;
  }
}

@media (max-width: 768px) {
  .figure .figure-caption {
    top: 60%;
  }
}

@media (min-width: 960px) {
  .figure .figure-caption {
    top: 70% !important;
  }
}

/* @media (max-width: 960px) {
  .figure .figure-caption {
    top: 50% !important;
  }
} */

@media (min-width: 1200px) {
  .figure .figure-caption {
    top: 45% !important;
  }
}

/* @media (max-width: 1200px) {
  .figure .figure-caption {
    top: 50% !important;
  }
} */

@media (min-width: 1400px) {
  .figure .figure-caption {
    top: 50% !important;
  }
}

/* @media (max-width: 1400px) {
  .figure .figure-caption {
    top: 50% !important;
  }
} */
</style>