<script lang="ts" setup>
import Swal from "sweetalert2"

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
</template>

<style scoped>
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
  width: 100px;
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
</style>