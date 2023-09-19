<template>
  <section class="hero-section">
    <div class="hero-image-parallax">
      <div class="hero-image-bg__gradient"></div>
      <div class="container">
        <div class="hero-heading-container">
          <h1 class="hero-heading__title">Hubungi Kami</h1>
          <p class="hero-heading__desc">Jangan ragu untuk menghubungi kami.</p>
        </div>

        <div class="hero-social-media-container">
          <div class="d-flex flex-column text-center g-3">
            <NuxtLink to="/" target="_blank" aria-label="Selengkapnya"
              class="link-offset-2 link-underline link-underline-opacity-0 link-secondary mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10.0035 0.676725C11.7399 0.601645 12.2935 0.584961 16.7167 0.584961C21.1398 0.584961 21.6935 0.603036 23.4284 0.676725C25.1633 0.750414 26.3475 1.01041 27.3837 1.3872C28.4688 1.77233 29.4532 2.37436 30.2674 3.15297C31.0963 3.91628 31.7358 4.83948 32.1444 5.86001C32.547 6.83327 32.8224 7.94556 32.9023 9.57229C32.9823 11.206 33 11.726 33 15.879C33 20.0334 32.9808 20.5534 32.9023 22.1843C32.8239 23.811 32.547 24.9233 32.1444 25.8966C31.7358 26.9172 31.0953 27.842 30.2674 28.6064C29.4532 29.385 28.4688 29.9856 27.3837 30.3694C26.3475 30.7476 25.1633 31.0062 23.4313 31.0812C21.6935 31.1563 21.1398 31.173 16.7167 31.173C12.2935 31.173 11.7399 31.1549 10.0035 31.0812C8.27155 31.0076 7.08731 30.7476 6.0511 30.3694C4.96444 29.9856 3.97989 29.384 3.16599 28.6064C2.33758 27.8426 1.69651 26.9183 1.28748 25.898C0.886322 24.9247 0.610986 23.8124 0.53105 22.1857C0.451113 20.552 0.43335 20.032 0.43335 15.879C0.43335 11.7246 0.452594 11.2046 0.53105 9.57507C0.609506 7.94556 0.886322 6.83327 1.28748 5.86001C1.69712 4.83959 2.33868 3.91532 3.16747 3.15158C3.98022 2.37367 4.96378 1.77156 6.04962 1.3872C7.08583 1.01041 8.27007 0.751805 10.002 0.676725H10.0035ZM23.2966 3.42965C21.5795 3.35596 21.0643 3.34067 16.7167 3.34067C12.369 3.34067 11.8539 3.35596 10.1367 3.42965C8.54837 3.49778 7.68683 3.74665 7.11248 3.9566C6.35308 4.23467 5.80981 4.56419 5.23989 5.09948C4.69965 5.59313 4.28388 6.19409 4.02308 6.85829C3.79956 7.39775 3.53458 8.20695 3.46205 9.69881C3.38359 11.3116 3.36731 11.7955 3.36731 15.879C3.36731 19.9625 3.38359 20.4463 3.46205 22.0592C3.53458 23.551 3.79956 24.3602 4.02308 24.8997C4.28362 25.5629 4.69958 26.1649 5.23989 26.6585C5.7654 27.166 6.40637 27.5567 7.11248 27.8014C7.68683 28.0113 8.54837 28.2602 10.1367 28.3283C11.8539 28.402 12.3676 28.4173 16.7167 28.4173C21.0658 28.4173 21.5795 28.402 23.2966 28.3283C24.885 28.2602 25.7465 28.0113 26.3209 27.8014C27.0803 27.5233 27.6236 27.1938 28.1935 26.6585C28.7338 26.1649 29.1497 25.5629 29.4103 24.8997C29.6338 24.3602 29.8988 23.551 29.9713 22.0592C30.0498 20.4463 30.0661 19.9625 30.0661 15.879C30.0661 11.7955 30.0498 11.3116 29.9713 9.69881C29.8988 8.20695 29.6338 7.39775 29.4103 6.85829C29.1142 6.14503 28.7634 5.63477 28.1935 5.09948C27.6679 4.59209 27.028 4.2016 26.3209 3.9566C25.7465 3.74665 24.885 3.49778 23.2966 3.42965ZM14.6369 20.5937C15.7984 21.0479 17.0918 21.1091 18.2961 20.7671C19.5004 20.4251 20.5409 19.701 21.2399 18.7185C21.9389 17.7359 22.2531 16.5559 22.1287 15.38C22.0044 14.2041 21.4492 13.1052 20.5581 12.271C19.99 11.7377 19.3031 11.3294 18.5468 11.0755C17.7906 10.8215 16.9838 10.7282 16.1845 10.8022C15.3852 10.8763 14.6134 11.1158 13.9245 11.5037C13.2357 11.8915 12.6469 12.418 12.2007 13.0452C11.7545 13.6724 11.4619 14.3847 11.3439 15.1309C11.226 15.8771 11.2857 16.6385 11.5187 17.3604C11.7516 18.0824 12.1521 18.7468 12.6913 19.3059C13.2305 19.8649 13.895 20.3048 14.6369 20.5937ZM10.7984 10.3203C11.5756 9.59033 12.4983 9.01128 13.5137 8.61622C14.5292 8.22116 15.6176 8.01782 16.7167 8.01782C17.8158 8.01782 18.9042 8.22116 19.9196 8.61622C20.9351 9.01128 21.8577 9.59033 22.6349 10.3203C23.4121 11.0503 24.0286 11.9169 24.4492 12.8706C24.8699 13.8244 25.0864 14.8466 25.0864 15.879C25.0864 16.9113 24.8699 17.9336 24.4492 18.8873C24.0286 19.8411 23.4121 20.7077 22.6349 21.4377C21.0653 22.9119 18.9365 23.7402 16.7167 23.7402C14.4969 23.7402 12.368 22.9119 10.7984 21.4377C9.22881 19.9634 8.34701 17.9639 8.34701 15.879C8.34701 13.7941 9.22881 11.7946 10.7984 10.3203ZM26.9426 9.18855C27.1352 9.0179 27.2894 8.8127 27.396 8.58509C27.5027 8.35748 27.5596 8.11208 27.5635 7.86343C27.5673 7.61478 27.518 7.36793 27.4185 7.13749C27.319 6.90706 27.1712 6.69772 26.984 6.52188C26.7968 6.34604 26.5739 6.20726 26.3286 6.11378C26.0832 6.02029 25.8204 5.97399 25.5557 5.97761C25.2909 5.98124 25.0297 6.03471 24.7873 6.13488C24.545 6.23504 24.3265 6.37986 24.1448 6.56075C23.7915 6.91256 23.5981 7.37985 23.6056 7.86343C23.6131 8.34701 23.8209 8.80881 24.185 9.15079C24.5491 9.49277 25.0408 9.688 25.5557 9.69505C26.0705 9.7021 26.5681 9.52041 26.9426 9.18855Z"
                  fill="#D1D1D1" />
              </svg>

            </NuxtLink>
            <NuxtLink to="/" target="_blank" aria-label="Selengkapnya"
              class="link-offset-2 link-underline link-underline-opacity-0 link-secondary mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="31" viewBox="0 0 17 31" fill="none">
                <path
                  d="M15.8532 17.2723L16.7053 11.901H11.3792V8.41529C11.3792 6.94608 12.123 5.51304 14.5085 5.51304H16.9296V0.940302C16.9296 0.940302 14.7328 0.577637 12.6319 0.577637C8.24603 0.577637 5.3793 3.15061 5.3793 7.80775V11.9019H0.503662V17.2732H5.3793V30.2587H11.3792V17.2732L15.8532 17.2723Z"
                  fill="#D1D1D1" />
              </svg>

            </NuxtLink>
            <NuxtLink to="/" target="_blank" aria-label="Selengkapnya"
              class="link-offset-2 link-underline link-underline-opacity-0 link-secondary mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M0.195435 31.8469L2.38811 23.8399C1.03558 21.4964 0.324152 18.8381 0.325146 16.1146C0.328625 7.59468 7.26199 0.663086 15.7817 0.663086C19.9161 0.664825 23.7967 2.27404 26.715 5.19478C29.633 8.11551 31.2395 11.9979 31.238 16.127C31.2343 24.6467 24.2999 31.5793 15.7817 31.5793C15.7812 31.5793 15.782 31.5793 15.7817 31.5793H15.775C13.1882 31.5783 10.6467 30.9295 8.38913 29.6983L0.195435 31.8469ZM8.76858 26.901L9.23798 27.1791C11.21 28.3495 13.471 28.9684 15.7767 28.9697H15.7817C22.8622 28.9697 28.6251 23.2077 28.6281 16.126C28.6294 12.6942 27.2945 9.46704 24.869 7.03956C22.4432 4.61207 19.2181 3.27445 15.7864 3.27296C8.70024 3.27296 2.93752 9.03418 2.93479 16.1156C2.93379 18.5423 3.61267 20.9055 4.89885 22.9505L5.20449 23.4366L3.90638 28.1758L8.76858 26.901Z"
                  fill="#B0B0B0" />
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.9187 9.65491C11.6295 9.01182 11.3248 8.9989 11.0495 8.98771C10.8244 8.97802 10.5667 8.97852 10.3095 8.97852C10.0521 8.97852 9.63361 9.07543 9.27976 9.46183C8.92567 9.84824 7.92773 10.7826 7.92773 12.6828C7.92773 14.5832 9.31182 16.4193 9.50489 16.6773C9.69797 16.9349 12.1766 20.959 16.102 22.5071C19.3644 23.7938 20.0281 23.5378 20.7363 23.4735C21.4445 23.4091 23.0212 22.5392 23.343 21.6374C23.665 20.7356 23.665 19.9628 23.5684 19.801C23.4717 19.6403 23.2143 19.5436 22.8281 19.3505C22.442 19.1574 20.5433 18.2229 20.1892 18.0941C19.8351 17.9652 19.5776 17.9011 19.3202 18.2877C19.0625 18.6739 18.323 19.5436 18.0976 19.801C17.8723 20.0592 17.6469 20.0915 17.2607 19.8982C16.8746 19.7046 15.6306 19.2971 14.1551 17.9813C13.0071 16.9578 12.2318 15.6935 12.0064 15.3068C11.7813 14.9207 12.0027 14.7298 12.1761 14.5189C12.4885 14.1389 13.0126 13.4558 13.1413 13.1984C13.27 12.9405 13.2056 12.7151 13.1092 12.5217C13.0126 12.3287 12.2619 10.4188 11.9187 9.65491Z"
                  fill="#B0B0B0" />
                <path
                  d="M11.6907 9.75736C11.5583 9.4631 11.4388 9.35004 11.3536 9.30066C11.2666 9.25029 11.1806 9.24324 11.0394 9.23751L11.0387 9.23748C10.8297 9.22848 10.5904 9.2285 10.3431 9.22852C10.3319 9.22852 10.3207 9.22852 10.3095 9.22852C10.1095 9.22852 9.76268 9.30466 9.46413 9.63067L9.46408 9.63074C9.44117 9.65574 9.41581 9.68278 9.38842 9.712C8.99392 10.1328 8.17773 11.0034 8.17773 12.6828C8.17773 13.5767 8.50477 14.4699 8.86681 15.1828C9.22238 15.8829 9.60106 16.3886 9.70123 16.5224L9.70496 16.5273C9.70499 16.5274 9.70501 16.5274 9.70503 16.5274C9.72175 16.5498 9.75214 16.5946 9.7958 16.6591C10.3085 17.4164 12.6522 20.8778 16.1937 22.2745C17.8169 22.9147 18.7769 23.1642 19.4102 23.2491C19.9118 23.3164 20.2068 23.2819 20.4958 23.2481C20.5678 23.2396 20.6394 23.2313 20.7137 23.2245C21.0093 23.1976 21.5402 22.9885 22.0488 22.6595C22.5605 22.3285 22.9754 21.9236 23.1075 21.5534L23.1075 21.5533C23.2613 21.1229 23.3373 20.7253 23.3636 20.4202C23.3768 20.2674 23.3772 20.1415 23.37 20.0489C23.3645 19.9785 23.3556 19.9429 23.3526 19.9309C23.351 19.9248 23.351 19.9247 23.3538 19.9293L23.5684 19.801M11.6907 9.75736L19.3202 18.2877C19.0625 18.6739 18.323 19.5436 18.0976 19.801M11.6907 9.75736C11.86 10.1342 12.1315 10.7979 12.3748 11.3965C12.4104 11.484 12.4455 11.5706 12.4797 11.6548C12.6747 12.1353 12.8396 12.5416 12.8857 12.6337L13.1092 12.5217M11.6907 9.75736L13.1092 12.5217M23.5684 19.801L23.3541 19.9298C23.3425 19.9106 23.3064 19.8728 23.1866 19.8071C23.115 19.7678 23.0357 19.7296 22.9395 19.6832C22.8739 19.6516 22.8005 19.6162 22.7163 19.5741C22.5244 19.4781 21.9542 19.1967 21.3879 18.9233C20.8136 18.646 20.2656 18.3879 20.1038 18.3291L20.1036 18.3291C19.9191 18.2619 19.8204 18.2375 19.747 18.2459C19.7011 18.2512 19.6302 18.2732 19.5283 18.4263L19.5282 18.4265C19.2597 18.8288 18.5085 19.7112 18.2857 19.9657M23.5684 19.801C23.665 19.9628 23.665 20.7356 23.343 21.6374L22.8281 19.3505C22.9033 19.3881 22.9737 19.4221 23.0389 19.4536C23.3085 19.5837 23.4905 19.6716 23.5684 19.801ZM18.2857 19.9657L18.0976 19.801M18.2857 19.9657C18.2858 19.9656 18.2859 19.9655 18.286 19.9654L18.0976 19.801M18.2857 19.9657C18.1492 20.122 17.9848 20.2409 17.7697 20.2671C17.5647 20.2921 17.3584 20.2267 17.1488 20.1217L17.1487 20.1217C17.0912 20.0929 17.0103 20.0578 16.9087 20.0139C16.3714 19.7813 15.2569 19.2988 13.9887 18.1679M18.0976 19.801C17.8723 20.0592 17.6469 20.0915 17.2607 19.8982C17.1974 19.8665 17.1111 19.829 17.0044 19.7827C16.4605 19.5466 15.3887 19.0814 14.1551 17.9813M13.9887 18.1679C13.9887 18.1679 13.9887 18.1679 13.9887 18.1679L14.1551 17.9813M13.9887 18.1679L14.1551 17.9813M13.9887 18.1679C12.8111 17.118 12.02 15.8265 11.7905 15.4327L12.0058 15.3072L11.7904 15.4327C11.6457 15.1845 11.6277 14.9596 11.7097 14.7544C11.7663 14.6126 11.8738 14.4877 11.9456 14.4042L12.1761 14.5189M14.1551 17.9813C13.0071 16.9578 12.2318 15.6935 12.0064 15.3068C11.8029 14.9578 11.9643 14.7683 12.1253 14.5793C12.1424 14.5592 12.1595 14.5391 12.1761 14.5189M12.1761 14.5189C12.4885 14.1389 13.0126 13.4558 13.1413 13.1984M12.1761 14.5189L12.7111 11.5603C12.9079 12.0449 13.068 12.4394 13.1092 12.5217M12.1761 14.5189L11.983 14.3601L11.983 14.3601L12.1761 14.5189ZM13.1413 13.1984C13.27 12.9405 13.2056 12.7151 13.1092 12.5217M13.1413 13.1984L12.9177 13.0866C12.9176 13.0866 12.9176 13.0867 12.9176 13.0868L13.1413 13.1984Z"
                  stroke="black" stroke-opacity="0.06" stroke-width="0.5" />
              </svg>
            </NuxtLink>
            <NuxtLink to="/" target="_blank" aria-label="Selengkapnya"
              class="link-offset-2 link-underline link-underline-opacity-0 link-secondary mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path
                  d="M31.2367 7.77177V13.1203C30.1557 13.03 28.7566 12.8172 27.2032 12.324C25.1771 11.6808 23.6683 10.8007 22.6822 10.1188V20.9319L22.6581 20.898C22.6748 21.1124 22.6822 21.33 22.6822 21.5508C22.6822 26.9219 17.6404 31.292 11.4394 31.292C5.2385 31.292 0.196655 26.9203 0.196655 21.5508C0.196655 16.1814 5.2385 11.8081 11.4394 11.8081C12.0459 11.8081 12.6413 11.85 13.2236 11.9306V17.2034C12.6636 17.0293 12.0646 16.9358 11.4394 16.9358C8.50362 16.9358 6.11292 19.0056 6.11292 21.5508C6.11292 24.0961 8.50362 26.1659 11.4394 26.1659C14.3752 26.1659 16.7659 24.0945 16.7659 21.5508C16.7659 21.4557 16.7641 21.3606 16.7567 21.2655V0.251953H22.9278C22.9501 0.704915 22.9725 1.1611 22.9929 1.61406C23.0339 2.50548 23.4004 3.36143 24.0385 4.06264C24.7883 4.88635 25.8934 5.84386 27.4488 6.60793C28.9036 7.32203 30.2692 7.62831 31.2367 7.77338V7.77177Z"
                  fill="#D1D1D1" />
              </svg>
            </NuxtLink>

          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="contactme-section-container position-relative py-5">
    <div class="container">

      <div class="row justify-content-start align-items-center g-3 ">
        <div class="col-lg-6">
          <div class="d-flex flex-column justify-content-start contact-heading-container g-2">
            <h1 class="contact-title ">Mari Berbincang!</h1>
            <p class="contact-desc">
              Kami sangat ingin mendengar dari Anda! Apakah Anda memiliki pertanyaan, komentar, atau saran yang ingin Anda
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
                <textarea v-model="inputMessage" placeholder="Tuliskan Isi Pesan" class="form-control " id="inputMessage"
                  rows="7" :maxlength="limitKarakter"></textarea>

                <div class="text-end fw-normal pt-2">{{ limitKarakter - inputMessage.length }} Karakter Tersisa</div>
              </div>
              <button :disabled="!inputName || !inputEmail || !inputMessage" type="submit"
                class="btn btn-danger rounded text-center">Kirimkan</button>
            </form>
          </div>
        </div>
      </div>


    </div>
  </section>
