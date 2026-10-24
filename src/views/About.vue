<script setup>
import { institution } from "../data/content";
import PageIntro from "../components/PageIntro.vue";
</script>
<template>
  <PageIntro
    eyebrow="OUR COLLEGE"
    title="Built on curiosity. Connected by purpose."
    description="We bring computing, creativity, and information together at Central Philippine University in Iloilo City."
  />
  <div class="container about-banner">
    <img
      src="/images/mary-thomas-hall.jpg"
      alt="Mary Thomas Hall on the CPU campus"
      loading="lazy"
    /><span>REMEMBER. CONNECT. ENGAGE. BUILD. SHARE.</span>
  </div>
  <section class="container section two-column">
    <div>
      <p class="eyebrow">WHAT GUIDES US</p>
      <h2>Education that looks<br />beyond the screen.</h2>
      <p>
        Our work connects technical learning with service, character, and the
        needs of people. These summaries reflect the college’s published guiding
        statements.
      </p>
    </div>
    <div class="statements">
      <article>
        <span class="eyebrow">01 / VISION</span>
        <h3>A wider world of possibility.</h3>
        <p>{{ institution.visionParaphrase }}</p>
      </article>
      <article>
        <span class="eyebrow">02 / MISSION</span>
        <h3>Learning with purpose.</h3>
        <p>{{ institution.missionParaphrase }}</p>
      </article>
      <article>
        <span class="eyebrow">03 / QUALITY & VALUES</span>
        <h3>A commitment to grow.</h3>
        <p>{{ institution.qualityParaphrase }}</p>
      </article>
      <a
        :href="institution.source"
        class="text-link"
        target="_blank"
        rel="noopener"
        >Read the official guiding statements ↗</a
      >
    </div>
  </section>
  <section class="history-section section">
    <div class="container">
      <p class="eyebrow">OUR STORY, STILL UNFOLDING</p>
      <h2>From a first class<br />to a shared future.</h2>
      <div class="timeline">
        <article v-for="entry in institution.timeline" :key="entry.year">
          <span>{{ entry.year }}</span>
          <p>{{ entry.text }}</p>
        </article>
      </div>
      <a
        :href="institution.historySource"
        class="text-link"
        target="_blank"
        rel="noopener"
        >Explore the college’s published history ↗</a
      >
    </div>
  </section>
  <section class="container section two-column">
    <div>
      <p class="eyebrow">OUR EDUCATIONAL PURPOSE</p>
      <h2>Skills for work.<br />Values for life.</h2>
    </div>
    <div>
      <p class="lead">
        Develop capable, ethical computing and information professionals through
        practical learning, collaboration, and continuous development.
      </p>
      <ul class="simple-list">
        <li>Apply knowledge to real-world challenges.</li>
        <li>Communicate and collaborate across disciplines.</li>
        <li>Practice professional and social responsibility.</li>
        <li>Keep learning as technology and society evolve.</li>
      </ul>
      <RouterLink class="text-link" to="/programs"
        >Explore our academic programs ↗</RouterLink
      >
    </div>
  </section>
</template>
