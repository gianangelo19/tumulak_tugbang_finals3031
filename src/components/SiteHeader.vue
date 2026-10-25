<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { Menu, X, ArrowUpRight } from "lucide-vue-next";
const route = useRoute();
const open = ref(false);
function skipToContent() {
  document.getElementById("main-content")?.focus();
  document.getElementById("main-content")?.scrollIntoView();
}
watch(
  () => route.fullPath,
  () => {
    open.value = false;
  },
);
const links = [
  ["/about", "About Our College"],
  ["/programs", "Programs"],
  ["/faculty", "Faculty and Staff"],
  ["/news", "News & Events"],
];
</script>
<template>
  <a class="skip-link" href="#main-content" @click.prevent="skipToContent"
    >Skip to content</a
  >
  <div class="utility-bar">
    <span
      >Central Philippine University
      <span class="utility-location">/ Iloilo City, Philippines</span></span
    ><a href="https://cpu.edu.ph/" target="_blank" rel="noopener"
      >Visit CPU <ArrowUpRight :size="12"
    /></a>
  </div>
  <header class="site-header" @keydown.esc="open = false">
    <RouterLink to="/" class="brand" aria-label="CCS home"
      ><img src="/images/ccs-logo.png" alt="" width="52" height="52" /><span
        >College of<br /><strong>Computer Studies</strong></span
      ></RouterLink
    >
    <button
      class="menu-toggle"
      :aria-expanded="open"
      aria-controls="main-nav"
      :aria-label="open ? 'Close navigation' : 'Open navigation'"
      @click="open = !open"
    >
      <X v-if="open" /><Menu v-else />
    </button>
    <nav id="main-nav" :class="{ open }" aria-label="Main navigation">
      <RouterLink v-for="[path, label] in links" :key="path" :to="path">{{
        label
      }}</RouterLink
      ><RouterLink to="/contact" class="button small gold"
        >Let’s connect <ArrowUpRight :size="16"
      /></RouterLink>
    </nav>
  </header>
</template>
