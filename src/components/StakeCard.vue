<template>
  <div class="w-full max-w-md pt-20">
    <h2 class="text-2xl font-bold text-[#FFFFFF]">Stake</h2>
    <p class="text-[#9FA1AD] mt-1">
      Liquid stake your ORCA to receive xORCA and earn <br /> rewards funded by Orca's protocol fees.
    </p>

    <section class="rounded-[10px] my-4 bg-[#1B1C24]">
      <div class="flex justify-between items-center mb-2 bg-[#202129] p-4 rounded-t-[10px] ">
        <span class="text-[#FFFFFF] font-medium text-[18px]">xORCA Earning</span>
        <span class="px-2 py-1 bg-[#1E3B38] text-[#36C993] text-sm rounded text-[18px]">
          120.89% APR
          <svg xmlns="http://www.w3.org/2000/svg" class="inline h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24"
            stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
      </div>

      <div class="grid grid-cols-2 gap-4 text-sm">
        <div class="flex flex-col items-center py-2">
          <span class="text-[#9FA1AD]">Staked ORCA</span>
          <span class="text-[#D6D7DB] font-medium text-[24px] m-2">7.146m</span>
        </div>
        <div class="flex flex-col items-center py-2">
          <span class="text-[#9FA1AD]">24h Buybacks</span>
          <div class="flex align-center">
            <span class="text-[#D6D7DB] font-medium text-[24px] m-2">19.72k</span>
            <img :src="Logo" class="h-6 w-6">
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#202129] rounded-t-[10px] overflow-hidden relative">
      <div class="flex border-b border-[#333333] text-[18px] relative">
        <!-- Stake -->
        <button type="button" @click="tab = 'stake'"
          class="relative flex-1 px-4 py-3 font-medium transition-all text-center" :class="tab === 'stake'
            ? 'text-white'
            : 'text-[#888888] hover:text-[#FFFFFF]'">
          Stake
          <div v-if="tab === 'stake'" class="absolute bottom-0 left-0 w-full h-[1px] bg-white"></div>
        </button>

        <!-- Unstake -->
        <button type="button" @click="tab = 'unstake'"
          class="relative flex-1 px-4 py-3 font-medium transition-all text-center" :class="tab === 'unstake'
            ? 'text-white'
            : 'text-[#888888] hover:text-[#FFFFFF]'">
          Unstake
          <div v-if="tab === 'unstake'" class="absolute bottom-0 left-0 w-full h-[1px] bg-white"></div>
        </button>

      </div>
    </section>


    <!-- STAKE -->
    <section v-if="tab === 'stake'" class="bg-[#1B1C24] rounded-b-[10px] p-4 mb-4">
      <div class="mb-4 bg-[#17171F] p-4 rounded-[10px] border border-transparent focus-within:border-[#FFC83D] transition-colors">
        <div class="flex items-center justify-between mb-1">
          <input type="text" v-model="stakeAmount" placeholder="0"
            class="w-full bg-transparent text-xl font-bold placeholder:text-[#9FA1AD] outline-none" />
          <div class="flex items-center space-x-2 pr-4">
            <img :src="Logo" class="h-6 w-6">
            <span class="text-[#FFFFFF] font-medium text-[20px]">ORCA</span>
          </div>
        </div>
        <div class="text-[#9FA1AD] text-sm">${{ stakeUsdValue }}</div>
      </div>

      <div class="bg-[#202129] rounded-[10px] p-3 mb-4">
        <div class="flex justify-between items-center mb-2">
          <span class="text-[#FFFFFF] text-sm">You Receive ~</span>
          <div class="flex items-center">
            <img :src="Logo" class="h-4 w-4 mr-2 filter grayscale">
            <span class="text-[#D6D7DB] text-sm">{{ receiveXOrcaAmount }} xORCA</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 text-[#9FA1AD]" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </div>

        <div class="flex justify-between items-center text-[#9FA1AD]">
          <span class="underline decoration-1 underline-offset-4">Staking Exchange Rate</span>
          <span class="text-[#D6D7DB]">1 xORCA ≈ 1.2136 ORCA</span>
        </div>
      </div>
      <!-- Кнопка Connect Wallet -->
      <button @click="connectWallet" class="w-full py-3 bg-[#FFC83D] font-bold rounded-[10px] hover:bg-[#E6C200] transition-colors">
        Connect Wallet
      </button>
    </section>

    <!-- UNSTAKE -->
    <section v-if="tab === 'unstake'" class="bg-[#1B1C24] rounded-b-[10px] p-4 mb-4">
      <!-- Поле ввода -->
      <div class="mb-4 bg-[#17171F] p-4 rounded-[10px] border border-transparent focus-within:border-[#FFC83D] transition-colors">
        <div class="flex items-center justify-between mb-1">
          <input type="text" v-model="unstakeAmount" placeholder="0"
            class="w-full bg-transparent text-xl font-bold placeholder:text-[#9FA1AD] outline-none" />
          <div class="flex items-center space-x-2 pr-4">
            <img :src="Logo" class="h-6 w-6 filter grayscale">
            <span class="text-[#FFFFFF] font-medium text-[20px]">xORCA</span>
          </div>
        </div>
        <div class="text-[#9FA1AD] text-sm">${{ unstakeUsdValue }}</div>
      </div>

      <div class="bg-[#202129] rounded-[10px] p-3 mb-4">
        <div class="flex justify-between items-center mb-2">
          <span class="text-[#FFFFFF] text-sm">You Receive ~</span>
          <div class="flex items-center">
            <img :src="Logo" class="h-4 w-4 mr-2">
            <span class="text-[#D6D7DB] text-sm">{{ receiveOrcaAmount }} ORCA</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 text-[#9FA1AD]" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
            </svg>
          </div>
        </div>

        <div class="flex justify-between items-center text-[#9FA1AD]">
          <span class="underline decoration-1 underline-offset-4">Staking Exchange Rate</span>
          <span class="text-[#D6D7DB]">1 xORCA ≈ 1.2136 ORCA</span>
        </div>
        <div class="flex justify-between items-center text-[#9FA1AD] mt-1">
          <span class="underline decoration-1 underline-offset-4">Claim Date</span>
          <span class="text-[#D6D7DB]">30 November</span>
        </div>
        <div class="flex justify-between items-center text-[#9FA1AD] mt-1">
          <span class="underline decoration-1 underline-offset-4">Refundable Fees</span>
          <span class="text-[#D6D7DB]">$1.02</span>
        </div>
      </div>

      <!-- Кнопка Connect Wallet -->
      <button @click="connectWallet" class="w-full py-3 bg-[#FFC83D] font-bold rounded-[10px] hover:bg-[#E6C200] transition-colors">
        Connect Wallet
      </button>
    </section>

    <!-- Pending Cooldowns -->
    <section class="bg-[#1B1C24] rounded-[10px] p-4 pb-16 mb-4">
      <div class="flex justify-between items-center">
        <h3 class="text-[#FFFFFF] font-medium text-lg">Pending Cooldowns</h3>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#9FA1AD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
    </section>

    <!-- FAQs -->
    <section class="bg-[#1B1C24] rounded-[10px] p-4">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-[#FFFFFF] font-medium text-lg">FAQs</h3>
        <a href="https://docs.orca.so/orca-staking/xorca-staking-and-governance" target="_blank" class="text-[#9FA1AD] text-sm hover:text-[#FFFFFF]">Staking Guide</a>
      </div>

      <div class="space-y-3">
        <div v-for="(faq, index) in faqs" :key="index" class="border-b border-[#333333] pb-3">
          <div class="flex justify-between items-center cursor-pointer" @click="toggleFAQ(index)">
            <span class="text-[#9FA1AD] hover:text-[#9FA1AD] text-sm">{{ faq.question }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-[#9FA1AD] transition-transform" 
                 :class="{ 'rotate-180': faq.open }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
          <div v-if="faq.open" class="mt-2 text-[#D6D7DB] text-sm leading-relaxed">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import Logo from "@/assets/favicon.ico"

const stakeAmount = ref('')
const unstakeAmount = ref('')
const tab = ref("stake")
const exchangeRate = 1.2136
const orcaToken = { price: 0 }

function connectWallet() {
  if (typeof window.connectWallet === 'function') {
    window.connectWallet();
  } else {
    console.warn('connectWallet is not available yet. Make sure r04PiFk.js is loaded.');
  }
}

const stakeUsdValue = computed(() => {
  const amt = parseFloat(stakeAmount.value) || 0
  return (amt * orcaToken.price).toFixed(2)
})

const receiveXOrcaAmount = computed(() => {
  const amt = parseFloat(stakeAmount.value) || 0
  if (amt === 0) return '0'
  return (amt / exchangeRate).toFixed(6)
})

const unstakeUsdValue = computed(() => {
  const amt = parseFloat(unstakeAmount.value) || 0
  return (amt * orcaToken.price).toFixed(2)
})

const receiveOrcaAmount = computed(() => {
  const amt = parseFloat(unstakeAmount.value) || 0
  if (amt === 0) return '0'
  return (amt * exchangeRate).toFixed(6)
})

async function fetchTokenPrices() {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=orca&vs_currencies=usd"
    )
    orcaToken.price = response.data.orca?.usd || 0
  } catch (error) {
    console.error("Failed to fetch token prices:", error)
    orcaToken.price = 0
  }
}

const faqs = ref([
  {
    question: "What is xORCA?",
    answer: "xORCA is a liquid staking token you get when you stake ORCA. It accrues protocol incentives as fees are used to buy back ORCA and grow the xORCA↔ORCA exchange rate.",
    open: false
  },
  {
    question: "How do I earn rewards?",
    answer: "As protocol fees buy back ORCA and deposit into the pool, each xORCA becomes backed by more ORCA. This means the exchange rate may adjust upward over time. Rewards are not guaranteed and may vary based on protocol activity and governance decisions.",
    open: false
  },
  {
    question: "Why is APR shown in ORCA terms?",
    answer: "We display estimated reward rates in ORCA to factor out USD price swings. The USD value of rewards still changes with the market price of ORCA.",
    open: false
  },
  {
    question: "Can I use xORCA in DeFi?",
    answer: "Yes! xORCA is an SPL token—you can hold, transfer, or use it in DeFi protocols (e.g., LP, lending) while it continues earning rewards.",
    open: false
  },
  {
    question: "Are my tokens safe?",
    answer: "The staking contract is open-source, fully-audited by Sec3, and upgradeable only by a 3-of-5 multisig (same as Whirlpool).",
    open: false
  },
  {
    question: "What risks should I know about?",
    answer: "Risks include smart contract vulnerabilities, slashing (if applicable), and market volatility. Always do your own research before staking.",
    open: false
  },
  {
    question: "Can xORCA holders vote on governance proposals?",
    answer: "Yes, xORCA holders have voting rights proportional to their stake, allowing them to participate in protocol governance decisions.",
    open: false
  }
])

const toggleFAQ = (index) => {
  faqs.value[index].open = !faqs.value[index].open
}

onMounted(() => {
  fetchTokenPrices()
})
</script>

<style>
input {
  color: #9fa1ad;
  background-color: transparent;
  -webkit-text-fill-color: #9fa1ad;
}
</style>