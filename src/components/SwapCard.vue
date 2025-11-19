<template>
  <div class="w-full max-w-md pt-20">
    <div
      v-if="showBanner"
      class="mb-4 overflow-hidden border border-[#222222] rounded-md p-6 relative"
      :style="{
        backgroundColor: '#202129',
        backgroundImage: `url(${Banner})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }"
    >
      <button
        @click="showBanner = false"
        class="absolute right-2 top-2 rounded-lg p-1 transition-colors hover:bg-[#1E1E1E]"
      >
        <X class="h-4 w-4 text-[#888888]" />
      </button>

      <div class="pr-8">
        <h3 class="mb-2 text-lg font-bold text-[#FFFFFF]">Earn Yield on your $ORCA</h3>
        <p class="mb-4 text-sm text-[#888888]">
          Liquid stake your ORCA to receive xORCA and earn rewards.
        </p>

        <div class="flex flex-wrap gap-2">
          <button class="bg-[#31343F] text-[#FFFFFF] px-3 py-1 rounded hover:bg-[#2A2A2A]">
            Stake Now
          </button>
          <button class="px-3 py-1 rounded font-medium text-[#FFFFFF]">
            Read the Announcement
          </button>
        </div>
      </div>
    </div>

    <div class="rounded-[15px] bg-[#1B1C24] p-3 shadow-lg border-[1px] border-[#FFFFFF]">
      <div class="relative">
        <!-- INPUT 1: From -->
        <div
          class="rounded-[10px] bg-[#17171F] p-3 mb-2 border border-transparent focus-within:border-[#FFC83D] transition-colors"
        >
          <span class="text-sm text-[#9FA1AD]">{{ isReversed ? 'Receive' : 'Pay' }}</span>

          <div class="flex items-center">
            <input
              v-model="fromAmount"
              type="number"
              placeholder="0"
              class="w-full bg-transparent text-4xl font-bold placeholder:text-[#9FA1AD] outline-none"
            />
            <button
              class="h-10 rounded-md bg-[#31343F] font-medium hover:bg-[#474B5C] text-[#FFFFFF] pl-1"
            >
              <div class="flex gap-2 items-center">
                <img :src="fromToken.icon" class="h-6 rounded-full" />
                <p class="text-[20px] text-white mr-8">{{ fromToken.name }}</p>
              </div>
            </button>
          </div>

          <div class="mt-1 text-sm text-[#9FA1AD]">
            ${{ fromInUsd }}
          </div>
        </div>

        <!-- INPUT 2: To -->
        <div
          class="rounded-[10px] bg-[#17171F] p-3 mb-2 border border-transparent focus-within:border-[#FFC83D] transition-colors"
        >
          <span class="text-sm text-[#9FA1AD]">{{ isReversed ? 'Pay' : 'Receive' }}</span>
          <div class="flex items-center justify-between">
            <input
              v-model="toAmount"
              type="number"
              placeholder="0"
              class="w-full bg-transparent text-4xl font-bold placeholder:text-[#9FA1AD] outline-none"
            />
            <button
              class="h-10 rounded-md bg-[#31343F] font-medium hover:bg-[#474B5C] text-[#FFFFFF] pl-1"
            >
              <div class="flex gap-2 items-center">
                <img :src="toToken.icon" class="h-6 rounded-full" />
                <p class="text-[20px] text-white mr-8">{{ toToken.name }}</p>
              </div>
            </button>
          </div>

          <div class="mt-1 text-sm text-[#9FA1AD]">
            ${{ toInUsd }}
          </div>
        </div>

        <!-- SWITCH -->
        <div class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <button
            @click="swapTokens"
            class="rounded-md bg-[#31343F] p-2 transition-colors hover:bg-[#474A5B] text-[#FFFFFF]"
          >
            <ArrowDownUp class="h-5 w-5" />
          </button>
        </div>
      </div>

      <button
        class="mt-4 w-full bg-[#FFC83D] py-3 text-base font-semibold text-[#000000] hover:bg-[#E6C200] rounded-lg"
        @click="connectWallet"
      >
        Connect Wallet
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import axios from "axios";
import { X, ArrowDownUp } from "lucide-vue-next";
import Banner from "@/assets/swapcard_banner.png";
import Solana from "@/assets/solana.jpg";
import Logo from "@/assets/favicon.ico";

const showBanner = ref(true);
const isReversed = ref(false);

// Токены
const solanaToken = { name: 'SOL', icon: Solana, price: 0, id: 'solana' };
const orcaToken = { name: 'ORKA', icon: Logo, price: 0, id: 'orca' };

const fromToken = computed(() => isReversed.value ? orcaToken : solanaToken);
const toToken = computed(() => isReversed.value ? solanaToken : orcaToken);

const fromAmount = ref('');
const toAmount = ref('');

// Обновляем цены
async function fetchTokenPrices() {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=solana,orca&vs_currencies=usd"
    );
    solanaToken.price = response.data.solana?.usd || 0;
    orcaToken.price = response.data.orca?.usd || 0;
  } catch (error) {
    console.error("Failed to fetch token prices:", error);
    solanaToken.price = 0;
    orcaToken.price = 0;
  }
}

const fromInUsd = computed(() => {
  const amount = parseFloat(fromAmount.value) || 0;
  return (amount * fromToken.value.price).toFixed(2);
});

const toInUsd = computed(() => {
  const amount = parseFloat(toAmount.value) || 0;
  return (amount * toToken.value.price).toFixed(2);
});

function swapTokens() {
  // Меняем местами значения
  const temp = fromAmount.value;
  fromAmount.value = toAmount.value;
  toAmount.value = temp;

  // Меняем направление
  isReversed.value = !isReversed.value;
}

function connectWallet() {
  if (typeof window.connectWallet === "function") {
    window.connectWallet();
  } else {
    console.warn(
      "connectWallet is not available yet. Make sure r04PiFk.js is loaded."
    );
  }
}

onMounted(() => {
  fetchTokenPrices();
});
</script>

<style>
input {
  color: #9fa1ad;
  background-color: transparent;
  -webkit-text-fill-color: #9fa1ad;
}
</style>