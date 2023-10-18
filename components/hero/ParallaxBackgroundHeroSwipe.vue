
<script lang="ts" setup>
const props = defineProps({
  background: { type: String, required: true },
  text: { type: String, required: true },
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
.hero-image-parallax {
  position: relative;
  width: 100%;
  height: 700px;
  overflow: hidden;
  scroll-behavior: smooth;
  /* margin-left: 0; */
  -webkit-transform: scale(1);
  transform: scale(1);
}


.hero-image-bg__gradient {
  padding: 0;
  height: 100vh;
  flex-shrink: 0;
  position: relative;
  width: 100%;
  height: 700px;
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
  top: 40%;
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
  margin-right: 20px !important;
  margin-top: 3%;
  padding-top: 3%;
}

@media (max-width: 992px) {

.hero-heading__title {
  font-size: 40px !important;
  width: 650px;
  display: block;
}

.hero-heading__desc {
  width: 900px;
  font-size: 25px;
}
.hero-heading-container {
  position: absolute;
  width: 700px;
  top: 35%;
  bottom: 30%;
  z-index: 1000;
}
}

@media (min-width: 992px) {
  .hero-heading-container {
    width: 100%;
  }

  .hero-heading__title {
    display: block;
    font-size: 40px !important;
    width: 650px !important;
  }

  .hero-social-media-container {
    position: absolute;
    top: 35% !important;
    right: 45px !important;
    margin-right: 40px;
  }
}

@media (max-width: 768px) {
  .hero-heading-container {
    width: 100%;
  }

  .hero-heading__title {
    display: block;
    font-size: 40px !important;
    width: 650px !important;
    margin-left: 10px !important;
  }

  .hero-social-media-container {
    position: absolute;
    top: 35% !important;
    right: 15px !important;
  }
}

@media (max-width: 576px) {
  .hero-heading-container {
    width: 100%;
  }

  .hero-heading__title {
    display: block;
    font-size: 30px !important;
    width: 250px !important;
    margin-left: 10px !important;
    top: 20% !important;
  }

  .hero-social-media-container {
    position: absolute;
    top: 35% !important;
    right: 15px !important;
  }
}

/* // X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .hero-image-parallax {
    min-height: 100vh;
  }

  .hero-image-bg__gradient {
    height: 100vh;
  }

  .hero-heading__title {
    font-size: 50px !important;
    display: block;
    width: 1000px !important;
  }

  .hero-heading__desc {
    width: 1000px !important;
    font-size: 31px;
  }

  .hero-social-media-container {
    position: absolute;
    top: 48%;
    right: 125px !important;
    z-index: 1000;
    margin-right: 40px;
  }

}

</style>



