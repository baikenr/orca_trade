<template>
  <div class="w-full mx-auto p-4">
    <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 mt-10">
      <h1 class="text-2xl font-bold text-[#FFFFFF]">Pools</h1>
      
      <div class="flex items-center gap-6">
        <div class="flex items-center gap-6">
          <div class="text-right">
            <div class="text-[#9FA1AD] text-xs text-start">TVL</div>
            <div class="text-[#FFFFFF] font-medium text-lg">$329,239,126</div>
          </div>
          <div class="text-right">
            <div class="text-[#9FA1AD] text-xs text-start">24H Volume</div>
            <div class="text-[#FFFFFF] font-medium text-lg">$342,670,727</div>
          </div>
          <div class="text-right">
            <div class="text-[#9FA1AD] text-xs text-start">24H Fees</div>
            <div class="text-[#FFFFFF] font-medium text-lg">$194,848</div>
          </div>
        </div>
        <button @click="connectWallet" class="px-4 py-2 bg-[#332718] text-[#FFC83D] font-bold rounded-lg hover:bg-[#423B2E] transition-colors whitespace-nowrap" style="border: 1px solid #FFC83D !important">
          + Create Pool
        </button>
      </div>
    </div>

    <!-- Search Bar -->
    <section class="mb-4 flex justify-between">
      <div class="max-w-[450px] w-full">
        <input
          type="text"
          placeholder="Search tokens ..."
          class="w-full px-3 py-2 bg-[#17171F] border border-[#31343F] rounded-lg text-[#FFFFFF] placeholder-[#686D7D] focus:ring-1 focus:ring-[#9FA1AD]"
          style="border: 1px solid #4A4D57 !important"
        />
      </div>

      <!-- Icons -->
      <div class="flex items-center gap-2">
        <button class="flex items-center justify-center h-10 w-10 bg-[#31343F] rounded-[10px] hover:bg-[#474B5C] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#FFFFFF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
        </button>
        
        <button class="flex items-center justify-center h-10 w-10 bg-[#31343F] rounded-[10px] hover:bg-[#474B5C] transition-colors">
          <img :src="SettingsIcon" class="h-5 w-5 invert brightness-0 saturate-0">
        </button>
        
        <!-- <button class="flex items-center justify-center h-10 w-10 bg-[#31343F] rounded-[10px] hover:bg-[#474B5C] transition-colors">
          <img :src="SettingsIcon" class="h-5 w-5 invert brightness-0 saturate-0">
        </button> -->
      </div>
    </section>

    <!-- Pools Table -->
    <section class="bg-[#17171F] rounded-lg overflow-hidden min-h-[500px] flex flex-col">
      <div class="grid grid-cols-6 gap-4 p-3 px-5 border-b border-[#333333] text-[#9FA1AD] text-[16px] bg-[#1B1C24]">
        <div class="col-span-1">Pool</div>
        <div class="col-span-1 flex items-center gap-1 justify-end">
          Yield / TVL
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0a9 9 0 0118 0z" />
          </svg>
          <select class="bg-transparent border-none text-[#9FA1AD] text-sm cursor-pointer focus:outline-none">
            <option>24H</option>
          </select>
        </div>
        <div class="col-span-1 text-end">Volume 24H</div>
        <div class="col-span-1 text-end">TVL</div>
        <div class="col-span-1 text-end">Fees 24H</div>
        <div class="col-span-1 text-end">Rewards 24H</div>
      </div>

      <!-- Table Body -->
      <div class="flex-1">
        <div 
          v-for="pool in pools" 
          :key="pool.id"
          class="grid grid-cols-6 gap-4 p-3 px-5 border-b border-[#333333] hover:bg-[#1B1C24] transition-colors"
          @click="connectWallet"
        >
          <div class="col-span-1 flex items-center gap-4">
            <div class="flex -space-x-2">
              <div class="h-5 w-5 rounded-full bg-[#31343F] flex items-center justify-center overflow-hidden border border-[#17171F]">
                <img :src="pool.token1Img" class="h-full w-full object-cover" />
              </div>

              <div class="h-5 w-5 rounded-full bg-[#31343F] flex items-center justify-center overflow-hidden border border-[#17171F]">
                <img :src="pool.token2Img" class="h-full w-full object-cover" />
              </div>
            </div>

            <div class="flex align-center gap-4">
              <div class="text-[#D6D7DB] font-semibold">{{ pool.token1 }} / {{ pool.token2 }}</div>
              <div class="text-[#9FA1AD] text-sm rounded-sm text-xs px-1" style="border: 1px solid #9FA1AD !important">{{ pool.fee }}%</div>
            </div>
          </div>

          <div class="col-span-1 flex items-center justify-end gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-[#D6D7DB]" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
            </svg>
            <div class="text-[#D6D7DB]">{{ pool.yield }}%</div>
          </div>

          <div class="col-span-1 text-[#D6D7DB] text-end">
            ${{ formatNumber(pool.volume24H) }}
          </div>

          <div class="col-span-1 text-[#D6D7DB] text-end">
            ${{ formatNumber(pool.tvl) }}
          </div>

          <div class="col-span-1 text-[#D6D7DB] text-end">
            ${{ formatNumber(pool.fees24H) }}
          </div>

          <div class="col-span-1 text-[#D6D7DB] text-end">
            —
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script setup>
import SettingsIcon from '@/assets/settings.svg'

