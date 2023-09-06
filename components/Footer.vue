<template>
    <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-5 col-md-6">
                    <h5 class="text-white mb-3">Lokasi</h5>
                    <p id="address" class="text-white mb-0">Jl. Jatinegara Barat 1 No.5-6, RT.2/RW.4, Bali Mester,</p>
                    <p id="address" class="text-white mb-0">Kecamatan Jatinegara, Kota Jakarta Timur,</p>
                    <p id="address" class="text-white mb-3">Daerah Khusus Ibukota Jakarta 13310</p>
                    <div id="dummy_map"></div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h5 class="text-white mb-3">Follow us</h5>
                    <h5 class="text-white mb-1">Smartnation.id</h5>
                    <p id="address" class="text-white mb-2">Toward Indonesia Smart Nation</p>
                    <div class="row mb-0 mt-0">
                        <div class="col">
                            <div id="dummy_ig"><img style="width:80px" src="../public/follow-us-1.jpeg" alt=""></div>
                        </div>
                        <div class="col">
                            <div id="dummy_ig"><img style="width:80px" src="../public/follow-us-2.jpeg" alt=""></div>
                        </div>
                        <div class="col">
                            <div id="dummy_ig"><img style="width:80px" src="../public/follow-us-3.jpeg" alt=""></div>
                        </div>
                    </div>
                    <button type="button" class="btn btn-danger mt-3">
                        <div class="row align-items-center">
                            <div class="col-1"><img style="width:18px" src="../public/icon-ig.png" alt=""></div>
                            <div id="text-button" class="col-10">Follow on Instagram</div>
                        </div>
                    </button>
                </div>
                <div class="col-lg-4 col-md-6">
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
    height: 360px;
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

button
{
    border-radius: 6px;
    background: var(--primary-600, #D71149);
}
</style>