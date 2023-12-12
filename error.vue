<script lang="ts" setup >

definePageMeta({ layout: "404" })

const props = defineProps({ error: { type: Object } })

const title: globalThis.Ref<string> = ref(`${props.error?.statusCode} - ${props.error?.message}`)
const statusCode: globalThis.Ref<string> = ref(`${props.error?.statusCode}`)
const message: globalThis.Ref<string> = ref(`${props.error?.statusMessage}`)

useSeoMeta({ title: title.value, description: message })
const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <div>
    <div class="row justify-content-center align-content-center g-3 pt-5">
      <div class="col-lg-4 col-xl-4 col-md-auto col-sm-auto">
        <div class="d-flex flex-column mb-3 mx-auto">
          <NuxtImg :class="'image-notfound'" placeholder="/images/ccsn_empty_page.png" src="/images/ccsn_empty_page.png"
            loading="lazy" :alt="title" :quality="75" />
          <div class="page-notfound__statuscode">{{ statusCode }}</div>
          <div class="page-notfound__message">{{ message }}</div>
          <button @click="handleError" type="button" class="page-notfound__button bn28"> Kembali Halaman Utama</button>
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

.page-notfound__statuscode {
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  text-align: center;
  margin-bottom: 13px;
}

.page-notfound__message {
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  text-align: center;
  /* margin-bottom: 13px; */
}

.page-notfound__button {
  width: auto;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 45px;
  text-align: center;
  border: none;
  background-size: 300% 100%;
  border-radius: 50px;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.page-notfound__button:hover {
  background-position: 100% 0;
  moz-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.page-notfound__button:focus {
  outline: none;
}

.page-notfound__button.bn28 {
  background-image: linear-gradient(to right,
      #eb3941,
      #f15e64,
      #e14e53,
      #e2373f);
  /* box-shadow: 0 5px 15px rgba(242, 97, 103, 0.4); */
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

.dark-mode .page-notfound__message {
  color: #fff;
}

@media (min-width: 1200px) {

  .page-notfound__message {
    font-size: 22px;
  }

  .page-notfound__statuscode {
    font-size: 28px;
  }

}
</style>
