<template>
  <RouterLink
    :to="to"
    custom
    v-slot="{ href, navigate, isActive, isExactActive, isPending }"
  >
    <a
      :href="href"
      @click="navigate"
      :class="computedClass(isActive, isPending)"
    >
      <slot />
    </a>
  </RouterLink>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  to: {
    type: [String, Object],
    required: true,
  },
  class: {
    type: String,
    default: "",
  },
  activeClass: {
    type: String,
    default: "",
  },
  pendingClass: {
    type: String,
    default: "",
  },
});

// аналог твоей функции `cn`
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function computedClass(isActive, isPending) {
  return cn(
    props.class,
    isActive && props.activeClass,
    isPending && props.pendingClass
  );
}
</script>
