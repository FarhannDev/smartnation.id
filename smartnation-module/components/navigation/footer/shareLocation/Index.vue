<script lang="ts" setup>

defineProps({ address: String })

</script>


<template>
  <div>
    <!-- <p id="address" class="text-white mb-0 col-xxl-9 col-xl-4 col-lg-5 col-md-7 col-sm-9 col-xs-11 col-12">
      Jl. Jatinegara Barat 1 No.5-6, RT.2/RW.4, Bali Mester, Kecamatan Jatinegara, Kota Jakarta Timur,</p>
      <p id="address" class="text-white mb-3 col-9">Daerah Khusus Ibukota Jakarta 13310</p> -->
    <div>
      <h5 class="text-white mb-3">Lokasi</h5>
      <address>
        Jl. Jatinegara Barat 1 No.5-6, RT.2/RW.4, Bali Mester, <br />
        Kecamatan Jatinegara, Kota Jakarta Timur, <br />
        Daerah Khusus Ibukota Jakarta 13310 <br />
      </address>
    </div>

    <div id="map">
      <iframe id="map" center
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.335373225675!2d106.86252437378327!3d-6.21943039376856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3382c07455d%3A0x8dcc8b271afc13d7!2sCitiasia%20Co-Creation%20Lab!5e0!3m2!1sid!2sid!4v1697729172835!5m2!1sid!2sid"
        width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
</template>