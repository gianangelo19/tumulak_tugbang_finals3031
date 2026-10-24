<script setup>
import { programs } from "../data/content";
import PageIntro from "../components/PageIntro.vue";
import ProgramCard from "../components/ProgramCard.vue";
</script>
<template>
  <PageIntro
    eyebrow="ACADEMIC PROGRAMS"
    title="Find what moves you."
    description="Four disciplines. Shared curiosity. Explore the path that brings your interests and ambitions together."
  />
  <section class="container section no-top">
    <div class="program-grid">
      <ProgramCard v-for="p in programs" :key="p.id" :program="p" />
    </div>
    <div class="help-panel">
      <div>
        <h2>Still exploring?</h2>
        <p>
          Talk to the college about programs, curriculum, and the next steps for
          admission.
        </p>
      </div>
      <RouterLink class="button navy" to="/contact"
        >Ask us a question ↗</RouterLink
      >
    </div>
  </section>
</template>
