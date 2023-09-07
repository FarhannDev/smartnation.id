<template>
  <div class="card mb-3 post-card__featured__item position-relative" style="border-radius: 12px; ">
    <NuxtImg :src="sourceMedia" class="card-img-top border-0" style="border-radius: 9px 9px 0 0;" alt="Lorem ipsum" />
    <div class="card-body">
      <div class="d-flex flex-row">
        <BootstrapIcon name="clock" style="color: #888888;" />
        <span style="color: #888888;" class="ms-1">{{ timeStamp }}</span>
      </div>

      <NuxtLink to="/" :aria-label="title"
        :class="'link-offset-2 link-underline link-underline-opacity-0 px-0 stretched-link post-heading__title'">{{ title
        }}
      </NuxtLink>

      <div class="d-flex flex-wrap">
        <NuxtLink class="gray-button text-decoration-none" to="/">Artikel</NuxtLink>
        <NuxtLink class="gray-button text-decoration-none" to="/">Nasional</NuxtLink>
        <NuxtLink class="gray-button text-decoration-none" to="/">Smart City</NuxtLink>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
const apiBaseUrl: string = 'https://smartnation.id/wp-json/wp/v2';

const props = defineProps({
  title: { type: String },
  dateTime: { type: String },
  sourceMedia: { type: String },
})

const timeStamp = new Date(props.dateTime).toLocaleDateString('id-ID', {
  dateStyle: "long",
})

const { data: media } = await useAsyncData<Media>(`/media/${props?.sourceMedia}`, () => $fetch(`/media/${props.sourceMedia}`, {
  baseURL: apiBaseUrl
}))

</script>


<style scoped>
.post-card__featured__item {
  width: 100%;
  height: auto;
  /* border: 0.74px #E7E7E7; */
  background-color: #fff;
  box-shadow: 0px 0px 0px 0.7423168420791626px #676E7629;
  /* box-shadow: 0px 0.7423168420791626px 0.7423168420791626px 0px #0000001F;

  /* box-shadow: 0px 0px 0px 0.7423168420791626px #676E7629;  */

  /* box-shadow: 0px 1.4846336841583252px 3.7115840911865234px 0px #676E7614; */

}

.post-heading__title {
  margin-top: 10px;
  color: #5d5d5d !important;
  font-family: poppins;
  font-size: 20px !important;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  margin-bottom: 10px;
  padding-right: 10px;
  padding-left: 10px;
}

.gray-button {
  background-color: #E7E7E7;
  color: #6D6D6D;
  border: none;
  border-radius: 8px;
  padding: 4px 10px;
  font-size: 14px;
  cursor: pointer;
  margin: 5px;
  transition: background-color 03s;
  font-family: poppins;
}
</style>