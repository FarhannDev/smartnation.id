<script lang="ts" setup>
import { Router } from '#vue-router';
const route: Router = useRouter();
// initial values
const searchQuery: globalThis.Ref<string> = ref("");

// method
const onSearchHandler = () => {
  const query: string = searchQuery.value.toLowerCase();
  query ? route.replace(`/search/${query}`) : null

  searchQuery.value = ''
};



</script>

<template>
  <div class="d-xl-none d-xxl-none py-3">
    <form @submit.prevent="onSearchHandler" class="d-flex" role="search">
      <input v-model="searchQuery" class="form-control search-input-container me-2" type="search" placeholder="Cari"
        aria-label="Cari" autocomplete="name" />
    </form>
  </div>
</template>

<style lang="css" scoped>
.search-input-container {
  justify-content: center;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 4px;
  height: 32px;
}

.search-input-container,
input[type="search"] {
  color: rgba(255, 255, 255, 0.8);
  background-image: url("/icons/search.png");
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: 12px 6px;
  padding-left: 36px;
  border: 1px solid #e7e7e7;
  border-radius: 22px;
  border-color: #e7e7e7;
  background-color: transparent;
  backdrop-filter: blur(6px);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.search-input-container,
input::placeholder {
  color: rgba(255, 255, 255, 0.8);
}

.navbar-sticky.search-input-container,
input[type="search"] {
  color: var(--font-300, #b0b0b0);
  background-image: url("/icons/search.png");
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: 12px 6px;
  padding-left: 36px;
  border: 1px solid #e7e7e7;
  border-radius: 22px;
  border-color: #e7e7e7;
  background-color: transparent;
  backdrop-filter: blur(6px);
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.navbar-sticky.search-input-container,
input::placeholder {
  color: var(--font-300, #b0b0b0);
}

/* // X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .search-input-container {
    justify-content: center;
    display: flex;
    /* width: 300px; */
    align-items: center;
    gap: 4px;
    height: 32px;
  }
}
</style>
