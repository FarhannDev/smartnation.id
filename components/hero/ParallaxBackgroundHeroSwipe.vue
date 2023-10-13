<script lang="ts" setup>
import "~/assets/css/parallax-background.css"

const props = defineProps({
  background: { type: String, required: true },
  text: { type: String, required: true },
  desc: { type: String },
  postId: { type: String }
})

const backgroundStyle = () => {
  return {
    backgroundImage: `url(${props.background})`
    // backgroundAttachment: 'fixed',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // objectFit: "cover",
    // objectPosition: "center",
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





