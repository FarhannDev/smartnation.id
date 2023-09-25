<template>
  <section class="hero-section">
    <div class="hero-image-parallax" :style="backgroundStyle()">
      <div class="hero-image-bg__gradient"></div>
      <div class="container">
        <div class="hero-heading-container">
          <NuxtLink :to="`/${postId}`" :aria-label="`Baca Selengkapnya ${text}`"
            :class="'text-start link-offset-2 link-underline link-underline-opacity-0 hero-heading__title'">
            {{ text.length >= 80
              ? `${text.substring(0, 80)}...`
              : text
            }}
          </NuxtLink>
        </div>
        <HeroSocialMedia />
      </div>
    </div>

  </section>
</template>



<style >
.berita-section-title {
  color: var(--font-600, #5D5D5D);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 24px */
}

.line-break {
  position: relative;
  top: -5px;
  left: 1.2px;
  width: 51px;
  border: 1px solid #C70943;
}

.hero-image-parallax {
  position: relative;
  width: 100%;
  height: 612px;
  overflow: hidden;
  scroll-behavior: smooth;
  margin-left: 0;
  -webkit-transform: scale(1);
  transform: scale(1);
}

.hero-image-parallax:hover {
  -webkit-transform: scale(1.1);
  -webkit-transition: .3s ease-in-out;
  transform: scale(1.1);
  transition: .3s ease-in-out;
}


.hero-image-bg__gradient {
  padding: 0;
  height: 100vh;
  flex-shrink: 0;
  position: relative;
  width: 100%;
  height: 612px;
  background: linear-gradient(0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(102deg,
      rgba(166, 11, 64, 0.75) 16.57%,
      rgba(217, 217, 217, 0) 95.59%);
}

.hero-heading-container {
  position: absolute;
  top: 45%;
  z-index: 1000;
  width: 90%;
}

.hero-heading__title {
  display: inline;
  color: var(--font-50, #F6F6F6);
  font-family: Poppins;
  font-size: 22px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-align: start;
}

.hero-heading__title:hover {
  color: #BDBDBD;
}

.hero-heading__desc {
  color: var(--Background, #FFF);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  width: 100%;
}



.hero-social-media-container {
  position: absolute;
  top: 45%;
  right: 13px;
}


.hero-social-media-container .social-media__icons {
  text-align: center;
  width: 32.567px;
  height: 30.588px;
  margin-bottom: 40px;
}


.swiper-pagination-bullet {
  width: 9.6px;
  height: 9.6px;
  text-align: center;
  line-height: 20px;
  font-size: 12px;
  color: #000;
  opacity: 1;
  background: var(--grey-400, #BDBDBD);

}

.swiper-pagination-bullet-active {
  color: #fff;
  background: #C70943;
}

/* Gaya untuk perangkat tablet */
@media (min-width: 768px) and (max-width: 991px) {

  /* Atur gaya untuk layar berukuran tablet */
  .hero-heading__title {
    display: block;
    font-size: 31px !important;
  }

}

/* Gaya untuk layar laptop/PC */
/* Atur gaya untuk layar berukuran laptop/PC */
@media (min-width: 992px) {
  .hero-image-parallax {
    min-height: 100vh;
    background-attachment: fixed;
    scroll-behavior: smooth;
  }

  .hero-image-bg__gradient {
    min-height: 100vh;
  }

  .hero-heading__title {
    width: 1300px;
    font-size: 61px !important;
    display: block;
  }

  .hero-heading__desc {
    width: 1200px;
    font-size: 31px;
  }

  .hero-social-media-container {
    display: block;
  }
}
</style>

<script lang="ts" setup>
const props = defineProps({
  background: { type: String, required: true },
  text: { type: String },
  desc: { type: String },
  postId: { type: String }
})



const backgroundStyle = () => {
  return {
    backgroundImage: `url(${props.background})`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    objectFit: "cover",
    objectPosition: "center",
  };
}




</script>



