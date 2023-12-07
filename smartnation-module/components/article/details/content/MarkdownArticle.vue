<script lang="ts" setup>
defineProps({ content: { type: String } })

</script>


<template>
  <div class="article-details__content" v-html="content"></div>
</template>