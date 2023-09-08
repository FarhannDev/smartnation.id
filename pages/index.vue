<template>
  <section class="articles-section position-relative pt-5 mt-5">
    <div class="container">
      <!-- Section Posts Featured -->
      <article class="row justify-content-start g-2  py-3">
        <div class="col">
          <PostsPostHeadingTitle title="Postingan Terpopuler" />
          <div class="row justify-content-between g-3 py-3">
            <div class="col-lg-8 col-md-6 col-sm-12">
              <PostsPostFeaturedItem v-for="popular in posts.slice(0, 1)" :key="popular.id"
                :title="popular.title.rendered" :dateTime="popular.date.toString()"
                :featuredMedia="'https://smartnation.id/wp-content/uploads/2022/12/Artikel13.jpg'"
                :categories="popular.categories" :postId="popular.id" />

            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="vstack gap-2 px-2 post-featured-card">
                <PostsPostItem v-for="post in posts.slice(0, 5).filter((obj, index, self) => {
                  return index === self.findIndex((o) => o.title.rendered === obj.title.rendered)
                })" :key="post.id" :title="post.title.rendered" :dateTime="post.date.toString()"
                  :featuredMedia="'https://smartnation.id/wp-content/uploads/2022/12/Artikel13.jpg'"
                  :categories="post.categories" :postId="post.id" />
              </div>
            </div>
          </div>
        </div>
      </article>

      <article v-for="category in categories" :key="category.id" class="row justify-content-start g-2 py-3">
        <div class="col">
          <div class="d-flex justify-content-between g-2">
            <PostsPostHeadingTitle :title="category.name" />
            <PostsPostLink title="Lihat Selengkapnya" links="/">
              <BootstrapIcon name="chevron-right" />
            </PostsPostLink>
          </div>
          <div class="row justify-content-start g-3 pt-3">
            <Swiper :modules="[SwiperAutoplay, SwiperScrollbar, SwiperPagination, SwiperNavigation]" :grabCursor="true"
              :slides-per-view="1" :space-between="10" :navigation="true" :pagination="{
                clickable: true,
                dynamicBullets: true,
              }" :breakpoints="{
  '640': {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  '768': {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  '1024': {
    slidesPerView: 3,
    spaceBetween: 20,
  },
}" :effect="'creative'" :creative-effect="{

  prev: {
    shadow: false,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
              <SwiperSlide class="mb-5" v-for="post in posts.slice(0, 12)" :key="post.id">
                <PostsPostItem v-show="post.status === 'publish'" :title="post.title.rendered"
                  :dateTime="post.date.toString()"
                  :featuredMedia="'https://smartnation.id/wp-content/uploads/2022/12/Artikel13.jpg'"
                  :categories="post.categories" :postId="post.id" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
import axios from "axios"
import { API_BASE_URL } from "../utils/config/api"

// Set Meta SEO
useSeoMeta({
  title: "Beranda",
  ogTitle: 'Beranda',
  description: 'Selamat datang di smartnation.id',
})

const category = ref<number>(82)

const { data: posts } = await useAsyncData<Posts[]>(`/posts?categories=${category.value}`, () => $fetch(`${API_BASE_URL}/posts?categories=${category.value}`))
const { data: categories } = await useAsyncData<Category[]>(`/categories`, () => $fetch(`${API_BASE_URL}/categories`))

</script>


<style>
.post-featured-card {
  width: 100%;
  height: 578px;
  overflow: auto;

}

.post-featured-card::-webkit-scrollbar {
  width: 10px;
  background-color: #F5F5F5;
  scroll-behavior: smooth;
}

.post-featured-card::-webkit-scrollbar-thumb {
  background-color: #D1D1D1;
  /* border: 2px solid #555555; */
  border-radius: 10px;
}

.post-featured-card::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #F5F5F5;
  border-radius: 10px;
}
</style>