<template>
  <section class="position-relative py-5">
    <div class="container">
      <div class="row justify-content-start g-3">
        <div class="col-12 col-lg-7 col-md-12 col-sm-12 ">
          <div class="d-flex flex-column justify-content-start">
            <HeadingTitle class="text-capitalize fw-bold fs-3 " :title="post.title" />
            <div class="hstack g-2 mb-3">
              <span class="d-inline me-3">
                <div class="d-flex">
                  <BootstrapIcon name="clock" class="me-1 px-0 mx-0" />
                  <p class="dateFormat m-0 pt-1">{{ post.createdAt }}</p>
                </div>
              </span>
              <span class="d-inline me-3">
                <div class="d-flex">
                  <BootstrapIcon name="chat" class="me-1 px-0 mx-0" />
                  <p class="dateFormat m-0 pt-1">0 Komentar</p>
                </div>
              </span>
              <span class="d-inline me-3">
                <div class="d-flex">
                  <BootstrapIcon name="eye" class="me-1 px-0 mx-0" />
                  <p class="dateFormat m-0 pt-1">0</p>
                </div>
              </span>
            </div>
          </div>
          <div class="d-grid g-2">
            <NuxtImg class="img-fluid" :src="post.thumbnail" :height="433" :alt="post.title" />
            <div class="d-flex flex-wrap justify-content-start g-2 py-3">
              <button v-for="category in post.categories" :key="category" type="button"
                class="btn me-2 my-1 btnCategory">{{
                  category }}</button>
            </div>
            <div class="contentArticle  mb-3" v-html="post.content"></div>
            <div class="contentArticle  mb-3" v-html="post.content"></div>
            <div class="contentArticle  mb-3" v-html="post.content"></div>
            <div class="contentArticle  mb-3" v-html="post.content"></div>
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

        <div class="col-12 col-lg-4 col-sm-12">
          <div class="d-flex flex-column justify-content-start g-0 px-md-2 mx-md-2">
            <HeadingTitle class="text-capitalize fw-bold fs-5 " title="Berita Terpopuler" />

            <div class="d-grid g-2 py-3">
              <PostsPostItem class="mb-3" title="KPK ingin Menekan Korupsi dengan Digitalisasi Sistem Pemerintahan"
                featured-media="https://s3-alpha-sig.figma.com/img/9ae6/86f3/9be269859e4e6f73c0b49e3193968198?Expires=1695600000&Signature=fHQtM5WByZb3is8Z81LUapNSKrT~QdRAnVD~aasyvXi~pJ2TptOpuy9oCPmQ5sJpU-7bT1fdGVG7NwfTXlbiFFMqwkN5ARiyhEPyJAupTRIaLlke7Vz0FQNi1uu3ZqXYXrNjKQ9ZcFHPlhNQ8QrG9abdqyiVKNOzcOWIGKJDYsPLilgsDb8hsY12PM5-DU9uh9HY1i---MchuGDNm0Odh~RQieefXfibBTWWGVnO7dEh6FpYi57PuO4kr~ukkE5Jz6-rjjn32KR1e5YMQv1mQdvKJHekXXmShMHQ6nhavqdWX54kP7Cc-s2XbizUyoj4jVQ4wu2v0wVOX7jO0cAdYg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
              <PostsPostItem class="mb-3" title="Gunakan Teknologi RFID Untuk Mendeteksi Plat Nomor Kendaraan"
                featured-media="https://s3-alpha-sig.figma.com/img/7413/1e7a/6c29dbbdf04b8bc24f703ca04d4e6f21?Expires=1695600000&Signature=oE4CW1GwG~I8S6cJ2Ya7pNDv9OR9c~guBtZ~RslWdevOHO1Z9RcSTu~9TmZBp6YbJEPSJ1~k6rZ9CHtl61ZG5u2PkBPnakPVlqZGCuGwJ2rgLg69Pu4dOm5EB0M7ogZtONWvT~qUPwQbbxzuHYNJewxU8~X4bqHts4qB8JpsAyaOh0qJAkre4o5zHHPF-X1AOBj9eCS8llU2A1kGfiYqj97oXJGu261aIT9mYNgXNA5PdcWFNUJRU-0jNUN6H-uRUJ2szBfEUr74TEq7Bayp5X6fs2fTp6WtomuEQ~3acDoaMSL9t7XGHktYBnbWm44iw13tLVA0O9C661pkxbWsWA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
              <PostsPostItem class="mb-3"
                title="Dalam Kenalkan Energi Terbarukan, Indonesia Gelar Pameran Teknologi Smart City"
                featured-media="https://s3-alpha-sig.figma.com/img/47b5/d96b/f1cbaac7d792d44cdb90469223ab7537?Expires=1695600000&Signature=YBDWRItt21Z1s3iu6J9UUISYIfDtkqiHKH~8u0z0-fGKT~y37MslGocSW661VSFVpQ~UPFqxyG9juwwfpz4yLLOsgCa6n70FLwP0yiq2dTPdCX3T9MNhTbz3i3e3heQHnzSuRUpgw7V94b~pchz~nfOYaIb-YwN7-tCi~E4AMS27P2p~Lu9bKXd8e55XWOg4ag9GVBH6qwg2F6cnAjyM1PCGrIbU~hyqrSsBM-~b794pgjFCPuEMlBgcjZfQ2OYjJ17VE-eiDKfzqWJqxzru4h7VJbkh1VToEMhbMIHKI7ojxCFhrxnn9MHxwB6EpoQ58dwy7A44SJ7AfqCtAlXX9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />

            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
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
definePageMeta({
  layoutTransition: {
    name: 'slide-in',
    mode: 'out-in'
  },
  pageTransition: { name: 'fade', mode: 'out-in' }

})

import { posts } from "~/utils/data/getInitialData";

const route = useRoute()

const { postId } = route.params

const post = posts.find((post) => post.slug === postId)



useSeoMeta({
  title: post.title,
  author: 'smartNation',
  description: post.excerpt,
  ogTitle: post.title,
  ogDescription: post.excerpt,
  ogImage: post.thumbnail,
  ogImageAlt: post.title,
  ogImageType: "image/png",
  ogImageWidth: 100,
  ogImageHeight: 443,
  ogImageUrl: 'https://s3-alpha-sig.figma.com'
})


</script>