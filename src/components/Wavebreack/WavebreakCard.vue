<script setup lang="ts">
import { computed } from "vue";
import DefaultAvatar from "@/assets/Avatar.jpeg";

const props = defineProps<{
  avatar?: string;
  title: string;
  subtitle: string;
  address: string;
  description: string;
  daysAgo: string;
  bondingPercent: number;
  marketCap: string;
  isFavorite?: boolean;
}>();

const emit = defineEmits<{
  (e: "toggleFavorite"): void;
}>();
const avatarSrc = computed(() => props.avatar || DefaultAvatar);

const heartClasses = computed(() =>
  [
    "h-4 w-4 cursor-pointer transition-colors",
    props.isFavorite ? "text-[#FFFA4C]" : "text-gray-300 hover:text-[#FFFA4C]",
  ].join(" ")
);
</script>

<template>
  <div
    class="bg-[#202129] hover:bg-[#282933] rounded-md p-4 flex flex-col gap-3
          border border-white/5 hover:border-white/5 transition cursor-pointer
          transform hover:scale-105 duration-100"
  >
    <div class="flex justify-between items-start">
      <div class="flex items-start gap-3">
        <img
          :src="avatarSrc"
          class="w-16 h-16 rounded-lg object-cover"
        />

        <div class="flex flex-col">
          <div class="text-lg font-semibold text-white">
            {{ title }}
          </div>
          <div class="text-sm text-[#9FA1AD]">
            {{ subtitle }}
          </div>
          <div
            class="text-xs bg-[#31343F] text-[#9FA1AD] px-2 py-1 rounded-md w-fit mt-1 flex items-center gap-1"
          >
            {{ address }}
            <svg class="h-3 w-3" viewBox="0 0 16 16" fill="currentColor">
              <path
                d="M4.75 2A1.75 1.75 0 0 0 3 3.75v6.5A1.75 1.75 0 0 0 4.75 12h4.5A1.75 1.75 0 0 0 11 10.25v-6.5A1.75 1.75 0 0 0 9.25 2h-4.5Z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div class="flex items-center gap-1">
        <div class="text-xs text-gray-400">
          {{ daysAgo }}
        </div>

        <button
          type="button"
          class="p-1 rounded-full hover:bg-white/5 transition"
          :aria-pressed="props.isFavorite"
          @click.stop="emit('toggleFavorite')"
        >
          <svg
            :class="heartClasses"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              d="M7.655 14.916a.75.75 0 0 0 .69 0 22.1 22.1 0 0 0 3.744-2.584C13.955 10.73 16
              8.35 16 5.5 16 2.836 13.914 1 11.75 1 10.203 1 8.847 1.802 8
              3.02 7.153 1.802 5.797 1 4.25 1 2.086 1 0 2.836 0
              5.5c0 2.85 2.045 5.23 3.887 6.818a22.1 22.1 0 0 0 3.768 2.598Z"
            />
          </svg>
        </button>
      </div>
    </div>

    <div
      class="text-sm text-[#9FA1AD] whitespace-nowrap overflow-hidden text-ellipsis"
    >
      {{ description }}
    </div>
    
    <div class="flex items-center gap-3 text-sm font-medium text-gray-200">
      Bonding {{ bondingPercent }}%

      <div class="flex-1 h-2 bg-[#31343F] rounded-full overflow-hidden">
        <div class="h-full bg-yellow-400 w-1 rounded-full"></div>
      </div>

      <div class="text-[#9FA1AD]">
        Market Cap
        <span class="text-[#F4F4F5] font-semibold">{{ marketCap }}</span>
      </div>
    </div>
  </div>
</template>