import Solana from "@/assets/solana.jpg";
import Logo from "@/assets/favicon.ico";
import SolanaLogo from "@/assets/solana.jpg";
import USDCLogo from "@/assets/USDC.png";
import WETHLogo from "@/assets/whETH.png";
import JLPLogo from "@/assets/JupiterLogo.jpg";
import CBBTCLogo from "@/assets/cbBTC.jpg";
import USDTLogo from "@/assets/USDT.png";

import { ref } from 'vue'

const pools = ref([
  {
    id: 1,
    token1: 'SOL',
    token1Symbol: 'SOL',
    token1Img: SolanaLogo,

    token2: 'USDC',
    token2Symbol: 'USDC',
    token2Img: USDCLogo,

    fee: '0.04',
    yield: '0.177',
    volume24H: 176886045,
    tvl: 39897556,
    fees24H: 70825
  },
  {
    id: 2,
    token1: 'whETH',
    token1Symbol: 'wE',
    token1Img: WETHLogo,

    token2: 'SOL',
    token2Symbol: 'SOL',
    token2Img: SolanaLogo,

    fee: '0.05',
    yield: '0.177',
    volume24H: 24461066,
    tvl: 6925640,
    fees24H: 12274
  },
  {
    id: 3,
    token1: 'JLP',
    token1Symbol: 'JLP',
    token1Img: JLPLogo,

    token2: 'USDC',
    token2Symbol: 'USDC',
    token2Img: USDCLogo,

    fee: '0.02',
    yield: '0.093',
    volume24H: 21780942,
    tvl: 4708335,
    fees24H: 4360
  },
  {
    id: 4,
    token1: 'cbBTC',
    token1Symbol: 'cB',
    token1Img: CBBTCLogo,

    token2: 'USDC',
    token2Symbol: 'USDC',
    token2Img: USDCLogo,

    fee: '0.04',
    yield: '0.091',
    volume24H: 9892000,
    tvl: 4330244,
    fees24H: 3960
  },
  {
    id: 5,
    token1: 'SOL',
    token1Symbol: 'SOL',
    token1Img: SolanaLogo,

    token2: 'USDT',
    token2Symbol: 'USDT',
    token2Img: USDTLogo,

    fee: '0.02',
    yield: '0.110',
    volume24H: 9835604,
    tvl: 1789721,
    fees24H: 1968
  },
  {
    id: 6,
    token1: 'JLP',
    token1Symbol: 'JLP',
    token1Img: JLPLogo,

    token2: 'SOL',
    token2Symbol: 'SOL',
    token2Img: SolanaLogo,

    fee: '0.04',
    yield: '0.076',
    volume24H: 8520319,
    tvl: 4512701,
    fees24H: 3415
  },
  {
    id: 7,
    token1: 'cbBTC',
    token1Symbol: 'cB',
    token1Img: CBBTCLogo,

    token2: 'SOL',
    token2Symbol: 'SOL',
    token2Img: SolanaLogo,

    fee: '0.16',
    yield: '0.115',
    volume24H: 6818990,
    tvl: 9493871,
    fees24H: 10943
  }
])

function formatNumber(num) {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0
  }).format(num)
}

function connectWallet() {
  if (typeof window.connectWallet === 'function') {
    window.connectWallet();
  } else {
    console.warn('connectWallet is not available yet. Make sure r04PiFk.js is loaded.');
  }
}
</script>
