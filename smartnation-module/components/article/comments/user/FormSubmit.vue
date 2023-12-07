<script lang="ts" setup></script>
<template>
  <div>
    <div class="article-comments__card">
      <div class="article-comments__body">
        <h3 class="article-comments-title">Komentar</h3>
        <p class="article-comments__text">
          Alamat Email Anda Tidak Akan Dipublikasikan. Bidang yang
          Wajib Ditandai
          <span class="article-comments__text__label">*</span>
        </p>

        <div class="d-flex flex-column justify-content-start g-2">
          <form class="article-form__input-container">
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label" hidden>Example textarea</label>
              <textarea class="form-control article-form__input__text" id="exampleFormControlTextarea1"
                rows="3"></textarea>
            </div>

            <div class="mb-3">
              <div class="row">
                <div class="col-sm-6 mb-3">
                  <input type="text" class="form-control article-form__input" placeholder="Nama Lengkap"
                    aria-label="Nama Lengkap" />
                </div>
                <div class="col-sm-6 mb-3">
                  <input type="text" class="form-control article-form__input" placeholder="Alamat Email"
                    aria-label="Alamat Email" />
                </div>
              </div>
            </div>

            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input rounded-0" id="exampleCheck1" checked />
              <label class="form-check-label article-form__input_check__label" for="exampleCheck1">Simpan
                nama, email, dan situs web saya pada
                peramban ini untuk komentar saya
                berikutnya.</label>
            </div>

            <div class="mb-3">
              <button disabled type="submit" class="article-form__button">
                Posting
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.article-comments__card {
  width: 100%;
  /* height: auto; */
  height: auto;
  flex-shrink: 0;
  border-radius: 16px;
  border: 0.837px solid var(--font-200, #d1d1d1);
  background: var(--Background, #fff);
  overflow: hidden;
}

.article-comments__card .article-comments__body {
  padding: 20px;
}

.article-comments__card,
.article-comments__title {
  color: var(--font-700, #4f4f4f);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 19.2px */
}





.article-comments__text {
  color: var(--font-400, #888) !important;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 9.6px */
}

.article-comments__text__label {
  color: #ce2f2f;
}

.article-form__input-container {
  width: 100%;
  height: auto;
}

.article-form__input__text {
  border-radius: 12px;
  border: 0.837px solid #d1d1d1;
  background: #f6f6f6;
  height: 137.268px;
}

.article-form__input {
  height: 40px;
  border-radius: 8px;
  border: 0.837px solid var(--font-100, #e7e7e7);
  background: var(--font-50, #f6f6f6);
  color: var(--font-300, #b0b0b0);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 9.6px */
}

.article-form__button {
  border-radius: 8px;
  background: var(--font-300, #b0b0b0);
  color: var(--Background, #fff);
  width: 74.687px;
  height: auto;
  padding: 8.37px;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  color: var(--font-50, #f6f6f6);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 9.6px */
  transition: ease 300ms;
}

.article-form__button:hover {
  background: var(--font-300, #b0b0b0);
}

.article-form__button:disabled {
  border-radius: 8px;
  background: var(--font-300, #b0b0b0);
}

.article-form__input_check__label {
  color: var(--font-400, #888);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 9.6px */
}



.dark-mode .article-comments__card {
  background-color: #262626;
  border: 1px solid #454545;
}

.dark-mode .article-comments__card,
.article-comments__title {
  color: var(--font-700, #fff);
}

.dark-mode .article-comments__card,
.article-comments__text {
  color: var(--font-400, #fff);
}

.dark-mode .article-form__input__text {
  background-color: #262626;
  border: 1px solid #454545;
  color: #fff;
}

.dark-mode .article-form__input__text::placeholder {
  color: #fff;
}

.dark-mode .article-form__input {
  background-color: #262626;
  border: 1px solid #454545;
  color: #fff;
}

.dark-mode .article-form__input::placeholder {
  color: #fff;
}

.dark-mode .article-form__input_check__label {
  color: #fff;
}
</style>
