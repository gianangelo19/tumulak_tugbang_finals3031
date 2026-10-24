<script setup>
import { ref } from "vue";
defineProps({ person: { type: Object, required: true } });
const imageError = ref(false);
</script>
<template>
  <article class="faculty-card">
    <div class="portrait">
      <img
        v-if="!imageError"
        :src="person.image"
        :alt="person.name"
        loading="lazy"
        @error="imageError = true"
      /><span v-else class="portrait-fallback" aria-hidden="true">{{
        person.name
          .split(" ")
          .map((n) => n[0])
          .slice(0, 2)
          .join("")
      }}</span>
    </div>
    <div>
      <p class="eyebrow">
        {{ person.programs.join(" / ") || "COLLEGE SUPPORT" }}
      </p>
      <h3>{{ person.name }}</h3>
      <p v-if="person.credentials" class="credentials">
        {{ person.credentials }}
      </p>
      <p>{{ person.role }}</p>
    </div>
  </article>
</template>
