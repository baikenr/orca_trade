<template>
  <footer class="border-t border-[#222222] bg-[#1B1C24] py-2">
    <div class="mx-auto flex items-center justify-between px-4">
      <div class="flex items-center gap-6">
        <a 
          href="#" 
          class="text-[12px] text-[#8C99AB] transition-colors hover:text-white"
        >
          Careers
        </a>

        <button 
          class="flex items-center gap-1 text-[12px] text-[#8C99AB] transition-colors hover:text-white"
        >
          Legal
          <ChevronDown class="h-3 w-3 text-[#8C99AB] hover:text-white" />
        </button>
      </div>

      <div class="flex items-center gap-6">
        <button 
          class="flex items-center gap-2 text-[12px] text-[#8C99AB] transition-colors hover:text-white"
        >
          <svg class="h-4 w-4 text-[#8C99AB]" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
            <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
          </svg>
          Support
        </button>

        <p class="text-white text-[12px] font-bold]">
            US
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ChevronDown } from "lucide-vue-next";
</script>
