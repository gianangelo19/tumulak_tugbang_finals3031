<script setup>
import { institution } from "../data/content";
import PageIntro from "../components/PageIntro.vue";
</script>
<template>
  <PageIntro
    eyebrow="ABOUT OUR COLLEGE"
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
        <p>The College of Computer Studies is founded on the vision of academic excellence in Information Technology Education and responsive to the needs of the total person and the world.</p>
      </article>
      <article>
        <span class="eyebrow">02 / MISSION</span>
        <h3>Learning with purpose.</h3>
        <p>A College of the future with a mission to educate students with the Christian principles and practices of computer studies, preparing them to advance studies, careers in software development, computing systems technology, information management, and for a lifetime learning.</p>
      </article>
      <article>
        <span class="eyebrow">03 / QUALITY & VALUES</span>
        <h3>A commitment to grow.</h3>
        <p>To fulfill the mission and realize the vision of Central Philippine University, we commit to consistently provide superior quality services by integrating Christian values, academic excellence, highest level of professionalism, and quality consideration in every aspect of our operations.<br><br>

We maintain a quality management system that complies with international quality management system that complies with international quality standards. We continually improve to achieve global excellence that satisfies the expectations of the university community, partner institutions, and the general public.</p>
      </article>
      
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
