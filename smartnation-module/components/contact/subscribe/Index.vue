<script lang="ts" setup>
import Swal from 'sweetalert2';

defineProps({ title: { type: String }, description: { type: String } })

const emits = defineEmits(['inputEmail'])
const email: globalThis.Ref<string> = ref('')

const onSubmitHandler = () => {
  if (Boolean(email.value.length)) {
    Swal.fire({
      icon: 'success',
      title: 'Berhasil',
      text: 'Terima kasih Sudah Berlangganan Buletin Kami Nantikan pembaruan terbaru kami dengan info terbaru',
      confirmButtonText: "Selesai",
      confirmButtonColor: '#295B19'
    })
    email.value = ''
  }
}

</script>



<template>
  <div class="d-flex justify-content-center mx-auto subscribe-container">
    <div class="d-block position-relative">

      <!-- Subscribe Heading Container -->
      <div class="subscribe-heading">
        <h3 class="subscribe-heading__title">{{ title }}</h3>
        <p class="subscribe-heading__subtitle">{{ description }}</p>
      </div>

      <!-- Subscribe Form Input -->
      <div class="subscribe-forminput">
        <div class="hstack gap-2">
          <input v-model="email" class="form-control subscribe-forminput__control" type="email"
            placeholder="Masukan Alamat Email Anda" aria-label="Masukan Alamat Email Anda" required
            autocomplete="email" />
          <button :disabled="!email.length" @click="onSubmitHandler" type="button"
            class="btn btn-danger btn-md rounded">Kirim</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.subscribe-container {
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 50px;
  background-color: #fff0f2;
}


.subscribe-heading__title {
  color: #CE2F2F;
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-align: center;
}

.subscribe-heading__subtitle {
  color: #6D6D6D;
  text-align: center;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding-top: 5px;
  /* 14.4px */
}


.subscribe-forminput__control {
  width: 100%;
  height: 40px;
  color: var(--gray-500, #667085);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  border-radius: 5.471px;
  border: 0.684px solid var(--gray-300, #D0D5DD);
  background: var(--Background, #FFF);
  box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
}



/* Set Dark-Mode */
.dark-mode .subscribe-title {
  color: #fafafa;
}

.dark-mode .subscribe-subtitle {
  color: #fafafa;
}
</style>