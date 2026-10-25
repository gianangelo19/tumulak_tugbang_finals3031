<script setup>
import { computed } from "vue";
import { ArrowUpRight, Check, ArrowLeft } from "lucide-vue-next";
import { programs, people } from "../data/content";
import FacultyCard from "../components/FacultyCard.vue";
import {
  educationalObjectives,
  generalOutcomes,
} from "../data/program-details";
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
        <img
          class="program-poster-logo"
          :src="program.image"
          :alt="`${program.code} student organization logo`"
          width="400"
          height="400"
        />
        <div class="program-poster-caption">
          <strong>{{ program.code }}</strong
          ><span>CREATE YOUR NEXT CHAPTER</span>
        </div>
      </div>
    </section>
    <nav class="section-nav" aria-label="Program sections">
      <RouterLink
        v-for="[anchor, label] in [
          ['overview', 'Overview'],
          ['study', 'Curriculum'],
          ['outcomes', 'Graduate outcomes'],
          ['organization', 'Student organization'],
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
        
      </div>
    </section>
    <section id="objectives" class="container section no-top two-column">
      <div>
        <p class="eyebrow">PROGRAM EDUCATIONAL OBJECTIVES</p>
        <h2>Learning with a wider purpose.</h2>
        
        <ol class="program-detail-list">
          <li v-for="objective in educationalObjectives" :key="objective">
            {{ objective }}
          </li>
        </ol>
      </div>
      <div>
        <p class="eyebrow">GENERAL PROGRAM OUTCOMES</p>
        <h2>Beyond technical skills.</h2>
        <ul class="program-detail-list">
          <li v-for="outcome in generalOutcomes" :key="outcome">
            {{ outcome }}
          </li>
        </ul>
      </div>
    </section>
    <section id="study" class="program-learning section">
      <div class="container">
        <p class="eyebrow">CURRICULUM HIGHLIGHTS</p>
        <h2>Turn curiosity into capability.</h2>
        <div class="curriculum-detail-grid">
          <article>
            <h3>Curriculum rationale</h3>
            <p>{{ program.rationale }}</p>
          </article>
          <article>
            <h3>Curriculum description</h3>
            <p>{{ program.curriculum }}</p>
            <span class="curriculum-date">{{ program.curriculumDate }}</span>
          </article>
        </div>
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
        
      </div>
    </section>
    <section id="outcomes" class="container section">
      <div class="section-heading">
        <div>
          <p class="eyebrow">GRADUATE OUTCOMES</p>
          <h2>What you’re working toward.</h2>
        </div>
        
      </div>
      
      <ol class="graduate-outcomes">
        <li
          v-for="(outcome, index) in program.outcomes"
          :key="`${program.prefix}${index}`"
        >
          <span
            >{{ program.prefix }}{{ String(index + 1).padStart(2, "0") }}</span
          >
          <p>{{ outcome }}</p>
        </li>
      </ol>
    </section>
    <section id="organization" class="program-organization section">
      <div class="container organization-layout">
        <img
          :src="program.image"
          :alt="program.organization.name + ' logo'"
          width="260"
          height="260"
          loading="lazy"
        />
        <div>
          <p class="eyebrow">STUDENT ORGANIZATION</p>
          <h2>{{ program.organization.name }}</h2>
          <p class="lead">{{ program.organization.description }}</p>
          
        </div>
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
