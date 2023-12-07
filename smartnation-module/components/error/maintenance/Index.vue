<script lang="ts" setup>

const props = defineProps({
  statusCode: { type: Number, required: true, default: 503 },
  message: { type: String, required: true, default: 'Maintenance' },
})

</script>

<template>
  <div>
    <div class="d-flex flex-column mb-3 mx-auto">
      <NuxtImg :class="'image-notfound img-fluid'" placeholder="/images/mascot_smartnation.png"
        src="/images/mascot_smartnation.png" loading="lazy" />

      <div class="page-notfound__statuscode">{{ statusCode }}</div>
      <h3 class="page-notfound__text" v-html="message"></h3>
    </div>
  </div>
</template>


<style lang="css" scoped>
.page-notfound-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.page-notfound__text {
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  margin-bottom: 13px;
}

.page-notfound__statuscode {
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  text-align: center;
  margin-bottom: 13px;
}


.image-notfound {
  width: fit-content;
  height: 350px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  /* margin-bottom: 13px; */
}


/* Dark Mode */

.dark-mode .page-notfound-container {
  background-color: #262626;
}

.dark-mode .page-notfound__text {
  color: #fff;
}

@media (min-width: 1200px) {

  .page-notfound__text {
    font-size: 18px;
  }

  .page-notfound__statuscode {
    font-size: 28px;
  }

}
</style>