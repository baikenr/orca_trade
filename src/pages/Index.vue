<template>
  <div class="flex flex-col min-h-screen bg-background">
    <Header />
    <main class="flex-1 bg-[#13131A] px-4 py-12 flex items-center justify-center">
      
      <router-view />
    </main>
    <Footer class="fixed bottom-0 left-0 w-full" />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
