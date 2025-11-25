<script setup lang="ts">
import { computed, ref } from "vue";
import WavebreakTopBar from "./Wavebreack/WavebreakTopBar.vue";
import WavebreakBanner from "./Wavebreack/WavebreakBanner.vue";
import WavebreakList from "./Wavebreack/WavebreakList.vue";
import WavebreakCard from "./Wavebreack/WavebreakCard.vue";

import Avatar from "@/assets/cardIcons/Avatar.jpeg";
import Usdt from "@/assets/cardIcons/usdt.png";
import Dino from "@/assets/cardIcons/dino.png";
import Orca from "@/assets/cardIcons/orca.jpg";
import Mifa from "@/assets/cardIcons/mifa.jpg";
import Xorca from "@/assets/cardIcons/xorca.png";
import Happiness from "@/assets/cardIcons/happiness.png";
import Solshiba from "@/assets/cardIcons/solshiba.png";
import Chirp from "@/assets/cardIcons/chirp.png";
import Hope from "@/assets/cardIcons/hope.png";
import Ormb from "@/assets/cardIcons/ormb.jpg";
import Team915 from "@/assets/cardIcons/team_915.png";
import WorldPeace from "@/assets/cardIcons/world_peace.png";
import Sol from "@/assets/cardIcons/sol.jpg";
import Solx from "@/assets/cardIcons/solx.jpg";

type TokenCategory =
  | "stablecoin"
  | "meme"
  | "defi"
  | "community"
  | "infrastructure"
  | "dex"
  | "charity";

type TokenCard = {
  id: number;
  avatar: string;
  title: string;
  subtitle: string;
  address: string;
  description: string;
  daysAgo: string;
  bondingPercent: number;
  marketCap: string;
  listedDays: number;
  tags: TokenCategory[];
  isFavorite?: boolean;
  lastInteractionDays?: number;
};

