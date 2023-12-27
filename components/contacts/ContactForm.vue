<script lang="ts" setup>
import Swal from "sweetalert2"
import "~/assets/css/contact.css"
import "~/assets/css/themes/dark-mode.theme.css"

const props = defineProps({ title: { type: String }, description: { type: String } })

// Initial State 
const inputName = ref('') as globalThis.Ref<string>
const inputEmail = ref('') as globalThis.Ref<string>
const inputMessage = ref('') as globalThis.Ref<string>
const limitKarakter = ref(1000) as globalThis.Ref<number>


// Handler
onUpdated(() => {
  if (inputMessage.value.length >= limitKarakter.value) {
    Swal.fire({
      title: 'Gagal!',
      text: 'Maaf Jumlah Karakter Sudah Mencapai Batas',
      icon: 'warning',
      confirmButtonText: 'Ulangi Kembali',
      confirmButtonColor: '#295B19'
    })
  }
})

const disableButton = () => {
  return Boolean(inputName.value)
    && Boolean(inputEmail.value)
    && Boolean(inputMessage.value)
}
const sendMessageToEmail = () => {
  if (Boolean(inputName.value)
    && Boolean(inputEmail.value)
    && Boolean(inputMessage.value)) {

    // Handle logic to send message to email
    if (inputMessage.value.length <= limitKarakter.value) {
      console.log('Berhasil dikirim via email')

      Swal.fire({
        icon: 'success',
        title: 'Berhasil',
        text: '"Terima kasih atas pesan Anda! Kami telah menerima pesan Anda dengan sukses. Tim kami akan segera meninjau pesan Anda dan akan menghubungi Anda melalui email dalam waktu singkat."',
        confirmButtonText: "Selesai",
        confirmButtonColor: '#295B19'
      })

      // Clear form
      inputName.value = ''
      inputEmail.value = ''
      inputMessage.value = ''
    } else {
      return null
    }


  }
}
</script>

<template>
  <!-- section kontak start -->
  <section class="contactme-section-container position-relative py-5">
    <div class="container" data-aos="fade-up" data-aos-duration="1500">
      <div class="row justify-content-start align-items-center g-3 py-5">
        <div class="col-lg-6 col-xl-6 col-md-12">
          <div class="d-flex flex-column justify-content-start contact-heading-container g-2">
            <h1 class="contact-title ">{{ title }}</h1>
            <p class="contact-desc">{{ description }}</p>
          </div>
        </div>

        <div class="col-lg-6  col-xl-6 col-md-12">
          <div class="d-flex flex-column justify-content-start g-3">
            <form @submit.prevent="sendMessageToEmail">
              <div class="mb-3">
                <label for="inputNama" class="form-label contact-form__label__input">Nama Lengkap <span
                    class="text-danger">*</span></label>
                <input v-model="inputName" type="text" class="form-control contact-form__input" id="inputNama"
                  placeholder="Isikan Dengan Nama Lengkap Anda" autocomplete="name">
              </div>
              <div class="mb-3">
                <label for="inputEmail" class="form-label contact-form__label__input">Email <span
                    class="text-danger">*</span></label>
                <input v-model="inputEmail" type="email" class="form-control contact-form__input" id="inputEmail"
                  aria-describedby="emailHelp" placeholder="Isikan Dengan Alamat Email Anda" autocomplete="email">
              </div>
              <div class="mb-3">
                <label for="inputMessage" class="form-label contact-form__label__input">Pesan <span
                    class="text-danger">*</span></label>
                <textarea v-model="inputMessage" placeholder="Tuliskan Isi Pesan"
                  class="form-control contact-form__input__textarea " id="inputMessage" rows="7"
                  :maxlength="limitKarakter"></textarea>


              </div>
              <div class="pt-3">
                <button :disabled="!inputName || !inputEmail || !inputMessage" type="submit"
                  class="contact-input__button ">Kirim</button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  </section>
  <!-- section kontak end -->
</template>

<style scoped></style>