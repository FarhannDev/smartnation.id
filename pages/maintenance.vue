<script lang="ts" setup>

definePageMeta({ layout: 'maintenance' })

useSeoMeta({
  title: "Maaf, Situs Ini Sedang Dalam Perbaikan"
})
</script>


<template>
  <div class="page-notfound-container d-flex justify-content-center align-self-center ">

    <div class="d-flex flex-column mb-3 mx-auto">
      <NuxtImg :class="'image-notfound'" placeholder="/images/ccsn_empty_page.png" src="/images/ccsn_empty_page.png"
        loading="lazy" />
      <h3 class="page-notfound__text">Maaf, Situs Ini Sedang Dalam Perbaikan</h3>
      <h3 class="page-notfound__text">Situs Kami Tidak Tersedia Sementara Waktu</h3>
      <h3 class="page-notfound__text">Perbaikan Sedang Dilakukan, Kami Berusaha Secepat Mungkin</h3>

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
  line-height: 120%;
  text-align: center;
  margin-bottom: 13px;
}

.image-notfound {
  width: auto;
  height: 350px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  object-fit: cover;
  margin-bottom: 13px;
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

}
</style>