
<script lang="ts" setup>
// Use a static import for server-side compatibility
import '~/assets/css/parallax-background.css'

const props = defineProps({
  background: { type: String, required: true },
  text: { type: String },
  desc: { type: String }
})


const backgroundStyle = () => {
  return {
    backgroundImage: `url(${props.background})`,
    // transform: `translateY(-50%) translateX(-50%) scale(1.1)`,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    objectFit: "cover",
    objectPosition: "center",
  };
}

</script>


<template>
  <section class="hero-section">
    <div class="hero-image-parallax" :style="backgroundStyle()">
      <div class="hero-image-bg__gradient"></div>
      <div class="container">
        <div class="hero-heading-container">
          <h1 class="hero-heading__title">{{ text }}</h1>
          <p class="hero-heading__desc">{{ desc }}</p>
        </div>

        <HeroSocialMedia />
      </div>
    </div>

  </section>
</template>

<style >
.hero-image-parallax {
  position: relative;
  width: 100%;
  height: 700px;
  overflow: hidden;
  scroll-behavior: smooth;
  margin-left: 0;
  -webkit-transform: scale(1);
  transform: scale(1);
}


.hero-image-bg__gradient {
  padding: 0;
  height: 100vh;
  flex-shrink: 0;
  position: relative;
  width: 100%;
  height: 100vh;
  background: linear-gradient(0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(102deg,
      rgba(166, 11, 64, 0.75) 16.57%,
      rgba(217, 217, 217, 0) 95.59%);
}

.hero-heading-container {
  position: absolute;
  width: 400px;
  top: 45%;
  z-index: 1000;
}

.hero-heading__title {
  /* display: inline; */
  color: var(--font-50, #F6F6F6);
  font-family: Poppins;
  font-size: 33px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-align: start;
  margin-right: 20px;
  margin-top: 3%;
  padding-top: 3%;
}


.hero-heading__desc {
  color: var(--Background, #FFF);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  width: 100%;
}


.hero-social-media-container {
  position: absolute;
  top: 45%;
  right: 13px;
  z-index: 1000;
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

/* // X-Small devices (portrait phones, less than 576px)
// No media query for `xs` since this is the default in Bootstrap */

/* // Small devices (landscape phones, 576px and up) */
@media (min-width: 540px) {

  .hero-heading__title {
    font-size: 35px !important;
    display: block;
    width: 30px;
    /* margin-bottom: 50%; */
  }

  .hero-heading__desc {
    width: 50px;
    font-size: 20px;
    /* margin-bottom: 50%; */
    margin-top: 1%;
    padding-top: 1%;
  }

  .hero-social-media-container {
    position: absolute;
    top: 35% !important;
    right: 30px !important;
  }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

  /* Atur gaya untuk layar berukuran tablet */
  .hero-heading-container {
    width: 100%;
  }

  .hero-heading__title {
    display: block;
    font-size: 30px !important;
    width: 620px;
    margin-top: 1%;
    padding-top: 1%;
  }


  .hero-social-media-container {
    position: absolute;
    top: 35% !important;
    right: 30px !important;
  }
}

/* // Large devices (desktops, 992px and up) */
@media (max-width: 992px) {
  .hero-heading-container {
    width: 100%;
  }

  .hero-heading__title {
    display: block;
    font-size: 30px !important;
    width: 640px;
    /* margin-top: 4%;
    padding-top: 4%; */
    /* margin-bottom: 5% !important; */
    /* top: 50% !important; */
  }

  .hero-social-media-container {
    position: absolute;
    top: 35% !important;
    right: 45px !important;
  }
}

/* // X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .hero-image-parallax {
    height: 100vh;
  }

  .hero-image-bg__gradient {
    height: 100vh;
  }

  .hero-heading__title {
    font-size: 50px !important;
    display: block;
    width: 1000px;
    /* margin-top: 1%;
    padding-top: 1%; */
    /* margin-bottom: 5%;
    padding-bottom: 5%; */
    /* top: 5%; */
  }

  .hero-heading__desc {
    width: 1200px;
    font-size: 31px;
  }

  .hero-social-media-container {
    position: absolute;
    top: 48%;
    right: 100px;
    z-index: 1000;
  }

}
</style>







