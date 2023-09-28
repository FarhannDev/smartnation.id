
<script lang="ts" setup>

import { ColorModeInstance } from "@nuxtjs/color-mode/dist/runtime/types"

const props = defineProps({ isSticky: { type: Boolean } })

const colorMode: ColorModeInstance = useColorMode()

const toggleColorMode = () => {
  const newColorMode: "dark" | "light" = colorMode.preference === 'dark'
    ? 'light'
    : 'dark'

  colorMode.preference = newColorMode
}




onMounted(() => {
  // const navbar = document.querySelector('.navbar')
  // navbar?.classList.add('navbar-sticky')
  window.addEventListener('scroll', onNavbarScroll)
})

onBeforeMount(() => {
  window.removeEventListener('scroll', onNavbarScroll)
})

const onNavbarScroll = () => {
  const scrollY = window.scrollY
  const navbar = document.querySelector('.navbar')
  scrollY > 250
    ? navbar?.classList.add('navbar-sticky')
    : navbar?.classList.remove('navbar-sticky')
}


</script>

<template>
  <nav :class="`navbar navbar-expand-xl fixed-top `">
    <div class="container">
      <NuxtLink to="/" aria-label="Smart Nation Logo" class="navbar-brand">
        <NuxtImg src="/images/logo.png" alt="Smart Nation Logo"
          class="d-inline-block align-text-top navbar-brand__logo" />
      </NuxtLink>

      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Navbar Collapse Start -->
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link mx-md-1" aria-current="page" href="#">Beranda</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link mx-md-1 " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Berita
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path
                  d="M5.74714 6.19354L8.3338 8.7802L10.9205 6.19354C11.1805 5.93354 11.6005 5.93354 11.8605 6.19354C12.1205 6.45354 12.1205 6.87354 11.8605 7.13354L8.80047 10.1935C8.54047 10.4535 8.12047 10.4535 7.86047 10.1935L4.80047 7.13354C4.54047 6.87354 4.54047 6.45354 4.80047 6.19354C5.06047 5.9402 5.48714 5.93354 5.74714 6.19354Z"
                  fill="#5D5D5D" />
              </svg>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link mx-md-1 " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Acara
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path
                  d="M5.74714 6.19354L8.3338 8.7802L10.9205 6.19354C11.1805 5.93354 11.6005 5.93354 11.8605 6.19354C12.1205 6.45354 12.1205 6.87354 11.8605 7.13354L8.80047 10.1935C8.54047 10.4535 8.12047 10.4535 7.86047 10.1935L4.80047 7.13354C4.54047 6.87354 4.54047 6.45354 4.80047 6.19354C5.06047 5.9402 5.48714 5.93354 5.74714 6.19354Z"
                  fill="#5D5D5D" />
              </svg>
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <a class="nav-link mx-md-1 " href="#">Galeri</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-md-1 " href="#">Tentang Kami</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-md-1 " href="#">Hubungi Kami</a>
          </li>

        </ul>
      </div>
      <!-- Navbar Collapse End -->

      <div class="d-none d-lg-block d-xl-block">
        <div class="hstack gx-2">
          <div class="dropdown">

            <button @click="toggleColorMode" class="btn border-0 translate__button" type="button" :title="colorMode.value"
              data-bs-toggle="dropdown" aria-expanded="false">
              <svg v-if="colorMode.preference === 'light'" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                fill="currentColor" class="bi bi-brightness-high" viewBox="0 0 16 16">
                <path
                  d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>

              <svg v-if="colorMode.preference === 'dark'" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
                <path
                  d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
              </svg>
              <svg v-if="colorMode.preference === 'system'" xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                fill="currentColor" class="bi bi-display" viewBox="0 0 16 16">
                <path
                  d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
              </svg>
            </button>

          </div>
          <div class="dropdown">
            <button class="btn border-0 translate__button" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_2838_4450)">
                  <path
                    d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"
                    fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_2838_4450">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              ID

            </button>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>




<style lang="css" scoped>
.navbar {
  width: 100%;
  height: auto;
  background: rgba(40, 39, 39, 0.10);
  backdrop-filter: blur(6px);
  transition: ease 500ms;
}

.navbar-brand .navbar-brand__logo {
  width: 83.667px;
  height: 26.528px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}


.navbar.navbar-sticky {
  width: 100%;
  height: auto;
  background: #FFF;
  box-shadow: 0px 0.91667px 0.91667px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 0.91667px rgba(103, 110, 118, 0.16), 0px 1.83333px 4.58333px 0px rgba(103, 110, 118, 0.08);
}

.nav-link {
  color: #fff !important;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
}

.nav-link.active {
  color: #CE2F2F;
  border-bottom: 1.833px solid #D71149;
  text-align: center;
}

.navbar-sticky .nav-link {
  color: #5D5D5D !important;
}


.translate__button {
  color: #FFF;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 14.4px */
}

@media (min-width: 1200px) {
  .navbar {
    width: 100%;
    height: 60px;
  }

  .navbar.navbar-sticky {
    width: 100%;
    height: 60px;
  }

}
</style>