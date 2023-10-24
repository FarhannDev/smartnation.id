<script lang="ts" setup>
import { PropType } from 'nuxt/dist/app/compat/capi';
import { PostsDataType } from '~/utils/data/getInitialPostsData';


defineProps({ posts: { type: Object as PropType<PostsDataType>, required: true } })


interface Background {
  backgroundImage: string;
  backgroundAttachment: string;
  backgroundPosition: string;
  backgroundRepeat: string;
  backgroundSize: string;
  objectFit: string;
  objectPosition: string;
}

type IbackgroundType = Background

const backgroundStyle = (background: string | undefined): IbackgroundType => {
  return {
    backgroundImage: `url(${background})`,
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
    <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]" :slides-per-view="1" :grabCursor="true"
      :pagination="{
        clickable: true,
      }" :effect="'creative'" :autoplay="{
  delay: 2500,
  disableOnInteraction: true,
}" :creative-effect="{
  prev: {
    shadow: false,
    translate: ['-20%', 0, -1],
  },
  next: {
    translate: ['100%', 0, 0],
  },
}">
      <SwiperSlide v-for="post in posts
            .sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString()))
            .slice(0, 5)" :key="post.id">



        <div class="hero-image-parallax" :style="backgroundStyle(post.featured_media)">
          <div class="hero-image-bg__gradient"></div>
          <div class="container">
            <div class="hero-heading-container">
              <NuxtLink :to="`/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`"
                :class="'text-start link-offset-2 link-underline link-underline-opacity-0 hero-heading__title'">
                {{ post.title.rendered.length >= 120
                  ? `${post.title.rendered.substring(0, 120)}...`
                  : post.title.rendered
                }}
              </NuxtLink>
            </div>
            <HeroSocialMedia />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style lang="css" >
.hero-image-parallax {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  scroll-behavior: smooth;
}


.hero-image-bg__gradient {
  position: absolute;
  padding: 0;
  height: 100vh;
  flex-shrink: 0;
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
  width: fit-content;
  top: 300px;
  left: 8px;
  right: 0;
  z-index: 1000;
}

.hero-heading__title {
  display: block;
  color: var(--font-50, #F6F6F6);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-align: start;
}


.hero-heading__desc {
  display: block;
  color: var(--Background, #FFF);
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  width: 100%;
}


.hero-social-media-container {
  display: block;
  position: absolute;
  top: 370px;
  right: 20px;
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


/*
   Responsive
*/
/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) {
  .hero-heading-container {
    display: block;
    width: 450px;
    left: 120px;
    top: 350px;
  }

  .hero-heading__title {
    font-size: 28px;
  }

  .hero-social-media-container {
    display: block;
    right: 130px;
    top: 350px;
  }

  .hero-heading__desc {
    font-size: 28px;
  }
}


/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
  .hero-heading-container {
    display: block !important;
    width: 650px;
    left: 50px;
    top: 350px;
  }

  .hero-heading__title {
    font-size: 45px;
  }

  .hero-social-media-container {
    display: block;
    right: 70px;
    top: 350px;
  }

  .hero-heading__desc {
    font-size: 33px;
  }
}


/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
  .hero-heading-container {
    display: block;
    width: 900px;
    left: 40px;
    top: 45%;
  }

  .hero-heading__title {
    font-size: 45px;
  }

  .hero-social-media-container {
    display: block;
    right: 40px;
    top: 48%;
  }

  .hero-heading__desc {
    font-size: 33px;
  }
}


/*  X-Large devices (large desktops, 1200px and up) */

@media (min-width: 1200px) {
  .hero-heading-container {
    display: block;
    width: 1100px;
    left: 80px;
    top: 45%;
  }

  .hero-heading__title {
    font-size: 61px;
  }

  .hero-social-media-container {
    display: block;
    right: 100px;
    top: 48%;
  }

  .hero-heading__desc {
    font-size: 33px;
  }
}


/* XX-Large devices (larger desktops, 1400px and up) */
@media (min-width: 1400px) {

  .hero-social-media-container {
    display: block;
    right: 110px;
    top: 48%;
  }

  .hero-heading-container {
    display: block;
    width: 1200px;
    left: 100px;
    top: 45%;
  }

  .hero-heading__title {
    font-size: 61px;
  }

  .hero-heading__desc {
    font-size: 33px;
  }
}
</style>

