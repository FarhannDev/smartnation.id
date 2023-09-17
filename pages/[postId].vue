<template>
  <div>
    <div class="container py-5">
      <h1 class="text-danger text-capitalize">Halaman Detail</h1>
      <NuxtLink to="/"
        class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover link-danger">
        Kembali ke halaman Utama
        <BootstrapIcon name="arrow-right" />
      </NuxtLink>

      <div class="row">
        <div class="col-8">
          <h1 class="text-danger text-capitalize fw-bolder fs-3 pb-2">Makin Keren, iphone 14 Punya Fitur Komunikasi
            Satelit untuk Keadaan Darurat</h1>
          <div class="row pb-2">
            <div class="col-3">
              <div class="row align-items-center">
                <div class="col-1 d-flex align-items-center">
                  <img width="15" height="15" src="/icon/date.svg" alt="DATE">
                </div>
                <div class="col-10">
                  <p class="dateFormat m-0">26 December 2022</p>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="row align-items-center">
                <div class="col-1 d-flex align-items-center">
                  <img width="15" height="15" src="/icon/comment.svg" alt="COMMENT">
                </div>
                <div class="col-10">
                  <p class="dateFormat m-0">2 Komentar</p>
                </div>
              </div>
            </div>
            <div class="col-3" style="margin-left: -30px;">
              <div class="row align-items-center">
                <div class="col-1 d-flex align-items-center">
                  <img width="15" height="15" src="/icon/eye.svg" alt="COMMENT">
                </div>
                <div class="col-10">
                  <p class="dateFormat m-0">383</p>
                </div>
              </div>
            </div>
          </div>
          <img class="img-fluid" src="https://smartnation.id/wp-content/uploads/2022/12/web-3-des-2048x1195.png"
            alt="image-content">
          <div class="d-flex flex-wrap py-3">
            <div v-show="isLoading" class="text-start text-dark fst-normal fs-6 mb-3">Sedang memuat...</div>
            <button v-for="category in categories" :key="category" type="button" class="btn me-2 my-1 btnCategory">{{
              category }}</button>
          </div>
          <div class="container p-0">
            <p class="contentArticle">September 2022 lalu, Apple resmi luncurkan iPhone 14 series. Selain menawarkan
              fitur-fitur yang tidak ada di tipe lain, iPhone 14 memiliki fitur konektivitas satelit untuk berkomunikasi
              ketika pengguna dalam kondisi darurat atau saat tidak bisa menjangkau sinyal operator seluler maupun
              internet.</p>
            <p class="contentArticle">Cara kerja fitur ini adalah dengan membantu pengguna mengarahkan ponsel ke arah yang
              akan memberikan sinyal terbaik. Setelah tersambung satelit, pengguna dapat menerima pesan dan membuka pesan
              yang akan terhubung ke penyedia layanan darurat.</p>
            <p class="contentArticle">Sayangnya, proses pengiriman tersebut lumayan memakan waktu yang lama karena
              konektivitas satelit cukup terbatas. Apalagi kalau pengguna ada di bawah dedaunan lebat atau terhalang benda
              lain, hal itu akan menghambat pesan untuk sampai ke satelit.</p>
            <p class="contentArticle">Pesan itu akan berisi beberapa pertanyaan seperti “Ada yang terluka?”, serta
              beberapa opsi jawaban yang bisa pengguna pilih untuk meresponsnya. Pesan tersebut dikompres hingga sepertiga
              dari pesan normal, sehingga pengirimannya bisa lebih cepat.</p>
            <p class="contentArticle">Ketika pesan dikirim ke satelit, selanjutnya pesan tersebut akan diteruskan ke pusat
              tanggap darurat. Bila lembaga tersebut hanya menerima panggilan suara, maka pesan pengguna akan dikirimkan
              ke pusat respons yang terhubung ke pusat tanggap darurat.</p>
            <p class="contentArticle">Untuk tahap awal, Apple menyediakan fitur ini untuk pengguna iPhone 14 series di AS
              dan Kanada, kemudian kedepannya akan dirilis ke pasar lain. Bagaimana menurut Anda?</p>
          </div>
          <div class="d-flex flex-row-reverse py-2 pb-5">
            <img width="24" height="24" src="/icon/Twitter.svg" class="float-end ms-3" alt="TWITTER">
            <img width="24" height="24" src="/icon/Facebook.svg" class="float-end ms-3" alt="FACEBOOK">
            <img width="24" height="24" src="/icon/Instagram.svg" class="float-end ms-3" alt="INSTAGRAM">
          </div>
          <div class="container" style="border: 1.5px solid #D1D1D1; padding: 22px 30px; border-radius: 24px;">
            <p class="titleComment">Komentar</p>
            <p class="descComment">Alamat Email Anda Tidak Akan Dipublikasikan. Bidang yang Wajib Ditandai *</p>
            <div class="mb-3">
              <textarea class="form-control commentTextArea" id="exampleFormControlTextarea1" rows="7"></textarea>
            </div>
            <div class="row">
              <div class="col-3">
                <input type="text" class="form-control text-center nameForm" id="exampleFormControlInput1"
                  placeholder="Nama Lengkap">
              </div>
              <div class="col-3">
                <input type="email" class="form-control text-center emailForm" id="exampleFormControlInput2"
                  placeholder="Alamat Email">
              </div>
              <div class="col-3">
                <input type="text" class="form-control text-center webForm" id="exampleFormControlInput3"
                  placeholder="Web URL">
              </div>
            </div>
            <div class="form-check pt-3 pb-2">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
              <label class="form-check-label labelCheckBox" for="flexRadioDefault1">
                Simpan nama, email, dan situs web saya pada peramban ini untuk komentar saya berikutnya.
              </label>
            </div>
            <button type="button" class="btn btnComment">KIRIM</button>
          </div>
          <div class="container mt-5 mb-4 pt-3 pb-2"
            style="border: 1.5px solid #E7E7E7; border-radius: 16px; background-color: #F6F6F6;">
            <div class="row">
              <div class="col-2">
                <div class="container">
                  <img width="75" height="75" src="/img/image-male.png" alt="Image-Person">
                </div>
              </div>
              <div class="col-8">
                <p class="nameUserComment">MAMAN RACING</p>
                <p class="timeUserComment">30 Menit yang lalu</p>
                <p class="contentUserComment">Wahh Sangat Menarik</p>
                <div class="row mt-3">
                  <div class="col-2">
                    <div class="row align-items-center">
                      <div class="col-1 d-flex align-items-center">
                        <img width="15" height="15" src="/icon/thumb_up.svg" alt="Like">
                      </div>
                      <div class="col-6">
                        <p class="dataLikes m-0">0</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="row align-items-center">
                      <div class="col-1 d-flex align-items-center">
                        <img width="15" height="15" src="/icon/thumb_down.svg" alt="Dislike">
                      </div>
                      <div class="col-6">
                        <p class="dataDislikes m-0">0</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-2" style="margin-top: -7px;">
                    <button type="button" class="btn btn-link"
                      style="text-decoration: none; font-size: 14px; font-weight: 400; color: #888888;">Balas</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="container mb-4 pt-3 pb-2"
            style="border: 1.5px solid #E7E7E7; border-radius: 16px; background-color: #F6F6F6;">
            <div class="row">
              <div class="col-2">
                <div class="container">
                  <img width="75" height="75" src="/img/image-female.png" alt="Image-Person">
                </div>
              </div>
              <div class="col-8">
                <p class="nameUserComment">BANG PIOR</p>
                <p class="timeUserComment">30 Menit yang lalu</p>
                <p class="contentUserComment">Wahh Sangat Menarik</p>
                <div class="row">
                  <div class="col-2">
                    <div class="row align-items-center">
                      <div class="col-1 d-flex align-items-center">
                        <img width="15" height="15" src="/icon/thumb_up.svg" alt="Like">
                      </div>
                      <div class="col-6">
                        <p class="dataLikes m-0">0</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="row align-items-center">
                      <div class="col-1 d-flex align-items-center">
                        <img width="15" height="15" src="/icon/thumb_down.svg" alt="Dislike">
                      </div>
                      <div class="col-6">
                        <p class="dataDislikes m-0">0</p>
                      </div>
                    </div>
                  </div>
                  <div class="col-2" style="margin-top: -7px;">
                    <button type="button" class="btn btn-link"
                      style="text-decoration: none; font-size: 14px; font-weight: 400; color: #888888;">Balas</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4 d-flex justify-content-end">
          <div class="row">
            <div class="col">
              <h5 class="mb-3 titleInstagramContent">Follow us</h5>
              <h5 class="mb-1 leadInstagramContent">Smartnation.id</h5>
              <p id="address" class="mb-2 descInstagramContent">Toward Indonesia Smart Nation</p>
              <div class="row mb-2 mt-0">
                <div class="col-4">
                  <div id="dummy_ig"><a href="https://www.instagram.com/smartnation.id/"><img style="width:80px"
                        src="/follow-us-1.jpeg" alt=""></a></div>
                </div>
                <div class="col-4">
                  <div id="dummy_ig"><a href="https://www.instagram.com/smartnation.id/"><img style="width:80px"
                        src="/follow-us-2.jpeg" alt=""></a></div>
                </div>
                <div class="col-4">
                  <div id="dummy_ig"><a href="https://www.instagram.com/smartnation.id/"><img style="width:80px"
                        src="/follow-us-3.jpeg" alt=""></a></div>
                </div>
              </div>
              <div class="row mb-0 mt-0">
                <div class="col-4">
                  <div id="dummy_ig"><a href="https://www.instagram.com/smartnation.id/"><img style="width:80px"
                        src="/follow-us-1.jpeg" alt=""></a></div>
                </div>
                <div class="col-4">
                  <div id="dummy_ig"><a href="https://www.instagram.com/smartnation.id/"><img style="width:80px"
                        src="/follow-us-2.jpeg" alt=""></a></div>
                </div>
                <div class="col-4">
                  <div id="dummy_ig"><a href="https://www.instagram.com/smartnation.id/"><img style="width:80px"
                        src="/follow-us-3.jpeg" alt=""></a></div>
                </div>
              </div>
              <a id="ig" type="button" class="btn mt-3" rel=”noreferrer” href="https://www.instagram.com/smartnation.id/">
                <div class="row align-items-center contentButton">
                  <div class="col-1"><img style="width:18px; color: #FE3565;" src="/icon/ig_in_detail.svg" alt="">
                  </div>
                  <div id="text-button" class="col-10">Follow on Instagram</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="container text-center">
      </div>
    </div>
  </div>
