<template>
  <div class="card post-card__item">
    <NuxtImg :src="sourceMedia" loading="lazy" :quality="50" class="card-img-top border-0"
      style="border-radius: 20px 20px 0 0;" :alt="'berita'" />
    <div class="card-body ">
      <div class="vstack gap-2">

        <span class="d-inline post-card__item__datetime">
          <BootstrapIcon name="clock" style="color: #888888;" />
          <span style="color: #888888;" class="ms-1">
            {{ timeStamp }}
          </span>
        </span>


        <NuxtLink to="/"
          class="link-secondary link-offset-2 link-underline-0 link-underline-opacity-0 text-start fs-5 stretched-link post-card__item__link">
          <div v-html="title" class="post-card__item__title"></div>
        </NuxtLink>
        <div class="hstack gap-2 mx-0 px-0">
          <button type="button" class="post-item__btn">Berita</button>
          <button type="button" class="post-item__btn">Nasional</button>
          <button type="button" class="post-item__btn">Smart City</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

const apiBaseUrl: string = 'https://smartnation.id/wp-json/wp/v2';

const props = defineProps({
  title: { required: true, type: String },
  dateTime: { type: String },
  sourceMedia: { type: String },
})

const { data: media } = await useAsyncData<Media>(`/media/${props?.sourceMedia}`, () => $fetch(`/media/${props?.sourceMedia}`, {
  baseURL: apiBaseUrl
}))

const timeStamp = new Date(props.dateTime).toLocaleDateString('id-ID', {
  dateStyle: "long",
})

</script>


<style lang="css" scoped>
.post-card__item {
  position: relative;
  width: 100%;
  height: auto;
  border: 1px solid #E7E7E7;
  background-color: #fff;
  box-shadow: 0px 1.4846336841583252px 3.7115840911865234px 0px #676E7614;
  border-radius: 20px;
}

.post-card__item__title {
  font-family: Poppins;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: left;
  color: #5D5D5D;
  margin-bottom: 8px;
  margin-top: 8px;
  transition: ease-in 300ms;
}



.post-card__item__datetime {
  font-family: Poppins;
  font-size: 13px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0em;
  text-align: left;
  color: #888888;

}

.post-item__btn {
  background-color: #E7E7E7;
  color: #6D6D6D;
  border: none;
  border-radius: 8px;
  padding: 4px 10px;
  font-size: 14px;
  cursor: pointer;
  /* margin: 5px; */
  transition: background-color 03s;
  font-family: poppins;

}
</style>