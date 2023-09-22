<template>
    <section class="berita-section-container position-relative py-5">
        <div class="container">
            <div class="row g-5">
                <div class="col-xl-4 pe-5">
                    <div class="card h-100">
                        <div class="container imgFormat">
                            <p class="imgFont">10 Foto</p>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Judul Album</h5>
                            <div class="row pb-2">
                                <div class="col">
                                    <div class="row align-items-center">
                                        <div class="col-1 d-flex align-items-center">
                                            <img width="15" height="15" src="/public/images/schedule.svg" alt="DATE">
                                        </div>
                                        <div class="col-10">
                                            <p class="dateFormat m-0">26 December 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 pe-5">
                    <div class="card h-100">
                        <div class="container imgFormat">
                            <p class="imgFont">10 Foto</p>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Judul Album</h5>
                            <div class="row pb-2">
                                <div class="col">
                                    <div class="row align-items-center">
                                        <div class="col-1 d-flex align-items-center">
                                            <img width="15" height="15" src="/public/images/schedule.svg" alt="DATE">
                                        </div>
                                        <div class="col-10">
                                            <p class="dateFormat m-0">26 December 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 pe-5">
                    <div class="card h-100">
                        <iframe style="border-radius: 8px;" height="250" src="https://www.youtube.com/embed/kwf-xhrE7nI" frameborder="0" allowfullscreen></iframe>
                        <div class="card-body">
                            <h5 class="card-title">Judul Video</h5>
                            <div class="row pb-2">
                                <div class="col">
                                    <div class="row align-items-center">
                                        <div class="col-1 d-flex align-items-center">
                                            <img width="15" height="15" src="/public/images/schedule.svg" alt="DATE">
                                        </div>
                                        <div class="col-10">
                                            <p class="dateFormat m-0">26 December 2022</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

.imgFormat {
    position: relative; 
    background-size: cover; 
    background-position: center center; 
    overflow: hidden; 
    width: 100%; 
    height: 250px;
    border-radius: 8px;
    background-image: url('https://s3-alpha-sig.figma.com/img/c88c/15c6/fa61bbeedb8345028255ed3d6c89a9d3?Expires=1696204800&Signature=Q393FMUk0p8ZKJSJur5CDhpvdMAhvw5bmZmwr29Up9a6BSDijtbnzBmWYfrYTcXiCZzhjBDQRafsnCNjSk4ZNz~RpbomYGBFhzrK6sKGHgrCUeepd5UXYBrfDczGxKQ1bKkSZ9kJOwhwtwX0OZhOkfzunt9zF3INBqRHvQc~FgkyT2ZNaLqkNzANdaoG2-RUTN-AFlPlNrhN0MNCavKqEACjA2b~vgwhdyoNCAuEGLf1AlCJY1LKwH5mS-cirGUDp7EOiCbPHKa9SzLaNrfkooVu6C~auPPXC4aQNtvTP1DVo7SRTJOYSYBz6Q9wG5hnewPpmO2Hamj6bkJtSy2Kmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4');
}

.imgFont {
    font-family: Poppins; 
    font-size: 12px; 
    font-style: normal; 
    font-weight: 400; 
    position: absolute; 
    background-color: rgba(246, 246, 246, 0.8); 
    color: #6d6d6d; 
    bottom: 0; 
    right: 0; 
    margin: 0; 
    padding: 8px; 
    border-radius: 8px; 
    margin: 8px;
}

</style>