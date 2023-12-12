
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
  const newColorMode: "dark" | "light" | 'system' =
    colorMode.preference === "dark"
      ? "light"
      : "dark";

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

const routePathMenu: globalThis.ComputedRef<string | string[]> = computed(() => route.params.id)



</script>

<template>
  <nav :class="`navbar navbar-expand-xl fixed-top`">
    <div class="container">
      <NuxtLink @click="toggleMenu()" href="/" aria-label="Smart Nation Logo" class="navbar-brand">
        <NuxtImg src="/images/logo.png" alt="Smart Nation Logo" loading="lazy"
          class="d-inline-block align-text-top navbar-brand__logo" />
      </NuxtLink>

      <!-- toggler navigasi -->
      <div class="d-xl-none d-xxl-none">
        <div class="d-flex justify-content-end">
          <ButtonToggleColorMode />
          <ButtonToggleMenu />
        </div>
      </div>

      <!-- Navbar Collapse Start -->
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink @click="toggleMenu" :class="`nav-link mx-md-1 ${route.path === '/' ? 'active' : ''}`"
              aria-current="page" to="/">
              Beranda
            </NuxtLink>
          </li>

          <!-- Show Dropdown display in laptop or desktop -->
          <li @mouseenter="showDropdown(true)" @mouseleave="showDropdown(false)"
            class="nav-item dropdown d-none d-lg-block">
            <NuxtLink :class="`nav-link mx-md-1  ${route.path === '/article'
              || route.path == `/article/category/${routePathMenu}` || route.path === `/${route.params.id}` ? 'active' : ''
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
                <NuxtLink @click="toggleMenu" class="dropdown-item" :active-class="`active-menu`"
                  :to="`/article/category/${category.slug}`">
                  {{
                    category.name }}
                </NuxtLink>
              </li>
            </ul>
          </li>
          <li @mouseenter="showDropdownEvents(true)" @mouseleave="showDropdownEvents(false)"
            class="nav-item dropdown d-none d-lg-block">
            <NuxtLink :class="`nav-link mx-md-1  ${route.path === '/events' || route.path === `/events/category/${routePathMenu}` ? 'active' : ''
              }`" to="#" role="button" data-bs-toggle="dropdown1" aria-expanded="false">
              Acara
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="currentColor">
                <path
                  d="M5.74714 6.19354L8.3338 8.7802L10.9205 6.19354C11.1805 5.93354 11.6005 5.93354 11.8605 6.19354C12.1205 6.45354 12.1205 6.87354 11.8605 7.13354L8.80047 10.1935C8.54047 10.4535 8.12047 10.4535 7.86047 10.1935L4.80047 7.13354C4.54047 6.87354 4.54047 6.45354 4.80047 6.19354C5.06047 5.9402 5.48714 5.93354 5.74714 6.19354Z"
                  fill="currentColor" />
              </svg>
            </NuxtLink>
            <ul class="dropdown-menu" :class="{ show: isDropdownEvents }">
              <li v-for="category in categoriesEventsData" :key="category.id">
                <NuxtLink @click="toggleMenu" class="dropdown-item" :active-class="`active-menu`"
                  :to="`/events/category/${category.slug}`">{{
                    category.name }}</NuxtLink>
              </li>

            </ul>
          </li>

          <!-- Showing dropdown display in mobile or tablet -->
          <li class="nav-item dropdown d-lg-none d-md-block">
            <NuxtLink :class="`nav-link mx-md-1  ${route.path === '/article'
              || route.path == `/article/category/${routePathMenu}` ? 'active' : ''
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
                <NuxtLink @click="toggleMenu" class="dropdown-item" :active-class="`active-menu`" :to="`/article`">
                  Indeks
                </NuxtLink>
              </li>
              <li v-for="category in categoriesData" :key="category.id">
                <NuxtLink @click="toggleMenu" class="dropdown-item" :active-class="`active-menu`"
                  :to="`/article/category/${category.slug}`">{{ category.name }}
                </NuxtLink>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown d-lg-none d-md-block">
            <NuxtLink :class="`nav-link mx-md-1  ${route.path === '/events' || route.path == `/events/category/${routePathMenu}` ? 'active' : ''
              }`" to="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Acara
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path
                  d="M5.74714 6.19354L8.3338 8.7802L10.9205 6.19354C11.1805 5.93354 11.6005 5.93354 11.8605 6.19354C12.1205 6.45354 12.1205 6.87354 11.8605 7.13354L8.80047 10.1935C8.54047 10.4535 8.12047 10.4535 7.86047 10.1935L4.80047 7.13354C4.54047 6.87354 4.54047 6.45354 4.80047 6.19354C5.06047 5.9402 5.48714 5.93354 5.74714 6.19354Z"
                  fill="#5D5D5D" />
              </svg>
            </NuxtLink>
            <ul class="dropdown-menu" :class="{ show: isDropdownEvents }">
              <li v-for="category in categoriesEventsData" :key="category.id">
                <NuxtLink @click="toggleMenu" class="dropdown-item" :active-class="`active-menu`"
                  :to="`/events/category/${category.slug}`">{{
                    category.name }}</NuxtLink>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <NuxtLink @click="toggleMenu" :class="`nav-link mx-md-1  ${route.path === '/gallery' || route.path === `/gallery/${route.params.id}` ? 'active' : ''
              }`" to="/gallery">Galeri
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink @click="toggleMenu" :class="`nav-link mx-md-1  ${route.path === '/about' ? 'active' : ''
              }`" to="/about">Tentang Kami
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink @click="toggleMenu" :class="`nav-link mx-md-1  ${route.path === '/contact' ? 'active' : ''
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
          <ButtonToggleColorMode />
          <ButtonTranslateGoogleTranslateButtonSticky />
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="css" >
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
  /* margin-top: 13px; */
  /* width: fit-content; */
  height: auto;
  overflow: auto;
  border-radius: 4px;


}

.dropdown-menu .dropdown-item {
  color: #5d5d5d;
  /* color: #fff; */
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

.dropdown-item.active-menu {
  color: #d71149 !important;
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

.search__button {
  color: #fff;
}

.button-hamburger {
  color: #fff;
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