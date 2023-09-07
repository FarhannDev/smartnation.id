<template>
  <section class="articles-section position-relative pt-5 mt-5">
    <div class="container">
      <!-- Section Posts Featured -->
      <article class="row justify-content-start g-2  py-3">
        <div class="col">
          <PostsPostHeadingTitle title="Postingan Terpopuler" />
          <div class="row justify-content-between g-3 py-3">
            <div class="col-lg-8 col-md-6 col-sm-12">
              <PostsPostFeaturedItem v-for="post in posts.slice(0, 1)" :key="post.id" :title="post.title.rendered"
                :dateTime="post.date.toString()"
                :sourceMedia="'https://smartnation.id/wp-content/uploads/2022/12/Artikel13.jpg'" />

            </div>
            <div class="col-lg-4 col-md-6 col-sm-12">
              <div class="vstack gap-2 px-2 post-featured-card">
                <PostsPostItem v-for="post in posts.slice(0, 5)" :key="post.id" :title="post.title.rendered"
                  :dateTime="post.date.toString()"
                  :sourceMedia="'https://smartnation.id/wp-content/uploads/2022/12/Artikel13.jpg'" />
              </div>
            </div>
          </div>
        </div>
      </article>
      <article class="row justify-content-start g-2 py-3">
        <div class="col">
          <div class="d-flex justify-content-between g-2">
            <PostsPostHeadingTitle :title="'Postingan Terbaru'" />
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
              <SwiperSlide class="mb-5" v-for="post in posts.slice(0, 8)" :key="post.id">
                <PostsPostItem v-show="post.status === 'publish'" :title="post.title.rendered"
                  :dateTime="post.date.toString()"
                  :sourceMedia="'https://smartnation.id/wp-content/uploads/2022/12/Artikel13.jpg'" />
              </SwiperSlide>

            </Swiper>

          </div>
        </div>
      </article>
      <article class="row justify-content-start g-2 py-3">
        <div class="col">
          <div class="d-flex justify-content-between g-2">
            <PostsPostHeadingTitle :title="'Artikel'" />
            <PostsPostLink title="Lihat Selengkapnya" links="/">
              <BootstrapIcon name="chevron-right" />
            </PostsPostLink>
          </div>
          <div class="row justify-content-start g-3 pt-3">
            <Swiper :modules="[SwiperAutoplay, SwiperScrollbar, SwiperPagination, SwiperNavigation]" :slides-per-view="1"
              :space-between="10" :navigation="true" :pagination="{
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
                <PostsPostItem :title="post.title.rendered" :dateTime="post.date.toString()"
                  :sourceMedia="'https://smartnation.id/wp-content/uploads/2022/12/Artikel13.jpg'" />
              </SwiperSlide>

            </Swiper>

          </div>
        </div>
      </article>

      <article class="row justify-content-start g-2 py-3">
        <div class="col">
          <div class="d-flex justify-content-between g-2">
            <PostsPostHeadingTitle :title="'Smart City'" />
            <PostsPostLink title="Lihat Selengkapnya" links="/">
              <BootstrapIcon name="chevron-right" />
            </PostsPostLink>
          </div>
          <div class="row justify-content-start g-3 pt-3">
            <Swiper :modules="[SwiperAutoplay, SwiperScrollbar, SwiperPagination, SwiperNavigation]" :slides-per-view="1"
              :space-between="10" :navigation="true" :pagination="{
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
                <PostsPostItem :title="post.title.rendered" :dateTime="post.date.toString()"
                  :sourceMedia="'https://smartnation.id/wp-content/uploads/2022/12/Artikel13.jpg'" />
              </SwiperSlide>

            </Swiper>

          </div>
        </div>
      </article>

      <article class="row justify-content-start g-2 py-3">
        <div class="col">
          <div class="d-flex justify-content-between g-2">
            <PostsPostHeadingTitle :title="'Internasional'" />
            <PostsPostLink title="Lihat Selengkapnya" links="/">
              <BootstrapIcon name="chevron-right" />
            </PostsPostLink>
          </div>
          <div class="row justify-content-start g-3 pt-3">
            <Swiper :modules="[SwiperAutoplay, SwiperScrollbar, SwiperPagination, SwiperNavigation]" :slides-per-view="1"
              :space-between="10" :navigation="true" :pagination="{
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
                <PostsPostItem :title="post.title.rendered" :dateTime="post.date.toString()"
                  :sourceMedia="'https://smartnation.id/wp-content/uploads/2022/12/Artikel13.jpg'" />
              </SwiperSlide>

            </Swiper>

          </div>
        </div>
      </article>

      <article class="row justify-content-start g-2 py-3">
        <div class="col">
          <div class="d-flex justify-content-between g-2">
            <PostsPostHeadingTitle :title="'Nasional'" />
            <PostsPostLink title="Lihat Selengkapnya" links="/">
              <BootstrapIcon name="chevron-right" />
            </PostsPostLink>
          </div>
          <div class="row justify-content-start g-3 pt-3">
            <Swiper :modules="[SwiperAutoplay, SwiperScrollbar, SwiperPagination, SwiperNavigation]" :slides-per-view="1"
              :space-between="10" :navigation="true" :pagination="{
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
                <PostsPostItem :title="post.title.rendered" :dateTime="post.date.toString()"
                  :sourceMedia="'https://smartnation.id/wp-content/uploads/2022/12/Artikel13.jpg'" />
              </SwiperSlide>

            </Swiper>

          </div>
        </div>
      </article>

      <article class="row justify-content-start g-2 py-3">
        <div class="col">
          <div class="d-flex justify-content-between g-2">
            <PostsPostHeadingTitle :title="'Daerah'" />
            <PostsPostLink title="Lihat Selengkapnya" links="/">
              <BootstrapIcon name="chevron-right" />
            </PostsPostLink>
          </div>
          <div class="row justify-content-start g-3 pt-3">
            <Swiper :modules="[SwiperAutoplay, SwiperScrollbar, SwiperPagination, SwiperNavigation]" :slides-per-view="1"
              :space-between="10" :navigation="true" :pagination="{
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
                <PostsPostItem :title="post.title.rendered" :dateTime="post.date.toString()"
                  :sourceMedia="'https://smartnation.id/wp-content/uploads/2022/12/Artikel13.jpg'" />
              </SwiperSlide>

            </Swiper>

          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts" setup>
// Set Meta SEO
useSeoMeta({
  title: "Beranda",
  ogTitle: 'Beranda',
  description: 'Selamat datang di smartnation.id',
})

const apiBaseUrl: string = 'https://smartnation.id/wp-json/wp/v2';

const { data: posts, pending, error } = await useFetch<Posts[]>('/posts', {
  baseURL: apiBaseUrl,
  lazy: true
})

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