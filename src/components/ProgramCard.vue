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
    <div class="program-art" aria-hidden="true">
      <span>{{ program.symbol }}</span
      ><i></i>
    </div>
    <h3>{{ program.name }}</h3>
    <p>{{ program.short }}</p>
    <span class="card-bottom">Explore program <ArrowUpRight :size="18" /></span
  ></RouterLink>
</template>
