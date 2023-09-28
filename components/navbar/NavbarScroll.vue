<template>
  <nav
    class="navbar navbar-expand-xl fixed-top"
    :class="{ 'navbar-scrolled': scrolled }"
  >
    <div class="container">
      <NuxtLink
        to="/"
        aria-label="Logo Smart Nation"
        class="navbar-brandd d-lg-block mx-lg-0"
      >
        <NuxtImg
          src="/images/logo.png"
          alt="Logo Smart Nation"
          class="d-inline-block align-text-top logo"
        />
      </NuxtLink>

      <!-- Tombol pencarian -->
      <div class="srcc">
        <button
          class="btn-src btn-secondary search-button"
          @click="toggleSearch"
          v-if="!isSearchVisible || isLargeScreen"
        >
          <NuxtImg
            src="/images/search.png"
            alt="Search Icon"
            class="search-icon"
          />
        </button>
        <div class="src-lg" v-if="isSearchVisible">
          <!-- Kotak Pencarian dengan Gambar sebagai Latar Belakang Input -->
          <div class="input-group search-box">
            <input type="text" class="form-control" placeholder="Search" />
          </div>
        </div>
        <button
          class="btn-src btn-secondary search-button"
          @click="toggleSearch"
          v-if="isSearchVisible"
        >
          <NuxtImg
            src="/images/search.png"
            alt="Search Icon"
            class="search-icon"
          />
        </button>
      </div>

      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleNavbar"
      >
        <span
          class="navbar-toggler-icon"
          :class="{ 'navbar-toggler-icon-white': !scrolled }"
        ></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-itembr">
            <NuxtLink
              :class="{
                'brnd nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0 inactive':
                  !isActiveBeranda,
                'brnd nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0 active':
                  isActiveBeranda,
              }"
              @click="activateNavItem('Beranda')"
              to="/"
              class="text-decoration-none"
              ><span class="text-hover-reds" style="transition: color 0.3s">
                Beranda
              </span></NuxtLink
            >
          </li>
          <li class="nav-itembrt">
            <div
              :class="{
                active: isActiveBerita,
              }"
              class="dropdown-brt"
              @mouseenter="openDropdown('dropdown2')"
              @mouseleave="closeDropdown('dropdown2')"
            >
              <NuxtLink
                to="/news"
                class="dropdown-togglee brt text-decoration-none"
                @mouseenter="toggleHover('dropdown2', true)"
                @mouseleave="toggleHover('dropdown2', false)"
                @click="activateNavItem('Berita')"
              >
                <span
                  :class="{
                    'text-hover-reds': isHoveredText['dropdown2'],
                    active: isActiveBerita,
                  }"
                  style="transition: color 0.3s"
                  class="dropdown-text"
                >
                  Berita
                </span>
              </NuxtLink>
              <NuxtImg
                :src="
                  isActiveBerita && scrolled
                    ? nextImage
                    : isHoveredText['dropdown2']
                    ? nextImage
                    : scrolled
                    ? scrolledImage
                    : getDropdownImage('dropdown2')
                "
                alt="dropdown2"
                @mouseover="toggleHover('dropdown2', true)"
                @mouseout="toggleHover('dropdown2', false)"
                class="d-inline-block align-text-top dropdown-img"
              />
              <div
                v-if="showDropdown['dropdown2']"
                class="dropdown-menu dropdown-menu-brt"
                @mouseenter="keepDropdownOpen('dropdown2')"
                @mouseleave="closeDropdown('dropdow2')"
              >
                <div class="d-flex flex-column justify-content-arround gx-2">
                  <div
                    v-for="category in categoriesData"
                    :key="category"
                    class="drp-brt"
                  >
                    <NuxtLink
                      class="brta text-wrap"
                      :to="`/category/${category}`"
                      aria-label="News"
                      >{{ category }}
                    </NuxtLink>
                  </div>
                </div>

                <!-- Tambahkan pilihan dropdown lainnya di sini jika diperlukan -->
              </div>
            </div>
          </li>
          <li class="nav-itemenv">
            <div
              :class="{
                active: isActiveAcara,
              }"
              class="dropdown-env"
              @mouseenter="openDropdown('dropdown1')"
              @mouseleave="closeDropdown('dropdown1')"
            >
              <NuxtLink
                to="/events"
                class="dropdown-togglee env text-decoration-none"
                @mouseenter="toggleHover('dropdown1', true)"
                @mouseleave="toggleHover('dropdown1', false)"
                @click="activateNavItem('Acara')"
              >
                <span
                  :class="{
                    'text-hover-reds': isHoveredText['dropdown1'],
                    active: isActiveAcara,
                  }"
                  style="transition: color 0.3s"
                  class="dropdown-text"
                >
                  Acara
                </span>
              </NuxtLink>
              <NuxtImg
                :src="
                  isActiveAcara && scrolled
                    ? nextImage
                    : isHoveredText['dropdown1']
                    ? nextImage
                    : scrolled
                    ? scrolledImage
                    : getDropdownImage('dropdown1')
                "
                alt="dropdown1"
                @mouseover="toggleHover('dropdown1', true)"
                @mouseout="toggleHover('dropdown1', false)"
                class="d-inline-block align-text-top dropdown-img"
              />
              <div
                v-if="showDropdown['dropdown1']"
                class="dropdown-menu dropdown-menu-acr"
                @mouseenter="keepDropdownOpen('dropdown1')"
                @mouseleave="closeDropdown('dropdown1')"
              >
                <div class="d-flex flex-column justify-content-arround gx-2">
                  <div class="drp-acr">
                    <a class="acr" href="/events">ISNA</a>
                  </div>
                  <div class="drp-acr">
                    <a class="acr" href="/events">ISCIF</a>
                  </div>
                  <div class="drp-acr">
                    <a class="acr" href="/events">Training</a>
                  </div>
                </div>

                <!-- Tambahkan pilihan dropdown lainnya di sini jika diperlukan -->
              </div>
            </div>
          </li>

          <li class="nav-item glri">
            <NuxtLink
              :class="{
                'glr nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0 inactive':
                  !isActiveGaleri,
                'glr nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0 active':
                  isActiveGaleri,
              }"
              @click="activateNavItem('Galeri')"
              to="/gallery"
              class="text-decoration-none"
            >
              <span class="text-hover-reds" style="transition: color 0.3s">
                Galeri
              </span>
            </NuxtLink>
          </li>
          <li class="nav-item tkm">
            <NuxtLink
              :class="{
                'tk nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0 inactive':
                  !isActiveTentangKami,
                'tk nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0 active':
                  isActiveTentangKami,
              }"
              @click="activateNavItem('TentangKami')"
              to="/about"
              class="text-decoration-none"
              ><span class="text-hover-reds" style="transition: color 0.3s">
                Tentang Kami
              </span></NuxtLink
            >
          </li>
          <li class="nav-item hkm">
            <NuxtLink
              :class="{
                'hk nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0 inactive':
                  !isActiveHubungiKami,
                'hk nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0 active':
                  isActiveHubungiKami,
              }"
              @click="activateNavItem('HubungiKami')"
              to="/contact"
              class="text-decoration-none"
              ><span class="text-hover-reds" style="transition: color 0.3s">
                Hubungi Kami
              </span></NuxtLink
            >
          </li>

          <li class="search-translate">
            <div class="row align-items-center">
              <div class="src">
                <!-- Tambahkan class d-none untuk menyembunyikan pada layar kecil -->
                <!-- Kotak Pencarian dengan Gambar sebagai Latar Belakang Input -->
                <div class="input-group search-box">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                  />
                </div>
              </div>
              <div
                class="col-auto dropdown"
                @mouseenter="cancelCloseDropdownTimer()"
                @mouseleave="startCloseDropdownTimer()"
              >
                <img
                  :src="currentImagee"
                  alt="Logo"
                  class="d-inline-block align-text-top indo"
                />

                <div class="language-text" @click="toggleDropdown">
                  {{ selectedLanguage }}
                </div>

                <div v-show="showDropdown" class="dropdown-content">
                  <div
                    class="dropdown-item"
                    v-for="(language, index) in languages"
                    :key="index"
                  >
                    <NuxtImg
                      :src="`/icons/${language.name}.png`"
                      alt="Logo"
                      class="d-inline-block align-text-top lg-indonesia"
                    />

                    <a
                      href="#"
                      class="indonesia"
                      @click="changeLanguage(language.code)"
                    >
                      {{ language.name }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { categories } from "~/utils/data/getInitialData";

export default {
  data() {
    return {
      isNavbarOpen: false,
      isSearchVisible: false,
      isActiveBeranda: true,
      isActiveBerita: false,
      isActiveAcara: false,
      isActiveGaleri: false,
      isActiveTentangKami: false,
      isActiveHubungiKami: false,
      languageDropdownHovered: false,
      languageDropdownInterval: null, // Tambahkan properti interval
      showDropdown: false, // Status untuk mengontrol keterlihatan dropdown
      currentImagee: "/icons/language.png", // Gambar awal
      languages: [
        { code: "ID", name: "Indonesia" },
        { code: "EN", name: "Inggris" },
      ],
      selectedLanguage: "ID", // Anda dapat mengatur bahasa default di sini
      isDropdownVisible: false, // Tambahkan status untuk mengontrol keterlihatan dropdown
      scrolled: false,
      isScrolled: false,
      currentImage: "/images/arrow_down.png",
      nextImage: "/images/arrow_down_red.png",
      scrolledImage: "/images/arrow_down_black.png",
      showDropdown: {
        dropdown1: false,
        dropdown2: false,
      },
      hoveringDropdown: {
        dropdown1: false,
        dropdown2: false,
      },
      isHoveredText: {
        dropdown1: false,
        dropdown2: false,
      },
      categoriesData: categories,
    };
  },
  computed: {
    iconClass() {
      return {
        "navbar-toggler-icon-white": !this.scrolled,
        "navbar-toggler-icon-black": this.scrolled,
      };
    },
    isLargeScreen() {
      if (process.client) {
        // Periksa apakah layar lebih dari 1200px hanya ketika kode dijalankan di sisi klien (browser)
        return window.innerWidth > 1200;
      } else {
        return false; // Atau nilai lain yang sesuai dengan kebutuhan Anda ketika dijalankan pada SSR
      }
    },
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    getDropdownImage(dropdownName) {
      // Fungsi ini mengembalikan URL gambar sesuai dengan status isActiveAcara dan isHoveredText
      if (dropdownName === "dropdown1") {
        if (this.isActiveAcara) {
          return this.nextImage;
        } else if (this.isHoveredText[dropdownName]) {
          return this.nextImage;
        } else {
          return this.currentImage;
        }
      } else if (dropdownName == "dropdown2") {
        if (this.isActiveBerita) {
          return this.nextImage;
        } else if (this.isHoveredText[dropdownName]) {
          return this.nextImage;
        } else {
          return this.currentImage;
        }
      }
      // Tambahkan logika lain jika diperlukan
    },
    activateNavItem(item) {
      // Nonaktifkan semua item lainnya dan aktifkan item yang dipilih
      for (let key in this.$data) {
        if (key.startsWith("isActive") && key !== `isActive${item}`) {
          this.$data[key] = false;
        }
      }
      this.$data[`isActive${item}`] = true;
    },

    cancelCloseDropdownTimer() {
      // Hentikan interval jika kursor kembali mengarah ke dropdown
      clearInterval(this.languageDropdownInterval);
    },

    startCloseDropdownTimer() {
      // Mulai interval ketika kursor meninggalkan dropdown
      this.languageDropdownInterval = setInterval(() => {
        if (!this.languageDropdownHovered) {
          this.showDropdown["language"] = false;
          clearInterval(this.languageDropdownInterval); // Hentikan interval setelah 3 detik
        }
      }, 100);
    },

    toggleDropdown() {
      // Toggle keterlihatan dropdown saat teks diklik
      this.showDropdown = !this.showDropdown;
      // Atur timeout selama 3 detik untuk menyembunyikan dropdown
      setTimeout(this.hideDropdown, 30000);
      // Mengatur nilai languageDropdownHovered berdasarkan status saat ini
      this.languageDropdownHovered = !this.languageDropdownHovered;
    },
    openDropdown(dropdownName) {
      // Membuka dropdown jika dropdown bahasa atau dropdown berita/acara tidak di-hover
      if (!this.languageDropdownHovered) {
        this.showDropdown[dropdownName] = true;
      }
    },

    closeDropdown(dropdownName) {
      // Menutup dropdown jika dropdown bahasa atau dropdown berita/acara tidak di-hover
      if (!this.languageDropdownHovered) {
        this.showDropdown[dropdownName] = false;
      }
    },

    hideDropdown() {
      // Sembunyikan dropdown
      this.showDropdown = false;
    },
    changeLanguage(lang) {
      // Update the selected language
      this.selectedLanguage = lang;

      // Ubah urutan bahasa sesuai dengan bahasa yang dipilih
      if (lang === "EN") {
        this.languages = [
          { code: "EN", name: "Inggris" },
          { code: "ID", name: "Indonesia" },
        ];
      } else {
        this.languages = [
          { code: "ID", name: "Indonesia" },
          { code: "EN", name: "Inggris" },
        ];
      }
    },
    handleScroll() {
      if (process.client) {
        // Hanya jalankan kode ini di sisi klien (browser)
        if (window.scrollY > 460) {
          this.currentImagee = "/images/language1.png";
          this.scrolled = true;
        } else {
          this.currentImagee = "/images/language.png";
          this.scrolled = false;
        }
      }
    },
    openDropdown(dropdown) {
      this.showDropdown[dropdown] = true;
    },
    closeDropdown(dropdown) {
      if (!this.hoveringDropdown[dropdown]) {
        this.showDropdown[dropdown] = false;
      }
    },
    keepDropdownOpen(dropdown) {
      this.hoveringDropdown[dropdown] = true;
    },
    toggleHover(dropdown, isHovered) {
      this.isHoveredText[dropdown] = isHovered;
    },
    toggleSearch() {
      if (window.innerWidth <= 1200) {
        // Hanya toggle keterlihatan elemen pencarian pada ukuran layar kurang dari atau sama dengan 1200px
        this.isSearchVisible = !this.isSearchVisible;
      }
    },
  },
  created() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  mounted() {
    if (process.client) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  beforeDestroy() {
    if (process.client) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  },
};
</script>

<style scoped>
.navbar-toggler-icon-white {
  filter: brightness(0) invert(1); /* Mengatur warna SVG menjadi putih */
}

.navbar-toggler-icon-black {
  filter: brightness(0) invert(0);
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown:hover .dropdown-content,
.language-text:hover + .dropdown-content,
.dropdown-content[style*="display: block"] {
  display: block;
}

.dropdown-content {
  border-radius: 4px;
  background: var(--Background, #fff);
  display: none;
  padding: 12px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: absolute;
  background-color: #f9f9f9;
  width: 140px !important;
  height: 116px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  margin-top: 146px;
  margin-left: 50px;
}

.dropdown-item {
  display: block;
  padding: 12px 8px;
  align-items: center;
  gap: 4px;
  padding: 10px;
  color: #333;
  transition: background-color 0.3s;
  border-radius: 4px;
}

.dropdown-item:hover {
  border-radius: 4px;
  background: var(--font-50, grey);
}

.lg-indonesia {
  width: 27px;
  height: 18px;
  margin-right: 4px;
}

.lg-inggris {
  width: 27px;
  height: 18px;
  margin-right: 4px;
}

.indonesia {
  width: 61px;
  height: 14px;
  color: var(--font-600, #5d5d5d);
  /* Font/Body 1  SemiBold */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 14.4px */
  text-decoration: none;
}

.inggris {
  width: 43px;
  height: 14px;
  color: var(--font-600, #5d5d5d);
  /* Font/Body 1  SemiBold */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 14.4px */
  text-decoration: none;
}

/* Style for the language text */
.language-text {
  font-weight: 600;
  transition: background-color 0.3s;
  /* Animasi perubahan latar belakang */
  color: var(--Background, #fff);
  font-weight: 600;
  width: 12px;
  height: 14px;
  /* Font/Body 1 Bold */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  line-height: 120%;
  /* 14.4px */
  text-align: center;
}

.navbar-scrolled .language-text {
  color: var(--font-600, #5d5d5d);
  font-weight: 600;
  width: 12px;
  height: 14px;
  /* Font/Body 1 Bold */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  line-height: 120%;
  /* 14.4px */
  text-align: center;
}

.text-hover-reds:hover {
  transition: color 0.3s;
  color: var(--danger-600, #ce2f2f);
  /* Mengubah warna teks menjadi merah saat dihover */
}

.navbar-scrolled .dropdown-text {
  color: var(--font-600, #5d5d5d);

  /* Font/Body 1 Bold */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* 14.4px */
}

.dropdown-text {
  padding: 0 !important;
  color: var(--font-50, #f6f6f6);

  /* Font/Body 1 Bold */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* 14.4px */
  transition: color 0.3s;
}

.active .dropdown-text {
  align-self: stretch;
  /* Font/Body 1 Bold */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* 14.4px */
  height: 14px !important;
  display: flex !important;
  padding: 0 !important;
  align-items: center !important;
  gap: 4px !important;
  align-self: stretch !important;
  margin: 0 !important;
  border-bottom: none;
}

.active .dropdown-img {
  transform: scale(1.1);
  cursor: pointer;
}

/* Ubah ukuran gambar saat dihover */
.dropdown-env:hover .dropdown-img {
  transform: scale(1.1);
  /* Atur faktor perbesaran sesuai kebutuhan */
  cursor: pointer;
}

.dropdown-brt:hover .dropdown-img {
  transform: scale(1.1);
  /* Atur faktor perbesaran sesuai kebutuhan */
  cursor: pointer;
}

/* Ubah warna teks menjadi merah saat dihover pada tulisan */
.dropdown-env:hover .text-hover-reds {
  color: var(--danger-600, #ce2f2f);
  /* Mengubah warna teks menjadi merah saat dihover */
}

.dropdown-brt:hover .text-hover-reds {
  color: var(--danger-600, #ce2f2f);
  /* Mengubah warna teks menjadi merah saat dihover */
}

.col-auto {
  justify-content: center;
  display: flex;
  padding: 0;
  width: 44px;
  height: 24px;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  /* Ubah kursor menjadi tanda tangan saat diarahkan ke teks */
}

/* CSS Khusus untuk Kotak Pencarian */
.search-box {
  justify-content: center;
  display: flex;
  width: 386px;
  align-items: center;
  gap: 4px;
  height: 32px;
}

.src {
  display: flex;
  width: 386px;
  padding: 6px 12px;
  align-items: center;
  gap: 4px;
  padding: 0;
  height: 32px;
  margin: 0;
}

.src-lg {
  display: none;
  width: 386px;
  padding: 6px 12px;
  align-items: center;
  gap: 4px;
  padding: 0;
  height: 32px;
  margin: 0;
}

.search-box input[type="text"] {
  color: var(--font-300, #b0b0b0) !important;
  background-image: url("/icons/search.png");
  /* Tambahkan gambar search sebagai latar belakang input */
  background-repeat: no-repeat;
  background-size: 20px 20px;
  /* Sesuaikan ukuran gambar sesuai kebutuhan */
  background-position: 12px 6px;
  /* Sesuaikan posisi gambar sesuai kebutuhan */
  padding-left: 36px;
  /* Menambahkan ruang di kiri input untuk gambar */
  border: 1px solid #e7e7e7;
  border-radius: 22px;
  border-color: #e7e7e7;
  /* Warna garis input saat latar belakang transparan */
  background-color: transparent;
  /* Warna teks input saat latar belakang transparan */
}

.search-box button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

input {
  height: 32px !important;
}

.navbar-scrolled input::placeholder {
  position: fixed !important;
  color: var(--font-300, #b0b0b0);
  /* Font/Body 1 */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 14.4px */
  width: 43px !important;
  height: 14px !important;
}

input::placeholder {
  position: fixed !important;
  color: rgba(255, 255, 255, 0.8);
  /* Font/Body 1 */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 14.4px */
  width: 43px !important;
  height: 14px !important;
}

.form-control {
  display: flex;
  width: 390px !important;
  padding: 9px 12px;
  padding-top: 12px !important;
  align-items: center !important;
  gap: 4px;
  height: 32px;
  border: none;
  /* Hapus border input */
  outline: none;
  /* Hapus focus outline saat input aktif */
  border: 1px solid #e7e7e7;
  /* Tambahkan garis bawah pada input */
}

.row {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  align-items: center !important;
  margin-left: 0 !important;
  width: 454px;
  height: 32px;
}

.search-translate {
  margin-left: 12px;
  width: 454px !important;
  height: 32px;
}

.container {
  display: flex;
  justify-content: flex-start;
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 100%;
  height: 60px;
  padding: 0;
}

.navbar-toggler {
  background-color: var(--font-50, transparent);
}

.navbar {
  max-width: 100%;
  padding-left: 8.334% !important;
  padding-right: 8.334% !important;
  padding: 14px 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  /* padding: 24px 120px; */
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  transition: background-color 0.3s;
  /* Animasi perubahan warna latar belakang */
  box-shadow: 0px 0.91667px 0.91667px 0px rgba(0, 0, 0, 0.12),
    0px 0px 0px 0.91667px rgba(103, 110, 118, 0.16),
    0px 1.83333px 4.58333px 0px rgba(103, 110, 118, 0.08);
}

.nav-link {
  /* Font/Body 1 Bold */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* 14.4px */
}

.dropdown-env {
  padding: 8px 4px;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 4px;
  position: relative;
  width: 66px !important;
  height: 32px !important;
}

.nav-itemenv {
  width: 66px !important;
  height: 32px !important;
}

.dropdown-brt {
  display: flex;
  align-items: center;
  padding: 8px 4px !important;
  gap: 4px;
  position: relative;
  width: 65px !important;
  height: 32px !important;
}

.nav-itembrt {
  width: 65px !important;
  height: 32px !important;
}

.navbar-scrolled {
  background: #fff;
  box-shadow: 0px 0.91667px 0.91667px 0px rgba(0, 0, 0, 0.12),
    0px 0px 0px 0.91667px rgba(103, 110, 118, 0.16),
    0px 1.83333px 4.58333px 0px rgba(103, 110, 118, 0.08);
}

.navbar-scrolled .search-box input[type="text"] {
  border-color: #888;
  /* Warna garis input saat latar belakang putih */
  color: var(--font-600, #5d5d5d) !important;
}

.brnd {
  justify-content: center;
  margin: 0 !important;
  display: flex;
  padding: 8px 4px;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  width: 61px;
  height: 30px;
}

.dropdown-togglee {
  /* Font/Body 1 Bold */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* 14.4px */
  cursor: pointer;
  text-decoration: none;
  color: var(--bs-nav-link-color);
  /* Gaya lainnya sesuai kebutuhan Anda */
}

.env {
  color: var(--font-50, #f6f6f6);
  /* Font/Body 1 Bold */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* 14.4px */
  width: 38px !important;
  height: 14px !important;
}

.glr {
  display: flex;
  padding: 8px 4px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 0 !important;
  width: 45px;
  height: 30px;
}

.glri {
  width: 45px;
  height: 30px;
}

.dropdown-img {
  max-width: 100%;
  height: auto;
  transition: transform 0.3s;
  width: 16px;
  height: 16px;
}

.dropdown-menu-brt {
  border-radius: 4px;
  width: 250px;
  height: 250px;
  overflow-x: auto;
  /* height: 201px; */
  background: var(--Background, #fff);
  display: inline-flex;
  padding: 20px;
  margin: 0 auto;
  /* padding: 24px; */
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  /* Gaya lainnya sesuai kebutuhan Anda */
}

.dropdown-menu-acr {
  top: 100%;
  left: 0;
  width: 250px;
  height: 250px;
  overflow-x: auto;
  /* display: inline-flex; */
  padding: 20px;
  margin: 0 auto;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  position: absolute;
  border-radius: 4px;
  background: var(--Background, #fff);
}

.drp-brt {
  /* width: 76px; */
  height: 43px;
  display: flex;
  padding: 12px 0px;
  align-items: center;
  align-self: stretch;
  /* border-bottom: 1px solid var(--font-100, #e7e7e7); */
  list-style: none;
}

.brta {
  text-decoration: none;
  color: var(--font-600, #5d5d5d);
  /* Font/Body 2 SemiBold */
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 19.2px */
}

.drp-brt:hover a {
  text-decoration: none;
  color: var(--primary-600, #d71149);

  /* Font/Body 2 SemiBold */
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 19.2px */
}

.drp-acr {
  /* width: 68px; */
  height: 43px;
  display: flex;
  padding: 12px 0px;
  align-items: center;
  align-self: stretch;
  /* border-bottom: 1px solid var(--font-200, #d1d1d1); */
}

.acr {
  text-decoration: none;
  color: var(--font-600, #5d5d5d);
  /* Font/Body 2 SemiBold */
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 19.2px */
}

.drp-acr:hover a {
  text-decoration: none;
  color: var(--primary-600, #d71149);

  /* Font/Body 2 SemiBold */
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 19.2px */
}

.dropdown-menu a {
  display: block;
  padding: 10px;
  text-decoration: none;
  /* Gaya lainnya sesuai kebutuhan Anda */
}

/* Tampilkan dropdown saat dihover */
.dropdown-env:hover .dropdown-menu {
  display: block;
}

.dropdown-brt:hover .dropdown-menu {
  display: block;
}

.dropdown-env:hover .dropdown-img {
  transform: scale(1.1);
  /* Atur faktor perbesaran sesuai kebutuhan */
  cursor: pointer;
}

.dropdown-brt:hover .dropdown-img {
  transform: scale(1.1);
  /* Atur faktor perbesaran sesuai kebutuhan */
  cursor: pointer;
}

.dropdown-env:hover .text-hover-reds {
  color: red !important;
  /* Mengubah warna teks menjadi merah saat dihover */
}

.dropdown-brt:hover .text-hover-reds {
  color: red !important;
  /* Mengubah warna teks menjadi merah saat dihover */
}

.text-hover-reds:hover {
  color: red !important;
  /* Mengubah warna teks menjadi merah saat dihover */
}

.dropdown-glr:hover .dropdown-menu {
  display: block;
}

.active {
  align-self: stretch;
  /* Font/Body 1 Bold */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* 14.4px */
  height: 30px !important;
  display: flex !important;
  padding: 8px 4px !important;
  align-items: center !important;
  gap: 4px !important;
  align-self: stretch !important;
  color: var(--danger-600, #ce2f2f) !important;
  margin: 0 !important;
  border-bottom: 1.833px solid var(--primary-600, #d71149);
}

.navbar-scrolled .inactive {
  color: var(--font-600, #5d5d5d);

  /* Font/Body 1 Bold */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* 14.4px */
}

.inactive {
  color: var(--font-50, #f6f6f6);
  /* Font/Body 1 Bold */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* 14.4px */
}

a {
  padding: 0;
}

.brt {
  width: 37px !important;
  height: 14px !important;
  color: var(--Background, #fff);

  /* Font/Body 1 Bold */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  /* 14.4px */
}

.wsn {
  width: 60px;
  height: 30px;
}

.tk {
  display: flex;
  padding: 8px 4px !important;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin: 0 !important;
  width: 100px;
  height: 30px;
}

.tkm {
  width: 95px;
  height: 30px;
}

.hk {
  display: flex;
  padding: 8px 4px !important;
  align-items: center;
  gap: 4px;
  width: 97px;
  height: 30px;
  margin: 0 !important;
}

.hkm {
  width: 97px;
  height: 30px;
}

.navbar-nav {
  width: 983px !important;
  display: flex;
  height: 32px;
  align-items: center;
  gap: 20px;
}

.collapsee {
  height: 30px !important;
  gap: 20px;
  width: 541px !important;
  align-items: center;
}

.collapsrc {
  width: 566px !important;
  height: 32px;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.navbar-collapse {
  flex-grow: 0 !important;
  align-items: center;
  width: 983px !important;
  height: 32px;
}

.navbar-brandd {
  width: 83.667px !important;
  height: 26.528px !important;
  flex-shrink: 0;
  margin: 0;
}

.navbar-brandl {
  color: var(--font-50, #f6f6f6);
  /* Font/Body 1  SemiBold */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 14.4px */
  height: 14px !important;
  width: 37px !important;
}

.navbar-scrolled .navbar-brandl {
  color: var(--font-600, #5d5d5d);
  /* Font/Body 1  SemiBold */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 14.4px */
  width: 37px;
  height: 14px;
}

/* Mengatur lebar dropdown sesuai dengan logo */
.dropdown-menu {
  display: none;
  min-width: 150px;
  /* Sesuaikan lebar sesuai kebutuhan */
}

.logo {
  padding: 0;
  width: 83.667px;
  height: 26.528px;
  flex-shrink: 0;
}

.indo {
  width: 24px;
  height: 24px;
}

.btn-src {
  display: none;
}

.search-box {
  display: flex;
  align-items: center;
  transition: width 0.3s; /* Efek perluasan kotak pencarian */
}

/* Gaya tambahan untuk memperluas kotak pencarian saat isSearchVisible adalah true */
.search-box-expanded {
  width: 200px; /* Sesuaikan lebar perluasan sesuai kebutuhan Anda */
}
.search-icon {
  width: 24px; /* Sesuaikan ukuran gambar sesuai kebutuhan Anda */
  height: 24px;
  background-color: transparent; /* Hapus latar belakang jika tidak diperlukan */
}

@media screen and (max-width: 1199px) {
  .src {
    display: none;
  }
  .src-lg {
    display: flex;
  }
  .srcc {
    display: flex;
    justify-content: flex-end;
    margin-left: 10%;
    width: 60%;
  }
  .btn-src {
    border-radius: 50px;
    border: 1px solid #e7e7e7;
    background-color: transparent;
    width: 10%;
    height: 34px;
    margin-left: 25%;
    display: block !important; /* Tampilkan tombol pencarian pada ukuran layar ini */
  }
  .navbar-scrolled .btn-src {
    border-color: #888;
    /* Warna garis input saat latar belakang putih */
    color: var(--font-600, #5d5d5d) !important;
  }

  .container {
    justify-content: space-between;
  }
  .navbar-nav {
    width: 100% !important;
  }

  .navbar {
    width: 100%;
    padding: 0;
    padding-right: 0;
  }
}

@media screen and (max-width: 1025px) {
  .btn-src {
    margin-left: 10%;
  }
}
@media screen and (max-width: 901px) {
  .btn-src {
    margin-left: 10%;
  }
  .srcc {
    margin-left: 0;
    width: 65%;
  }
}

@media screen and (max-width: 801px) {
  .search-box {
    width: 80%;
  }
  .src-lg {
    width: 80%;
  }
  .btn-src {
    width: 64px;
    margin-left: 1%;
  }
  .srcc {
    margin-left: 0;
    width: 50%;
  }
}
@media screen and (max-width: 551px) {
  .search-box {
    width: 90%;
  }
  .src-lg {
    width: 90%;
  }
  .btn-src {
    width: 37px;
    margin-left: 1%;
  }
  .srcc {
    margin-left: 0;
    width: 50%;
  }
}

@media screen and (max-width: 474px) {
  .navbar {
    padding-right: 4% !important;
    padding-left: 4% !important;
  }
  .search-icon {
    margin-bottom: 2px;
    width: 19px;
    height: 19px;
  }
  .search-box {
    width: 90%;
  }
  .src-lg {
    width: 90%;
  }
  .btn-src {
    margin-left: 0;
    width: 32px;
    height: 30px;
  }
  .srcc {
    margin-left: 0;
    width: 50%;
  }
}

@media screen and (max-width: 428px) {
  .container {
    justify-content: space-evenly;
    gap: 1px;
  }
  .search-box {
    width: 85%;
  }
  .src-lg {
    width: 75%;
  }
  .srcc {
    margin-right: 5px;
  }
}
</style>