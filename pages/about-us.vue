<script setup lang="ts">
import Swal from 'sweetalert2';
// Set Meta SEO
useSeoMeta({
  title: "Tentang Kami",
  ogTitle: "Tentang Kami",
  description: "Citiasia Center for Smart Nation (CCSN)",
});

const colorMode = useColorMode();

const { data: teams } = await useFetch('/api/teams')
const { data: clients } = await useFetch('/api/client')


const showTooltip = (name: string, message: string, images: string) => {
  // alert(message)
  return Swal.fire({
    title: name,
    text: message,
    imageUrl: images,
    // imageWidth: 300,
    imageHeight: 300,
    width: 1000,
    color: "#5d5d5d",
    background: "#fff url(/images/trees.png)",
    backdrop: `
    rgba(0,0,123,0.4)
    url("/images/nyan-cat.gif")
    left top
    no-repeat
  `,
    showCloseButton: true,
    showCancelButton: false,
    showConfirmButton: false,
    focusConfirm: true,
  });
}

</script>

<template>
  <!-- hero start -->
  <LazyHeroParallaxBackground text="Citiasia Center for Smart Nation (CCSN)"
    background="/images/background/bg-galeri.png" />

  <!-- rendered content main -->
  <main id="content-main">
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
              Citiasia Center for Smart Nation (CCSN) merupakan salah satu
              sayap strategis dari Citiasia Inc. dalam menyebarkan semangat
              membangun bangsa menuju Indonesia Smart Nation
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- section tentang Citiasia Center for Smart Nation (CCSN)  end -->
    <!-- section Tentang Citiasia INC start -->
    <section class="citiasia-section-container py-5">
      <div class="container" data-aos="fade-up" data-aos-duration="1500">
        <div class="row justify-content-between g-3">
          <div class="col-lg-7 col-md-6">
            <h1 class="ccsn-title mb-3">Tentang Citiasia INC.</h1>
            <p class="ccsn-desc">
              Citiasia, Inc. merupakan pionir konsultan dan implementasi smart
              city di Indonesia yang berdiri sejak 2015. Citiasia, inc telah
              melayani institusi publik dan bisnis untuk akselerasi kinerja
              berkelanjutan dan berkontribusi pada nilai-nilai sosial.
            </p>
          </div>
          <div class="col-lg-5 col-md-6">
            <NuxtImg alt="citiasia" src="/images/tentang-citiasia.png" class="img-fluid citiasia-img" />
          </div>
        </div>
      </div>
    </section>
    <!-- section Tentang Citiasia INC end -->
    <!-- section visi misi start-->
    <section class="visimisi-section-container py-5">
      <div class="container" data-aos="fade-up" data-aos-duration="1500">
        <div class="row justify-content-start g-3">
          <div class="col-lg-6 col-md-6">
            <div class="d-flex justify-content-start flex-column">
              <NuxtImg alt="visimisi" src="/images/visi-misi-citiasia.png" class="img-fluid visimisi-cover" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6">
            <div class="d-flex justify-content-start flex-column g-3">
              <div>
                <h1 class="visimisi-title">Visi</h1>
                <p class="visimisi-desc">
                  Menjadi market leader untuk layanan smart city dan smart
                  enterprise di Indonesia pada tahun 2025.
                </p>
              </div>
              <div>
                <h1 class="visimisi-title">Misi</h1>
                <p class="visimisi-desc">
                  Citiasia, Inc. membantu institusi publik dan sektor bisnis
                  dengan memberikan solusi dan layanan aplikatif melalui
                  konsultasi, layanan digital, dan inovasi untuk meningkatkan
                  performa bisnis yang berkelanjutan, mengembangkan smart
                  city, dan memberikan dampak positif sosial untuk Indonesia
                  yang lebih baik.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class=rectangle-top></div>
      <div class="rectangle-bottom"></div>
    </section>
    <!-- section visi misi  end -->
    <!-- section Tim Citiasia INC start -->
    <section class="teams-citiasia-section-container py-5">
      <div class="container" data-aos="fade-down" data-aos-duration="1500">
        <h1 class="teams-citiasia__title">Tim Citiasia Inc</h1>


        <!-- Tampilkan tooltips ketika user menghover -->
        <div class="d-none d-lg-none d-xl-block d-xxl-block">
          <div class="row row-cols-2 row-cols-lg-5 row-cols-md-3 justify-content-start g-3 pt-5 ">
            <div v-for="team in teams" :key="team.id" class="col">
              <figure class="figure">
                <NuxtImg :src="team.thumbnail" class="figure-img img-fluid rounded teams-citiasia__images"
                  :alt="team.name" loading="lazy" :quality="75" format="webp" />
                <figcaption class="figure-caption" @mouseover="showTooltip(team.name, team.description, team.thumbnail)">
                  <h3 class="teams-citiasia__name">{{ team.name }}</h3>
                  <p class="teams-citiasia__job">{{ team.jobs }}</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>


        <!-- sembunyikan tootips pada tampilan mobile -->
        <div class="d-xl-none d-xxl-none">
          <div class="row row-cols-2 row-cols-lg-5 row-cols-md-3 justify-content-start g-3 pt-5 ">
            <div v-for="team in teams" :key="team.id" class="col">
              <figure class="figure">
                <NuxtImg :src="team.thumbnail" class="figure-img img-fluid rounded teams-citiasia__images"
                  :alt="team.name" loading="lazy" :quality="75" format="webp" />
                <figcaption class="figure-caption">
                  <h3 class="teams-citiasia__name">{{ team.name }}</h3>
                  <p class="teams-citiasia__job">{{ team.jobs }}</p>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- section Tim Citiasia INC end -->
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
    <!-- section portofolio start -->
    <section class="portofolio-section-container py-5">
      <div class="container" data-aos="fade-down" data-aos-duration="1500">
        <h1 class="portofolio-title">Portofolio</h1>
        <div class="d-flex flex-column justify-content-start g-2 py-3">
          <iframe class="rounded"
            src="https://www.google.com/maps/d/u/0/embed?mid=1LTTSR3Ei-3HpleWwcorxCnEgV89HcS8&ehbc=2E312F" width="auto"
            height="480"></iframe>
        </div>
      </div>

      <div class="portofolio">
        <div class="image-mitra">
          <img class="ellipse" src="/images/Ellipse.png" alt="Mitra" />
          <p class="angka">50+</p>
          <p class="huruf">Mitra</p>
        </div>
        <div class="image-mitra">
          <img class="ellipse" src="/images/Ellipse.png" alt="Swasta" />
          <p class="angka">35+</p>
          <p class="huruf">Swasta</p>
        </div>
        <div class="image-mitra">
          <img class="ellipse" src="/images/Ellipse.png" alt="Pemerintah" />
          <p class="angka">50+</p>
          <p class="huruf">Pemerintah</p>
        </div>
        <div class="image-mitra">
          <img class="ellipse" src="/images/Ellipse.png" alt="Client" />
          <p class="angka">450+</p>
          <p class="huruf">Client</p>
        </div>
      </div>
    </section>
    <!-- section portofolio end -->
    <hr v-if="colorMode.preference === 'dark'" class="text-secondary" />
  </main>
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

