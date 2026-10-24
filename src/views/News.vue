<script setup>
import { ref, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Search, ArrowLeft } from "lucide-vue-next";
import { news, formatDate } from "../data/content";
import PageIntro from "../components/PageIntro.vue";
import NewsCard from "../components/NewsCard.vue";
const route = useRoute(),
  router = useRouter();
const query = ref(""),
  selected = ref("All");
const categories = ["All", "Community", "Achievements", "Alumni"];
const filtered = computed(() =>
  news.filter(
    (a) =>
      (selected.value === "All" || a.category === selected.value) &&
      `${a.title} ${a.summary}`
        .toLowerCase()
        .includes(query.value.trim().toLowerCase()),
  ),
);
const story = computed(() => news.find((a) => a.id === route.query.story));
</script>
<template>
  <template v-if="story"
    ><article class="container section story">
      <RouterLink to="/news" class="back-link"
        ><ArrowLeft :size="16" /> All news & events</RouterLink
      >
      <p class="eyebrow">{{ story.category }} · ARCHIVE</p>
      <h1>{{ story.title }}</h1>
      <p class="news-date">{{ formatDate(story.date) }}</p>
      <img class="story-image" :src="story.image" :alt="story.alt" />
      <p class="lead">{{ story.summary }}</p>
      <p>{{ story.body }}</p>
      <a class="button navy" :href="story.source" target="_blank" rel="noopener"
        >Read original CCS announcement ↗</a
      >
      <p class="source-note">
        Archived story. Dates and details refer to the original announcement.
      </p>
    </article></template
  ><template v-else
    ><PageIntro
      eyebrow="NEWS, EVENTS & ANNOUNCEMENTS"
      title="A community with a story to tell."
      description="Discover moments of achievement, connection, and service from the College of Computer Studies."
    />
    <section class="container section no-top">
      <div class="archive-notice">
        <strong>From the CCS archive</strong>
        <p>
          These stories retain their original 2021 dates. For current
          announcements and upcoming events,
          <a href="https://ccs.cpu.edu.ph/" target="_blank" rel="noopener"
            >visit the official CCS website ↗</a
          >
          or contact the college.
        </p>
      </div>
      <p v-if="route.query.story" role="status">
        That story is unavailable. Browse the archive below.
      </p>
      <div class="directory-toolbar">
        <div class="filter-row">
          <button
            v-for="category in categories"
            :key="category"
            :aria-pressed="selected === category"
            :class="{ active: selected === category }"
            @click="selected = category"
          >
            {{ category }}
          </button>
        </div>
        <label class="search-box"
          ><Search :size="18" /><span class="sr-only">Search stories</span
          ><input v-model="query" type="search" placeholder="Search stories…"
        /></label>
      </div>
      <p class="source-note" aria-live="polite">
        {{ filtered.length }} stories
      </p>
      <div class="news-grid">
        <NewsCard
          v-for="article in filtered"
          :key="article.id"
          :article="article"
        />
      </div>
      <div v-if="!filtered.length" class="empty-state">
        <h2>No stories found</h2>
        <p>Try a different keyword or category.</p>
        <button
          class="button navy"
          @click="
            query = '';
            selected = 'All';
          "
        >
          Reset filters
        </button>
      </div>
      <div class="help-panel">
        <div>
          <p class="eyebrow">PLANNING A VISIT?</p>
          <h2>Keep in touch with the college.</h2>
          <p>Ask us about upcoming activities and announcements.</p>
        </div>
        <RouterLink class="button navy" to="/contact">Contact CCS ↗</RouterLink>
      </div>
    </section></template
  >
</template>
