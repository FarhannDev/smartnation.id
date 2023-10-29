<script lang="ts" setup>
import { PostsDataType } from '~/utils/data/getInitialPostsData';


defineProps({ categoryId: { type: Number, required: true } })

// const { data: albums } = await useAsyncData<PostsDataType>('albums', () => $fetch('/api/posts'))

const { data: albums } = await useFetch('/api/posts')

</script>

<template>
  <div class="album-cover-container row justify-content-start g-3 py-3">

    <div v-for="(album, index) in albums?.slice(0, 3)" :key="index" class="col-lg-4">
      <NuxtImg :src="album.featured_media" :alt="album.title.rendered" :class="'album-cover__images'" />

    </div>
  </div>
</template>

<style lang="css" scoped>
.album-cover-container {
  width: 100%;
  height: auto;
  overflow: auto;
  scroll-snap-type: x mandatory;
  /* Scroll horizontal */
}

.album-cover__images {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 250px;
  border-radius: 8px;
}
</style>