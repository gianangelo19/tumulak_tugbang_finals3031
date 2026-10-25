<script setup>
import { ref } from "vue";
import { ArrowLeft, ArrowRight } from "lucide-vue-next";
import { history, historyClosing } from "../data/history";
const track = ref(null);
const atStart = ref(true);
const atEnd = ref(false);
function updatePosition() {
  const el = track.value;
  atStart.value = el.scrollLeft < 2;
  atEnd.value = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
}
function move(direction) {
  const el = track.value;
  const distance = el.querySelector("li").getBoundingClientRect().width + 24;
  el.scrollBy({ left: direction * distance, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
}
function onKey(event) {
  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    event.preventDefault();
    move(event.key === "ArrowRight" ? 1 : -1);
  }
  if (event.key === "Home" || event.key === "End") {
    event.preventDefault();
    track.value.scrollTo({ left: event.key === "Home" ? 0 : track.value.scrollWidth, behavior: "instant" });
  }
}
</script>
<template>
  <section id="history" class="history-section section" aria-labelledby="history-heading">
    <div class="container">
      <div class="history-heading">
        <p class="eyebrow">HERITAGE & MILESTONES</p>
        <h2 id="history-heading">College History</h2>
        <span class="history-heading-rule" aria-hidden="true"></span>
      </div>
      <div class="history-toolbar">
        <p id="history-help">Scroll or swipe from left to right to explore our history.</p>
        <div class="history-controls">
          <button type="button" aria-label="Previous history milestone" aria-controls="history-track" :disabled="atStart" @click="move(-1)"><ArrowLeft :size="20" /></button>
          <button type="button" aria-label="Next history milestone" aria-controls="history-track" :disabled="atEnd" @click="move(1)"><ArrowRight :size="20" /></button>
        </div>
      </div>
      <div id="history-track" ref="track" class="history-track" tabindex="0" role="region" aria-label="College history timeline" aria-describedby="history-help" @scroll="updatePosition" @keydown="onKey">
        <ol class="history-milestones">
          <li v-for="entry in history" :key="entry.year" class="history-milestone">
            <div class="history-year"><span>{{ entry.year }}</span></div>
            <article class="history-card">
              <h3>{{ entry.title }}</h3>
              <p>{{ entry.text }}</p>
              <p v-if="entry.continuation">{{ entry.continuation }}</p>
            </article>
          </li>
        </ol>
      </div>
      <div class="history-closing"><p v-for="paragraph in historyClosing" :key="paragraph">{{ paragraph }}</p></div>
    </div>
  </section>
</template>
