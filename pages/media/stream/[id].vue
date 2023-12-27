<script lang="ts" setup>
import { ColorModeInstance } from "@nuxtjs/color-mode/dist/runtime/types";
import { RouteLocationNormalizedLoaded } from "vue-router";


definePageMeta({ layout: 'content-layout' })

useSeoMeta({
  title: "Media Stream ",
  description: "Kumpulan Media Stream Smart Nation",
})

const route: RouteLocationNormalizedLoaded = useRoute()
const colorMode: ColorModeInstance = useColorMode()

</script>


<template>
  <div>
    <section id="media-stream-detail">
      <div class="container">

        <div class="row justify-content-start g-3 pt-5">
          <div class="col">

            <div class="row justify-content-arround g-5">
              <div class="col-xl-7 col-lg-6 col-md-auto col-sm-auto">
                <MediaStreamLiveVideoFeatured title="NASA Live: Official Stream of NASA TV"
                  description="Direct from America's space program to YouTube, watch NASA TV live streaming here to get the latest from our exploration of the universe and learn how we discover our home planet. Direct from America's space program to YouTube, watch NASA TV live streaming here to get the latest from our exploration of the universe and learn how we discover our home planet.Direct from America's space program to YouTube, watch NASA TV live streaming here to get the latest from our exploration of the universe and learn how we discover our home planet.  " />
              </div>
              <div class="col-xl-5 col-lg-5 col-md-auto col-sm-auto">
                <div class="d-flex flex-column">

                  <MediaStreamContentHeading title="Terpopuler" />

                  <MediaStreamRelatedVideo v-for="(video, idx) in 10" :key="idx"
                    :title="`Judul Vidio Terpopuler Ke-${video}`"
                    :description="`Berisi Deskripsi Judul Vidio Terpopuler Ke-${video}`"
                    :link="`/media/stream/media_stream_ke-${video}`" thumbnail="/images/social-media/follow-tt-3.jpeg" />

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-start g-2 pt-5">
          <div class="col">
            <MediaStreamContentHeading title="Terbaru" />

            <div class="row justify-content-start g-3">
              <div class="col">
                <Swiper class="py-5" :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :pagination="{
                  clickable: true,
                }" :navigation="{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}" :slidesPerView="1.5" :spaceBetween="10" :breakpoints="{
  '640': {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  '768': {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  '1024': {
    slidesPerView: 3.5,
    spaceBetween: 10,
  },
}" :grabCursor="true" :creative-effect="{
  prev: {
    shadow: false,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">

                  <SwiperSlide v-for="(loop, idx) in 12" :key="idx">
                    <MediaStreamBackgroundCardItem :title="`Judul Vidio  Terbaru Ke-${idx + 1}`"
                      :description="`Berisi Deskripsi Judul Vidio Terbaru Ke-${idx + 1}`"
                      thumbnail="/images/social-media/follow-tt-2.jpeg"
                      :link="`/media/stream/media_stream_ke-${idx + 1}`" />
                  </SwiperSlide>
                  <!-- Custom Navigation -->
                  <div class="custom-navigation">
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                  </div>

                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-start g-3 pt-4">
          <div class="col">

            <MediaStreamContentHeading title="Baru Diputar" />

            <div class="row justify-content-start g-3">
              <div class="col">
                <Swiper class="py-5" :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :pagination="{
                  clickable: true,
                }" :navigation="{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}" :slidesPerView="1.5" :spaceBetween="10" :breakpoints="{
  '640': {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  '768': {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  '1024': {
    slidesPerView: 3.5,
    spaceBetween: 10,
  },
}" :grabCursor="true" :creative-effect="{
  prev: {
    shadow: false,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
                  <SwiperSlide v-for="(loop, idx) in 12" :key="idx">
                    <MediaTiktokCardItem :title="`Judul Vidio Diputar Ke-${idx + 1}`" :date="new Date().toISOString()"
                      thumbnail="/images/social-media/follow-tt-2.jpeg" />
                  </SwiperSlide>

                  <!-- Custom Navigation -->
                  <div class="custom-navigation">
                    <!-- <div class="swiper-pagination"></div> -->
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                  </div>
                </Swiper>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
    <hr v-if="colorMode.preference === 'dark'" class="text-secondary" />
  </div>
</template>

<style scoped>
@import url("~/assets/css/custom-swiper-pagination.css");
@import url("~/assets/css/custom-swiper-navigation.css");

#media-stream-detail {
  width: 100%;
  height: auto;
  padding: 7em 0 7em 0;
  overflow: hidden;
}
</style>