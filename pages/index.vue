<template>
  <section class="articles-section position-relative pt-5 mt-5">
    <div class="container">
      <!-- Section Posts Featured -->
      <article class="row justify-content-start g-2  py-3">
        <div class="col">
          <PostsPostHeadingTitle title="Postingan Terpopuler" />
          <div class="row justify-content-between g-3 py-3">
            <div class="col-lg-8">
              <PostsPostFeaturedItem v-for="post in posts.slice(0, 1)" :key="post.id" :title="post.title.rendered"
                :dateTime="post.date.toString()"
                :sourceMedia="'https://smartnation.id/wp-content/uploads/2022/12/Artikel13.jpg'" />

            </div>
            <div class="col-lg-4">
              <div class="vstack gap-2 px-2" style="height: 578px; overflow: auto; ">
                <PostsPostItem v-for="post in posts.slice(0, 5)" :key="post.id" :title="post.title.rendered"
                  :dateTime="post.date.toString()"
                  :sourceMedia="'https://smartnation.id/wp-content/uploads/2022/12/Artikel13.jpg'" />
              </div>
            </div>
          </div>
        </div>
      </article>
      <article class="row justify-content-start g-2 py-5">
        <div class="col">
          <div class="d-flex justify-content-between g-2">
            <PostsPostHeadingTitle :title="'Postingan Terbaru'" />
            <PostsPostLink title="Lihat Selengkapnya" links="/">
              <BootstrapIcon name="chevron-right" />
            </PostsPostLink>
          </div>
          <div class="row justify-content-start g-3 pt-3">
            <Swiper :modules="[SwiperAutoplay, SwiperScrollbar, SwiperPagination, SwiperNavigation]" :slides-per-view="1"
              :space-between="10" :navigation="true" :pagination="{
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
              <SwiperSlide v-for="post in posts.slice(0, 12)" :key="post.id">
                <PostsPostItem :title="post.title.rendered" :dateTime="post.date.toString()"
                  :sourceMedia="'https://smartnation.id/wp-content/uploads/2022/12/Artikel13.jpg'" />
              </SwiperSlide>

            </Swiper>

          </div>
        </div>
      </article>
      <article class="row justify-content-start g-2 py-5">
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
              <SwiperSlide v-for="post in posts.slice(0, 12)" :key="post.id">
                <PostsPostItem :title="post.title.rendered" :dateTime="post.date.toString()"
                  :sourceMedia="'https://smartnation.id/wp-content/uploads/2022/12/Artikel13.jpg'" />
              </SwiperSlide>

            </Swiper>

          </div>
        </div>
      </article>

      <article class="row justify-content-start g-2 py-5">
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
              <SwiperSlide v-for="post in posts.slice(0, 12)" :key="post.id">
                <PostsPostItem :title="post.title.rendered" :dateTime="post.date.toString()"
                  :sourceMedia="'https://smartnation.id/wp-content/uploads/2022/12/Artikel13.jpg'" />
              </SwiperSlide>

            </Swiper>

          </div>
        </div>
      </article>

      <article class="row justify-content-start g-2 py-5">
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
              <SwiperSlide v-for="post in posts.slice(0, 12)" :key="post.id">
                <PostsPostItem :title="post.title.rendered" :dateTime="post.date.toString()"
                  :sourceMedia="'https://smartnation.id/wp-content/uploads/2022/12/Artikel13.jpg'" />
              </SwiperSlide>

            </Swiper>

          </div>
        </div>
      </article>

      <article class="row justify-content-start g-2 py-5">
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
              <SwiperSlide v-for="post in posts.slice(0, 12)" :key="post.id">
                <PostsPostItem :title="post.title.rendered" :dateTime="post.date.toString()"
                  :sourceMedia="'https://smartnation.id/wp-content/uploads/2022/12/Artikel13.jpg'" />
              </SwiperSlide>

            </Swiper>

          </div>
        </div>
      </article>

      <article class="row justify-content-start g-2 py-5">
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
              <SwiperSlide v-for="post in posts.slice(0, 12)" :key="post.id">
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

const { data: posts, pending, error } = await useFetch<GetPosts[]>('/posts', {
  baseURL: apiBaseUrl,
  lazy: true
})

</script>

