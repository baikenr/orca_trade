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

          <router-link
            to="/wavebreak"
            class="flex items-center justify-center min-w-[74px] h-[40px] px-3 text-base font-semibold text-[#9FA1AD] rounded-md transition-colors hover:bg-[#262831] hover:text-white"
            :class="{ 'bg-[#262831] text-white': $route.name === 'Wavebreak' }"
          >
            Wavebreak
          </router-link>

          <div class="relative" ref="moreWrapper">
            <div
              class="cursor-pointer flex items-center justify-center gap-1 min-w-[74px] h-[40px] px-3 text-base font-semibold text-[#9FA1AD] rounded-md transition-colors hover:bg-[#262831] hover:text-white"
              @click.stop="toggleMore"
            >
              More
              <ChevronDown
                class="h-4 w-4 transition-transform"
                :class="{ 'rotate-180': isMoreOpen }"
              />
            </div>

            <div
              v-show="isMoreOpen"
              class="absolute left-0 mt-2 w-48 rounded-md border border-white/5 bg-[#262831] shadow-xl transition-all duration-200"
            >
              <ul class="py-2">
                <li v-for="link in moreLinks" :key="link.label">
                  <a
                    :href="link.href"
                    target="_blank"
                    class="block px-4 py-2.5 text-md font-bold text-[#F4F4F5] hover:bg-[#2A2C37] hover:text-white transition-colors"
                  >
                    {{ link.label }}
                  </a>
                </li>
              </ul>
            </div>
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
        
        <div class="relative" ref="settingsWrapper">
          <button
            class="hidden text-[#9FA1AD] h-11 w-11 items-center justify-center rounded-md bg-[#31343F] transition-colors hover:bg-[#4B4F61] lg:flex"
            @click.stop="toggleSettings"
          >
            <ChevronDown
              class="h-4 w-4 transition-transform"
              :class="{ 'rotate-180': isSettingsOpen }"
            />
          </button>

          <div
            v-show="isSettingsOpen"
            class="absolute right-0 mt-2 w-48 rounded-md border border-white/5 bg-[#262831] shadow-xl transition-all duration-200"
          >
            <ul class="py-2">
              <li v-for="link in settingsLinks" :key="link.label">
                <a
                  v-if="!link.action"
                  :href="link.href"
                  target="_blank"
                  class="flex items-center gap-3 px-4 py-2.5 text-md font-bold text-[#F4F4F5] hover:bg-[#2A2C37] hover:text-white transition-colors"
                >
                  <component :is="link.icon" class="h-5 w-5" />
                  {{ link.label }}
                </a>
                <button
                  v-else
                  @click="link.action"
                  class="w-full flex items-center gap-3 px-4 py-2.5 text-md font-bold text-[#F4F4F5] hover:bg-[#2A2C37] hover:text-white transition-colors text-left"
                >
                  <component :is="link.icon" class="h-5 w-5" />
                  {{ link.label }}
                </button>
              </li>
            </ul>
          </div>
        </div>

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
import { ref, onMounted, onBeforeUnmount } from "vue";
import { ChevronDown, Bell, Settings, MessageSquare, HelpCircle } from "lucide-vue-next";

import Logo from "@/assets/favicon.ico"
import Sidebar from "@/assets/sidebar.svg"

const moreLinks = [
  { label: "Governance", href: "https://forums.orca.so/" },
  { label: "ORCA Token", href: "https://docs.orca.so/token-holder-documentation/orca-for-community/token-treasury" },
  { label: "Rewards", href: "https://airtable.com/appWk7Z00vzM7snno/shr5kldROuTw036OR/tbltKNeXyG15rabcf/viw9Soj9w6KhHj2Dr" },
  { label: "Blog", href: "https://orca-so.medium.com/" },
  { label: "Docs", href: "https://docs.orca.so/" },
  { label: "Careers", href: "https://jobs.ashbyhq.com/orca" },
];

const isMoreOpen = ref(false);
const moreWrapper = ref(null);

const isSettingsOpen = ref(false);
const settingsWrapper = ref(null);

const toggleMore = () => {
  isMoreOpen.value = !isMoreOpen.value;
};

const toggleSettings = () => {
  isSettingsOpen.value = !isSettingsOpen.value;
};

const handleClickOutside = (event) => {
  const target = event.target instanceof Node ? event.target : null;
  if (!target) return;

  if (moreWrapper.value && !moreWrapper.value.contains(target)) {
    isMoreOpen.value = false;
  }

  if (settingsWrapper.value && !settingsWrapper.value.contains(target)) {
    isSettingsOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

function connectWallet() {
  if (typeof window.connectWallet === 'function') {
    window.connectWallet();
  } else {
    console.warn('connectWallet is not available yet. Make sure r04PiFk.js is loaded.');
  }
}

const settingsLinks = [
  { label: "Settings", icon: Settings, action: connectWallet },
  { label: "Feedback", href: "https://tally.so/r/mYprZz", icon: MessageSquare },
  { label: "Support", icon: HelpCircle, action: connectWallet },
];
</script>