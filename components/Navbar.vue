<template>
  <nav class="navbar navbar-expand-lg fixed-top" :class="{ 'navbar-scrolled': scrolled }">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand">
        <NuxtImg src="/images/logo.png" alt="Logo" class="d-inline-block align-text-top logo" />
      </NuxtLink>

      <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse nav" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-itembr">
            <NuxtLink :class="'br nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0 active'" to="/">
              Beranda</NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink :class="'brt nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0 inactive'"
              to="/" class="text-decoration-none">
              <span class="text-hover-red" style="transition: color 0.3s">
                Berita</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink :class="'ins nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0 inactive'"
              to="/" class="text-decoration-none">
              <span class="text-hover-red" style="transition: color 0.3s">
                Wawasan</span>
            </NuxtLink>
          </li>
          <div class="dropdown-env" @mouseenter="openDropdown('dropdown1')" @mouseleave="closeDropdown('dropdown1')">
            <a href="/event" class="dropdown-togglee env text-decoration-none"
              @mouseenter="toggleHover('dropdown1', true)" @mouseleave="toggleHover('dropdown1', false)">
              <span :class="{ 'text-hover-red': isHoveredText['dropdown1'] }" style="transition: color 0.3s"
                class="dropdown-text">
                Acara
              </span>
            </a>
            <NuxtImg :src="isHoveredText['dropdown1'] ? nextImage : currentImage" alt="dropdown1"
              @mouseover="toggleHover('dropdown1', true)" @mouseout="toggleHover('dropdown1', false)"
              class="d-inline-block align-text-top dropdown-img" />
            <div v-if="showDropdown['dropdown1']" class="dropdown-menu" @mouseenter="keepDropdownOpen('dropdown1')"
              @mouseleave="closeDropdown('dropdown1')">
              <a href="/event1">Event Page</a>
              <!-- Tambahkan pilihan dropdown lainnya di sini jika diperlukan -->
            </div>
          </div>
          <li class="nav-item">
            <NuxtLink :class="'glr nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0 inactive'"
              to="/" class="text-decoration-none">
              <span class="text-hover-red" style="transition: color 0.3s">
                Galeri</span>
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink :class="'tk nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0 inactive'" to="/"
              class="text-decoration-none">
              <span class="text-hover-red" style="transition: color 0.3s">
                Tentang Kami</span>
            </NuxtLink>
          </li>
          <li class="nav-item-hk">
            <NuxtLink :class="'nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0 inactive'" to="/"
              class="text-decoration-none">
              <span class="text-hover-red" style="transition: color 0.3s">
                Hubungi Kami</span>
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="collapsrc navbar-collapse" id="navbarNavDropdown">
        <div class="row justify-content-center align-items-center">
          <div class="src offset-md-3">
            <!-- Kotak Pencarian dengan Gambar sebagai Latar Belakang Input -->
            <div class="input-group mb-3 search-box">
              <input type="text" class="form-control" placeholder="Search" />
            </div>
          </div>
          <div class="col-auto">
            <NuxtLink to="/" class="navbar-brand">
              <NuxtImg src="/images/language.png" alt="Logo" class="d-inline-block align-text-top language" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
      currentImage: "images/arrow_down.png",
      nextImage: "images/arrow_down_red.png",
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
    };
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 50) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
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
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.navbar-brand {
  margin: 0;
}

.text-hover-red {
  color: white;
}

