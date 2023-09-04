<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-black">
      <div class="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul>
        <li><nuxt-link to="/">Beranda</nuxt-link></li>

        <li><nuxt-link to="/berita">Berita</nuxt-link></li>

        <li>
          <div class="nav-item">
            <a href="#" @click="toggleEventsDropdown">Events</a>
            <div class="dropdown-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path
                  d="M8.61997 9.79006L12.5 13.6701L16.38 9.79006C16.77 9.40006 17.4 9.40006 17.79 9.79006C18.18 10.1801 18.18 10.8101 17.79 11.2001L13.2 15.7901C12.81 16.1801 12.18 16.1801 11.79 15.7901L7.19997 11.2001C6.80997 10.8101 6.80997 10.1801 7.19997 9.79006C7.58997 9.41006 8.22997 9.40006 8.61997 9.79006Z"
                  fill="#F6F6F6" />
              </svg>
            </div>
          </div>
          <ul v-if="eventsDropdownOpen" class="dropdown-menu">
            <li>
              <!-- Isi dropdown di sini -->
            </li>
          </ul>
        </li>

        <li>
          <div class="nav-item">
            <a href="#" @click="toggleGalleryDropdown">Gallery</a>
            <div class="dropdown-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path
                  d="M8.61997 9.79006L12.5 13.6701L16.38 9.79006C16.77 9.40006 17.4 9.40006 17.79 9.79006C18.18 10.1801 18.18 10.8101 17.79 11.2001L13.2 15.7901C12.81 16.1801 12.18 16.1801 11.79 15.7901L7.19997 11.2001C6.80997 10.8101 6.80997 10.1801 7.19997 9.79006C7.58997 9.41006 8.22997 9.40006 8.61997 9.79006Z"
                  fill="#F6F6F6" />
              </svg>
            </div>
          </div>
          <ul v-if="galleryDropdownOpen" class="dropdown-menu">
            <li>
              <!-- Isi dropdown di sini -->
            </li>
          </ul>
        </li>

        <li>
          <div class="nav-item">
            <a href="#" @click="toggleAboutDropdown" class="about">Tentang Kami</a>
            <div class="dropdown-arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path
                  d="M8.61997 9.79006L12.5 13.6701L16.38 9.79006C16.77 9.40006 17.4 9.40006 17.79 9.79006C18.18 10.1801 18.18 10.8101 17.79 11.2001L13.2 15.7901C12.81 16.1801 12.18 16.1801 11.79 15.7901L7.19997 11.2001C6.80997 10.8101 6.80997 10.1801 7.19997 9.79006C7.58997 9.41006 8.22997 9.40006 8.61997 9.79006Z"
                  fill="#F6F6F6" />
              </svg>
            </div>
          </div>
          <ul v-if="aboutDropdownOpen" class="dropdown-menu">
            <li>
              <!-- Isi dropdown di sini -->
            </li>
          </ul>
        </li>

        <li>
          <nuxt-link to="/hubungi-kami" class="hubung">Hubungi Kami</nuxt-link>
        </li>
      </ul>
      <div class="nv">
        <div class="search">
          <label for="search-input" class="search-label">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <g clip-path="url(#clip0_106_1580)">
                <path
                  d="M12.9167 12.1667H12.2584L12.025 11.9417C13.025 10.775 13.5417 9.18337 13.2584 7.4917C12.8667 5.17503 10.9334 3.32503 8.60003 3.0417C5.07503 2.60837 2.10837 5.57503 2.5417 9.10003C2.82503 11.4334 4.67503 13.3667 6.9917 13.7584C8.68337 14.0417 10.275 13.525 11.4417 12.525L11.6667 12.7584V13.4167L15.2084 16.9584C15.55 17.3 16.1084 17.3 16.45 16.9584C16.7917 16.6167 16.7917 16.0584 16.45 15.7167L12.9167 12.1667ZM7.9167 12.1667C5.8417 12.1667 4.1667 10.4917 4.1667 8.4167C4.1667 6.3417 5.8417 4.6667 7.9167 4.6667C9.9917 4.6667 11.6667 6.3417 11.6667 8.4167C11.6667 10.4917 9.9917 12.1667 7.9167 12.1667Z"
                  fill="#F6F6F6" />
              </g>
              <defs>
                <clipPath id="clip0_106_1580">
                  <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                </clipPath>
              </defs>
            </svg>

            <input id="search-input" type="text" placeholder="Search" class="search-input" />
          </label>
        </div>

        <div class="globe">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="33" viewBox="0 0 30 33" fill="none">
            <g clip-path="url(#clip0_106_1582)">
              <path
                d="M14.9875 3.1665C8.0875 3.1665 2.5 9.13984 2.5 16.4998C2.5 23.8598 8.0875 29.8332 14.9875 29.8332C21.9 29.8332 27.5 23.8598 27.5 16.4998C27.5 9.13984 21.9 3.1665 14.9875 3.1665ZM23.65 11.1665H19.9625C19.5625 9.49984 18.9875 7.89984 18.2375 6.41984C20.5375 7.25984 22.45 8.9665 23.65 11.1665ZM15 5.8865C16.0375 7.4865 16.85 9.25984 17.3875 11.1665H12.6125C13.15 9.25984 13.9625 7.4865 15 5.8865ZM5.325 19.1665C5.125 18.3132 5 17.4198 5 16.4998C5 15.5798 5.125 14.6865 5.325 13.8332H9.55C9.45 14.7132 9.375 15.5932 9.375 16.4998C9.375 17.4065 9.45 18.2865 9.55 19.1665H5.325ZM6.35 21.8332H10.0375C10.4375 23.4998 11.0125 25.0998 11.7625 26.5798C9.4625 25.7398 7.55 24.0465 6.35 21.8332ZM10.0375 11.1665H6.35C7.55 8.95317 9.4625 7.25984 11.7625 6.41984C11.0125 7.89984 10.4375 9.49984 10.0375 11.1665ZM15 27.1132C13.9625 25.5132 13.15 23.7398 12.6125 21.8332H17.3875C16.85 23.7398 16.0375 25.5132 15 27.1132ZM17.925 19.1665H12.075C11.9625 18.2865 11.875 17.4065 11.875 16.4998C11.875 15.5932 11.9625 14.6998 12.075 13.8332H17.925C18.0375 14.6998 18.125 15.5932 18.125 16.4998C18.125 17.4065 18.0375 18.2865 17.925 19.1665ZM18.2375 26.5798C18.9875 25.0998 19.5625 23.4998 19.9625 21.8332H23.65C22.45 24.0332 20.5375 25.7398 18.2375 26.5798ZM20.45 19.1665C20.55 18.2865 20.625 17.4065 20.625 16.4998C20.625 15.5932 20.55 14.7132 20.45 13.8332H24.675C24.875 14.6865 25 15.5798 25 16.4998C25 17.4198 24.875 18.3132 24.675 19.1665H20.45Z"
                fill="#F6F6F6" />
            </g>
            <defs>
              <clipPath id="clip0_106_1582">
                <rect width="30" height="32" fill="white" transform="translate(0 0.5)" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      galleryDropdownOpen: false,
      aboutDropdownOpen: false,
      eventsDropdownOpen: false,
    };
  },
  methods: {
    toggleGalleryDropdown() {
      this.galleryDropdownOpen = !this.galleryDropdownOpen;
    },
    toggleAboutDropdown() {
      this.aboutDropdownOpen = !this.aboutDropdownOpen;
    },
    toggleEventsDropdown() {
      this.eventsDropdownOpen = !this.eventsDropdownOpen;
    },
  },
};
</script>

