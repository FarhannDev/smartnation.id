<script lang="ts" setup>
const props = defineProps({ title: { type: String, required: true } })
</script>


<template>
  <div>
    <h1 class="content-heading">{{ title }}</h1>
  </div>
</template>

<style scoped>
.content-heading {
  color: #D71149;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  text-align: start;
  text-transform: capitalize;
}
</style>