const initialTokens: TokenCard[] = [
  {
    id: 1,
    avatar: Usdt,
    title: "USDT",
    subtitle: "USD Tether",
    address: "HXR2...wave",
    description:
      "Tether tokens are the most widely adopted stablecoins, having pioneered the concept in the digital token space.",
    daysAgo: "2d ago",
    bondingPercent: 1,
    marketCap: "$83.5B",
    listedDays: 2,
    tags: ["stablecoin", "defi"],
    isFavorite: false,
    lastInteractionDays: 1,
  },
  {
    id: 2,
    avatar: Dino,
    title: "DINO",
    subtitle: "DINO ON SOL",
    address: "H45e...wave",
    description: "$DINO PRESALE",
    daysAgo: "1d ago",
    bondingPercent: 1,
    marketCap: "$1.2M",
    listedDays: 1,
    tags: ["meme", "community"],
    lastInteractionDays: 1,
  },
  {
    id: 3,
    avatar: Orca,
    title: "ORCA",
    subtitle: "Orca",
    address: "BhzH...wave",
    description: "mc",
    daysAgo: "3d ago",
    bondingPercent: 1,
    marketCap: "$180M",
    listedDays: 3,
    tags: ["defi", "dex"],
    isFavorite: false,
    lastInteractionDays: 5,
  },
  {
    id: 4,
    avatar: Mifa,
    title: "MFA",
    subtitle: "MIFA",
    address: "6GDM...wave",
    description:
      "MIFA is a community-driven Solana token designed to reshape the way we interact, create, and engage online. In the early days of the internet, creativity, collaboration, and culture thrived freely — MIFA aims to bring that energy back to the modern digital.",
    daysAgo: "5d ago",
    bondingPercent: 1,
    marketCap: "$650k",
    listedDays: 5,
    tags: ["community"],
  },
  {
    id: 5,
    avatar: Xorca,
    title: "xORCA",
    subtitle: "xORCA",
    address: "PiFL...wave",
    description: "No description available",
    daysAgo: "4d ago",
    bondingPercent: 1,
    marketCap: "$42M",
    listedDays: 4,
    tags: ["defi"],
    lastInteractionDays: 2,
  },
  {
    id: 6,
    avatar: Happiness,
    title: "HAPPINESS",
    subtitle: "HAPPY",
    address: "Fnzh...wave",
    description: "Spread Happinesss",
    daysAgo: "6d ago",
    bondingPercent: 1,
    marketCap: "$210k",
    listedDays: 6,
    tags: ["community"],
  },
  {
    id: 7,
    avatar: Solshiba,
    title: "SOLSHIBA",
    subtitle: "SolShib",
    address: "Dsw2...wave",
    description: "hiba in versa solana, bringing nostalgia and hype",
    daysAgo: "1d ago",
    bondingPercent: 1,
    marketCap: "$95k",
    listedDays: 1,
    tags: ["meme"],
    lastInteractionDays: 2,
  },
  {
    id: 8,
    avatar: Chirp,
    title: "CHIRP",
    subtitle: "CHIRP TOKEN",
    address: "4cyB...wave",
    description:
      "Chirp is a project at the forefront of the DePIN (Decentralized physical infrastructure) movement, revolutionizing the world of wireless connectivity. As a leader in DeWi (decentralized wireless), Chirp offers a wide array of connectivity options.",
    daysAgo: "3d ago",
    bondingPercent: 1,
    marketCap: "$8.7M",
    listedDays: 3,
    tags: ["infrastructure"],
    isFavorite: false,
    lastInteractionDays: 1,
  },
  {
    id: 9,
    avatar: Hope,
    title: "HP",
    subtitle: "HOPE",
    address: "BQRi...wave",
    description:
      "Hope is a meme coin , hope is a coin for people hoping 🙏🙏🙏 to regain their losses",
    daysAgo: "2d ago",
    bondingPercent: 1,
    marketCap: "$45k",
    listedDays: 2,
    tags: ["charity", "community"],
  },
  {
    id: 10,
    avatar: Ormb,
    title: "ORMB",
    subtitle: "ORMB",
    address: "2gsv...wave",
    description: "No description available",
    daysAgo: "5d ago",
    bondingPercent: 1,
    marketCap: "$120k",
    listedDays: 5,
    tags: ["defi"],
    lastInteractionDays: 7,
  },
  {
    id: 11,
    avatar: Team915,
    title: "T915",
    subtitle: "Team 915 - 3D Studio Creative",
    address: "CEPR...wave",
    description: "Token for a fan of team915 creative 3D Studio",
    daysAgo: "4d ago",
    bondingPercent: 1,
    marketCap: "$3.97k",
    listedDays: 4,
    tags: ["community"],
  },
  {
    id: 12,
    avatar: WorldPeace,
    title: "PEACE",
    subtitle: "World Peace",
    address: "5euh...wave",
    description: "No description available",
    daysAgo: "7d ago",
    bondingPercent: 1,
    marketCap: "$28k",
    listedDays: 7,
    tags: ["charity"],
  },
  {
    id: 13,
    avatar: Sol,
    title: "SOL HIGH",
    subtitle: "SOL HIGH-SPEED",
    address: "Ccnt...wave",
    description:
      "Solana Upgrade Proposal. The latest Solana upgrade proposal, introduced by Jump Crypto’s Firedancer team, aims to scrap the fixed compute unit block limits. Validator performance will dictate throughput, rather than a protocol-specific ceiling.",
    daysAgo: "1d ago",
    bondingPercent: 1,
    marketCap: "$78B",
    listedDays: 1,
    tags: ["infrastructure"],
    isFavorite: false,
  },
  {
    id: 14,
    avatar: Avatar,
    title: "Ergol",
    subtitle: "BoresErgol",
    address: "BX1U...wave",
    description: "My token yes good",
    daysAgo: "7d ago",
    bondingPercent: 1,
    marketCap: "$3.92k",
    listedDays: 7,
    tags: ["meme"],
  },
  {
    id: 15,
    avatar: Solx,
    title: "Solaxy",
    subtitle: "Solx",
    address: "2maM...wave",
    description: "Let Solaxy beam you up to something better. 🛸",
    daysAgo: "8d ago",
    bondingPercent: 1,
    marketCap: "$4.05k",
    listedDays: 8,
    tags: ["infrastructure"],
  },
];

const tokenList = ref<TokenCard[]>(initialTokens.map((token) => ({ ...token })));

const categoryFilters: { label: string; value: TokenCategory }[] = [
  { label: "Stablecoins", value: "stablecoin" },
  { label: "Meme", value: "meme" },
  { label: "DeFi", value: "defi" },
  { label: "Community", value: "community" },
  { label: "Infrastructure", value: "infrastructure" },
  { label: "DEX", value: "dex" },
  { label: "Charity", value: "charity" },
];

type QuickFilter = "all" | "favorites" | "history";
type SortDirection = "newest" | "oldest";

const searchQuery = ref("");
const activeQuickFilter = ref<QuickFilter>("all");
const sortDirection = ref<SortDirection>("newest");
const selectedTags = ref<TokenCategory[]>([]);
const isFilterPanelOpen = ref(false);

const sortLabel = computed(() =>
  sortDirection.value === "newest" ? "Newest" : "Oldest"
);

