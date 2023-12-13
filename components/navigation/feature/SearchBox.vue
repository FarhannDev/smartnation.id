<script lang="ts" setup>

import { Router } from '#vue-router';
const route: Router = useRouter();
// initial values
const searchQuery: globalThis.Ref<string> = ref("");

// method
const onSearchHandler = () => {
  const query: string = searchQuery.value.toLowerCase();

  query ? route.push(`/search/${query.replace(/\s+/g, ' ')}`) : null
  searchQuery.value = ''
};

const props = defineProps({ isResults: { type: Boolean } })

</script>

<template>
  <div>
    <form @submit.prevent="onSearchHandler" class="d-flex" role="search">
      <input v-model="searchQuery" class="form-control search-input-container me-2" type="search"
        placeholder="Cari Artikel Terkait" aria-label="Cari Artikel Terkait" autocomplete="name" />
    </form>

    <div v-if="isResults">
      <NavigationFeatureSearchBoxResult :search="searchQuery" />
    </div>
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
  background: #FFF;
  box-shadow: 0px 0.917px 0.917px 0px rgba(0, 0, 0, 0.12), 0px 0px 0px 0.917px rgba(103, 110, 118, 0.16), 0px 1.833px 4.583px 0px rgba(103, 110, 118, 0.08);
  border-radius: 22px;
  border: 0.917px solid var(--font-400, #888);
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
  color: var(--font-300, #B0B0B0);

  /* Font/Body 1 */
  font-family: Poppins;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  /* 14.4px */
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
  color: var(--font-300, #B0B0B0);
}

/* // X-Large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) {
  .search-input-container {
    width: 340px;
  }
}
</style>
