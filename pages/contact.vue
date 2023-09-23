<template>
  <NuxtLayout name="page-layout">

    <template #hero>
      <HeroParallaxBackground text="Hubungi Kami" desc="Jangan ragu untuk menghubungi kami."
        background="/images/background/bg-contact-me.png" />
    </template>

    <!-- Conctme Section Start -->
    <section class="contactme-section-container position-relative py-5">
      <div class="container">

        <div class="row justify-content-start align-items-center g-3 ">
          <div class="col-lg-6">
            <div class="d-flex flex-column justify-content-start contact-heading-container g-2">
              <h1 class="contact-title ">Mari Berbincang!</h1>
              <p class="contact-desc">
                Kami sangat ingin mendengar dari Anda! Apakah Anda memiliki pertanyaan, komentar, atau saran yang ingin
                Anda
                sampaikan? Jangan ragu untuk menghubungi kami. Kami senantiasa siap menerima pesan Anda.
              </p>
            </div>
          </div>
          <div class="col-lg-6 ">
            <div class="d-flex flex-column justify-content-start g-2">
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

                  <div class="text-end text-secondary fw-normal">{{ limitKarakter - inputMessage.length }} Karakter
                    Tersisa
                  </div>
                </div>
                <button :disabled="!inputName || !inputEmail || !inputMessage" type="submit"
                  class="contact-input__button ">Kirim</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Conctme Section End -->

  </NuxtLayout>
</template>


<style scoped>
.contact-heading-container {
  position: relative;
  padding: 0px;
}

.contact-title {
  color: var(--danger-600, #CE2F2F);
  /* Font/Title 2 Bold */
  font-family: Poppins;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  margin-bottom: 13px;
  /* 30px */
}


.contact-desc {
  /* position: absolute; */
  color: var(--font-500, #6D6D6D);
  text-align: start;

  /* Font/Title 3 */
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 24px */
}

.contact-form__label__input {
  color: var(--font-600, #5D5D5D);


  /* Font/Body 2 */
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 19.2px */
}

.contact-form__input {
  color: var(--font-800, #454545);
  /* Font/Body 2 */
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  height: 48px;
  border-radius: 12px;
  border: 1px solid var(--Primary, #545F71);
  background: var(--Background, #FFF);
  /* 19.2px */
}



.contact-form__input__textarea {
  color: var(--font-600, #5D5D5D);
  /* Font/Body 2 */
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  border-radius: 12px;
  border: 1px solid var(--Primary, #545F71);
  height: 176px;
  /* 19.2px */
}

.contact-input__button {
  background: var(--primary-600, #D71149);
  color: var(--Background, #FFF);
  width: 146px;
  padding: 12px 16px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  transition: ease 300ms;
}

.contact-input__button:hover {
  background: var(--primary-600, #D71149);
}

.contact-input__button:disabled {
  border-radius: 8px;
  background: var(--font-300, #B0B0B0);
}



/* //Set media query X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {

  .hero-image-parallax {
    min-height: 100vh;
    background-attachment: fixed;
  }

  .hero-image-bg__gradient {
    min-height: 100vh;
  }

  .hero-heading__title {
    width: 100%;
    font-size: 61px;
  }

  .hero-heading__desc {
    width: 100%;
    font-size: 31px;
  }


  .contact-heading-container {
    padding: 12px 12px;
  }

}
</style>


<script lang="ts" setup>
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// Set Meta SEO
useSeoMeta({
  title: "Hubungi Kami",
  description: 'Jangan ragu untuk menghubungi kami.',
  ogTitle: 'Hubungi Kami',
  ogDescription: 'Jangan ragu untuk menghubungi kami.',
})

// Initial State 
const inputName = ref('') as globalThis.Ref<string | undefined>
const inputEmail = ref('') as globalThis.Ref<string | undefined>
const inputMessage = ref('') as globalThis.Ref<string | undefined>
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