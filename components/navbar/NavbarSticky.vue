<script lang="ts" setup>
import { ColorModeInstance } from "@nuxtjs/color-mode/dist/runtime/types";
import { RouteLocationNormalizedLoaded } from "vue-router";
import { categories } from "~/utils/data/getInitialData";

const props = defineProps({ isSticky: { type: Boolean, default: true } });
const route: RouteLocationNormalizedLoaded = useRoute();
const colorMode: ColorModeInstance = useColorMode();
const isDropdownVisible: globalThis.Ref<boolean> = ref(false);
const isDropdownEvents: globalThis.Ref<boolean> = ref(false);
const isDropdownTranslate: globalThis.Ref<boolean> = ref(false);
const isLanguage: globalThis.Ref<string> = ref("ID");

const toggleColorMode = () => {
  const newColorMode: "dark" | "light" =
    colorMode.preference === "dark" ? "light" : "dark";

  colorMode.preference = newColorMode;
};

onMounted(() => {
  window.addEventListener("scroll", onNavbarScroll);
});

onBeforeMount(() => {
  window.removeEventListener("scroll", onNavbarScroll);
});

const onNavbarScroll = () => {
  const scrollY = window.scrollY;
  const navbar = document.querySelector(".navbar");

  scrollY > 150
    ? navbar?.classList.add("navbar-sticky")
    : navbar?.classList.remove("navbar-sticky");
};

const showDropdown: (isOpen: boolean) => boolean = (isOpen: boolean) =>
  (isDropdownVisible.value = isOpen);
const showDropdownEvents: (isOpen: boolean) => boolean = (isOpen: boolean) =>
  (isDropdownEvents.value = isOpen);
const showDropdownTranslate: (isOpen: boolean) => boolean = (isOpen: boolean) =>
  (isDropdownTranslate.value = isOpen);

const updateLanguage: (language: string) => string = (language: string) =>
  (isLanguage.value = language);
</script>

