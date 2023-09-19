<template>
  <div class="hstack gap-2">
    <input class="form-control me-auto w-100 text-start text-capitalize" style="" type="text"
      placeholder="Masukan alamat email kamu" aria-label="Masukan alamat email kamu" required autocomplete="email">
    <button type="button" class="btn btn-danger btn-md rounded">Kirim</button>
  </div>
</template>

<style scoped>
.form-control {
  width: 100%;
  height: 40px;
  color: #667085;
  /* Body/Small/Regular */
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  /* 142.857% */
}
</style>