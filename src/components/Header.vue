<template>
  <header class="fixed top-0 left-0 right-0 z-50 w-full border-b border-[#222222] bg-[#1B1C24]">
    <div class="mx-auto flex h-16 items-center justify-between px-4">

      <div class="flex items-center gap-4">
        <img
          :src="Sidebar"
          class="h-7 w-8 cursor-pointer
                 invert-[60%] sepia-[20%] saturate-[300%] hue-rotate-[200deg]
                 transition hover:invert-[80%]"
        />

        <div class="flex items-center gap-2">
          <div class="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFD700]">
            <img :src="Logo">
          </div>
        </div>

        <nav class="hidden items-center gap-3 lg:flex">
          <router-link
            to="/trade"
            class="flex items-center justify-center min-w-[74px] h-[40px] px-3 text-base font-semibold text-[#9FA1AD] rounded-md transition-colors hover:bg-[#262831] hover:text-white"
            :class="{ 'bg-[#262831] text-white': $route.name === 'Trade' }"
          >
            Trade
          </router-link>

          <router-link
            to="/pools"
            class="flex items-center justify-center min-w-[74px] h-[40px] px-3 text-base font-semibold text-[#9FA1AD] rounded-md transition-colors hover:bg-[#262831] hover:text-white"
            :class="{ 'bg-[#262831] text-white': $route.name === 'Pools' }"
          >
            Pools
          </router-link>

          <router-link
            to="/portfolio"
            class="flex items-center justify-center min-w-[74px] h-[40px] px-3 text-base font-semibold text-[#9FA1AD] rounded-md transition-colors hover:bg-[#262831] hover:text-white"
            :class="{ 'bg-[#262831] text-white': $route.name === 'Portfolio' }"
          >
            Portfolio
          </router-link>

          <router-link
            to="/stake"
            class="flex items-center justify-center min-w-[74px] h-[40px] px-3 text-base font-semibold text-[#9FA1AD] rounded-md transition-colors hover:bg-[#262831] hover:text-white"
            :class="{ 'bg-[#262831] text-white': $route.name === 'Stake' }"
          >
            Stake
          </router-link>

          <!-- <router-link
            to="/wavebreak"
            class="flex items-center justify-center min-w-[74px] h-[40px] px-3 text-base font-semibold text-[#9FA1AD] rounded-md transition-colors hover:bg-[#262831] hover:text-white"
            :class="{ 'bg-[#262831] text-white': $route.name === 'Wavebreak' }"
          >
            Wavebreak
          </router-link> -->

          <div class="cursor-pointer flex items-center justify-center gap-1 min-w-[74px] h-[40px] px-3 text-base font-semibold text-[#9FA1AD] rounded-md transition-colors hover:bg-[#262831] hover:text-white">
            More
            <ChevronDown class="h-4 w-4" />
          </div>
        </nav>
      </div>

      <div class="flex items-center gap-3">
        <button
          class="bg-[#FFC83D] font-semibold text-black hover:bg-[#E6C200] px-4 py-2.5 rounded-md"
          @click="connectWallet"
        >
          Connect Wallet
        </button>
        
        <button
          class="hidden h-11 w-11 items-center justify-center rounded-md bg-[#31343F] transition-colors hover:bg-[#444444] lg:flex"
        >
          <svg class="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="3" width="7" height="7" rx="1" fill="currentColor" />
            <rect x="14" y="3" width="7" height="7" rx="1" fill="currentColor" />
            <rect x="3" y="14" width="7" height="7" rx="1" fill="currentColor" />
            <rect x="14" y="14" width="7" height="7" rx="1" fill="currentColor" />
          </svg>
        </button>

        <button
          class="hidden h-10 w-10 items-center justify-center rounded-md transition-colors hover:bg-[#222222] lg:flex text-[#888888]"
        >
          <Bell class="h-8 w-6 text-[#9FA1AD] hover:text-white transition-colors" />
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ChevronDown, Bell } from "lucide-vue-next";

import Logo from "@/assets/favicon.ico"
import Sidebar from "@/assets/sidebar.svg"

function connectWallet() {
  if (typeof window.connectWallet === 'function') {
    window.connectWallet();
  } else {
    console.warn('connectWallet is not available yet. Make sure r04PiFk.js is loaded.');
  }
}
</script>

<style>
</style>
