<script lang="ts" setup>

import { ColorModeInstance } from '@nuxtjs/color-mode/dist/runtime/types';

// Set Meta SEO
useSeoMeta({
  title: "Media Smart Nation",
  description: "Kumpulan semua media smart nation",
  ogTitle: "Media Smart Nation",
  ogDescription: "Kumpulan semua media smart nation",
});

const colorMode: ColorModeInstance = useColorMode();
</script>

<template>
  <div>
    <LazyHeroParallaxBackground text="Media Smart Nation" desc="Kumpulan semua media smart nation"
      background="/images/background/bg-contact-me.png" />

    <section id="media-streams-section">
      <div class="container">
        <ul class="nav nav-pills d-flex justify-content-lg-center justify-content-start g-3 mb-3" id="pills-tab"
          role="tablist">
          <li class="nav-item mx-2" role="presentation">
            <button class="btn btn-sm btn-outline-danger custom-button__streams active" id="pills-home-tab"
              data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
              aria-selected="true">Semua</button>
          </li>
          <li class="nav-item mx-2" role="presentation">
            <button type="button" class="btn btn-sm btn-outline-danger custom-button__streams" id="home-tab"
              data-bs-toggle="tab" data-bs-target="#pills-media-live" role="tab" aria-controls="pills-media-live"
              aria-selected="false">Live</button>
          </li>
          <li class="nav-item mx-2" role="presentation">
            <button type="button" class="btn btn-sm btn-outline-danger custom-button__streams" id="home-tab"
              data-bs-toggle="tab" data-bs-target="#pills-media-podcast" role="tab" aria-controls="pills-media-podcast"
              aria-selected="false">Podcast</button>
          </li>
          <li class="nav-item mx-2" role="presentation">
            <button type="button" class="btn btn-sm btn-outline-danger custom-button__streams" id="home-tab"
              data-bs-toggle="tab" data-bs-target="#pills-media-tiktok" role="tab" aria-controls="pills-media-tiktok"
              aria-selected="false">Tik-Tok</button>
          </li>
          <li class="nav-item mx-2" role="presentation">
            <button type="button" class="btn btn-sm btn-outline-danger custom-button__streams" id="home-tab"
              data-bs-toggle="tab" data-bs-target="#pills-media-instagram" role="tab"
              aria-controls="pills-media-instagram" aria-selected="false">Instagram</button>
          </li>
        </ul>

        <div class="tab-content py-5" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"
            tabindex="0">

            <div class="row justify-content-start g-2 pt-4">
              <div class="col">

                <MediaStreamContentHeading title="Sedang Tayang" />
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
                        <MediaStreamBackgroundCardItem :title="`Judul Live Streaming Ke-${idx + 1}`"
                          :description="`Deskripsi Live Streaming Ke-${idx + 1}`"
                          thumbnail="/images/social-media/follow-tt-2.jpeg" />
                      </SwiperSlide>
                      <!-- Custom Navigation -->
                      <div class="custom-navigation">
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                      </div>

                    </Swiper>
                  </div>

                </div>
                <hr class="text-secondary" />
              </div>
            </div>


            <div class="row justify-content-start g-2 pt-4">
              <div class="col">
                <MediaStreamContentHeading title="Podcast" />
                <div class="row justify-content-start g-4 px-0 mx-0 mt-3">
                  <MediaPodcastThumbnailCardItem v-for="(loop, idx) in 6" :key="idx"
                    class="col-lg-6 col-xl-4 col-md-12 col-sm-12" :title="`Judul Podcast Ke-${idx + 1}`"
                    :date="new Date().toISOString()" thumbnail="/images/social-media/follow-tt-1.jpeg"
                    :link="`podcast-${idx + 1}`" />
                </div>
                <hr class="text-secondary" />
              </div>
            </div>

            <div class="row justify-content-start g-2 pt-4">
              <div class="col">
                <MediaStreamContentHeading title="Tik-Tok" />

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
                        <MediaTiktokCardItem :title="`Judul Tiktok Ke-${idx + 1}`" :date="new Date().toISOString()" />
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
                <hr class="text-secondary" />
              </div>
            </div>

            <div class="row justify-content-start g-2 pt-4">
              <div class="col">
                <MediaStreamContentHeading title="Instagram" />

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
                        <MediaTiktokCardItem :title="`Judul Instagram Ke-${idx + 1}`" :date="new Date().toISOString()" />
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
          <div class="tab-pane fade" id="pills-media-live" role="tabpanel" aria-labelledby="pills-profile-tab"
            tabindex="0">

            <div class="row justify-content-start g-3 pt-4">
              <div class="col">

                <div class="row justify-content-arround g-5">
                  <div class="col-xl-7 col-lg-6 col-md-auto col-sm-auto">
                    <MediaStreamLiveVideoFeatured title="NASA Live: Official Stream of NASA TV"
                      description="Direct from America's space program to YouTube, watch NASA TV live streaming here to get the latest from our exploration of the universe and learn how we discover our home planet. " />
                  </div>
                  <div class="col-xl-5 col-lg-5 col-md-auto col-sm-auto">
                    <div class="d-flex flex-column">

                      <MediaStreamContentHeading title="Terpopuler" />

                      <MediaStreamRelatedVideo v-for="(video, idx) in 6" :key="idx"
                        title="NASA Live: Official Stream of NASA TV"
                        description="Direct from America's space program to YouTube, watch NASA TV live streaming here to get the latest from our exploration of the universe and learn how we discover our home planet."
                        link="https://www.youtube.com/@NASA"
                        thumbnail="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/scientists-working-in-nasa-programing-design-template-1a970e6dc72557b73e3a246a0b4a5f74_screen.jpg?ts=1638090744" />

                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row justify-content-start g-2 pt-4">
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
                        <MediaStreamBackgroundCardItem :title="`Judul Live Streaming Ke-${idx + 1}`"
                          :description="`Deskripsi Live Streaming Ke-${idx + 1}`"
                          thumbnail="/images/social-media/follow-tt-2.jpeg" />
                      </SwiperSlide>
                      <!-- Custom Navigation -->
                      <div class="custom-navigation">
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                      </div>

                    </Swiper>
                  </div>

                </div>
                <hr class="text-secondary" />
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
                        <MediaTiktokCardItem :title="`Baru Diputar Ke-${idx + 1}`" :date="new Date().toISOString()" />
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
          <div class="tab-pane fade" id="pills-media-podcast" role="tabpanel" aria-labelledby="pills-contact-tab"
            tabindex="0">

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
                        <MediaStreamBackgroundCardItem :key="idx" :title="`Judul Podcast Terbaru ${idx + 1}`"
                          :description="`Deskripsi Podcast Ke-${idx + 1}`"
                          thumbnail="/images/social-media/follow-tt-3.jpeg" />
                      </SwiperSlide>
                      <!-- Custom Navigation -->
                      <div class="custom-navigation">
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                      </div>

                    </Swiper>
                  </div>

                </div>
                <hr class="text-secondary" />
              </div>
            </div>

            <div class="row justify-content-start g-2 pt-5">
              <div class="col">

                <MediaStreamContentHeading title="Semua" />
                <div class="row justify-content-arround g-3 px-0 mx-0 mt-3">
                  <MediaPodcastThumbnailCardItem v-for="(loop, idx) in 100" :key="idx"
                    class="col-lg-6 col-xl-6 col-md-12 col-sm-12" :title="`Judul Podcast Ke-${idx + 1}`"
                    :date="new Date().toISOString()" thumbnail="/images/social-media/follow-tt-1.jpeg"
                    :link="`podcast-${idx + 1}`" />
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-media-tiktok" role="tabpanel" aria-labelledby="pills-media-tiktok"
            tabindex="0">



            <div class="row justify-content-start g-3 pt-4">
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
                        <MediaTiktokCardItem :title="`Judul Tiktok Terbaru Ke-${idx + 1}`"
                          :date="new Date().toISOString()" />
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

                <hr class="text-secondary" />
              </div>
            </div>


            <div class="row justify-content-start g-3 pt-4">
              <div class="col">
                <MediaStreamContentHeading title="Semua" />
                <div class="row justify-content-start g-3 pt-3">
                  <MediaTiktokCardItem v-for="(loop, idx) in 50" :key="idx" class="col-lg-6 col-xl-4 col-md-12 col-sm-12"
                    :title="`Judul Tiktok Ke-${idx + 1}`" :date="new Date().toISOString()" />
                </div>
              </div>
            </div>
          </div>


          <div class="tab-pane fade" id="pills-media-instagram" role="tabpanel" aria-labelledby="pills-media-instagram"
            tabindex="0">


            <div class="row justify-content-start g-3 pt-4">
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
                        <MediaTiktokCardItem :title="`Judul Instagram Terbaru Ke-${idx + 1}`"
                          :date="new Date().toISOString()" />
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

                <hr class="text-secondary" />
              </div>
            </div>


            <div class="row justify-content-start g-3 pt-4">
              <div class="col">

                <MediaStreamContentHeading title="Semua" />
                <div class="row justify-content-start g-3 pt-3">
                  <MediaTiktokCardItem v-for="(loop, idx) in 50" :key="idx" class="col-lg-6 col-xl-4 col-md-12 col-sm-12"
                    :title="`Judul Instagram Ke-${idx + 1}`" :date="new Date().toISOString()" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <hr v-if="colorMode.preference === 'dark'" class="text-secondary" />
  </div>
