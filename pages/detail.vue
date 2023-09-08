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
        <h1 class="text-danger text-capitalize fw-bolder fs-3 pb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolores inventore.</h1>
        <div class="row pb-2">
          <div class="col-3">
            <div class="row align-items-center">
              <div class="col-1 d-flex align-items-center" >
                <img width="15" height="15" src="../public/icon/date.svg" alt="DATE">
              </div>
              <div class="col-10">
                <p class="dateFormat m-0">26 December 2022</p>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="row align-items-center">
              <div class="col-1 d-flex align-items-center" >
                <img width="15" height="15" src="../public/icon/comment.svg" alt="COMMENT">
              </div>
              <div class="col-10">
                <p class="dateFormat m-0">2 Komentar</p>
              </div>
            </div>
          </div>
          <div class="col-3" style="margin-left: -30px;">
            <div class="row align-items-center">
              <div class="col-1 d-flex align-items-center" >
                <img width="15" height="15" src="../public/icon/eye.svg" alt="COMMENT">
              </div>
              <div class="col-10">
                <p class="dateFormat m-0">383</p>
              </div>
            </div>
          </div>
        </div>
        <img class="img-fluid" src="https://smartnation.id/wp-content/uploads/2022/12/web-3-des-2048x1195.png" alt="image-content">
        <div class="d-flex flex-wrap py-3">
          <div v-show="isLoading" class="text-start text-dark fst-normal fs-6 mb-3">Sedang memuat...</div>
          <button v-for="category in categories" :key="category" type="button"
          class="btn me-2 my-1 btnCategory">{{ category }}</button>
        </div>
        <div class="container p-0">
          <p class="contentArticle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus consequuntur ab aperiam provident ratione qui consectetur sed quas sapiente necessitatibus iste quibusdam recusandae sequi corporis dolore quia earum laudantium, enim culpa aliquam! Ipsa dicta ex hic vero error modi debitis soluta facere repellendus fugit, reprehenderit, itaque provident laborum illo suscipit facilis voluptatum. Laudantium incidunt explicabo impedit voluptates. Libero, explicabo corporis, iste magni porro nesciunt dicta alias officiis soluta dignissimos repudiandae accusantium eveniet voluptate? Doloremque ducimus ex aut accusamus quidem nemo tempore eaque pariatur repudiandae facilis, ratione, doloribus magni. Assumenda, fuga rem! Id error eius ducimus molestias modi quasi quia?</p>
        </div>
        <div class="d-flex flex-row-reverse pb-5">
          <img width="24" height="24" src="../public/icon/Twitter.svg" class="float-end ms-3" alt="TWITTER">
          <img width="24" height="24" src="../public/icon/Facebook.svg" class="float-end ms-3" alt="FACEBOOK">
          <img width="24" height="24" src="../public/icon/Instagram.svg" class="float-end ms-3" alt="INSTAGRAM">
        </div>
        <div class="container" style="border: 1.5px solid #D1D1D1; padding: 22px 30px; border-radius: 24px;">
          <p class="titleComment">Komentar</p>
          <p class="descComment">Alamat Email Anda Tidak Akan Dipublikasikan. Bidang yang Wajib Ditandai *</p>
          <div class="mb-3">
            <textarea class="form-control commentTextArea" id="exampleFormControlTextarea1" rows="7"></textarea>
          </div>
          <div class="row">
            <div class="col-3">
              <input type="text" class="form-control text-center nameForm" id="exampleFormControlInput1" placeholder="Nama Lengkap">
            </div>
            <div class="col-3">
              <input type="email" class="form-control text-center emailForm" id="exampleFormControlInput2" placeholder="Alamat Email">
            </div>
            <div class="col-3">
              <input type="text" class="form-control text-center webForm" id="exampleFormControlInput3" placeholder="Web URL">
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
        <div class="container mt-5 mb-4 pt-3 pb-2" style="border: 1.5px solid #E7E7E7; border-radius: 16px; background-color: #F6F6F6;">
          <div class="row">
            <div class="col-2">
              <div class="container">
                <img width="75" height="75" src="../public/img/image-male.png" alt="Image-Person">
              </div>
            </div>
            <div class="col-8">
              <p class="nameUserComment">MAMAN RACING</p>
              <p class="timeUserComment">30 Menit yang lalu</p>
              <p class="contentUserComment">Wahh Sangat  Menarik</p>
              <div class="row mt-3">
                <div class="col-2">
                  <div class="row align-items-center">
                    <div class="col-1 d-flex align-items-center" >
                      <img width="15" height="15" src="../public/icon/thumb_up.svg" alt="Like">
                    </div>
                    <div class="col-6">
                      <p class="dataLikes m-0">0</p>
                    </div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="row align-items-center">
                    <div class="col-1 d-flex align-items-center" >
                      <img width="15" height="15" src="../public/icon/thumb_down.svg" alt="Dislike">
                    </div>
                    <div class="col-6">
                      <p class="dataDislikes m-0">0</p>
                    </div>
                  </div>
                </div>
                <div class="col-2" style="margin-top: -7px;">
                  <button type="button" class="btn btn-link" style="text-decoration: none; font-size: 14px; font-weight: 400; color: #888888;">Balas</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container mb-4 pt-3 pb-2" style="border: 1.5px solid #E7E7E7; border-radius: 16px; background-color: #F6F6F6;">
          <div class="row">
            <div class="col-2">
              <div class="container">
                <img width="75" height="75" src="../public/img/image-female.png" alt="Image-Person">
              </div>
            </div>
            <div class="col-8">
              <p class="nameUserComment">BANG PIOR</p>
              <p class="timeUserComment">30 Menit yang lalu</p>
              <p class="contentUserComment">Wahh Sangat  Menarik</p>
              <div class="row">
                <div class="col-2">
                  <div class="row align-items-center">
                    <div class="col-1 d-flex align-items-center" >
                      <img width="15" height="15" src="../public/icon/thumb_up.svg" alt="Like">
                    </div>
                    <div class="col-6">
                      <p class="dataLikes m-0">0</p>
                    </div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="row align-items-center">
                    <div class="col-1 d-flex align-items-center" >
                      <img width="15" height="15" src="../public/icon/thumb_down.svg" alt="Dislike">
                    </div>
                    <div class="col-6">
                      <p class="dataDislikes m-0">0</p>
                    </div>
                  </div>
                </div>
                <div class="col-2" style="margin-top: -7px;">
                  <button type="button" class="btn btn-link" style="text-decoration: none; font-size: 14px; font-weight: 400; color: #888888;">Balas</button>
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        Column
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

.nameForm, .emailForm, .webForm {
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

.dataLikes, .dataDislikes {
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