<script lang="ts" setup>
defineProps({ title: { type: String, required: true } })
</script>


<template>
  <div class="advertising-container">
    <div class="advertising-heading-content">{{ title }}</div>
  </div>
</template>

<style lang="css" scoped>
.advertising-container {
  display: flex;
  padding: 22.755px 0px 23.245px 0px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background: var(--Primary-200, #FFCAD4);
  /* width: 300px; */
  min-width: 100%;
  height: 600px;
}

.advertising-container .advertising-heading-content {
  color: var(--Font-400, #888);
  font-family: Inter;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
</style>