</template>

<style scoped>
.dateFormat {
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  color: #888888;
}

.titleComment {
  font-family: Poppins;
  font-size: 20px;
  font-weight: 400;
  line-height: 19.2px;
  color: #4F4F4F;
}

.descComment {
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 9.6px;
  color: #888888;
}

.commentTextArea {
  border-radius: 12px;
  border: 1px solid #d1d1d1;
  background-color: #f6f6f6;
  height: 180px;
  font-family: Poppins;
}

.nameForm,
.emailForm,
.webForm {
  border-radius: 8px;
  border: 1px solid #d1d1d1;
  background-color: #f6f6f6;
  height: 30px;
  color: #b0b0b0;
  font-family: Poppins;
  font-size: 10px;
  font-weight: 400;
}

.labelCheckBox {
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  color: #888888;
}

.btnCategory {
  color: #6d6d6d;
  font-family: Poppins;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  border-radius: 5px;
  background-color: #e7e7e7;
}

.btnComment {
  width: 80px;
  height: 25px;
  color: #F6F6F6;
  font-family: Poppins;
  font-size: 8px;
  font-weight: 400;
  border-radius: 8px;
  background-color: #8E0D3D;
}

.nameUserComment {
  font-family: Poppins;
  font-size: 14px;
  font-weight: 600;
  color: #454545;
  margin-bottom: 4px;
}

