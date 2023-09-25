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



