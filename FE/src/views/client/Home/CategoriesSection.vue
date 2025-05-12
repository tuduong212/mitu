<template>
  <!-- Categories Section Begin -->
  <section class="categories">
    <div class="container-fluid">
      <div class="row">
        <!-- Large Category Item -->
        <div class="col-lg-6 p-0">
          <div
            class="categories__item categories__large__item set-bg"
            :style="{ backgroundImage: `url(${categories[0].bg})` }"
          >
            <div class="categories__text">
              <h1>{{ categories[0].title }}</h1>
              <p>{{ categories[0].desc }}</p>
              <a :href="categories[0].link">Shop now</a>
            </div>
          </div>
        </div>

        <!-- Other Category Items -->
        <div class="col-lg-6">
          <div class="row">
            <div
              v-for="(cat, index) in categories.slice(1)"
              :key="index"
              class="col-lg-6 col-md-6 col-sm-6 p-0"
            >
              <div class="categories__item set-bg" :style="{ backgroundImage: `url(${cat.bg})` }">
                <div class="categories__text">
                  <h4>{{ cat.title }}</h4>
                  <p>{{ cat.items }} items</p>
                  <a :href="cat.link">Shop now</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  <!-- Categories Section End -->
</template>

<script setup>
import bg1 from '@/assets/client/img/categories/category-1.jpg'
import bg2 from '@/assets/client/img/categories/category-2.jpg'
import bg3 from '@/assets/client/img/categories/category-3.jpg'
import bg4 from '@/assets/client/img/categories/category-4.jpg'
import bg5 from '@/assets/client/img/categories/category-5.jpg'

const categories = [
  {
    title: "Women’s fashion",
    desc: "Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliqua pendisse ultrices gravida.",
    link: "#",
    bg: bg1,
  },
  {
    title: "Men’s fashion",
    items: 358,
    link: "#",
    bg: bg2,
  },
  {
    title: "Kid’s fashion",
    items: 273,
    link: "#",
    bg: bg3,
  },
  {
    title: "Cosmetics",
    items: 159,
    link: "#",
    bg: bg4,
  },
  {
    title: "Accessories",
    items: 792,
    link: "#",
    bg: bg5,
  },
]
</script>
