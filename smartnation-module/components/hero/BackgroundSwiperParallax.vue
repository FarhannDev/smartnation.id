
<script lang="ts" setup>

import { PostsDataType } from '~/utils/data/getInitialPostsData';
import { PropType } from "vue"

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

defineProps({ posts: { type: Object as PropType<PostsDataType> } })

</script>


<template>
  <section class="hero-section">

    <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]" :slides-per-view="1" :grabCursor="true"
      :pagination="{
        clickable: true,
      }" :effect="'creative'" :autoplay="{
  delay: 3000,
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
      <SwiperSlide v-if="posts" v-for="post in posts
            .sort((a, b) => b.date_gmt.toString().localeCompare(a.date_gmt.toString()))
            .slice(0, 5)" :key="post.id">



        <div class="hero-image-parallax" :style="backgroundStyle(post.featured_media)">
          <div class="hero-image-bg__gradient "></div>
          <div class="container ">
            <div class="hero-heading-container ">
              <NuxtLink :to="`/article/${post.slug}`" :aria-label="`Baca Selengkapnya ${post.title.rendered}`"
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



<style lang="css" scoped>
.hero-image-parallax {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  scroll-behavior: smooth;
  -webkit-transform: scale(1);
  transform: scale(1);
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

.container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hero-heading-container {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  z-index: 1000;
}



.hero-heading__title {
  display: block;
  color: var(--font-50, #F6F6F6);
  font-family: Poppins;
  font-size: 33px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-align: start;
  width: fit-content;
  margin-left: 12px;
  margin-right: 12px;

}

.hero-heading__desc {
  color: var(--Background, #FFF);
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  width: 100%;
  margin-left: 12px;
  margin-right: 12px;
}


.hero-social-media-container {
  display: none;
  position: absolute;
  top: 40%;
  right: 10px;
  z-index: 1000;
}

.social-media__icons svg:hover {
  background-color: #D71149;
}

@media (min-width: 1200px) {
  .hero-social-media-container {
    display: block;
    right: 20px;
  }

  .hero-heading__title {
    display: block;
    /* font-size: 64px; */
    font-size: 42px;

    width: 1000px;
    margin-left: 0px;
  }

  .hero-heading__desc {

    font-size: 33px;

    width: 1200px;
    margin-left: 0px;
  }
}

@media (min-width: 1400px) {
  .hero-heading__title {
    display: block;
    /* font-size: 64px; */
    font-size: 42px;
    width: 1200px;
    margin-left: 0px;

  }

  .hero-heading__desc {

    font-size: 33px;

    width: 1200px;
    margin-left: 0px;
  }

}
</style>
