<script lang="ts" setup>
import { Router } from '#vue-router';
import { PostsDataType } from '~/utils/data/getInitialPostsData';
import axios from 'axios';

const route: Router = useRouter();
// initial values
const searchQuery: globalThis.Ref<string> = ref("");

// method
const onSearchHandler = () => {
  const query: string = searchQuery.value.toLowerCase();
  query ? route.replace(`/search/${query}`) : null

  searchQuery.value = ''
};

const results: globalThis.Ref<PostsDataType> = ref([])

onBeforeMount(() => {
  return axios.get('/api/posts')
    .then(response => results.value.push(...response.data))
    .catch(error => console.log(error))
});

</script>

<template>
  <div class="d-none d-md-block d-lg-block">
    <form @submit.prevent="onSearchHandler" class="d-flex" role="search">
      <input v-model="searchQuery" class="form-control search-input-container me-2" type="search" placeholder="Cari"
        aria-label="Cari" autocomplete="name" />
    </form>


    <SearchResults :search="searchQuery" :results="results.filter(post => post.title.rendered.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.rendered.toLowerCase().includes(searchQuery.toLowerCase())
    ).sort((a, b) => b.modified_gmt.toString().localeCompare(a.modified_gmt.toString())).slice(0, 5)" />
  </div>
</template>

<style lang="css" scoped>
.search-input-container {
  justify-content: center;
  display: flex;
  width: 340px;
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
