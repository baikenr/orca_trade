<script setup lang="ts">
</script>

<template>
  <section class="w-full border-b border-white/10">
    <div
      class="w-full flex flex-col sm:flex-row sm:gap-4
             justify-between items-center sm:items-stretch"
    >
      <div class="flex flex-col gap-2 w-full sm:w-72 justify-start">
        <div
        class="flex flex-nowrap shrink-0 items-center justify-center
                px-2 py-0.5 max-w-16 pl-1.5
                rounded text-xs font-semibold italic
                text-[#FFC83D]
                bg-[#6B4114]" style="border: 1px solid #FFC83D !important">
        PREMIER
        </div>

        <h2 class="text-2xl font-semibold text-white">
          Premier Launches
        </h2>

        <p class="text-sm font-normal text-[#8F9BAD]">
        We partner with large, engaged communities to launch meaningful crypto projects.
        </p>
        <a
          href="https://form.typeform.com/to/UbuDIIDN"
          target="_blank"
          rel="noreferrer noopener"
          class="inline-flex items-center gap-1
                 h-8 w-32 justify-start
                 text-sm font-medium
                 text-yellow-300
                 rounded-md
                 transition-all duration-300
                 active:scale-[0.99]
                 focus-visible:outline-none
                 focus-visible:ring-1
                 focus-visible:ring-yellow-400/70
                 hover:text-yellow-200"
        >
          <span class="text-[#FFC838] font-semibold">Apply Now</span>
          <svg
            aria-hidden="true"
            focusable="false"
            class="w-4 h-4"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <path
              d="M6.22 3.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L9.94 8 6.22 4.28a.75.75 0 0 1 0-1.06Z"
            />
          </svg>
        </a>
      </div>
      <div
        class="flex flex-col gap-1 grow w-full
               bg-[#1B1C24] rounded-lg
               justify-center items-center
               py-5 sm:py-0 overflow-hidden"
      >
        <div class="text-base font-medium text-[#9FA1AD]">
          No Active Premier Launches
        </div>
        <div class="text-sm text-gray-500">
          More launches coming soon
        </div>
      </div>
    </div>
  </section>
</template>
