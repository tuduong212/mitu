<script setup>
const banners = [
  { id: 1, image: new URL('@/assets/client/img/banner/banner-1.jpg', import.meta.url).href },
  { id: 2, image: new URL('@/assets/client/img/banner/banner-2.jpg', import.meta.url).href },
  { id: 3, image: new URL('@/assets/client/img/banner/banner-3.jpg', import.meta.url).href }
]
</script>

<template>
  <section class="banner set-bg" :style="{ backgroundImage: `url(${banners[0].image})` }">
    <div class="container">
      <div class="row">
        <div class="col-xl-7 col-lg-8 m-auto">
          <div class="banner__slider owl-carousel">
            <div class="banner__item" v-for="banner in banners" :key="banner.id" :style="{ backgroundImage: `url(${banner.image})` }">
              <div class="banner__text">
                <span>The Chloe Collection</span>
                <h1>The Project Jacket</h1>
                <a href="#">Shop now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
