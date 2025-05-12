<script setup>
import Header from '@/components/client/Header.vue'
import Footer from '@/components/client/Footer.vue'
</script>

<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </div>
</template>
