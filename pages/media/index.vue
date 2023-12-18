<script lang="ts" setup>

import { ColorModeInstance } from '@nuxtjs/color-mode/dist/runtime/types';

// Set Meta SEO
useSeoMeta({
  title: "Media",
  description: "Kumpulan media smart nation",
  ogTitle: "Media",
  ogDescription: "Kumpulan media smart nation",
});

const colorMode: ColorModeInstance = useColorMode();
</script>

<template>
  <div>
    <LazyHeroParallaxBackground text="Stream Smartnation" background="/images/background/bg-contact-me.png" />

    <section id="media-streams-section">
      <div class="container">
        <ul class="nav nav-pills d-flex justify-content-center mb-3" id="pills-tab" role="tablist">
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
                <h1 class="media-streams__heading">Sedang Tayang</h1>
                <div class="row justify-content-start g-3">
                  <div class="col">
                    <Swiper class="py-5" :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :pagination="{
                      clickable: true,
                    }" :navigation="{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}" :slidesPerView="3.5" :spaceBetween="10" :grabCursor="true" :creative-effect="{
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
                <h1 class="media-streams__heading">Podcast</h1>
                <div class="row justify-content-start g-4 px-0 mx-0 mt-3">
                  <MediaPodcastThumbnailCardItem v-for="(loop, idx) in 6" :key="idx"
                    class="col-lg-6 col-xl-4 col-md-12 col-sm-12" :title="`Judul Podcast Ke-${idx + 1}`"
                    :date="new Date().toISOString()" thumbnail="/images/social-media/follow-tt-1.jpeg" />
                </div>
                <hr class="text-secondary" />
              </div>
            </div>

            <div class="row justify-content-start g-2 pt-4">
              <div class="col">
                <h1 class="media-streams__heading">Tik-Tok</h1>

                <div class="row justify-content-start g-3">
                  <div class="col">

                    <Swiper class="py-5" :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :pagination="{
                      clickable: true,
                    }" :navigation="{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}" :slidesPerView="3.5" :spaceBetween="10" :grabCursor="true" :creative-effect="{
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
                <h1 class="media-streams__heading">Instagram</h1>

                <div class="row justify-content-start g-3">
                  <div class="col">
                    <Swiper class="py-5" :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :pagination="{
                      clickable: true,
                    }" :navigation="{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}" :slidesPerView="3.5" :spaceBetween="10" :grabCursor="true" :creative-effect="{
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
                      <h1 class="media-streams__heading">Terpopuler</h1>
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
                <h1 class="media-streams__heading">Terbaru</h1>
                <div class="row justify-content-start g-3">
                  <div class="col">
                    <Swiper class="py-5" :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :pagination="{
                      clickable: true,
                    }" :navigation="{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}" :slidesPerView="3.5" :spaceBetween="10" :grabCursor="true" :creative-effect="{
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
                <h1 class="media-streams__heading">Baru Diputar</h1>

                <div class="row justify-content-start g-3">
                  <div class="col">
                    <Swiper class="py-5" :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :pagination="{
                      clickable: true,
                    }" :navigation="{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}" :slidesPerView="3.5" :spaceBetween="10" :grabCursor="true" :creative-effect="{
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
            <div class="row justify-content-start g-2 pt-4">
              <div class="col">
                <div class="media-streams-feature-podcast-card">
                  <div class="d-flex">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <g clip-path="url(#clip0_3893_9351)">
                          <path
                            d="M29.42 13.42C28.64 12.64 27.38 12.64 26.6 13.42L17.42 22.6C16.64 23.38 16.64 24.64 17.42 25.42L26.6 34.6C27.38 35.38 28.64 35.38 29.42 34.6C30.2 33.82 30.2 32.56 29.42 31.78L21.66 24L29.42 16.24C30.2 15.46 30.18 14.18 29.42 13.42Z"
                            fill="#323232" />
                        </g>
                        <defs>
                          <clipPath id="clip0_3893_9351">
                            <rect width="48" height="48" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                  </div>
                  <div class="d-flex justify-content-center mx-auto">
                    <audio controls autoplay class="media-streams-feature-podcast__audio">
                      <source src="/audio/KUNTI BOGEL,MAMANG!!.mp3" type="audio/ogg">
                      <source src="/audio/KUNTI BOGEL,MAMANG!!.mp3" type="audio/mpeg">
                      Your browser does not support the audio element.
                    </audio>
                  </div>

                  <div class="d-flex justify-content-start">
                    <div class="media-streams-feature-podcast__action">
                      <div class="d-flex justify-content-between flex-wrap">
                        <div>
                          <span class="media-streams-feature-podcast__action-like">
                            <button type="button" class="btn btn-outline-none border-0">
                              <div class="vstack">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                  fill="none">
                                  <g clip-path="url(#clip0_3894_9418)">
                                    <path
                                      d="M16.4 2.57521L9.475 9.50021C9.0125 9.96271 8.75 10.6002 8.75 11.2627V23.7502C8.75 25.1252 9.875 26.2502 11.25 26.2502H22.5C23.5 26.2502 24.4 25.6502 24.8 24.7377L28.875 15.2252C29.925 12.7502 28.1125 10.0002 25.425 10.0002H18.3625L19.55 4.27521C19.675 3.65021 19.4875 3.01271 19.0375 2.56271C18.3 1.83771 17.125 1.83771 16.4 2.57521ZM3.75 26.2502C5.125 26.2502 6.25 25.1252 6.25 23.7502V13.7502C6.25 12.3752 5.125 11.2502 3.75 11.2502C2.375 11.2502 1.25 12.3752 1.25 13.7502V23.7502C1.25 25.1252 2.375 26.2502 3.75 26.2502Z"
                                      fill="#323232" />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_3894_9418">
                                      <rect width="30" height="30" fill="white" />
                                    </clipPath>
                                  </defs>
                                </svg>
                                Suka
                              </div>
                            </button>
                          </span>
                          <span class="media-streams-feature-podcast__action-volume">
                            <button type="button" class="btn btn-outline-none border-0">
                              <div class="vstack">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                  fill="none">
                                  <path
                                    d="M3.75 12.5001V17.5001C3.75 18.1876 4.3125 18.7501 5 18.7501H8.75L12.8625 22.8626C13.65 23.6501 15 23.0876 15 21.9751V8.01261C15 6.90011 13.65 6.33761 12.8625 7.12511L8.75 11.2501H5C4.3125 11.2501 3.75 11.8126 3.75 12.5001ZM20.625 15.0001C20.625 12.7876 19.35 10.8876 17.5 9.96261V20.0251C19.35 19.1126 20.625 17.2126 20.625 15.0001ZM17.5 5.56261V5.81261C17.5 6.28761 17.8125 6.70011 18.25 6.87511C21.475 8.16261 23.75 11.3251 23.75 15.0001C23.75 18.6751 21.475 21.8376 18.25 23.1251C17.8 23.3001 17.5 23.7126 17.5 24.1876V24.4376C17.5 25.2251 18.2875 25.7751 19.0125 25.5001C23.25 23.8876 26.25 19.8001 26.25 15.0001C26.25 10.2001 23.25 6.11261 19.0125 4.50011C18.2875 4.21261 17.5 4.77511 17.5 5.56261Z"
                                    fill="#323232" />
                                </svg>
                                Volume
                              </div>
                            </button>
                          </span>
                        </div>

                        <div>
                          <span class="media-streams-feature-podcast__action-share">
                            <button type="button" class="btn btn-outline-none border-0">
                              <div class="vstack">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                  fill="none">
                                  <g clip-path="url(#clip0_3894_9461)">
                                    <path
                                      d="M22.5 20.1C21.55 20.1 20.7 20.475 20.05 21.0625L11.1375 15.875C11.2 15.5875 11.25 15.3 11.25 15C11.25 14.7 11.2 14.4125 11.1375 14.125L19.95 8.9875C20.625 9.6125 21.5125 10 22.5 10C24.575 10 26.25 8.325 26.25 6.25C26.25 4.175 24.575 2.5 22.5 2.5C20.425 2.5 18.75 4.175 18.75 6.25C18.75 6.55 18.8 6.8375 18.8625 7.125L10.05 12.2625C9.375 11.6375 8.4875 11.25 7.5 11.25C5.425 11.25 3.75 12.925 3.75 15C3.75 17.075 5.425 18.75 7.5 18.75C8.4875 18.75 9.375 18.3625 10.05 17.7375L18.95 22.9375C18.8875 23.2 18.85 23.475 18.85 23.75C18.85 25.7625 20.4875 27.4 22.5 27.4C24.5125 27.4 26.15 25.7625 26.15 23.75C26.15 21.7375 24.5125 20.1 22.5 20.1Z"
                                      fill="#323232" />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_3894_9461">
                                      <rect width="30" height="30" fill="white" />
                                    </clipPath>
                                  </defs>
                                </svg>
                                Bagikan
                              </div>
                            </button>
                          </span>
                          <span class="media-streams-feature-podcast__action-download">
                            <button type="button" class="btn btn-outline-none border-0">
                              <div class="vstack">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30"
                                  fill="none">
                                  <g clip-path="url(#clip0_3894_9464)">
                                    <path
                                      d="M23.75 16.25V22.5C23.75 23.1875 23.1875 23.75 22.5 23.75H7.5C6.8125 23.75 6.25 23.1875 6.25 22.5V16.25C6.25 15.5625 5.6875 15 5 15C4.3125 15 3.75 15.5625 3.75 16.25V23.75C3.75 25.125 4.875 26.25 6.25 26.25H23.75C25.125 26.25 26.25 25.125 26.25 23.75V16.25C26.25 15.5625 25.6875 15 25 15C24.3125 15 23.75 15.5625 23.75 16.25ZM16.25 15.8375L18.6 13.4875C19.0875 13 19.875 13 20.3625 13.4875C20.85 13.975 20.85 14.7625 20.3625 15.25L15.875 19.7375C15.3875 20.225 14.6 20.225 14.1125 19.7375L9.625 15.25C9.1375 14.7625 9.1375 13.975 9.625 13.4875C10.1125 13 10.9 13 11.3875 13.4875L13.75 15.8375V5C13.75 4.3125 14.3125 3.75 15 3.75C15.6875 3.75 16.25 4.3125 16.25 5V15.8375Z"
                                      fill="#323232" />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_3894_9464">
                                      <rect width="30" height="30" fill="white" />
                                    </clipPath>
                                  </defs>
                                </svg>
                                Unduh
                              </div>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row justify-content-start g-2 pt-5">
              <div class="col">
                <h1 class="media-streams__heading">Terbaru</h1>
                <div class="row justify-content-start g-3">
                  <div class="col">
                    <Swiper class="py-5" :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :pagination="{
                      clickable: true,
                    }" :navigation="{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}" :slidesPerView="3.5" :spaceBetween="10" :grabCursor="true" :creative-effect="{
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
                <h1 class="media-streams__heading">Semua</h1>
                <div class="row justify-content-arround g-3 px-0 mx-0 mt-3">
                  <MediaPodcastThumbnailCardItem v-for="(loop, idx) in 100" :key="idx"
                    class="col-lg-6 col-xl-6 col-md-12 col-sm-12" :title="`Judul Podcast Ke-${idx + 1}`"
                    :date="new Date().toISOString()" thumbnail="/images/social-media/follow-tt-1.jpeg" />
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-media-tiktok" role="tabpanel" aria-labelledby="pills-media-tiktok"
            tabindex="0">



            <div class="row justify-content-start g-3 pt-4">
              <div class="col">
                <h1 class="media-streams__heading">Terbaru</h1>

                <div class="row justify-content-start g-3">
                  <div class="col">
                    <Swiper class="py-5" :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :pagination="{
                      clickable: true,
                    }" :navigation="{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}" :slidesPerView="3.5" :spaceBetween="10" :grabCursor="true" :creative-effect="{
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
                <h1 class="media-streams__heading">Semua</h1>
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
                <h1 class="media-streams__heading">Terbaru</h1>

                <div class="row justify-content-start g-3">
                  <div class="col">
                    <Swiper class="py-5" :modules="[SwiperAutoplay, SwiperNavigation, SwiperPagination]" :pagination="{
                      clickable: true,
                    }" :navigation="{
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}" :slidesPerView="3.5" :spaceBetween="10" :grabCursor="true" :creative-effect="{
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
                <h1 class="media-streams__heading">Semua</h1>
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
  padding: 12px 16px;
  text-transform: capitalize;
  text-align: center;
}


/*
   Custom Style Live
*/
.media-streams__heading {
  color: var(--Primary-600, #D71149);

  /* Font/Tittle 2 SemiBold */
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 30px */
}

.media-streams-card__live {
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
}

.media-streams-card__live .media-streams-card__live-thumbnail {
  width: 100%;
  min-width: 430px;
  height: 250px;
  border-radius: 4px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(50%);

}

.media-streams-card__live .media-streams-card__live-caption {
  position: absolute;
  top: 140px;
  left: 30px;
  right: 30px;
}

.media-streams-card__live .media-streams-card__live-caption .media-streams-card__live-caption__title {
  overflow: hidden;
  color: rgba(255, 255, 255, 0.80);
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  display: -webkit-box;
  width: 228.681px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.media-streams-card__live .media-streams-card__live-caption .media-streams-card__live-caption__description {
  overflow: hidden;
  color: rgba(255, 255, 255, 0.80);
  text-overflow: ellipsis;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  display: -webkit-box;
  width: fit-content;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
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