<script setup>
defineProps({ eyebrow: String, title: String, description: String });
</script>
<template>
  <section class="page-intro container">
    <p class="eyebrow">{{ eyebrow }}</p>
    <h1>{{ title }}</h1>
    <p class="lead">{{ description }}</p>
    <span class="intro-star" aria-hidden="true">✳</span>
  </section>
</template>
