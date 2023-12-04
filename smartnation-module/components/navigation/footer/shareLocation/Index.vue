<script lang="ts" setup>

defineProps({
  address: { type: String, required: true },
  locationUrl: { type: String, required: true }
})

</script>


<template>
  <div>
    <div class="location-share">
      <NavigationFooterShareLocationHeadingTitle />
      <NavigationFooterShareLocationAddress />
      <NavigationFooterShareLocationGoogleMaps />
    </div>
  </div>
</template>

<style lang="css" >
.location-share {
  width: 100%;
  height: auto;
  overflow: hidden;
  display: block;
}

.location-share__heading__title {
  color: var(--font-50, #F6F6F6);
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  margin-bottom: 13px;
}

.location-share__address {
  color: var(--font-100, #E7E7E7);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 133%;
  margin-bottom: 13px;
}

.location-share__gmaps {
  width: 100%;
  height: 156.6px;
  border-radius: 8px;
  margin-top: 13px;
}
</style>