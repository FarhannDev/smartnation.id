<template>
    <footer class="w-100 py-4 flex-shrink-0 position-absolute">
        <div class="container py-4">
            <div class="row gy-4 gx-5">

                <div class="col-xxl-5 col-xl-6 col-lg-7 col-md-12 col-sm-12 col-xs-12 col-xxs-12">
                    <h5 class="text-white mb-3">Lokasi</h5>
                    <p id="address" class="text-white mb-0">Jl. Jatinegara Barat 1 No.5-6, RT.2/RW.4, Bali Mester,</p>
                    <p id="address" class="text-white mb-0">Kecamatan Jatinegara, Kota Jakarta Timur,</p>
                    <p id="address" class="text-white mb-3">Daerah Khusus Ibukota Jakarta 13310</p>
                    <!-- <div id="dummy_map"></div> -->
                    <div id="map">
                        <l-map id="map2" :useGlobalLeaflet="false" ref="map" v-model:zoom="zoom" :center="center">
                            <l-tile-layer :url="url" layer-type="base" name="OpenStreetMap"></l-tile-layer>
                            <l-marker :lat-lng="markerLatLng" :visible="true">
                                
                                <l-popup><a id="marker" href="https://www.google.com/maps/place/Citiasia+Co-Creation+Lab/@-6.2194251,106.8625244,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69f3382c07455d:0x8dcc8b271afc13d7!8m2!3d-6.2194304!4d106.8650993!16s%2Fg%2F11tslq0lyh?entry=ttu">Citiasia Co-Creation Lab</a></l-popup>
                            </l-marker>
                        </l-map>
                    </div>
                </div>
                
                <div class="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-xs-8 col-xxs-8">
                    <h5 class="text-white mb-3">Follow us</h5>
                    <h5 class="text-white mb-1">Smartnation.id</h5>
                    <p id="address" class="text-white mb-2">Toward Indonesia Smart Nation</p>
                    <div class="row mb-0 mt-0">
                        <div class="col">
                            <div id="dummy_ig"><a href="https://www.instagram.com/smartnation.id/"><img style="width:80px" src="../public/follow-us-1.jpeg" alt=""></a></div>
                        </div>
                        <div class="col">
                            <div id="dummy_ig"><a href="https://www.instagram.com/smartnation.id/"><img style="width:80px" src="../public/follow-us-2.jpeg" alt=""></a></div>
                        </div>
                        <div class="col">
                            <div id="dummy_ig"><a href="https://www.instagram.com/smartnation.id/"><img style="width:80px" src="../public/follow-us-3.jpeg" alt=""></a></div>
                        </div>
                    </div>
                    <a id="ig" type="button" class="btn btn-danger mt-3" rel=”noreferrer” href="https://www.instagram.com/smartnation.id/">
                        <div class="row align-items-center">
                            <div class="col-1"><img style="width:18px" src="../public/icon-ig.png" alt=""></div>
                            <div id="text-button" class="col-10">Follow on Instagram</div>
                        </div>
                    </a>
                </div>

                <div class="col-xxl-3 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <h5 class="text-white mb-4">Populer Tags    </h5>
                    <div class="row">
                        <div class="col">
                            <p class="small text-white">Lorem</p>
                            <p class="small text-white">Lorem</p>
                            <p class="small text-white">Lorem</p>
                            <p class="small text-white">Lorem</p>
                            <p class="small text-white">Lorem</p>
                        </div>
                        <div class="col">
                            <p class="small text-white">Lorem</p>
                            <p class="small text-white">Lorem</p>
                            <p class="small text-white">Lorem</p>
                            <p class="small text-white">Lorem</p>
                            <p class="small text-white">Lorem</p>
                        </div>
                        <div class="col">
                            <p class="small text-white">Lorem</p>
                            <p class="small text-white">Lorem</p>
                            <p class="small text-white">Lorem</p>
                            <p class="small text-white">Lorem</p>
                            <p class="small text-white">Lorem</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script lang="ts">
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer, LMarker, LPopup } from "@vue-leaflet/vue-leaflet";
import type L from "leaflet";

export default {
    components: {
        LMap,
        LTileLayer,
        LMarker,
        LPopup
    },
    data() {
        return {
            zoom: 15,
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution:
            '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            // zoom: 3,
            center: [-6.219409062382584, 106.8650349228692],
            markerLatLng: [-6.219409062382584, 106.8650349228692] as L.LatLngExpression
        };
    },
};
</script>


<style scoped>
img
{
    z-index: 2;
    border-radius: 8px;
}

footer
{
    display: flex;
    background-color: #262626;
    width: 100%;
    position: fixed;
    font-family: Poppins;
}

#address
{
    color: #E7E7E7;
    font-family: Poppins;
    font-size: 15px;
    font-style: normal;
    font-weight: 100px;
    line-height: 150%;
}

#dummy_map
{
    background-color: #F6F6F6;
    height: 140px;
    width: 500px; 
    z-index: 1;
    border-radius: 10px;
}

#map
{
    height: 140px;
    width: 500px; 
    z-index: 2;
    border-radius: 10px;
}

#map2
{
    border-radius: 10px;
}

#dummy_ig
{
    background-color: #F6F6F6;
    height: 80px;
    width: 80px; 
    z-index: 1;
    border-radius: 8px;
    margin-top: 3px;
    margin-bottom: 3px;
}

p
{
    font-size: 12.5px;
    margin-bottom: 10px;
    font-style: normal;
    font-weight: 300;
    color: #F6F6F6;
}

#text-button
{
    font-size: 13px;
    color: #FFF;
    text-align: center;
}

#ig
{
    border-radius: 6px;
    background: #D71149;
}

.leaflet-map {
    height: 140px;
    width: 500px; 
    z-index: 3;
    border-radius: 10px;
}
</style>