.citiasia-section-container {
  width: 100%;
  height: auto;
  overflow: hidden;
  background: var(--Background, #fff);
}

.citiasia-section-container .container {
  padding-top: 0;
}

.citiasia-img {
  width: 492px;
  height: 328.16px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
}

.visimisi-section-container {
  background: var(--primary-800, #a60b40);
  /* height: auto; */
  height: 1000px;
  overflow-x: hidden;
  position: relative;
}

.visimisi-section-container .container {
  padding-top: 0;
}

.visimisi-cover {
  width: 500px;
  height: 500px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
}

.visimisi-title {
  color: var(--font-50, #f6f6f6);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 37.2px */
}

.visimisi-desc {
  color: var(--Background, #fff);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 37.5px */
}

.teams-citiasia-section-container {
  width: 100%;
  height: auto;
  overflow-x: hidden;
}

.teams-citiasia-section-container .container {
  padding-top: 0;
}

.teams-citiasia__title {
  color: var(--primary-600, #d71149);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140.5%;
  text-align: start;
}

.teams-citiasia__images {
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: contain;
  width: 250px;
  height: 250px;
  border-radius: 0px !important;
  border: 0;
}

.teams-citiasia__name {
  color: var(--font-800, #454545);
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
}

.teams-citiasia__job {
  color: var(--font-600, #5d5d5d);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  text-align: center;
}

.portofolio-title {
  color: var(--danger-600, #ce2f2f);
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
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
  width: 5% !important;
  height: 28.14% !important;
  padding: 8px;
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
  width: 5% !important;
  height: 28.14% !important;
  padding: 8px;
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

@media (min-width: 1200px) {
  .ccsn-section-container .container {
    padding-top: 3em;
  }

  .citiasia-section-container .container {
    padding-top: 3em;
  }

  .visimisi-section-container .container {
    padding-top: 3em;
  }

  .teams-citiasia-section-container .container {
    padding-top: 3em;
  }

  .ccsn-title {
    font-size: 28px;
  }

  .ccsn-desc {
    font-size: 22px;
  }

  .visimisi-title {
    font-size: 28px;
  }

  .visimisi-desc {
    font-size: 22px;
  }

  .teams-citiasia__title {
    font-size: 28px;
  }

  .teams-citiasia__name {
    font-size: 20px;
  }

  .teams-citiasia__job {
    font-size: 18px;
  }

  .portofolio-title {
    font-size: 28px;
  }
}

/* dark-mode */

.dark-mode .ccsn-section-container {
  background-color: #262626;
}

.dark-mode .ccsn-desc {
  color: #fafafa;
}

.dark-mode .citiasia-section-container {
  background-color: #262626;
}

.dark-mode .visimisi-section-container {
  background-color: #262626;
}

.dark-mode .visimisi-title {
  color: #d71149;
}

.dark-mode .teams-citiasia-section-container {
  background-color: #262626;
}

.dark-mode .teams-citiasia__name {
  color: #fafafa;
}

.dark-mode .teams-citiasia__job {
  color: #fafafa;
}

.dark-mode .partner__name {
  color: #fafafa;
}

.container1 {
  display: flex;
  width: 100% auto;
  padding: 92px 50px;
  justify-content: space-between;
  align-items: flex-start;
  background: var(--primary-50, #fff0f2);
}

.box1 {
  width: 483px;
  flex-shrink: 0;
  color: var(--primary-600, #d71149);
  font-family: Poppins;
  font-size: 31px;
  font-style: normal;
  font-weight: 700;
  line-height: 140.5%;
}

.box2 {
  width: 699px;
  flex-shrink: 0;
  color: var(--font-600, #5d5d5d);
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 151%;
}

.container2 {
  display: flex;
  width: 100%;
  padding: 92px 50px;
  justify-content: space-between;
  align-items: flex-start;
  background: var(--primary-50, #fff);
}

.box3 {
  width: 600px;
  flex-shrink: 0;
  color: var(--primary-600, #6d6d6d);
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 151%;
}

.box4 {
  width: 485px;
}

.image-tentang {
  height: 328.16px;
  border-radius: 4px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
}

.container3 {
  /* height: 617px; */
  flex-shrink: 0;
  display: flex;
  width: 100%;
  padding: 92px 50px;
  justify-content: space-between;
  align-items: flex-start;
  background: var(--primary-800, #a60b40);
}

.box5 {
  width: 500px;
}

.box6 {
  color: var(--Background, #fff);
  font-family: Poppins;
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  width: 600px;
}

.image-visimisi {
  width: 500px;
  height: 500px;
  /* flex-shrink: 0; */
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
}

.container4 {
  flex-shrink: 0;
  display: flex;
  width: 100% auto;
  padding: 52px 40px;
  /* max-width: fit-content; */
  /* justify-content: space-between; */
  align-items: flex-start;
  background: var(--primary-50, #fff);
}

.box7 {
  width: 100% auto;
}

.image-container {
  display: flex;
  /* justify-content: space-between; */
  margin-top: 60px;
  color: var(--font-800, #454545);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.person {
  margin-top: 10px;
  align-items: center;
  text-align: center;
  flex-direction: column;
  display: flex;
  margin: 7px;
}

.person img {
  margin: 20px;
  margin-top: 10px;
  align-items: center;
  width: 50px;
}

.container5 {
  flex-shrink: 0;
  display: flex;
  width: 100%;
  padding: 92px 50px;
  justify-content: space-between;
  align-items: flex-start;
}

.partner {
  height: 232px;
  display: flex;
  width: 1443px;
  padding: 0px 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
}

.lglg-partner {
  width: 1280px;
  display: flex;
  width: 1282px;
  height: 160.65px;
  justify-content: space-between;
  align-items: center;
}

.aarrlf {
  width: 64px;
  height: 64px;
  display: flex;
  padding: 8px;
  align-items: center;
  gap: 10px;
  border-radius: 36px;
  border: 1px solid var(--font-200, #d1d1d1);
  background: var(--Background, #fff);

  /* Medium */
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.12),
    0px 0px 0px 1px rgba(103, 110, 118, 0.16),
    0px 2px 5px 0px rgba(103, 110, 118, 0.08);
}

.img-partner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 217px;
  height: 161px;
}

.card-img {
  display: flex;
  width: 217px;
  height: 124.649px;
  justify-content: center;
  align-items: center;
}

.hero-dots {
  width: 99% !important;
  height: 42px !important;
  display: flex;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

.container6 {
  flex-shrink: 0;
  display: flex;
  width: 100%;
  padding: 10px 50px;
  align-items: flex-start;
}

.image-portofolio {
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 40px;
  height: 590px;
  border-radius: 12px;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
}

.portofolio {
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Poppins;
  font-style: normal;
  flex-shrink: 0;
  display: flex;
  padding: 0 12% !important;
}

.image-mitra {
  width: 15.534%;
  margin: 40px;
}

.angka {
  margin-top: 10px;
  width: 100%;
  color: var(--danger-600, #ce2f2f);
  font-size: 39px;
  font-weight: 700;
  line-height: 120%;
}

.huruf {
  width: 100%;
  color: var(--font-500, #6d6d6d);
  font-size: 16px;
  font-weight: 400;
  line-height: 120%;
}

.ellipse {
  width: 41.18%;
}

@media screen and (max-width: 769px) {
  .ellipse {
    width: 65%;
  }
}

@media screen and (max-width: 771px) {
  .swiper {
    width: 100% !important;
  }

  .swiper-slide {
    margin-right: 0 !important;
    width: 40% !important;
    margin-right: 1px;
  }
}

@media screen and (max-width: 426px) {
  .portofolio {
    padding: 0 5% !important;
  }

  .angka {
    font-size: 150%;
    width: 100%;
  }

  .huruf {
    font-size: 70%;
    width: 100% !important;
  }

  .image-mitra {
    margin: 5% !important;
  }

  .swiper {
    margin: 0;
    width: 90% !important;
  }

  .swiper-slide {
    background-position: center !important;
    width: 55% !important;
  }

  .swiper-wrapper {
    width: 10% !important;
  }
}


.rectangle-bottom {
  position: absolute;
  bottom: 0;
  width: 50px;
  height: 120px;
  /* border-radius: 14px; */
  border-radius: 0 14px 14px 0;
  background: var(--primary-400, #FF6A89);

}

.rectangle-top {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 120px;
  /* border-radius: 14px; */
  border-radius: 14px 0px 0px 14px;
  background: var(--primary-400, #FF6A89);

}



.dark-mode .rectangle-bottom {
  display: none;
}

.dark-mode .rectangle-top {
  display: none;
}

/* responsive */
@media (min-width: 1200px) {
  .visimisi-section-container {
    height: 800px;
  }
}
</style>
