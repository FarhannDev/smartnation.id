<script lang="ts" setup>

</script>

<template>
  <div>
    <form @submit.prevent="onSearchHandler" class="d-flex" role="search">
      <input v-model="searchQuery" class="form-control search-input-container me-2" type="search"
        placeholder="Cari Artikel Terkait" aria-label="Cari Artikel Terkait" autocomplete="name" />
    </form>
  </div>
</template>