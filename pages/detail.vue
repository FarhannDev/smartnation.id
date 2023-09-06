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
          <div class="col">
            <div class="row">
              <div class="col-1">
                <img src="../public/icon/date.png" alt="DATE">
              </div>
              <div class="col-9">26 December 2022</div>
            </div>
          </div>
          <div class="col">
            <div class="row">
              <div class="col-1">
                <img src="../public/icon/comment.png" alt="COMMENT">
              </div>
              <div class="col-9">2 Komentar</div>
            </div>
          </div>
          <div class="col">
            <div class="row">
              <div class="col-1">
                <img src="../public/icon/eye.png" alt="READ">
              </div>
              <div class="col-9">383</div>
            </div>
          </div>
        </div>
        <img class="img-fluid" src="https://smartnation.id/wp-content/uploads/2022/12/web-3-des-2048x1195.png" alt="image-content">
        <div class="d-flex flex-wrap py-3">
          <div v-show="isLoading" class="text-start text-dark fst-normal fs-6 mb-3">Sedang memuat...</div>
          
          <button v-for="category in categories" :key="category" type="button"
          class="btn btn-outline-danger btn-md rounded text-center text-dark me-2 my-1">{{ category }}</button>
        </div>
        <div class="container p-0">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates repellendus consequuntur ab aperiam provident ratione qui consectetur sed quas sapiente necessitatibus iste quibusdam recusandae sequi corporis dolore quia earum laudantium, enim culpa aliquam! Ipsa dicta ex hic vero error modi debitis soluta facere repellendus fugit, reprehenderit, itaque provident laborum illo suscipit facilis voluptatum. Laudantium incidunt explicabo impedit voluptates. Libero, explicabo corporis, iste magni porro nesciunt dicta alias officiis soluta dignissimos repudiandae accusantium eveniet voluptate? Doloremque ducimus ex aut accusamus quidem nemo tempore eaque pariatur repudiandae facilis, ratione, doloribus magni. Assumenda, fuga rem! Id error eius ducimus molestias modi quasi quia?</p>
        </div>
        <div class="container bg-primary">
          <p>Komentar</p>
          <p>Alamat Email Anda Tidak Akan Dipublikasikan. Bidang yang Wajib Ditandai *</p>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="row">
            <div class="col-3">
              <input type="text" class="form-control text-center" id="exampleFormControlInput1" placeholder="Nama Lengkap">
            </div>
            <div class="col-3">
              <input type="email" class="form-control text-center" id="exampleFormControlInput2" placeholder="Alamat Email">
            </div>
            <div class="col-3">
              <input type="text" class="form-control text-center" id="exampleFormControlInput3" placeholder="Web URL">
            </div>
          </div>
          <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
          <p>Simpan nama, email, dan situs web saya pada peramban ini untuk komentar saya berikutnya.</p>
          <button type="button" class="btn btn-danger">KIRIM</button>
        </div>
        <div class="container mb-3">
          <div class="row">
            <div class="col-2 bg-danger">
              <div class="container">
                <img src="../public/img/Image-female.jpg" alt="Image-female">
              </div>
            </div>
            <div class="col-8 bg-danger">
              <p>ATIKA PUTRI</p>
              <p>30 Menit yang lalu</p>
              <p>Wahh Sangat  Menarik</p>
              <div class="row">
                <div class="col-2">
                  <div class="row">
                    <div class="col-1">
                      <img style="cursor: pointer;" on-click="" src="../public/icon/thumb_up.png" alt="LIKE">
                    </div>
                    <div class="col-1">0</div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="row">
                    <div class="col-1">
                      <img style="cursor: pointer;" on-click="" src="../public/icon/thumb_down.png" alt="DISLIKE">
                    </div>
                    <div class="col-1">0</div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="row">
                    <button type="button" class="btn btn-link">Balas</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-2 bg-danger">
              <img on-click="" src="../public/icon/icon _options vertical_.png" alt="OPTIONS">
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-2 bg-primary">
              <div class="container">
                <img src="../public/img/Image-male.jpg" alt="Image-male">
              </div>
            </div>
            <div class="col-8 bg-primary">
              <p>AGUSTI</p>
              <p>30 Menit yang lalu</p>
              <p>Wahh Sangat  Menarik</p>
              <div class="row">
                <div class="col-2">
                  <div class="row">
                    <div class="col-1">
                      <img style="cursor: pointer;" on-click="" src="../public/icon/thumb_up.png" alt="LIKE">
                    </div>
                    <div class="col-1">0</div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="row">
                    <div class="col-1">
                      <img style="cursor: pointer;" on-click="" src="../public/icon/thumb_down.png" alt="DISLIKE">
                    </div>
                    <div class="col-1">0</div>
                  </div>
                </div>
                <div class="col-2">
                  <div class="row">
                    <button type="button" class="btn btn-link">Balas</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-2 bg-primary">
              <img on-click="" src="../public/icon/icon _options vertical_.png" alt="OPTIONS">
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

<script setup>
import { categoriesData } from "../utils/data/categories"

useSeoMeta({
  title: "Tentang Kami",
  ogTitle: 'Tentang Kami',
  description: 'Ini adalah deskripsi dari halaman Tentang Kami....',
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