<style scoped>
.nv {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 352px;
  height: 32px;
}

nav {
  color: white;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 100%;
  height: 39px;
  padding: 24px 80px;
  background: black;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.12),
    0px 0px 0px 1px rgba(103, 110, 118, 0.16),
    0px 2px 5px 0px rgba(103, 110, 118, 0.08);
}

.dropdown-menu {
  position: absolute;
  background-color: #333;
  list-style-type: none;
  padding: 10px;
  border-radius: 5px;
  top: 100%;
}

.logo img {
  background: url(<path-to-image>) / cover no-repeat;
  width: 123px;
  height: 39px;
  flex-shrink: 0;
  margin-right: 104px;
}

ul {
  width: 745px;
  height: 24px;
  list-style-type: none;
  display: flex;
  align-items: center;
  color: #f6f6f6;
  gap: 16px;
  margin-right: 99px;
  padding-left: 0;
  margin-top: 0;
  margin-bottom: 0;
}

ul ul {
  display: none;
  position: absolute;
  background-color: #333;
  list-style-type: none;
  padding: 10px;
  border-radius: 5px;
}

li {
  color: var(--font-50, #f6f6f6);
  /* Font/Title 3 SemiBold */
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 24px */
}

.hubung {
  color: var(--font-50, #f6f6f6);
  /* Font/Title 3 SemiBold */
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 24px */
  width: 145px;
  height: 24px;
  display: flex;
}

a {
  color: var(--font-50, #f6f6f6);
  /* Font/Title 3 SemiBold */
  font-family: Poppins;
  font-size: 20px;

  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 24px */
  text-decoration: none;
}

a.about {
  color: var(--font-50, #f6f6f6);
  /* Font/Title 3 SemiBold */
  font-family: Poppins;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 24px */
  width: 145px;
  height: 24px;
  display: flex;
  align-items: center;
  /* Vertikal centering */
  margin-right: 4px;
}

.nav-item {
  display: flex;
  align-items: center;
  /* Vertikal centering */
}

.nav-item a {
  margin-right: 4px;
  /* Jarak antara tulisan "Events" dan dropdown-arrow */
}

.search {
  border-radius: 16px;
  background: transparent url("") no-repeat 5px center;
  /* Menambahkan gambar SVG sebagai background */
  border: 1px solid var(--font-100, #e7e7e7);
  width: 282px;
  height: 20px;
  margin-right: 16px;
  position: relative;
  display: flex;
  padding: 4px 12px;
  align-items: center;
  gap: 4px;
}

.search label {
  display: flex;
  align-items: center;
}

.search-input::placeholder {
  color: white;
  /* Mengubah warna teks placeholder menjadi putih */
}

.search svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-right: 4px;
}

.search-input {
  color: white;
  /* Font/Body 1  SemiBold */
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  /* 16.8px */
  padding: 5px 30px 5px 10px;
  /* Atur padding untuk memberikan ruang untuk gambar SVG */
  border: none;
  border-radius: 5px;
  width: 200px;
  /* Atur lebar input sesuai kebutuhan Anda */
  background: transparent;
  background-size: 20px;
  /* Ukuran gambar SVG sesuai kebutuhan Anda */
}

.globe img {
  max-height: 30px;
  /* Atur ukuran logo globe sesuai kebutuhan Anda */
}
</style>
