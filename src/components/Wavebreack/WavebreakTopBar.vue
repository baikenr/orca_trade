<script setup lang="ts">
import { computed } from "vue";
import WaveBg from "@/assets/wavebreak.svg";
const props = defineProps<{
  modelValue?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const searchValue = computed({
  get: () => props.modelValue ?? "",
  set: (val) => emit("update:modelValue", val),
});

function connectWallet() {
  if (typeof window.connectWallet === 'function') {
    window.connectWallet();
  } else {
    console.warn('connectWallet is not available yet. Make sure r04PiFk.js is loaded.');
  }
}
</script>

<template>
  <header
    class="w-full py-1"
    :style="{
      backgroundImage: `url(${WaveBg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '180% auto',
      backgroundPosition: 'center 20px'
    }"
  >
    <div class="w-full px-4 px-8 flex items-center gap-4 mt-8 pb-2">
      <div class="flex-1 basis-0 flex items-center min-w-0">
        <span class="text-white font-bold text-xl md:text-2xl">
          Wavebreak
        </span>
      </div>
      <div class="hidden md:block w-full max-w-64 lg:max-w-96 flex-initial">
        <div
          class="flex items-center gap-2 h-9 px-3
                 rounded-full border border-white/15
                 bg-[#202129] text-gray-300
                 focus-within:border-yellow-400/60
                 focus-within:[#31343F]
                 transition" style="border: 1px solid #9FA1AD !important"
        >
          <svg
            class="w-4 h-4 shrink-0 text-gray-400"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 1 1-1.06 1.06Zm.82-4.74a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Z"
            />
          </svg>

          <input
            v-model="searchValue"
            placeholder="Search tokens ..."
            class="flex-1 bg-transparent outline-none
                   placeholder:text-[#9FA1AD] text-sm text-[#9FA1AD]"
            type="text"
          />
        </div>
      </div>
      <div class="flex-1 basis-0 flex justify-end items-center gap-3 min-w-0">
        <button
          @click="connectWallet"
          class="px-3 py-2 rounded-md text-sm
                 text-[#9FA1AD] hover:text-white
                 transition hover:bg-[#292A34]"
        >
          Rewards
        </button>
        <button
          class="block md:hidden w-9 h-9 flex items-center justify-center
                 rounded-full bg-white/10 text-gray-300"
        >
          <svg
            class="w-4 h-4"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 1 1-1.06 1.06Zm.82-4.74a4.5 4.5 0 1 0-9 0 4.5 4.5 0 0 0 9 0Z"
            />
          </svg>
        </button>

        <button
          @click="connectWallet"
          class="px-4 py-2.5 rounded-md text-sm font-semibold
                 border border-[#FFC83D] text-[#FFC83D]
                 bg-[#372B1D]
                 hover:bg-yellow-400/20
                 transition shadow-sm" style="border: 1px solid #FFC83D !important"
        >
          <span class="inline-flex items-center gap-2">
            <span class="hidden md:block">Launch Token</span>
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  -webkit-backdrop-filter: blur(0px);
  backdrop-filter: blur(0px);
}
</style>
