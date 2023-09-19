<template>
    <footer class="w-100 py-4 flex-shrink-0 position-absolute">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-xxl-5 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
                    <h5 class="text-white mb-3">Lokasi</h5>
                    <p id="address" class="text-white mb-0 col-xxl-9 col-xl-4 col-lg-5 col-md-7 col-sm-9 col-xs-11 col-12">Jl. Jatinegara Barat 1 No.5-6, RT.2/RW.4, Bali Mester, Kecamatan Jatinegara, Kota Jakarta Timur,</p>
                    <!-- <p id="address" class="text-white mb-0">Kecamatan Jatinegara, Kota Jakarta Timur,</p>-->
                    <p id="address" class="text-white mb-3 col-9">Daerah Khusus Ibukota Jakarta 13310</p> 
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
                
                <div class="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-xs-8 col-8">
                    <h5 class="text-white mb-3">Follow us</h5>
                    <h5 class="text-white mb-1">Smartnation.id</h5>
                    <p id="address" class="text-white mb-2">Toward Indonesia Smart Nation</p>
                    <div class="row mb-0 mt-0">
                        <div class="col-4">
                            <div id="dummy_ig"><a href="https://www.instagram.com/smartnation.id/"><img style="width:80px" src="../public/follow-us-1.jpeg" alt=""></a></div>
                        </div>
                        <div class="col-4">
                            <div id="dummy_ig"><a href="https://www.instagram.com/smartnation.id/"><img style="width:80px" src="../public/follow-us-2.jpeg" alt=""></a></div>
                        </div>
                        <div class="col-4">
                            <div id="dummy_ig"><a href="https://www.instagram.com/smartnation.id/"><img style="width:80px" src="../public/follow-us-3.jpeg" alt=""></a></div>
                        </div>
                    </div>
                    <a id="ig" type="button" class="btn btn-danger mt-3" rel=”noreferrer” href="https://www.instagram.com/smartnation.id/">
                        <div class="row align-items-center">
                            <div class="col-1">
                                <svg id="ig-before" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 33 32" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0035 0.676725C11.7399 0.601645 12.2935 0.584961 16.7167 0.584961C21.1398 0.584961 21.6935 0.603036 23.4284 0.676725C25.1633 0.750414 26.3475 1.01041 27.3837 1.3872C28.4688 1.77233 29.4532 2.37436 30.2674 3.15297C31.0963 3.91628 31.7358 4.83948 32.1444 5.86001C32.547 6.83327 32.8224 7.94556 32.9023 9.57229C32.9823 11.206 33 11.726 33 15.879C33 20.0334 32.9808 20.5534 32.9023 22.1843C32.8239 23.811 32.547 24.9233 32.1444 25.8966C31.7358 26.9172 31.0953 27.842 30.2674 28.6064C29.4532 29.385 28.4688 29.9856 27.3837 30.3694C26.3475 30.7476 25.1633 31.0062 23.4313 31.0812C21.6935 31.1563 21.1398 31.173 16.7167 31.173C12.2935 31.173 11.7399 31.1549 10.0035 31.0812C8.27155 31.0076 7.08731 30.7476 6.0511 30.3694C4.96444 29.9856 3.97989 29.384 3.16599 28.6064C2.33758 27.8426 1.69651 26.9183 1.28748 25.898C0.886322 24.9247 0.610986 23.8124 0.53105 22.1857C0.451113 20.552 0.43335 20.032 0.43335 15.879C0.43335 11.7246 0.452594 11.2046 0.53105 9.57507C0.609506 7.94556 0.886322 6.83327 1.28748 5.86001C1.69712 4.83959 2.33868 3.91532 3.16747 3.15158C3.98022 2.37367 4.96378 1.77156 6.04962 1.3872C7.08583 1.01041 8.27007 0.751805 10.002 0.676725H10.0035ZM23.2966 3.42965C21.5795 3.35596 21.0643 3.34067 16.7167 3.34067C12.369 3.34067 11.8539 3.35596 10.1367 3.42965C8.54837 3.49778 7.68683 3.74665 7.11248 3.9566C6.35308 4.23467 5.80981 4.56419 5.23989 5.09948C4.69965 5.59313 4.28388 6.19409 4.02308 6.85829C3.79956 7.39775 3.53458 8.20695 3.46205 9.69881C3.38359 11.3116 3.36731 11.7955 3.36731 15.879C3.36731 19.9625 3.38359 20.4463 3.46205 22.0592C3.53458 23.551 3.79956 24.3602 4.02308 24.8997C4.28362 25.5629 4.69958 26.1649 5.23989 26.6585C5.7654 27.166 6.40637 27.5567 7.11248 27.8014C7.68683 28.0113 8.54837 28.2602 10.1367 28.3283C11.8539 28.402 12.3676 28.4173 16.7167 28.4173C21.0658 28.4173 21.5795 28.402 23.2966 28.3283C24.885 28.2602 25.7465 28.0113 26.3209 27.8014C27.0803 27.5233 27.6236 27.1938 28.1935 26.6585C28.7338 26.1649 29.1497 25.5629 29.4103 24.8997C29.6338 24.3602 29.8988 23.551 29.9713 22.0592C30.0498 20.4463 30.0661 19.9625 30.0661 15.879C30.0661 11.7955 30.0498 11.3116 29.9713 9.69881C29.8988 8.20695 29.6338 7.39775 29.4103 6.85829C29.1142 6.14503 28.7634 5.63477 28.1935 5.09948C27.6679 4.59209 27.028 4.2016 26.3209 3.9566C25.7465 3.74665 24.885 3.49778 23.2966 3.42965ZM14.6369 20.5937C15.7984 21.0479 17.0918 21.1091 18.2961 20.7671C19.5004 20.4251 20.5409 19.701 21.2399 18.7185C21.9389 17.7359 22.2531 16.5559 22.1287 15.38C22.0044 14.2041 21.4492 13.1052 20.5581 12.271C19.99 11.7377 19.3031 11.3294 18.5468 11.0755C17.7906 10.8215 16.9838 10.7282 16.1845 10.8022C15.3852 10.8763 14.6134 11.1158 13.9245 11.5037C13.2357 11.8915 12.6469 12.418 12.2007 13.0452C11.7545 13.6724 11.4619 14.3847 11.3439 15.1309C11.226 15.8771 11.2857 16.6385 11.5187 17.3604C11.7516 18.0824 12.1521 18.7468 12.6913 19.3059C13.2305 19.8649 13.895 20.3048 14.6369 20.5937ZM10.7984 10.3203C11.5756 9.59033 12.4983 9.01128 13.5137 8.61622C14.5292 8.22116 15.6176 8.01782 16.7167 8.01782C17.8158 8.01782 18.9042 8.22116 19.9196 8.61622C20.9351 9.01128 21.8577 9.59033 22.6349 10.3203C23.4121 11.0503 24.0286 11.9169 24.4492 12.8706C24.8699 13.8244 25.0864 14.8466 25.0864 15.879C25.0864 16.9113 24.8699 17.9336 24.4492 18.8873C24.0286 19.8411 23.4121 20.7077 22.6349 21.4377C21.0653 22.9119 18.9365 23.7402 16.7167 23.7402C14.4969 23.7402 12.368 22.9119 10.7984 21.4377C9.22881 19.9634 8.34701 17.9639 8.34701 15.879C8.34701 13.7941 9.22881 11.7946 10.7984 10.3203ZM26.9426 9.18855C27.1352 9.0179 27.2894 8.8127 27.396 8.58509C27.5027 8.35748 27.5596 8.11208 27.5635 7.86343C27.5673 7.61478 27.518 7.36793 27.4185 7.13749C27.319 6.90706 27.1712 6.69772 26.984 6.52188C26.7968 6.34604 26.5739 6.20726 26.3286 6.11378C26.0832 6.02029 25.8204 5.97399 25.5557 5.97761C25.2909 5.98124 25.0297 6.03471 24.7873 6.13488C24.545 6.23504 24.3265 6.37986 24.1448 6.56075C23.7915 6.91256 23.5981 7.37985 23.6056 7.86343C23.6131 8.34701 23.8209 8.80881 24.185 9.15079C24.5491 9.49277 25.0408 9.688 25.5557 9.69505C26.0705 9.7021 26.5681 9.52041 26.9426 9.18855Z" fill="#FFFFFF" />
                                </svg>
                            </div>
                            <div id="text-button" class="col-10">Ikuti di Instagram</div>
                        </div>
                    </a>
                </div>
                <div class="col-xxl-3 col-xl-4 col-lg-5 col-md-6 col-sm-8 col-xs-8 col-8">
                    <h5 class="mb-3" id="a">a</h5>
                    <h5 class="text-white mb-1">Smartnation.id</h5>
                    <p id="address" class="text-white mb-2">Toward Indonesia Smart Nation</p>
                    <div class="row mb-0 mt-0">
                        <div class="col-4">
                            <div id="dummy_ig"><a href="https://www.tiktok.com/@smartnation.id/"><img style="width:80px" src="../public/follow-ig-1.jpeg" alt=""></a></div>
                        </div>
                        <div class="col-4">
                            <div id="dummy_ig"><a href="https://www.tiktok.com/@smartnation.id/"><img style="width:80px" src="../public/follow-ig-2.jpeg" alt=""></a></div>
                        </div>
                        <div class="col-4">
                            <div id="dummy_ig"><a href="https://www.tiktok.com/@smartnation.id/"><img style="width:80px" src="../public/follow-ig-3.jpeg" alt=""></a></div>
                        </div>
                    </div>
                    <a id="ig" type="button" class="btn btn-danger mt-3" rel=”noreferrer” href="https://www.tiktok.com/@smartnation.id/">
                        <div class="row align-items-center">
                            <div class="col-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 32 32" fill="none">
                                    <path d="M31.2367 7.77177V13.1203C30.1557 13.03 28.7566 12.8172 27.2032 12.324C25.1771 11.6808 23.6683 10.8007 22.6822 10.1188V20.9319L22.6581 20.898C22.6748 21.1124 22.6822 21.33 22.6822 21.5508C22.6822 26.9219 17.6404 31.292 11.4394 31.292C5.2385 31.292 0.196655 26.9203 0.196655 21.5508C0.196655 16.1814 5.2385 11.8081 11.4394 11.8081C12.0459 11.8081 12.6413 11.85 13.2236 11.9306V17.2034C12.6636 17.0293 12.0646 16.9358 11.4394 16.9358C8.50362 16.9358 6.11292 19.0056 6.11292 21.5508C6.11292 24.0961 8.50362 26.1659 11.4394 26.1659C14.3752 26.1659 16.7659 24.0945 16.7659 21.5508C16.7659 21.4557 16.7641 21.3606 16.7567 21.2655V0.251953H22.9278C22.9501 0.704915 22.9725 1.1611 22.9929 1.61406C23.0339 2.50548 23.4004 3.36143 24.0385 4.06264C24.7883 4.88635 25.8934 5.84386 27.4488 6.60793C28.9036 7.32203 30.2692 7.62831 31.2367 7.77338V7.77177Z" fill="#FFFFFF" />
                                </svg>
                            </div>
                            <div id="text-button" class="col-10">Ikuti di Tiktok</div>
                        </div>
                    </a>
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

#a
{
    color: #262626;
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
    width: 100%; 
    z-index: 1;
    border-radius: 10px;
}

#map
{
    height: 140px;
    width: 100%; 
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
    width: 100%; 
    z-index: 3;
    border-radius: 10px;
}
</style>