</template>


<style lang="css" scoped>
#media-streams-section {
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 5rem 0 5rem 0;
}

.custom-button__streams {
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  border-radius: 8px;
  padding: 9px;
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 13px;
}



/* podcats */

.media-streams-card-podcast {
  width: 100%;
  /* min-width: 573px; */
  height: 172px;
  padding: 10px;
  align-items: center;
  border-radius: 8px;
  background: #FFF;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

}

.media-streams-card-podcast .media-streams-podcast__thumbnail {
  width: 150px;
  height: 150px;
  border: 0;
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(75%);
}

.media-streams-card-podcast .media-streams-podcast__title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  align-self: stretch;
  overflow: hidden;
  color: var(--Font-600, #565E73);
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  /* 125% */
  letter-spacing: 0.016px;
}

.media-streams-card-podcast .media-streams-podcast__info .media-streams-podcast__info-date {
  color: var(--Font-400, #8A94A6);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  /* 114.286% */
  letter-spacing: 0.07px;
}

.media-streams-card-podcast .media-streams-podcast__info .media-streams-podcast__info-views {
  color: var(--Font-400, #8A94A6);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  /* 114.286% */
  letter-spacing: 0.07px;
}


/* Tiktok */

.media-streams-card-tiktok {
  width: 100%;
  height: 350px;
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid var(--Font-100, #E7E7E7);
  background: #FFF;
}

.media-streams-card-tiktok .media-streams-card-tiktok-content {
  padding: 12px 16px 20px 16px;
}

.media-streams-card-tiktok .media-streams-tiktok__thumbnail {
  width: 100%;
  height: 250px;
  border-radius: 8px 8px 0px 0px;
  border: 1px solid var(--Font-100, #E7E7E7);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(75%);
}

.media-streams-card-tiktok .media-streams-tiktok-content .media-streams-tiktok-content__title {
  color: var(--Font-600, #5D5D5D);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
}

.media-streams-card-tiktok .media-streams-tiktok-content .media-streams-card-tiktok-content-info__date {
  color: var(--Font-400, #888);
  /* Font/Body 1 */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 14.4px */
}


.dark-mode .custom-button__streams {
  color: #fff;
}


.media-streams-feature-podcast-card {
  width: 100%;
  height: 400px;
  border-radius: 4px;
  background-color: #E7E7E7;
  padding: 20px;
  position: relative;
}

.media-streams-feature-podcast-card .media-streams-feature-podcast__audio {
  position: absolute;
  top: 250px;
  width: 80%;
}

.media-streams-feature-podcast-card .media-streams-feature-podcast__action {
  position: absolute;
  top: 320px;
  left: 40px;
  right: 40px;
  /* width: 100%; */
}


/* 
  Custom Navigation SWIPER
*/

.swiper-button-prev {
  display: flex;
  width: 64px;
  height: 63.27px;
  padding: 8px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  color: #454545;
  border-radius: 36px;
  border: 1px solid var(--Font-200, #D1D1D1);
  background: #FFF;
  /* Medium */
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08);
}

.swiper-button-next {
  display: flex;
  width: 64px;
  height: 63.27px;
  padding: 8px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 36px;
  border: 1px solid var(--Font-200, #D1D1D1);
  background: #FFF;
  /* Medium */
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 1px rgba(103, 110, 118, 0.16), 0px 2px 5px 0px rgba(103, 110, 118, 0.08);
}

.swiper-button-prev::after {
  color: #323232;
  width: 42px;
  text-align: center;
}

.swiper-button-next::after {
  color: #323232;
  width: 42px;
  text-align: center;
}

.swiper-pagination-bullet {
  width: 8px;
  height: 8px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  /* background: var(--grey-400, #BDBDBD); */
  fill: var(--Grey-600, #757575);
}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #C70943;
}


/* Live */


.media-stream-live .media-stream-live__iframe {
  /* min-width: 100%; */
  width: 100%;
  height: 400px;
  border-radius: 4px;
  background: #D9D9D9;
}


.media-stream-live__info {
  width: 100%;
  height: auto;
  padding-top: 20px;
}

.media-stream-live__info .media-stream-live__info-heading {
  color: var(--Font-600, #5D5D5D);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 24px */
}

.media-stream-live__info .media-stream-live__info-description {
  overflow: hidden;
  color: var(--Font-400, #888);
  text-align: justify;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 18px */
}


/* related media */

.media-stream-live-related .media-stream-live-related__info .media-stream-live-related__info-title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  align-self: stretch;
  overflow: hidden;
  color: var(--Font-600, #5D5D5D);
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 18px */
}

.media-stream-live-related .media-stream-live-related__info .media-stream-live-related__info-description {
  overflow: hidden;
  color: var(--Font-400, #888);
  text-align: justify;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  width: 286px;
  height: 36px;
}

.media-stream-live-related .media-streams-live-related__thumbnail {
  width: 81px;
  height: 54px;
  border-radius: 4px;
  background: #D9D9D9;
  margin-right: 13px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* filter: brightness(50%); */
}
</style>