.text-hover-red:hover {
  transition: color 0.3s;
  color: var(--danger-600,
      #ce2f2f);
  /* Mengubah warna teks menjadi merah saat dihover */
}

.dropdown-text {
  transition: color 0.3s;
}

/* Ubah ukuran gambar saat dihover */
.dropdown-env:hover .dropdown-img,
.dropdown-glr:hover .dropdown-img {
  transform: scale(1.1);
  /* Atur faktor perbesaran sesuai kebutuhan */
  cursor: pointer;
}

/* Ubah warna teks menjadi merah saat dihover pada tulisan */
.dropdown-env:hover .text-hover-red,
.dropdown-glr:hover .text-hover-red {
  color: var(--danger-600,
      #ce2f2f);
  /* Mengubah warna teks menjadi merah saat dihover */
}

.col-auto {
  padding-left: 8px;
  padding-right: 0;
}

/* CSS Khusus untuk Kotak Pencarian */
.search-box {
  display: flex;
  align-items: center;
}

.src {
  padding: 0;
  height: 32px;
  margin: 0;
  width: 274px;
}

.search-box input[type="text"] {
  background-image: url("images/search.png");
  /* Tambahkan gambar search sebagai latar belakang input */
  background-repeat: no-repeat;
  background-size: 20px 20px;
  /* Sesuaikan ukuran gambar sesuai kebutuhan */
  background-position: 10px center;
  /* Sesuaikan posisi gambar sesuai kebutuhan */
  padding-left: 40px;
  /* Menambahkan ruang di kiri input untuk gambar */
  border: 1px solid #ccc;
  border-radius: 22px;
  border-color: white;
  /* Warna garis input saat latar belakang transparan */
  background-color: transparent;
  /* Warna teks input saat latar belakang transparan */
}

.search-box button {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.input-group-text {
  background: transparent;
  border: none;
  padding: 0;
}

.input-group-text img {
  width: 20px;
  /* Sesuaikan ukuran gambar sesuai kebutuhan */
  height: 20px;
  /* Sesuaikan ukuran gambar sesuai kebutuhan */
  margin-right: 0 !important;
  /* Jarak antara gambar dan input */
}

.custom-input-group {
  display: flex;
  align-items: center;
  /* Pusatkan gambar dan input secara vertikal */
}

.custom-input-group img {
  margin-right: 10px;
  /* Jarak antara gambar dan input */
  border-bottom: 1px solid #ccc;
  /* Tambahkan garis bawah pada gambar */
}

.form-control {
  width: 230px !important;
  height: 32px;
  border: none;
  /* Hapus border input */
  outline: none;
  /* Hapus focus outline saat input aktif */
  border: 1px solid #ccc;
  /* Tambahkan garis bawah pada input */
}

.row {
  align-content: center;
  margin-left: 0;
}

.container {
  display: flex;
  align-items: center;
  gap: 24px;
  width: 1200px;
  height: 26.528px;
  padding: 0;
  margin: 4px 120px;
}

.navbar {
  display: flex;
  align-items: center;
  transition: background-color 0.3s;
  width: 100%;
  height: 60px;
  /* padding: 24px 120px; */
  background-color: transparent;
  /* Warna latar belakang transparan */
  transition: background-color 0.3s;
  /* Animasi perubahan warna latar belakang */
  color: white;
  /* Warna teks saat latar belakang transparan */
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
  position: relative;
  display: inline-block;
  width: 62px;
  height: 30px;
  display: flex;
  padding: 6px 0px;
  align-items: center;
  gap: 2px;
  margin-right: 20px;
}

.navbar-scrolled {
  background-color: white;
  /* Warna latar belakang putih */
  color: white;
}

.navbar-scrolled .text-hover-red {
  color: black;
}

.navbar-scrolled .search-box input[type="text"] {
  border-color: black;
  /* Warna garis input saat latar belakang putih */
  color: black;
  /* Warna teks input saat latar belakang putih */
}

.dropdown-glr {
  position: relative;
  display: inline-block;
  width: 65px;
  height: 30px;
  display: flex;
  padding: 6px 0px;
  align-items: center;
  gap: 2px;
  margin-right: 20px;
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
  width: 42px;
  height: 14px;
}

.glr {
  width: 45px;
  height: 14px;
}

.dropdown-img {
  max-width: 100%;
  height: auto;
  transition: transform 0.3s;
  width: 16px;
  height: 16px;
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  /* Gaya lainnya sesuai kebutuhan Anda */
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

.dropdown-env:hover .dropdown-img {
  transform: scale(1.1);
  /* Atur faktor perbesaran sesuai kebutuhan */
  cursor: pointer;
}

.dropdown-env:hover .text-hover-red {
  color: red !important;
  /* Mengubah warna teks menjadi merah saat dihover */
}

.text-hover-red:hover {
  color: red !important;
  /* Mengubah warna teks menjadi merah saat dihover */
}

.dropdown-glr:hover .dropdown-menu {
  display: block;
}

.active {
  color: var(--danger-600, #ce2f2f) !important;
  text-decoration: underline !important;
  padding: 8px 0 !important;
  margin: 0 !important;
  width: 53px;
}

.inactive {
  padding: 8px 0px !important;
  margin: 0 !important;
}

a {
  padding: 0;
}

.nav-item {
  margin-right: 20px;
  height: 30px;
}

.brt {
  width: 37px;
}

.ins {
  width: 43px;
}

.tk {
  width: 87px;
}

.nav-item-hk {
  width: 89px;
  height: 30px;
}

.nav-itembr {
  margin-right: 20px;
}

.navbar-nav {
  width: 551px;
  height: 33px;
}

.collapse {
  width: 551px;
  height: 33px;
  align-items: center;
}

.collapsrc {
  display: flex;
  width: 320px !important;
  height: 32px;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.navbar-brandd {
  height: 20px;
  margin: 0;
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

.language {
  width: 27.5px;
  height: 29.333px;
  flex-shrink: 0;
}
</style>
