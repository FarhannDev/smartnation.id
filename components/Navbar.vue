<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand">
        <NuxtImg
          src="/images/logo.png"
          alt="Logo"
          class="d-inline-block align-text-top logo"
        />
      </NuxtLink>

      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink
              :class="'nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0 active'"
              to="/"
              >Beranda</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :class="'nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0'"
              to="/"
              >Berita</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :class="'nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0'"
              to="/"
              >Insight</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :class="'nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0'"
              to="/"
              >Events</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :class="'nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0'"
              to="/"
              >Gallery</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :class="'nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0'"
              to="/"
              >Tentang Kami</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink
              :class="'nav-link link-offset-2 mx-md-1 link-underline link-underline-opacity-0'"
              to="/"
              >Hubungi Kami</NuxtLink
            >
          </li>
        </ul>
        <!-- <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
        <div class="nv">
          <div class="search">
            <label for="search-input" class="search-label">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <g clip-path="url(#clip0_877_1576)">
                  <path
                    d="M12.9167 12.1667H12.2584L12.025 11.9417C13.025 10.775 13.5417 9.18337 13.2584 7.4917C12.8667 5.17503 10.9334 3.32503 8.60003 3.0417C5.07503 2.60837 2.10837 5.57503 2.5417 9.10003C2.82503 11.4334 4.67503 13.3667 6.9917 13.7584C8.68337 14.0417 10.275 13.525 11.4417 12.525L11.6667 12.7584V13.4167L15.2084 16.9584C15.55 17.3 16.1084 17.3 16.45 16.9584C16.7917 16.6167 16.7917 16.0584 16.45 15.7167L12.9167 12.1667ZM7.9167 12.1667C5.8417 12.1667 4.1667 10.4917 4.1667 8.4167C4.1667 6.3417 5.8417 4.6667 7.9167 4.6667C9.9917 4.6667 11.6667 6.3417 11.6667 8.4167C11.6667 10.4917 9.9917 12.1667 7.9167 12.1667Z"
                    fill="#B0B0B0"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_877_1576">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <input
                id="search-input"
                type="text"
                placeholder="Search"
                class="search-input"
              />
            </label>
          </div>

          <div class="globe">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="31"
              viewBox="0 0 28 31"
              fill="none"
            >
              <path
                d="M13.9884 3.27783C7.66338 3.27783 2.5415 8.75339 2.5415 15.5001C2.5415 22.2467 7.66338 27.7223 13.9884 27.7223C20.3248 27.7223 25.4582 22.2467 25.4582 15.5001C25.4582 8.75339 20.3248 3.27783 13.9884 3.27783ZM21.929 10.6112H18.5488C18.1821 9.08339 17.655 7.61672 16.9675 6.26005C19.0759 7.03005 20.829 8.5945 21.929 10.6112ZM13.9998 5.77117C14.9509 7.23783 15.6957 8.86339 16.1884 10.6112H11.8113C12.304 8.86339 13.0488 7.23783 13.9998 5.77117ZM5.13109 17.9445C4.94775 17.1623 4.83317 16.3434 4.83317 15.5001C4.83317 14.6567 4.94775 13.8378 5.13109 13.0556H9.004C8.91234 13.8623 8.84359 14.6689 8.84359 15.5001C8.84359 16.3312 8.91234 17.1378 9.004 17.9445H5.13109ZM6.07067 20.3889H9.45088C9.81755 21.9167 10.3446 23.3834 11.0321 24.7401C8.9238 23.9701 7.17067 22.4178 6.07067 20.3889ZM9.45088 10.6112H6.07067C7.17067 8.58228 8.9238 7.03005 11.0321 6.26005C10.3446 7.61672 9.81755 9.08339 9.45088 10.6112ZM13.9998 25.2289C13.0488 23.7623 12.304 22.1367 11.8113 20.3889H16.1884C15.6957 22.1367 14.9509 23.7623 13.9998 25.2289ZM16.6811 17.9445H11.3186C11.2155 17.1378 11.1353 16.3312 11.1353 15.5001C11.1353 14.6689 11.2155 13.8501 11.3186 13.0556H16.6811C16.7842 13.8501 16.8644 14.6689 16.8644 15.5001C16.8644 16.3312 16.7842 17.1378 16.6811 17.9445ZM16.9675 24.7401C17.655 23.3834 18.1821 21.9167 18.5488 20.3889H21.929C20.829 22.4056 19.0759 23.9701 16.9675 24.7401ZM18.9957 17.9445C19.0873 17.1378 19.1561 16.3312 19.1561 15.5001C19.1561 14.6689 19.0873 13.8623 18.9957 13.0556H22.8686C23.0519 13.8378 23.1665 14.6567 23.1665 15.5001C23.1665 16.3434 23.0519 17.1623 22.8686 17.9445H18.9957Z"
                fill="#5D5D5D"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.nv {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 352px;
  height: 32px;
}
.search {
  border-radius: 16px;
  background: transparent url("") no-repeat 5px center; /* Menambahkan gambar SVG sebagai background */
  border: 1px solid var(--font-100, black);
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

.search svg {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  margin-right: 4px;
}

.search-input::placeholder {
  color: black; /* Mengubah warna teks placeholder menjadi putih */
}

.search-input {
  color: black;
  /* Font/Body 1  SemiBold */
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 16.8px */
  padding: 5px 30px 5px 10px; /* Atur padding untuk memberikan ruang untuk gambar SVG */
  border: none;
  border-radius: 5px;
  width: 200px; /* Atur lebar input sesuai kebutuhan Anda */
  background: transparent;
  background-size: 20px; /* Ukuran gambar SVG sesuai kebutuhan Anda */
}

.globe img {
  max-height: 30px; /* Atur ukuran logo globe sesuai kebutuhan Anda */
}

.navbar {
  align-items: center;
  width: 100%;
  height: 58px;
  /* padding: 24px 120px; */
  background: #fff;
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
  line-height: 120%; /* 14.4px */
}

.active {
  color: var(--danger-600, #ce2f2f) !important;
  text-decoration: underline !important;
}

.logo {
  width: 83.667px;
  height: 26.528px;
  flex-shrink: 0;
}
</style>
