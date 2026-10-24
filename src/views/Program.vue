<script setup>
import { computed } from "vue";
import { ArrowUpRight, Check, ArrowLeft } from "lucide-vue-next";
import { programs, people } from "../data/content";
import FacultyCard from "../components/FacultyCard.vue";
const props = defineProps({ id: String });
const program = computed(() => programs.find((p) => p.id === props.id));
const faculty = computed(() =>
  people.filter((p) => p.programs.includes(program.value.code)),
);
</script>
<template>
  <div
    :key="id"
    class="program-page"
    :style="{ '--accent': program.color, '--pale': program.pale }"
  >
    <section class="program-hero container">
      <div>
        <RouterLink to="/programs" class="back-link"
          ><ArrowLeft :size="15" /> All programs</RouterLink
        >
        <p class="eyebrow">{{ program.code }} · UNDERGRADUATE PROGRAM</p>
        <h1>{{ program.tagline }}</h1>
        <p class="program-full-name">{{ program.fullName }}</p>
        <RouterLink to="/contact" class="button navy"
          >Ask about {{ program.code }} <ArrowUpRight :size="18"
        /></RouterLink>
      </div>
      <div class="program-poster">
        <span class="poster-orbit" aria-hidden="true"></span
        ><span class="poster-symbol" aria-hidden="true">{{
          program.symbol
        }}</span
        ><img
          :src="program.image"
          :alt="`${program.code} student organization emblem`"
        /><span>{{ program.code }}<small>CREATE YOUR NEXT CHAPTER</small></span>
      </div>
    </section>
    <nav class="section-nav" aria-label="Program sections">
      <RouterLink
        v-for="[anchor, label] in [
          ['overview', 'Overview'],
          ['study', 'What you’ll learn'],
          ['careers', 'Career paths'],
          ['people', 'Our people'],
        ]"
        :key="anchor"
        :to="{ hash: `#${anchor}` }"
        >{{ label }}</RouterLink
      >
    </nav>
    <section id="overview" class="container section two-column">
      <div>
        <p class="eyebrow">PROGRAM OVERVIEW</p>
        <h2>{{ program.areasLabel }}</h2>
        <p class="lead">{{ program.summary }}</p>
      </div>
      <div>
        <h3>Your learning goals</h3>
        <ul class="check-list">
          <li v-for="goal in program.objectives" :key="goal">
            <Check :size="19" />{{ goal }}
          </li>
        </ul>
        <p class="source-note">
          A concise guide to the published program outcomes.
        </p>
      </div>
    </section>
    <section id="study" class="program-learning section">
      <div class="container">
        <p class="eyebrow">CURRICULUM HIGHLIGHTS</p>
        <h2>Turn curiosity into capability.</h2>
        <div class="learning-grid">
          <article v-for="(item, i) in program.highlights" :key="item[0]">
            <span class="number">0{{ i + 1 }}</span>
            <h3>{{ item[0] }}</h3>
            <p>{{ item[1] }}</p>
          </article>
        </div>
        <h3>Areas you’ll explore</h3>
        <div class="topic-list">
          <span v-for="area in program.areas" :key="area">{{ area }}</span>
        </div>
        <p class="source-note">
          Topic highlights from the published CCS program information, not a
          current semester-by-semester checklist.
          <a :href="program.source" target="_blank" rel="noopener"
            >View official program source ↗</a
          >
          · Contact the college for the latest curriculum.
        </p>
      </div>
    </section>
    <section id="careers" class="container section two-column">
      <div>
        <p class="eyebrow">LOOKING AHEAD</p>
        <h2>Where could this<br />take you?</h2>
        <p>
          Explore possible career directions connected to your field. Your
          interests, further training, and professional requirements will shape
          your path.
        </p>
      </div>
      <ul class="career-list">
        <li v-for="career in program.careers" :key="career">
          {{ career }}<ArrowUpRight :size="20" />
        </li>
      </ul>
    </section>
    <section id="people" class="container section no-top">
      <div class="section-heading">
        <div>
          <p class="eyebrow">THE PEOPLE BEHIND THE PROGRAM</p>
          <h2>Meet your {{ program.code }} community.</h2>
        </div>
        <RouterLink class="text-link" to="/faculty"
          >Full directory <ArrowUpRight :size="18"
        /></RouterLink>
      </div>
      <p class="source-note directory-note">
        Program associations from the published CCS directory. Current
        appointments and teaching assignments should be confirmed with the
        college.
      </p>
      <div class="faculty-grid">
        <FacultyCard
          v-for="person in faculty"
          :key="person.name"
          :person="person"
        />
      </div>
    </section>
  </div>
</template>