</template>


<style scoped>
.hero-image-parallax {
  position: relative;
  background-image: url('/images/bg-contact-me.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  width: 100%;
  height: 500px;
  scroll-behavior: smooth;
}

.hero-image-bg__gradient {
  padding: 0;
  height: 500px;
  flex-shrink: 0;
  position: relative;
  width: 100%;
  background: linear-gradient(0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%),
    linear-gradient(102deg,
      rgba(166, 11, 64, 0.75) 16.57%,
      rgba(217, 217, 217, 0) 95.59%);
}

.hero-heading-container {
  position: absolute;
  top: 45%;
  z-index: 1000;
}

.hero-heading__title {
  color: var(--font-50, #F6F6F6);
  /* Font/Heading 1 Bold */
  font-family: Poppins;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* 73.2px */
}

.hero-heading__desc {
  color: var(--Background, #FFF);

  /* Font/Title 1 */
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 37.2px */
}


.contact-heading-container {
  position: relative;
  padding: 0;
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
  color: var(--font-600, #5D5D5D);
  /* Font/Body 2 */
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  height: 50px;
  transition: ease 300ms;
  border-radius: 4px;
  /* 19.2px */
}

.contact-form__input:hover {
  border: 1px solid #CE2F2F;
}

.contact-form__input:focus {}

@media (min-width: 992px) {
  .hero-image-parallax {
    min-height: 100vh;
    background-attachment: fixed;
  }

  .hero-image-bg__gradient {
    min-height: 100vh;
  }

  .hero-heading__title {
    font-size: 61px;
  }

  .hero-heading__desc {
    font-size: 31px;
  }

}

.hero-social-media-container {
  position: absolute;
  top: 45%;
  right: 10%;
}


.hero-social-media-container .social-media__icons {
  width: 32.567px;
  height: 30.588px;
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