.timeUserComment {
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  color: #888888;
  margin-bottom: 8px;
}

.contentUserComment {
  font-family: Poppins;
  font-size: 13px;
  font-weight: 400;
  color: #3D3D3D;
  margin-bottom: 8px;
}

.dataLikes,
.dataDislikes {
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  color: #888888;
}

.contentArticle {
  text-align: justify;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: #454545;
}

#dummy_ig {
  background-color: #F6F6F6;
  height: 80px;
  width: 80px;
  z-index: 1;
  border-radius: 8px;
  margin-top: 3px;
  margin-bottom: 3px;
}

#text-button {
  font-size: 13px;
  color: #FFF;
  text-align: center;
}

#ig {
  border-radius: 12px;
  border: 1px solid #D71149;
}

#ig .contentButton>div {
  color: #FE3565;
  font-family: Poppins;
  font-size: 9.75px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.titleInstagramContent {
  color: #CE2F2F;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 21.6px */
}

.leadInstagramContent {
  color: #6D6D6D;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 14.4px */
}

.descInstagramContent {
  color: #454545;
  font-family: Poppins;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 18px */
}
</style>

<script setup>
import { categoriesData } from "../utils/data/categories"

useSeoMeta({
  title: "Halaman Detail",
  ogTitle: 'Halaman Detail',
  description: 'Ini adalah deskripsi dari halaman Detail....',
})


const categories = ref([])
const isLoading = ref(false)

const getCategoryData = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false

    categories.value = categoriesData
  }, 300);
}


onMounted(() => getCategoryData())


</script>