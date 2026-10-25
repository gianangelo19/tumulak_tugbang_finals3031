<script setup>
import { institution } from "../data/content";
import HistoryTimeline from "../components/HistoryTimeline.vue";
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
        needs of people. 
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
      
    </div>
  </section>
  <HistoryTimeline />
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
