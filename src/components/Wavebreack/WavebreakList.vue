<script setup lang="ts">
const props = defineProps<{
  activeFilter: "all" | "favorites" | "history";
  sortLabel: string;
  filterCount: number;
}>();

const emit = defineEmits<{
  (e: "openFilter"): void;
  (e: "selectAll"): void;
  (e: "toggleFavorites"): void;
  (e: "toggleHistory"): void;
  (e: "toggleSort"): void;
}>();

const buttonBase =
  "justify-center whitespace-nowrap rounded-md transition-all duration-300 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 disabled:cursor-not-allowed bg-[#31343F] text-gray-100 hover:bg-[#474B5C] active:bg-[#2b3040] disabled:bg-[#1d2027]/60 disabled:text-gray-500";
</script>

<template>
  <section class="w-full border-b border-white/5 pt-6 pb-4">
    <div class="flex justify-between items-center md:px-0 gap-2">

      <!-- LEFT BUTTON — All Tokens -->
      <button
        type="button"
        @click="emit('selectAll')"
        :class="[
          buttonBase,
          'py-1 flex flex-row h-10 text-base font-medium px-3 items-center gap-2',
          props.activeFilter === 'all' ? '' : ''
        ]"
      >
        <span>All Tokens</span>
        <svg class="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
          <path
            d="M12.78 5.22a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L3.22 6.28a.75.75 0 1 1 1.06-1.06L8 8.94l3.72-3.72a.75.75 0 0 1 1.06 0Z"
          />
        </svg>
      </button>

      <!-- RIGHT BUTTONS -->
      <div class="flex flex-row gap-1 sm:gap-3 items-center justify-end">

        <!-- FAVORITES ❤️ -->
        <button
          type="button"
          @click="emit('toggleFavorites')"
          :class="[
            buttonBase,
            'items-center whitespace-nowrap text-base font-medium h-10 w-10 p-2 flex justify-center',
            props.activeFilter === 'favorites' ? 'ring-1 ring-yellow-400/40' : ''
          ]"
        >
          <svg
            class="w-4 h-4 mx-auto"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="M7.655 14.916v-.001h-.002l-.006-.003-.018-.01a22.066 22.066 0 0 1-3.744-2.584C2.045 10.731 0 8.35 0 5.5 0 2.836 2.086 1 4.25 1 5.797 1 7.153 1.802 8 3.02 8.847 1.802 10.203 1 11.75 1 13.914 1 16 2.836 16 5.5c0 2.85-2.044 5.231-3.886 6.818a22.094 22.094 0 0 1-3.433 2.414 7.152 7.152 0 0 1-.31.17l-.018.01-.008.004a.75.75 0 0 1-.69 0Z"/>
          </svg>
        </button>

        <!-- HISTORY ⏱ -->
        <button
          type="button"
          @click="emit('toggleHistory')"
          :class="[
            buttonBase,
            'items-center whitespace-nowrap text-base font-medium h-10 w-10 p-2 flex justify-center',
            props.activeFilter === 'history' ? 'ring-1 ring-yellow-400/40' : ''
          ]"
        >
          <svg
            class="w-4 h-4 mx-auto"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75 0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896 6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1 .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7 8.25v-3.5A.75.75 0 0 1 7.75 4Z"/>
          </svg>
        </button>

        <!-- FILTER -->
        <button
          type="button"
          @click="emit('openFilter')"
          :class="[
            buttonBase,
            'justify-center whitespace-nowrap rounded-md text-base font-medium h-10 min-w-10 px-3 shrink-0 flex gap-x-1 items-center',
            props.filterCount ? 'ring-1 ring-yellow-400/40' : ''
          ]"
        >
          <svg class="h-5 w-5" viewBox="0 0 16 16" fill="none">
            <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"
              d="M15 3.16v.27a1.2 1.2 0 0 1-.36.84l-4.23 4.02a.8.8 0 0 0-.24.56v3.99A1.14 1.14 0 0 1 9 14H7.05A1.14 1.14 0 0 1 5.88 12.84V8.86a.8.8 0 0 0-.24-.57L1.36 4.27A1.2 1.2 0 0 1 1 3.43V3.16C1 2.52 1.52 2 2.17 2h11.66C14.48 2 15 2.52 15 3.16Z"/>
          </svg>
          <span v-if="props.filterCount" class="text-xs text-gray-300">
            {{ props.filterCount }}
          </span>
        </button>

        <!-- SORT -->
        <button
          type="button"
          @click="emit('toggleSort')"
          :class="[
            buttonBase,
            'justify-center whitespace-nowrap py-1 gap-x-1.5 flex flex-row h-10 text-base font-medium px-3 items-center'
          ]"
        >
          <svg class="h-4 w-4 rotate-90" viewBox="0 0 16 16" fill="currentColor">
            <path d="M5.22 14.78a.75.75 0 0 0 1.06-1.06L4.56 12h8.69a.75.75 0 0 0 0-1.5H4.56l1.72-1.72a.75.75 0 0 0-1.06-1.06l-3 3a.75.75 0 0 0 0 1.06l3 3Zm5.56-6.5a.75.75 0 1 1-1.06-1.06l1.72-1.72H2.75a.75.75 0 0 1 0-1.5h8.69L9.72 2.28a.75.75 0 0 1 1.06-1.06l3 3a.75.75 0 0 1 0 1.06l-3 3Z"/>
          </svg>

          <span>{{ props.sortLabel }}</span>

          <svg class="h-4 w-4 hidden md:block" viewBox="0 0 16 16" fill="currentColor">
            <path d="M12.78 5.22a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L3.22 6.28a.75.75 0 1 1 1.06-1.06L8 8.94l3.72-3.72a.75.75 0 0 1 1.06 0Z"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
