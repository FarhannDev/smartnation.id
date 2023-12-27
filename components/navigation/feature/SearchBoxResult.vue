<script lang="ts" setup>
import { posts } from "~/utils/data/getInitialPostsData"

const props = defineProps({ search: { type: String, required: true } })

</script>


<template>
  <div v-show="search" class="search-result-container">
    <div class="d-flex flex-column">

      <div class="pt-3">
        <div v-for="(result, index) in posts.filter(post => post.title.rendered.toLowerCase().includes(props.search.toLowerCase())
            ).sort((a, b) => b.modified_gmt.toString().localeCompare(a.modified_gmt.toString())).slice(0, 5)"
          :key="index" class="d-flex justify-content-between g-0 mb-3">
          <NuxtLink :to="`/article/${result.slug}`" aria-label="Selengkapnya" class="search-result__title">
            {{ result.title.rendered.length >= 60
              ? `${result.title.rendered.substring(0, 60)}...`
              : result.title.rendered
            }}
          </NuxtLink>
          <div class="search-result__icons">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-arrow-up-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z" />
            </svg>
          </div>
        </div>
      </div>
      <!-- <div v-else class="search-result__notfound">Pencarian tidak ditemukan</div> -->
    </div>
  </div>
</template>

<style lang="css" scoped>
.search-result-container {
  position: absolute;
  top: 50px;
  width: 340px;
  height: auto;
  padding: 12px 16px;
  border-radius: 4px;
  background: #fff;
  overflow: hidden;
}

.search-result__title {
  color: var(--font-600, #5D5D5D);
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  text-decoration: none;
}

.search-result__title:hover {
  color: #D71149 !important;
}

.search-result__icons {
  font-size: 14px;
}

.search-result__notfound {
  color: #5D5D5D;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin: 10px auto;
}


/*
   Dark mode 
*/

.dark-mode .search-result-container {
  background-color: #262626;
}

.dark-mode .search-result__title {
  color: #fff;
}

.dark-mode .search-result__notfound {
  color: #fff;
}
</style>