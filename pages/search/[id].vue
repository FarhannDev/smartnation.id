<script lang="ts" setup>
const route = useRoute();

const { id } = route.params;

definePageMeta({
  layout: "page-layout",
});
</script>

<template>
  <main id="content">
    <div class="py-5 pt-5 mt-5">Searh results: {{ id }}</div>
  </main>
</template>