<template>
  <nav :class="`navbar navbar-expand-xl fixed-top`">
    <div class="container">
      <NuxtLink to="/" aria-label="Smart Nation Logo" class="navbar-brand">
        <NuxtImg src="/images/logo.png" alt="Smart Nation Logo"
          class="d-inline-block align-text-top navbar-brand__logo" />
      </NuxtLink>

      <!-- toggler navigasi -->

      <button class="navbar-toggler border-0 d-xl-none d-xxl-none" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
        aria-label="Toggle navigation">
        <!-- <span class="navbar-toggler-icon"></span> -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list"
          viewBox="0 0 16 16">
          <path fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
        </svg>
      </button>

      <!-- Navbar Collapse Start -->
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink :class="`nav-link mx-md-1 ${route.path === '/' ? 'active' : ''}`" aria-current="page" to="/">Beranda
            </NuxtLink>
          </li>




          <!-- Show Dropdown display in laptop or desktop -->
          <li @mouseenter="showDropdown(true)" @mouseleave="showDropdown(false)"
            class="nav-item dropdown d-none d-lg-block">
            <NuxtLink :class="`nav-link mx-md-1  ${route.path === '/news' ? 'active' : ''
              }`" to="/news" role="button" data-bs-toggle="dropdown1" aria-expanded="false">
              Berita
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="currentColor">
                <path
                  d="M5.74714 6.19354L8.3338 8.7802L10.9205 6.19354C11.1805 5.93354 11.6005 5.93354 11.8605 6.19354C12.1205 6.45354 12.1205 6.87354 11.8605 7.13354L8.80047 10.1935C8.54047 10.4535 8.12047 10.4535 7.86047 10.1935L4.80047 7.13354C4.54047 6.87354 4.54047 6.45354 4.80047 6.19354C5.06047 5.9402 5.48714 5.93354 5.74714 6.19354Z"
                  fill="currentColor" />
              </svg>
            </NuxtLink>
            <ul class="dropdown-menu" :class="{ show: isDropdownVisible }">
              <li v-for="category in categories" :key="category.id">
                <NuxtLink class="dropdown-item" :to="`/news/category/${category.slug}`">{{ category.name }}</NuxtLink>
              </li>
            </ul>
          </li>
          <li @mouseenter="showDropdownEvents(true)" @mouseleave="showDropdownEvents(false)"
            class="nav-item dropdown d-none d-lg-block">
            <NuxtLink :class="`nav-link mx-md-1  ${route.path === '/events' ? 'active' : ''
              }`" to="/events" role="button" data-bs-toggle="dropdown1" aria-expanded="false">
              Acara
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="currentColor">
                <path
                  d="M5.74714 6.19354L8.3338 8.7802L10.9205 6.19354C11.1805 5.93354 11.6005 5.93354 11.8605 6.19354C12.1205 6.45354 12.1205 6.87354 11.8605 7.13354L8.80047 10.1935C8.54047 10.4535 8.12047 10.4535 7.86047 10.1935L4.80047 7.13354C4.54047 6.87354 4.54047 6.45354 4.80047 6.19354C5.06047 5.9402 5.48714 5.93354 5.74714 6.19354Z"
                  fill="currentColor" />
              </svg>
            </NuxtLink>
            <ul class="dropdown-menu" :class="{ show: isDropdownEvents }">
              <li><a class="dropdown-item" href="#">ISNA</a></li>
              <li><a class="dropdown-item" href="#">ISCIF</a></li>
              <li><a class="dropdown-item" href="#">Training</a></li>
            </ul>
          </li>

          <!-- Showing dropdown display in mobile or tablet -->
          <li class="nav-item dropdown d-lg-none d-md-block">
            <NuxtLink :class="`nav-link mx-md-1  ${route.path === '/news' ? 'active' : ''
              }`" to="/news" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Berita
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path
                  d="M5.74714 6.19354L8.3338 8.7802L10.9205 6.19354C11.1805 5.93354 11.6005 5.93354 11.8605 6.19354C12.1205 6.45354 12.1205 6.87354 11.8605 7.13354L8.80047 10.1935C8.54047 10.4535 8.12047 10.4535 7.86047 10.1935L4.80047 7.13354C4.54047 6.87354 4.54047 6.45354 4.80047 6.19354C5.06047 5.9402 5.48714 5.93354 5.74714 6.19354Z"
                  fill="#5D5D5D" />
              </svg>
            </NuxtLink>
            <ul class="dropdown-menu" :class="{ show: isDropdownVisible }">
              <li v-for="category in categories" :key="category.id">
                <NuxtLink class="dropdown-item" :to="`/news/category/${category.slug}`">{{ category.name }}</NuxtLink>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown d-lg-none d-md-block">
            <NuxtLink :class="`nav-link mx-md-1  ${route.path === '/events' ? 'active' : ''
              }`" to="/events" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Acara
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path
                  d="M5.74714 6.19354L8.3338 8.7802L10.9205 6.19354C11.1805 5.93354 11.6005 5.93354 11.8605 6.19354C12.1205 6.45354 12.1205 6.87354 11.8605 7.13354L8.80047 10.1935C8.54047 10.4535 8.12047 10.4535 7.86047 10.1935L4.80047 7.13354C4.54047 6.87354 4.54047 6.45354 4.80047 6.19354C5.06047 5.9402 5.48714 5.93354 5.74714 6.19354Z"
                  fill="#5D5D5D" />
              </svg>
            </NuxtLink>
            <ul class="dropdown-menu" :class="{ show: isDropdownEvents }">
              <li><a class="dropdown-item" href="#">ISNA</a></li>
              <li><a class="dropdown-item" href="#">ISCIF</a></li>
              <li><a class="dropdown-item" href="#">Training</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <NuxtLink :class="`nav-link mx-md-1  ${route.path === '/gallery' ? 'active' : ''
              }`" to="/gallery">Galeri
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink :class="`nav-link mx-md-1  ${route.path === '/about' ? 'active' : ''
              }`" to="/about">Tentang Kami
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink :class="`nav-link mx-md-1  ${route.path === '/contact' ? 'active' : ''
              }`" to="/contact">Hubungi Kami
            </NuxtLink>
          </li>


          <li class="nav-item dropdown  d-xl-none d-xxl-none">
            <NuxtLink :class="`nav-link mx-md-1  ${route.path === '/events' ? 'active' : ''
              }`" to="/events" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Tema perangkat
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path
                  d="M5.74714 6.19354L8.3338 8.7802L10.9205 6.19354C11.1805 5.93354 11.6005 5.93354 11.8605 6.19354C12.1205 6.45354 12.1205 6.87354 11.8605 7.13354L8.80047 10.1935C8.54047 10.4535 8.12047 10.4535 7.86047 10.1935L4.80047 7.13354C4.54047 6.87354 4.54047 6.45354 4.80047 6.19354C5.06047 5.9402 5.48714 5.93354 5.74714 6.19354Z"
                  fill="#5D5D5D" />
              </svg>
            </NuxtLink>
            <ul class="dropdown-menu" :class="{ show: isDropdownEvents }">

              <li>
                <button @click="toggleColorMode" class="btn border-0 translate__button" type="button"
                  :title="colorMode.value" data-bs-toggle="dropdown" aria-expanded="false">
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
                  </svg> {{ colorMode.value }}
                </button>
              </li>


            </ul>
          </li>


          <li class="nav-item dropdown d-xl-none d-xxl-none">
            <NuxtLink :class="`nav-link mx-md-1  ${route.path === '/events' ? 'active' : ''
              }`" to="/events" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Pilihan bahasa
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path
                  d="M5.74714 6.19354L8.3338 8.7802L10.9205 6.19354C11.1805 5.93354 11.6005 5.93354 11.8605 6.19354C12.1205 6.45354 12.1205 6.87354 11.8605 7.13354L8.80047 10.1935C8.54047 10.4535 8.12047 10.4535 7.86047 10.1935L4.80047 7.13354C4.54047 6.87354 4.54047 6.45354 4.80047 6.19354C5.06047 5.9402 5.48714 5.93354 5.74714 6.19354Z"
                  fill="#5D5D5D" />
              </svg>
            </NuxtLink>
            <ul class="dropdown-menu" :class="{ show: isDropdownEvents }">
              <li>
                <button @click="updateLanguage('ID')" title="Ubah bahasa" type="button" class="dropdown-item mb-3">
                  <NuxtImg src="/icons/indonesia.png" :width="27" :height="18" alt=" Indonesia" loading="lazy"
                    format="webp" />
                  Indonesia
                </button>
              </li>
              <li>
                <button @click="updateLanguage('EN')" title="Ubah bahasa" type="button" class="dropdown-item">
                  <NuxtImg src="/icons/inggris.png" :width="27" :height="18" alt=" Inggris" loading="lazy"
                    format="webp" />
                  Inggris
                </button>
              </li>
            </ul>
          </li>


        </ul>
      </div>
      <!-- Navbar Collapse End -->

      <div class="d-none d-lg-none d-xl-block d-xxl-block">
        <div class="hstack gx-2">
          <Search />

          <!-- <form class="d-flex" role="search">
            <input class="form-control search-input-container me-2" type="search" placeholder="Cari" aria-label="Cari"> -->
          <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
          <!-- </form> -->
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
          <div @mouseenter="showDropdownTranslate(true)" @mouseleave="showDropdownTranslate(false)" class="dropdown">
            <button class="btn border-0 translate__button px-0 mx-0" type="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-globe me-1"
                viewBox="0 0 16 16">
                <path
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z" />
              </svg>
              <span class="translate__name">
                {{ isLanguage }}
              </span>
            </button>
            <ul class="dropdown-menu" :class="{ show: isDropdownTranslate }">
              <li>
                <button @click="updateLanguage('ID')" title="Ubah bahasa" type="button" class="dropdown-item mb-3">
                  <NuxtImg src="/icons/indonesia.png" :width="27" :height="18" alt=" Indonesia" loading="lazy"
                    format="webp" />
                  Indonesia
                </button>
              </li>
              <li>
                <button @click="updateLanguage('EN')" title="Ubah bahasa" type="button" class="dropdown-item">
                  <NuxtImg src="/icons/inggris.png" :width="27" :height="18" alt=" Inggris" loading="lazy"
                    format="webp" />
                  Inggris
                </button>
              </li>
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
  background: rgba(40, 39, 39, 0.1);
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
  background: #fff;
  box-shadow: 0px 0.91667px 0.91667px 0px rgba(0, 0, 0, 0.12),
    0px 0px 0px 0.91667px rgba(103, 110, 118, 0.16),
    0px 1.83333px 4.58333px 0px rgba(103, 110, 118, 0.08);
}

.nav-link {
  color: #fff;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
}

.nav-link:hover {
  color: #ce2f2f !important;
}

.nav-link.active {
  color: #ce2f2f !important;
}

.navbar-sticky .nav-link {
  color: #5d5d5d;
}


.navbar .navbar-collapse {
  -webkit-transition: background-color 300ms ease-out !important;
  -moz-transition: background-color 300ms ease-out !important;
  -o-transition: background-color 300ms ease-out !important;
  transition: background-color 300ms ease-out !important;
  /* margin-left: 10px; */
}

.navbar .navbar-toggler {
  outline: none;
  border: none;
  box-shadow: none;
}

.navbar .navbar-toggler:focus {
  transition: ease-in-out 500ms;
}

.translate__button {
  color: #fff;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 14.4px */
}

.dropdown-menu {
  /* margin-top: 15px; */
  /* width: 100px; */
  height: auto;
  overflow: auto;
  border-radius: 4px;
}

.dropdown-menu .dropdown-item {
  color: #5d5d5d;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
}

.dropdown-menu .dropdown-item:hover {
  background: none;
  color: #d71149 !important;
}

.dropdown-item.active {
  color: var(--primary-600, #d71149) !important;
}

.navbar-sticky .bi {
  color: #5d5d5d;
}

.navbar-sticky .nav-link.active {
  color: #ce2f2f !important;
}

.translate__name {
  color: #fff;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-left: 3px;
}

.navbar-sticky .translate__name {
  color: #5d5d5d;
}


/* Responsive */

@media (min-width: 1200px) {
  .navbar {
    width: 100%;
    height: 60px;
  }

  .navbar.navbar-sticky {
    width: 100%;
    height: 60px;
  }

  .nav-link.active {
    border-bottom: 1.833px solid #d71149;
  }
}

/* 
  Set Navbar Dark Mode 
*/
.dark-mode .navbar-sticky {
  background: var(--font-950, #262626);
}

.dark-mode .navbar-sticky .nav-link {
  color: #e7e7e7;
}

.dark-mode .dropdown-menu {
  background: var(--font-950, #262626);
  color: #e7e7e7;
}

.dark-mode .bi {
  color: #e7e7e7;
}

.dark-mode .translate__name {
  color: #e7e7e7;
}

.dark-mode .dropdown-menu .dropdown-item {
  color: #e7e7e7;
}
</style>