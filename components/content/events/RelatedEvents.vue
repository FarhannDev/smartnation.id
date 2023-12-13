<script lang="ts" setup>

import { Posts } from '~/utils/data/getInitialPostsData';


defineProps({ post: { type: Object as PropType<Posts> } })



</script>

<template>
  <div class="card post-card__item mb-3">
    <NuxtImg :src="post?.featured_media" class="card-img-top border-0" style="border-radius: 20px 20px 0 0;"
      :alt="'berita'" />
    <div class="card-body ">
      <div class="vstack gap-2">

        <span class="d-inline post-card__item__datetime">
          <BootstrapIcon name="clock" style="color: #888888;" />
          <span style="color: #888888;" class="ms-1">
            {{ useFormatter(post?.date_gmt, 'id-ID', 'long') }}
          </span>
        </span>


        <NuxtLink :to="`/events/${post?.slug}`"
          class="link-secondary link-offset-2 link-underline-0 link-underline-opacity-0 text-start fs-5 stretched-link post-card__item__link">
          <div v-if="post" v-html="post.title.rendered.length >= 60
            ? `${post?.title.rendered.substring(0, 60)}...`
            : post?.title.rendered" class="post-card__item__title"></div>
        </NuxtLink>
        <div class="hstack gap-2 mx-0 px-0">
          <LazyButtonArticleDetailCategory v-for="(cat, index) in post.categories.slice(0, 3)" :key="index"
            :category-id="cat" />

        </div>
      </div>
    </div>
  </div>
</template>



<style lang="css" scoped>
.post-card__item {
  position: relative;
  width: 100%;
  height: auto;
  border: 1px solid #E7E7E7;
  background-color: #fff;
  box-shadow: 0px 1.4846336841583252px 3.7115840911865234px 0px #676E7614;
  border-radius: 20px;
  /* overflow: hidden; */
}

.post-card__item__title {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #5D5D5D;
  margin-bottom: 8px;
  margin-top: 8px;
  transition: ease-in 300ms;
}


.post-card__item__title:hover {
  color: #D71149;
}


.post-card__item__datetime {
  font-family: Poppins;
  font-size: 13px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  color: #888888;

}

.post-item__btn {
  background-color: #E7E7E7;
  color: #6D6D6D;
  border: none;
  border-radius: 8px;
  padding: 4px 10px;
  font-size: 14px;
  cursor: pointer;
  /* margin: 5px; */
  transition: background-color 03s;
  font-family: poppins;

}

.gray-button {
  background-color: #E7E7E7;
  color: #6D6D6D;
  border: none;
  border-radius: 8px;
  padding: 4px 10px;
  font-size: 14px;
  cursor: pointer;
  margin: 3px;
  transition: background-color 03s;
  font-family: poppins;
}

.dark-mode .post-card__item {
  background-color: #262626;
  border: 0;
}

.dark-mode .post-card__item__title {
  color: #fafafa;
}

.dark-mode .post-card__item__datetime {

  color: rgba(255, 255, 255, 0.90);
}
</style>