<script setup>
import { nextTick, watch } from "vue";
import { useRoute } from "vue-router";
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
const route = useRoute();
watch(
  () => route.path,
  async () => {
    await nextTick();
    document.querySelector("#main-content")?.focus({ preventScroll: true });
  },
);
</script>
<template>
  <SiteHeader />
  <main id="main-content" tabindex="-1"><RouterView /></main>
  <SiteFooter />
</template>
