<script lang="ts" setup>
import { ColorModeInstance } from "@nuxtjs/color-mode/dist/runtime/types";
import { RouteLocationNormalizedLoaded } from "vue-router";
import { categories } from "~/utils/data/getInitialCategoryPostData";

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

const showDropdown: (isOpen: boolean) => boolean = (isOpen: boolean) =>
  (isDropdownVisible.value = isOpen);
const showDropdownEvents: (isOpen: boolean) => boolean = (isOpen: boolean) =>
  (isDropdownEvents.value = isOpen);
const showDropdownTranslate: (isOpen: boolean) => boolean = (isOpen: boolean) =>
  (isDropdownTranslate.value = isOpen);

const updateLanguage: (language: string) => string = (language: string) =>
  (isLanguage.value = language);

const categoriesData = categories.filter(category => category.parent === Number(0) || category.parent === Number(82));
const categoriesEventsData = categories.filter(category => {
  return category.id === Number(89) ||
    category.id === Number(90) ||
    category.id === Number(129)
})

const toggleMenu = (() => {
  const navbar = document.querySelector('.navbar-collapse')
  return navbar?.classList.contains('show')
    ? navbar.classList.remove('show')
    : navbar?.classList.add('show')
})


</script>

<template>
  <nav :class="`navbar navbar-expand-xl fixed-top`">
    <div class="container">
      <NuxtLink @click="toggleMenu()" to="/" aria-label="Smart Nation Logo" class="navbar-brand">
        <NuxtImg src="/images/logo.png" alt="Smart Nation Logo"
          class="d-inline-block align-text-top navbar-brand__logo" />
      </NuxtLink>

      <!-- toggler navigasi -->
      <div class="d-lg-block d-xl-none d-xxl-none">
        <div class="d-flex justify-content-end">
          <NavigationFeatureColorMode />
          <NavigationButtonMenu />
        </div>
      </div>
      <!-- Navbar Collapse Start -->
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink @click="toggleMenu()" :class="`nav-link mx-md-1 ${route.path === '/' ? 'active' : ''}`"
              aria-current="page" to="/">Beranda
            </NuxtLink>
          </li>

          <!-- Show Dropdown display in laptop or desktop -->
          <li @mouseenter="showDropdown(true)" @mouseleave="showDropdown(false)"
            class="nav-item dropdown d-none d-lg-block">
            <NuxtLink :class="`nav-link mx-md-1  ${route.path === '/article' || route.path === `/article/${route.params.id}` ? 'active' : ''
              }`" to="/article" role="button" data-bs-toggle="dropdown1" aria-expanded="false">
              Berita
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="currentColor">
                <path
                  d="M5.74714 6.19354L8.3338 8.7802L10.9205 6.19354C11.1805 5.93354 11.6005 5.93354 11.8605 6.19354C12.1205 6.45354 12.1205 6.87354 11.8605 7.13354L8.80047 10.1935C8.54047 10.4535 8.12047 10.4535 7.86047 10.1935L4.80047 7.13354C4.54047 6.87354 4.54047 6.45354 4.80047 6.19354C5.06047 5.9402 5.48714 5.93354 5.74714 6.19354Z"
                  fill="currentColor" />
              </svg>
            </NuxtLink>
            <ul class="dropdown-menu" :class="{ show: isDropdownVisible }">
              <li v-for="category in categoriesData" :key="category.id">
                <NuxtLink class="dropdown-item" :to="`/article/category/${category.slug}`">{{ category.name }}</NuxtLink>
              </li>
            </ul>
          </li>
          <li @mouseenter="showDropdownEvents(true)" @mouseleave="showDropdownEvents(false)"
            class="nav-item dropdown d-none d-lg-block">
            <NuxtLink :class="`nav-link mx-md-1  ${route.path === '/events' || route.path === `/events/${route.params.id}` ? 'active' : ''
              }`" to="/events" role="button" data-bs-toggle="dropdown1" aria-expanded="false">
              Acara
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="currentColor">
                <path
                  d="M5.74714 6.19354L8.3338 8.7802L10.9205 6.19354C11.1805 5.93354 11.6005 5.93354 11.8605 6.19354C12.1205 6.45354 12.1205 6.87354 11.8605 7.13354L8.80047 10.1935C8.54047 10.4535 8.12047 10.4535 7.86047 10.1935L4.80047 7.13354C4.54047 6.87354 4.54047 6.45354 4.80047 6.19354C5.06047 5.9402 5.48714 5.93354 5.74714 6.19354Z"
                  fill="currentColor" />
              </svg>
            </NuxtLink>
            <ul class="dropdown-menu" :class="{ show: isDropdownEvents }">
              <li v-for="category in categoriesEventsData" :key="category.id">
                <NuxtLink class="dropdown-item" :to="`/events/category/${category.slug}`">{{ category.name }}</NuxtLink>
              </li>
            </ul>
          </li>

          <!-- Showing dropdown display in mobile or tablet -->
          <li class="nav-item dropdown d-lg-none d-md-block">
            <NuxtLink :class="`nav-link mx-md-1  ${route.path === '/article' || route.path === `/${route.params.id}` ? 'active' : ''
              }`" to="/article" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Berita
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path
                  d="M5.74714 6.19354L8.3338 8.7802L10.9205 6.19354C11.1805 5.93354 11.6005 5.93354 11.8605 6.19354C12.1205 6.45354 12.1205 6.87354 11.8605 7.13354L8.80047 10.1935C8.54047 10.4535 8.12047 10.4535 7.86047 10.1935L4.80047 7.13354C4.54047 6.87354 4.54047 6.45354 4.80047 6.19354C5.06047 5.9402 5.48714 5.93354 5.74714 6.19354Z"
                  fill="#5D5D5D" />
              </svg>
            </NuxtLink>
            <ul class="dropdown-menu" :class="{ show: isDropdownVisible }">
              <li>
                <NuxtLink @click="toggleMenu" class="dropdown-item" :to="`/article`">Indeks</NuxtLink>
              </li>
              <li v-for="category in categoriesData" :key="category.id">
                <NuxtLink @click="toggleMenu()" class="dropdown-item" :to="`/article/category/${category.slug}`">{{
                  category.name
                }}</NuxtLink>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown d-lg-none d-md-block">
            <NuxtLink :class="`nav-link mx-md-1  ${route.path === '/events' || route.path === `/events/${route.params.id}` ? 'active' : ''
              }`" to="/events" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Acara
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path
                  d="M5.74714 6.19354L8.3338 8.7802L10.9205 6.19354C11.1805 5.93354 11.6005 5.93354 11.8605 6.19354C12.1205 6.45354 12.1205 6.87354 11.8605 7.13354L8.80047 10.1935C8.54047 10.4535 8.12047 10.4535 7.86047 10.1935L4.80047 7.13354C4.54047 6.87354 4.54047 6.45354 4.80047 6.19354C5.06047 5.9402 5.48714 5.93354 5.74714 6.19354Z"
                  fill="#5D5D5D" />
              </svg>
            </NuxtLink>
            <ul class="dropdown-menu" :class="{ show: isDropdownEvents }">
              <li>
                <NuxtLink @click="toggleMenu" class="dropdown-item" :to="`/events`">Indeks</NuxtLink>
              </li>
              <li v-for="category in categoriesEventsData" :key="category.id">
                <NuxtLink class="dropdown-item" :to="`/events/category/${category.slug}`">{{ category.name }}</NuxtLink>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <NuxtLink @click="toggleMenu()" :class="`nav-link mx-md-1  ${route.path === '/gallery' || route.path === `/gallery/${route.params.id}` ? 'active' : ''
              }`" to="/gallery">Galeri
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink @click="toggleMenu()" :class="`nav-link mx-md-1  ${route.path === '/about' ? 'active' : ''
              }`" to="/about">Tentang Kami
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink @click="toggleMenu()" :class="`nav-link mx-md-1  ${route.path === '/contact' ? 'active' : ''
              }`" to="/contact">Hubungi Kami
            </NuxtLink>
          </li>

          <li class="nav-item">
            <NavigationFeatureSearchBox class="d-xl-none d-xxl-none py-3" />
          </li>
        </ul>
      </div>
      <!-- Navbar Collapse End -->

      <div class="d-none d-lg-none d-xl-block d-xxl-block">
        <div class="hstack gx-2">
          <NavigationFeatureSearchBox isResults />
          <NavigationFeatureColorMode />
          <NavigationFeatureTranslateGoogleButtonDefault />
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="css" scoped>
.navbar {
  width: 100%;
  height: auto;
  background: #fff;
  box-shadow: 0px 0.91667px 0.91667px 0px rgba(0, 0, 0, 0.12),
    0px 0px 0px 0.91667px rgba(103, 110, 118, 0.16),
    0px 1.83333px 4.58333px 0px rgba(103, 110, 118, 0.08);
  transition: ease 500ms;
}

.navbar-brand .navbar-brand__logo {
  width: 83.667px;
  height: 26.528px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.nav-link {
  color: #5d5d5d;
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
  color: #5d5d5d;
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 14.4px */
}

.dropdown-menu {
  width: 100%;
  height: auto;
  overflow: auto;
  border-radius: 4px;
  /* margin-top: 13px; */
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

.translate__name {
  color: #5d5d5d;
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

  .navbar.navbar {
    width: 100%;
    height: 60px;
  }

  .nav-link.active {
    border-bottom: 1.833px solid #d71149;
  }

  .dropdown-menu {
    /* margin-top: 12px; */
  }
}

/* Dark Mode */
.dark-mode .navbar {
  background: var(--font-950, #262626);
}

.dark-mode .navbar .nav-link {
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
