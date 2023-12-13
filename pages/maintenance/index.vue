<script lang="ts" setup>

const props = defineProps({ error: { type: Object } })

definePageMeta({ layout: 'maintenance' })

useSeoMeta({ title: "Sedang Dalam Perbaikan", description: 'Maaf, Situs Ini Sedang Dalam Perbaikan, Situs Kami Tidak Tersedia Sementara Waktu, Perbaikan Sedang Dilakukan, Kami Berusaha Secepat Mungkin' })


const message = `
  Maaf, Situs Ini Sedang Dalam Perbaikan <br />
  Situs Kami Tidak Tersedia Sementara Waktu <br />
  Perbaikan Sedang Dilakukan, Kami Berusaha Secepat Mungkin
`

</script>


<template>
  <div>
    <div class="row justify-content-center align-content-center g-3 pt-5">
      <div class="col-lg-4 col-xl-5 col-md-auto col-sm-auto">
        <div class="d-flex flex-column mb-3 mx-auto">
          <NuxtImg :class="'image-notfound img-fluid'" placeholder="/images/mascot_smartnation.png"
            src="/images/mascot_smartnation.png" loading="lazy" />

          <div class="page-notfound__statuscode">503</div>
          <h3 class="page-notfound__text" v-html="message"></h3>
        </div>
      </div>
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