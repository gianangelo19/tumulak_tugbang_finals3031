<script setup>
import { ArrowUpRight } from "lucide-vue-next";
import { formatDate } from "../data/content";
defineProps({ article: Object });
</script>
<template>
  <article class="news-card">
    <RouterLink
      :to="{ path: '/news', query: { story: article.id } }"
      class="news-image"
      :aria-label="article.title"
      ><img :src="article.image" :alt="article.alt" loading="lazy" /><span>{{
        article.category
      }}</span></RouterLink
    >
    <p class="news-date">{{ formatDate(article.date) }} · Archive</p>
    <h3>
      <RouterLink :to="{ path: '/news', query: { story: article.id } }">{{
        article.title
      }}</RouterLink>
    </h3>
    <p>{{ article.summary }}</p>
    <RouterLink
      class="text-link"
      :to="{ path: '/news', query: { story: article.id } }"
      >Read story <ArrowUpRight :size="17"
    /></RouterLink>
  </article>
</template>
