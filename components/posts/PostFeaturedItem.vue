<script lang="ts" setup>

const props = defineProps({
  title: { type: String },
  dateTime: { type: String },
  featuredMedia: { type: String },
  categories: { type: Array<Number> },
  postId: { type: Number }
})

const category = ref([])
const timeStamp = new Date(props.dateTime).toLocaleDateString('id-ID', {
  dateStyle: "long",
})

</script>

<template>
  <div class="card mb-3 post-card__featured__item position-relative" style="border-radius: 12px; ">
    <NuxtImg :src="featuredMedia" class="card-img-top border-0" style="border-radius: 9px 9px 0 0;" alt="Lorem ipsum" />
    <div class="card-body">
      <div class="d-flex flex-row">
        <BootstrapIcon name="clock" style="color: #888888;" />
        <span style="color: #888888;" class="ms-1">{{ timeStamp }}</span>
      </div>

      <NuxtLink :to="`/${postId}`" :aria-label="title"
        :class="'link-offset-2 link-underline link-underline-opacity-0 px-0 stretched-link post-heading__title'">
        <div v-html="title"></div>
      </NuxtLink>

    </div>
  </div>
</template>


<style scoped>
.post-card__featured__item {
  width: 100%;
  height: auto;
  background-color: #fff;
  box-shadow: 0px 0px 0px 0.7423168420791626px #676E7629;
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
  margin: 3px;
  transition: background-color 03s;
  font-family: poppins;
}

.dark-mode .post-card__featured__item {
  background-color: #262626;
}
</style>