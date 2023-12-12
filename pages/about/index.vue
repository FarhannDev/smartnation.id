<script setup lang="ts">

import { clients } from '~/utils/data/getInitialClientData';

// Set Meta SEO
useSeoMeta({
  title: "Citiasia Center for Smart Nation (CCSN)",
  ogTitle: "Citiasia Center for Smart Nation (CCSN)",
  description: "Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap strategis dari Citiasia Inc. dalam menyebarkan semangat membangun bangsa menuju Indonesia Smart Nation",
});

const colorMode = useColorMode();


</script>

<template>
  <div>
    <LazyHeroParallaxBackground text="Citiasia Center for Smart Nation (CCSN)"
      background="/images/background/bg-galeri.png" />

    <!-- section tentang Citiasia Center for Smart Nation (CCSN) start -->
    <section class="ccsn-section-container">
      <div class="container" data-aos="fade-up" data-aos-duration="1500">
        <div class="row justify-content-between g-3 py-5">
          <div class="col-lg-5 col-md-6">
            <h1 class="ccsn-title">
              Tentang Citiasia Center for Smart Nation (CCSN)
            </h1>
          </div>
          <div class="col-lg-7 col-md-6">
            <p class="ccsn-desc">
              Citiasia Center for Smart Nation (CCSN) merupakan salah satu sayap
              strategis dari Citiasia Inc. dalam menyebarkan semangat membangun
              bangsa menuju Indonesia Smart Nation
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- section tentang Citiasia Center for Smart Nation (CCSN)  end -->


    <!-- section partner start -->
    <section class="partner-section-container py-5">
      <div class="container" data-aos="fade-down" data-aos-duration="1500">
        <h1 class="partner-citiasia__title">Partner</h1>
        <div class="row justify-content-start g-5 py-5">
          <div class="col">
            <Swiper :modules="[SwiperAutoplay, SwiperNavigation]" :navigation="{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }" :slidesPerView="3" :spaceBetween="10" :grabCursor="true" :breakpoints="{
  '640': {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  '768': {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  '1024': {
    slidesPerView: 6,
    spaceBetween: 10,
  },
}" :autoplay="{
  delay: 2500,
  disableOnInteraction: false,
}" :creative-effect="{
  prev: {
    shadow: false,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
              <SwiperSlide v-for="client in clients" :key="client.id">
                <figure class="figure">
                  <NuxtImg :src="client.logo" class="figure-img img-fluid rounded partner__images" :alt="client.name"
                    loading="lazy" :quality="75" format="webp" />
                  <figcaption class="figure-caption text-center">
                    <h3 class="partner__name">{{ client.name }}</h3>
                  </figcaption>
                </figure>
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
    </section>
    <!-- section partner end -->

    <hr v-show="colorMode.preference === 'dark'" />
  </div>
</template>

<style scoped>
.ccsn-section-container {
  width: 100%;
  height: auto;
  background: var(--primary-50, #fff0f2);
}

.ccsn-section-container .container {
  padding-top: 0;
}

.ccsn-title {
  color: var(--primary-600, #d71149);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140.5%;
  text-align: start;
  /* 43.555px */
}

.ccsn-desc {
  color: var(--font-600, #5d5d5d);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 151%;
  text-align: start;
  /* 37.75px */
}


.partner-section-container {
  width: 100%;
  height: auto;
  overflow-x: hidden;
}

.partner-section-container .container {
  padding-top: 3em;
}

.partner-citiasia__title {
  color: var(--danger-600, #ce2f2f);
  font-family: Poppins;
  font-size: 31px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
}

.partner__images {
  width: 217px;
  height: 124.649px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
}

.partner__name {
  color: var(--font-700, #4f4f4f);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-align: center;
  flex-wrap: wrap;
}

.swiper-button-prev {
  position: fixed;
  width: 5% !important;
  height: 16.14% !important;
  padding: 32px;
  align-items: center;
  gap: 10px;
  border-radius: 36px !important;
  color: #454545;
  border: 1px solid var(--font-200, #d1d1d1);
  background: var(--Background, #fff);
  /* Medium */
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.12),
    0px 0px 0px 1px rgba(103, 110, 118, 0.16),
    0px 2px 5px 0px rgba(103, 110, 118, 0.08);
}

.swiper-button-next {
  position: fixed;
  width: 5% !important;
  height: 16.14% !important;
  padding: 32px;
  align-items: center;
  gap: 10px;
  border-radius: 36px !important;
  color: #454545;
  border: 1px solid var(--font-200, #d1d1d1);
  background: var(--Background, #fff);
  /* Medium */
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.12),
    0px 0px 0px 1px rgba(103, 110, 118, 0.16),
    0px 2px 5px 0px rgba(103, 110, 118, 0.08);
}

.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 100% !important;
}

@media (max-width: 1026px) {
  .swiper-button-prev {
    position: fixed;
    width: 5% !important;
    height: 5.14% !important;
    padding: 25px;
    align-items: center;
    gap: 10px;
    border-radius: 36px !important;
    color: #454545;
    border: 1px solid var(--font-200, #d1d1d1);
    background: var(--Background, #fff);
    /* Medium */
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.12),
      0px 0px 0px 1px rgba(103, 110, 118, 0.16),
      0px 2px 5px 0px rgba(103, 110, 118, 0.08);
  }

  .swiper-button-next {
    position: fixed;
    width: 5% !important;
    height: 5.14% !important;
    padding: 25px;
    align-items: center;
    gap: 10px;
    border-radius: 36px !important;
    color: #454545;
    border: 1px solid var(--font-200, #d1d1d1);
    background: var(--Background, #fff);
    /* Medium */
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.12),
      0px 0px 0px 1px rgba(103, 110, 118, 0.16),
      0px 2px 5px 0px rgba(103, 110, 118, 0.08);
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 100% !important;
  }
}

@media (min-width: 1200px) {
  .swiper-button-prev {
    position: fixed;
    width: 5% !important;
    height: 16.14% !important;
    padding: 33px;
    align-items: center;
    gap: 10px;
    border-radius: 36px !important;
    color: #454545;
    border: 1px solid var(--font-200, #d1d1d1);
    background: var(--Background, #fff);
    /* Medium */
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.12),
      0px 0px 0px 1px rgba(103, 110, 118, 0.16),
      0px 2px 5px 0px rgba(103, 110, 118, 0.08);
  }

  .swiper-button-next {
    position: fixed;
    width: 5% !important;
    height: 16.14% !important;
    padding: 33px;
    align-items: center;
    gap: 10px;
    border-radius: 36px !important;
    color: #454545;
    border: 1px solid var(--font-200, #d1d1d1);
    background: var(--Background, #fff);
    /* Medium */
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.12),
      0px 0px 0px 1px rgba(103, 110, 118, 0.16),
      0px 2px 5px 0px rgba(103, 110, 118, 0.08);
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-size: 100% !important;
  }

  .ccsn-section-container .container {
    padding-top: 3em;
  }


  .ccsn-title {
    font-size: 28px;
  }

  .ccsn-desc {
    font-size: 22px;
  }

}

/* dark-mode */

.dark-mode .ccsn-section-container {
  background-color: #262626;
}

.dark-mode .ccsn-desc {
  color: #fafafa;
}

.dark-mode .partner__name {
  color: #fafafa;
}
</style>
