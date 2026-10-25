<script setup>
import { ArrowUpRight } from "lucide-vue-next";
defineProps({ program: { type: Object, required: true }, index: Number });
</script>
<template>
  <RouterLink
    :to="`/programs/${program.id}`"
    class="program-card"
    :style="{ '--accent': program.color, '--pale': program.pale }"
    ><div class="program-card-top">
      <span class="eyebrow">{{ program.code }}</span
      ><ArrowUpRight :size="22" />
    </div>
    <div class="program-art">
      <img
        :src="program.image"
        :alt="`${program.code} student organization logo`"
        loading="lazy"
        width="300"
        height="300"
      />
    </div>
    <h3>{{ program.name }}</h3>
    <p>{{ program.short }}</p>
    <span class="card-bottom">Explore program <ArrowUpRight :size="18" /></span
  ></RouterLink>
</template>
