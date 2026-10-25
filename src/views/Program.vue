<script setup>
import { computed } from "vue";
import { ArrowUpRight, ArrowLeft } from "lucide-vue-next";
import { programs } from "../data/content";
const props = defineProps({ id: String });
const program = computed(() => programs.find((p) => p.id === props.id));
const outcomeGroups = computed(() => program.value.programOutcomes.split(/(?=The graduates of BSCS)/).map(group => {
  const parts = group.split(/\s+[a-e]\)\s+/);
  return { introduction: parts[0], items: parts.slice(1) };
}));
const curriculumParts = computed(() => program.value.curriculum.split(/\s+–\s+/));
</script>
<template>
  <div :key="id" class="program-page" :style="{ '--accent': program.color, '--pale': program.pale }">
    <section class="program-hero container">
      <div>
        <RouterLink to="/programs" class="back-link"><ArrowLeft :size="15" /> All programs</RouterLink>
        <p class="eyebrow">{{ program.code }} · UNDERGRADUATE PROGRAM</p>
        <h1>{{ program.name }}</h1>
        <p class="program-full-name">{{ program.summary }}</p>
        <RouterLink to="/contact" class="button navy">Ask about {{ program.code }} <ArrowUpRight :size="18" /></RouterLink>
      </div>
      <div class="program-poster">
        <img class="program-poster-logo" :src="program.image" :alt="`${program.code} student organization logo`" width="400" height="400" />
        <div class="program-poster-caption"><strong>{{ program.code }}</strong></div>
      </div>
    </section>
    <nav class="section-nav" aria-label="Program sections">
      <RouterLink v-for="[anchor, label] in [['objectives', 'Educational objectives'], ['program-outcomes', 'Program outcomes'], ['study', 'Curriculum'], ['organization', 'Student organization'], ['outcomes', 'Graduate outcomes']]" :key="anchor" :to="{ hash: `#${anchor}` }">{{ label }}</RouterLink>
    </nav>
    <section id="objectives" class="container section program-document">
      <h2>Program Educational Objectives</h2>
      <ol class="program-detail-list"><li v-for="objective in program.objectives" :key="objective">{{ objective }}</li></ol>
    </section>
    <section id="program-outcomes" class="program-learning section">
      <div class="container program-document">
        <h2>Program Outcomes</h2>
        <div v-for="group in outcomeGroups" :key="group.introduction" class="program-outcome-group">
          <p class="lead">{{ group.introduction }}</p>
          <ol type="a" class="program-detail-list"><li v-for="item in group.items" :key="item">{{ item }}</li></ol>
        </div>
      </div>
    </section>
    <section id="study" class="container section program-document">
      <p class="curriculum-date">{{ program.curriculumDate }}</p>
      <h2>Curriculum Rationale</h2>
      <p class="program-document-copy">{{ program.rationale }}</p>
      <h2 class="curriculum-description-heading">Curriculum Description</h2>
      <p class="program-document-copy">{{ curriculumParts[0] }}</p>
      <ul v-if="curriculumParts.length > 1" class="program-detail-list"><li v-for="area in curriculumParts.slice(1)" :key="area">{{ area }}</li></ul>
    </section>
    <section id="organization" class="program-organization section">
      <div class="container organization-layout">
        <img :src="program.image" :alt="`${program.code} student organization logo`" width="260" height="260" loading="lazy" />
        <div><h2>Student Organization</h2><p class="lead">{{ program.organizationText }}</p></div>
      </div>
    </section>
    <section id="outcomes" class="container section">
      <p class="eyebrow">{{ program.graduateHeading }}</p>
      <h2>Graduate Outcomes</h2>
      <ol class="graduate-outcomes full-graduate-outcomes"><li v-for="outcome in program.outcomes" :key="outcome.code"><span>{{ outcome.code }}</span><p>{{ outcome.text }}</p></li></ol>
      <p class="program-closing">{{ program.closing }}</p>
    </section>
  </div>
</template>
