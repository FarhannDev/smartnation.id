<style scoped>
.figure {
  position: relative;
}

.figure .figure-img {
  width: 100%;
  min-width: 282px;
  height: auto;
  min-height: 156px;
  border-radius: 8px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%,
      rgba(0, 0, 0, 0.65) 100%);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(50%);
  overflow: hidden;
  transition: ease-in 500ms;

}

.figure .figure-img:hover {
  filter: brightness(75%);
  opacity: 1;
}

.figure .figure-caption {
  position: absolute;
  top: 50%;
  left: 20px;

  overflow: hidden;
}

.event-cover__title {
  margin-right: 3px;
  overflow: hidden;
  color: rgba(255, 255, 255, 0.80);
  text-overflow: ellipsis;
  text-shadow: 2px 2px 8px #1c1616;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  /* 21.328px */
}

.event-cover__desc {
  overflow: hidden;
  color: rgba(255, 255, 255, 0.80);
  text-overflow: ellipsis;
  text-shadow: 2px 2px 8px #1c1616;
  font-family: Poppins;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 14.218px */
}
</style>

<template>
  <figure class="figure">
    <NuxtLink :to="`/${postId}`" aria-label="Baca Selengkapnya">
      <NuxtPicture :class="'figure-img img-fluid rounded'" :img-attrs="{ class: 'figure-img img-fluid rounded' }"
        format="webp" :src="featuredImage" :alt="alternative" :height="156" loading="lazy" />
      <!-- <NuxtImg :src="featuredImage" :alt="alternative" :height="156" loading="lazy"
        :class="'figure-img img-fluid rounded'" /> -->

      <figcaption class="figure-caption">
        <h5 class="event-cover__title">{{ title.length >= 25
          ? `${title.substring(0, 25)}...`
          : title
        }}</h5>
        <p class="event-cover__desc">{{ description.length >= 50
          ? `${description.substring(0, 50)}...`
          : description }} </p>
      </figcaption>

    </NuxtLink>
  </figure>
</template>

<script lang="ts" setup>

const props = defineProps({
  postId: { type: String },
  alternative: { type: String },
  featuredImage: { type: String },
  title: { type: String },
  description: { type: String }
})
</script>