const filteredTokens = computed(() => {
  let result = [...tokenList.value];
  const query = searchQuery.value.trim().toLowerCase();

  if (query) {
    result = result.filter((token) => {
      const haystack = [
        token.title,
        token.subtitle,
        token.address,
        token.description,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }

  if (activeQuickFilter.value === "favorites") {
    result = result.filter((token) => token.isFavorite);
  } else if (activeQuickFilter.value === "history") {
    result = result.filter(
      (token) => (token.lastInteractionDays ?? Infinity) <= 3
    );
  }

  if (selectedTags.value.length) {
    result = result.filter((token) =>
      token.tags.some((tag) => selectedTags.value.includes(tag))
    );
  }

  result.sort((a, b) => {
    if (sortDirection.value === "newest") {
      return a.listedDays - b.listedDays;
    }
    return b.listedDays - a.listedDays;
  });

  return result;
});

const hasActiveFilters = computed(
  () => selectedTags.value.length > 0 || activeQuickFilter.value !== "all"
);

const toggleSort = () => {
  sortDirection.value = sortDirection.value === "newest" ? "oldest" : "newest";
};

const selectAll = () => {
  activeQuickFilter.value = "all";
};

const toggleFavorites = () => {
  activeQuickFilter.value =
    activeQuickFilter.value === "favorites" ? "all" : "favorites";
};

const toggleHistory = () => {
  activeQuickFilter.value =
    activeQuickFilter.value === "history" ? "all" : "history";
};

const toggleFilterPanel = () => {
  isFilterPanelOpen.value = !isFilterPanelOpen.value;
};

const toggleCategory = (value: TokenCategory) => {
  selectedTags.value = selectedTags.value.includes(value)
    ? selectedTags.value.filter((tag) => tag !== value)
    : [...selectedTags.value, value];
};

const resetFilters = () => {
  selectedTags.value = [];
  activeQuickFilter.value = "all";
};

const closeFilters = () => {
  isFilterPanelOpen.value = false;
};

const toggleFavoriteCard = (tokenId: number) => {
  const target = tokenList.value.find((token) => token.id === tokenId);
  if (target) {
    target.isFavorite = !target.isFavorite;
  }
};
</script>

<template>
  <main class="w-full flex flex-col">
    <WavebreakTopBar v-model="searchQuery" />

    <div class="max-w-7xl mx-auto w-full p-4">
      <section class="w-full border-b border-white/5 py-4">
        <WavebreakBanner />
      </section>
      
      <hr class="w-full mt-4" style="border: 1px solid #31343F !important">

      <section class="w-full border-b border-white/5 pb-4">
        <WavebreakList
          :active-filter="activeQuickFilter"
          :sort-label="sortLabel"
          :filter-count="selectedTags.length"
          @select-all="selectAll"
          @toggle-favorites="toggleFavorites"
          @toggle-history="toggleHistory"
          @openFilter="toggleFilterPanel"
          @toggle-sort="toggleSort"
        />

        <transition name="fade">
          <div
            v-if="isFilterPanelOpen"
            class="mt-4 rounded-xl border border-white/5 bg-[#1B1C24] p-4"
          >
            <div class="flex items-center justify-between gap-2">
              <div>
                <p class="text-white font-semibold text-base">
                  Advanced filters
                </p>
                <p class="text-xs text-[#9FA1AD]">
                  Combine with quick filters to narrow the list.
                </p>
              </div>
              <button
                type="button"
                class="text-sm text-[#9FA1AD] hover:text-white"
                @click="closeFilters"
              >
                Close
              </button>
            </div>

            <div class="mt-4 flex flex-wrap gap-2">
              <button
                v-for="category in categoryFilters"
                :key="category.value"
                type="button"
                @click="toggleCategory(category.value)"
                :class="[
                  'px-3 py-1 rounded-full border text-sm transition',
                  selectedTags.includes(category.value)
                    ? 'bg-yellow-400/10 text-yellow-200 border-yellow-400/40'
                    : 'bg-[#252733] text-[#9FA1AD] border-white/5'
                ]"
              >
                {{ category.label }}
              </button>
            </div>

            <div class="mt-4 flex items-center justify-between">
              <button
                type="button"
                class="text-sm text-[#9FA1AD] hover:text-white"
                @click="resetFilters"
              >
                Reset filters
              </button>
              <span
                class="text-xs uppercase tracking-wide text-[#9FA1AD]"
                v-if="hasActiveFilters"
              >
                Filters applied
              </span>
            </div>
          </div>
        </transition>
      </section>

      <section class="w-full pt-1 pb-10">
        <div
          v-if="filteredTokens.length"
          class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <WavebreakCard
            v-for="token in filteredTokens"
            :key="token.id"
            :avatar="token.avatar"
            :title="token.title"
            :subtitle="token.subtitle"
            :address="token.address"
            :description="token.description"
            :days-ago="token.daysAgo"
            :bonding-percent="token.bondingPercent"
            :market-cap="token.marketCap"
            :is-favorite="token.isFavorite ?? false"
            @toggle-favorite="toggleFavoriteCard(token.id)"
          />
        </div>

        <div
          v-else
          class="flex flex-col items-center justify-center rounded-xl border border-white/5 bg-[#1B1C24] py-16 text-center"
        >
          <p class="text-white font-semibold text-lg">No tokens found</p>
          <p class="text-sm text-[#9FA1AD] max-w-md mt-2">
            Try changing the quick filters, clearing the search input or
            resetting the advanced filters panel.
          </p>
        </div>
      </section>
    </div>
  </main>
</template>
