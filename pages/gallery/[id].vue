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

const { id } = route.params




useSeoMeta({
  title: "Detail Galeri Smart Nation",
  description: "Halaman detail galeri smart nation"
})

definePageMeta({
  layout: "content-layout"
})


</script>


<template>
  <section class="berita-section-container position-relative py-5">
    <div class="container">
      <div class="row d-flex g-3 py-5">
        <div class="col-lg-7 col-md-12 col-sm-12 me-5">
          
          <!-- Article Content Start -->
          <section class="article-details-container">
            <div class="d-grid gap-3">
              <div class="article-details__title__wrapper">
                <h1 class="article-details__title">Album ISNA 2016</h1>
              </div>
              
              <div class="article-details__content__wrapper">
                <div class="article-details__content__cover__wrapper">
                  <div class="carousel slide">
                    <img class="img-fluid rounded-4"
                    src="https://smartnation.id/wp-content/uploads/2021/10/Arief_Yahya-1.jpg" alt="content-foto"
                    >
                    <a class="carousel-control-prev" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" style=" position: relative; left: -30px"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" style="position: relative; left: 30px"></span>
                      <span class="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                
                <div class="container article_content p-0 mt-3">
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate ab voluptas non ducimus similique
                    adipisci ut! Magni tempora eligendi ratione distinctio commodi nulla cum. Harum vitae hic accusantium
                    velit sapiente. Amet veniam quidem magnam rem optio ducimus fuga rerum officiis? Incidunt velit sunt
                    animi excepturi nostrum, quia, eveniet earum soluta officia neque odio, reprehenderit quis culpa dolor
                    sequi eaque tenetur itaque totam. Tempore quasi iure, impedit sapiente cupiditate laboriosam, sint
                    eligendi enim corporis voluptatum at? Alias reprehenderit reiciendis, odit eum recusandae
                    exercitationem dolor fugiat perferendis temporibus quam dicta praesentium eveniet!
                  </p>
                </div>
                
              </div>
            </div>
          </section>
          
        </div>
        <div class="col-lg-4 col-sm-12">
          <div class="d-flex flex-column g-0 px-md-3 mx-md-2 ">
            <h3 style="color: #CE2F2F;
            font-family: Poppins;
            font-size: 16px;
            font-style: normal;
            font-weight: 600;
            line-height: 120%;">Album Lainnya</h3>
            <div class="d-grid gap-2 py-3">
              <div class="vstack gap-3 tablet-hstack">
                <div class="scroll-container">
                  <div class="otherAlbum container rounded-4"
                  style="background-image: linear-gradient(to top, rgba(0, 0, 0, 1), transparent), url('https://smartnation.id/wp-content/uploads/2021/10/Rudiantara-1.jpg');">
                  <p>Lorem, ipsum dolor.</p>
                </div>
                <div class="otherAlbum container rounded-4"
                style="background-image: linear-gradient(to top, rgba(0, 0, 0, 1), transparent), url('https://smartnation.id/wp-content/uploads/2021/10/presscon1-1.jpg');">
                <p>Lorem, ipsum dolor.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
</template>

<style scoped>
.article-details__title {
  color: var(--danger-600, #CE2F2F);
  font-family: Poppins;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 28.8px */
}

.article_content {
  color: #454545;
  text-align: justify;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 19.2px */
}

.article-details__content {
  color: var(--font-800, #454545);
  text-align: justify;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  /* 21px */
}

.article-details__cover {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: scroll;
  width: 100%;
  min-height: 433.57px;
}


.article-details__content__wrapper {
  width: 100%;
  height: auto;
  margin-bottom: 30px;
}


.article-details__info__created {
  color: var(--font-400, #888);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 8.992px */
}

.article-details__info__comments {
  color: var(--font-400, #888);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 8.992px */
}

.article-details__info__views {
  color: var(--font-400, #888);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 8.992px */
}

.article-details__content__share__medsos {
  font-size: 22px;
  color: #D1D1D1;
}

.article-comments-card {
  border-radius: 16px;
  border: 0.836px solid var(--font-100, #E7E7E7);
  background: var(--font-50, #F6F6F6);
  padding: 20px;
}

.article-comments__name {
  color: var(--font-800, #454545);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 12px */
}

.article-comments__created {
  color: var(--font-400, #888);
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  padding-top: 5px;
  margin-bottom: 8px;
  /* 9.6px */
}

.article-comments__content {
  color: var(--font-900, #3D3D3D);
  font-family: Poppins;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  margin-bottom: 10px;
  /* 9.6px */
}

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

.otherAlbum {
  position: relative;
  width: 100%;
  height: 138px;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  margin: 0 0 1em 0;
}

.otherAlbum p {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 20px;
  margin: 0;
  color: white;
  font-size: 1.4vw;
}

@media (max-width: 992px) {
  .main-content {
    display: flex;
    flex-direction: row;
  }
  
  .article-details__title {
    color: var(--danger-600, #CE2F2F);
    font-family: Poppins;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    /* 28.8px */
  }
  
  .article_content {
    color: #454545;
    text-align: justify;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    /* 19.2px */
  }
  
  /*  */
  .tablet-hstack {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }
  
  .scroll-container {
    width: 100%;
    overflow-x: auto;
    white-space: nowrap;
  }
  
  .otherAlbum {
    width: 50%;
    margin: 0px 1em 0 0;
    height: 140px;
    display: inline-block;
    scroll-behavior: smooth;
  }
  
  .otherAlbum p {
    position: absolute;
    bottom: 0%;
  }
  
  /* Hide scrollbars in WebKit-based browsers */
  .scroll-container::-webkit-scrollbar {
    width: 0;
  }
  
  /* Hide scroll track in WebKit-based browsers */
  .scroll-container::-webkit-scrollbar-track {
    display: none;
  }
}

@media (max-width: 768px) {
  .article-details__title {
    color: var(--danger-600, #CE2F2F);
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
    /* 28.8px */
  }
  
  .article_content {
    color: #454545;
    text-align: justify;
    font-family: Poppins;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    /* 19.2px */
  }
  
  .otherAlbum p {
    position: absolute;
    bottom: 0%;
    font-size: 14px;
  }
  
  /* Hide scrollbars in WebKit-based browsers */
  .scroll-container::-webkit-scrollbar {
    width: 0;
  }
  
  /* Hide scroll track in WebKit-based browsers */
  .scroll-container::-webkit-scrollbar-track {
    display: none;
  }
}
</style>

