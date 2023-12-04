
import { NuxtLink } from '#build/components';
<script lang="ts" setup>

const props = defineProps({
  heading: { type: String },
  subheading: { type: String, required: true },
  description: { type: String, required: true },
  images: { type: String, required: true },
  icon: { type: String, required: true },
  link: { type: String, required: true },
  name: { type: String, required: true }
})

</script>



<template>
  <div>
    <div class="follow-sosmed">
      <h3 class="follow-sosmed__heading">{{ heading }}</h3>
      <h5 class="follow-sosmed__subheading">{{ subheading }}</h5>
      <p class="follow-sosmed__description">{{ description }}</p>

      <div class="d-flex justify-content-start mb-3">
        <NuxtImg v-for="(image, index) in images" :key="index" class="follow-sosmed__cover" :src="image"
          alt="Ikuti Kami Di Tiktok" loading="lazy" :quality="75" format="webp" />
      </div>

      <div class="follow-sosmed__button pt-4">
        <NuxtLink :to="link" :aria-label="`Ikuti Di {{ name }}`" :title="`Ikuti Di {{ name }}`" target="_blank"
          class="btn btn-sm btn-danger follow-sosmed__button__link">
          <div class="d-flex justify-content-start g-2">
            <span class="follow-sosmed__button__link__icon" v-html="icon"></span>
            <span class="follow-sosmed__button__link__name"> Ikuti di {{ name }}</span>
          </div>

        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.follow-sosmed {
  width: 100%;
  height: auto;
  overflow: hidden;
  display: block;
}

.follow-sosmed__heading {
  color: #F6F6F6;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.follow-sosmed__subheading {
  color: #F6F6F6;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.follow-sosmed__description {
  color: #E7E7E7;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.follow-sosmed__cover {
  width: 83px;
  height: 75px;
  border-radius: 8px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 13px;
}

.follow-sosmed__button__link {
  width: 167.4px;
  height: 36px;
  border-radius: 7.2px;
  background: var(--primary-600, #D71149);
}

.follow-sosmed__button__link .follow-sosmed__button__link__icon {
  margin-right: 8px;
  width: 14.4px;
  height: 13.5px;
}

.follow-sosmed__button__link .follow-sosmed__button__link__name {
  color: var(--Background, #FFF);
  font-family: Poppins;
  font-size: 11.7px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding: 6px;
}
</style>