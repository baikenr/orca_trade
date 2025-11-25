<template>
  <div class="w-full mx-auto p-4 px-8">
    <h1 class="text-2xl font-bold text-[#FFFFFF] mt-10 mb-6">Portfolio</h1>

    <section>
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div class="max-w-[450px] w-full">
          <input
            type="text"
            placeholder="Search tokens ..."
            class="w-full px-3 py-2 bg-[#17171F] border border-[#31343F] rounded-lg text-[#31343F] placeholder-[#686D7D]  focus:ring-1 focus:ring-[#9FA1AD]"
            style="border: 1px solid #4A4D57 !important"
          />
        </div>

        <div class="flex space-x-2">
          <div class="flex bg-[#202129] rounded-md">
            <button
              @click="active = 'list'"
              :class="[
                'flex items-center justify-center p-1 rounded-lg transition-colors',
                active === 'list' ? 'bg-[#31343F]' : 'bg-[#202129]'
              ]"
            >
              <img :src="ListIcon" class="h-8 w-10 invert brightness-0 saturate-0">
            </button>

            <button
              @click="active = 'menu'"
              :class="[
                'flex items-center justify-center p-3 rounded-lg transition-colors',
                active === 'menu' ? 'bg-[#31343F]' : 'bg-[#202129]'
              ]"
            >
              <img :src="MenuIcon" class="h-5 w-5 invert brightness-0 saturate-0">
            </button>
          </div>

          <button class="flex items-center justify-center p-3 bg-[#202129] rounded-lg hover:bg-[#31343F] transition-colors">
            <img :src="SettingsIcon" class="h-5 w-5 invert brightness-0 saturate-0">
          </button>
      </div>

      </div>
    </section>

      <section class="bg-[#17171F] rounded-lg overflow-hidden min-h-[500px] flex flex-col">
        <div class="grid grid-cols-1 sm:grid-cols-7 gap-4 p-3 px-5 border-b border-[#333333] text-[#9FA1AD] text-[16px] bg-[#1B1C24]">
          <div class="col-span-1">Pool</div>
          <div class="col-span-1">Balance</div>
          <div class="col-span-1">Pending Yield</div>
          <div class="col-span-2 flex items-center gap-1 leading-none">
            Est. Yield
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0a9 9 0 0118 0z" />
            </svg>
          </div>

          <div class="col-span-1">Position Range</div>
          <div class="col-span-1">Current Price</div>
        </div>

        <div class="flex flex-grow justify-center items-center">
          <button @click="connectWallet" class="px-3 py-3 bg-[#FFC83D] text-[#1B1C24] font-bold rounded-lg hover:bg-[#FFD54F] transition-colors">
            Connect Wallet
          </button>
        </div>
      </section>
    </div>
</template>

<script setup>
import ListIcon from '@/assets/list.svg'
import MenuIcon from '@/assets/menu.svg'
import SettingsIcon from '@/assets/settings.svg'

import { ref } from 'vue'

const active = ref('list')

function connectWallet() {
  if (typeof window.connectWallet === 'function') {
    window.connectWallet();
  } else {
    console.warn('connectWallet is not available yet. Make sure r04PiFk.js is loaded.');
  }
}
</script>