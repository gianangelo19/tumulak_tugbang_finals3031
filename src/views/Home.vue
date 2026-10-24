<script setup>
import { ArrowUpRight, ArrowDown, MoveUpRight } from "lucide-vue-next";
import { programs, news } from "../data/content";
import ProgramCard from "../components/ProgramCard.vue";
import NewsCard from "../components/NewsCard.vue";
</script>
<template>
  <section class="home-hero">
    <img
      class="hero-photo"
      src="/images/mary-thomas-hall.jpg"
      alt="Mary Thomas Hall at Central Philippine University"
      fetchpriority="high"
    />
    <div class="hero-shade"></div>
    <div class="hero-copy">
      <p class="eyebrow">
        <span class="gold-dot"></span> CENTRAL PHILIPPINE UNIVERSITY
      </p>
      <h1>Curiosity.<br />Creativity.<br /><em>Possibility.</em></h1>
      <p>
        A place for curious minds to connect,<br class="desktop-break" />
        create, and shape what comes next.
      </p>
      <div class="button-row">
        <RouterLink class="button gold" to="/programs"
          >Find your path <ArrowUpRight :size="20" /></RouterLink
        ><RouterLink class="button glass" to="/about"
          >Get to know CCS <ArrowUpRight :size="20"
        /></RouterLink>
      </div>
    </div>
    <div class="hero-mark" aria-hidden="true">✳</div>
    <RouterLink :to="{ path: '/', hash: '#discover' }" class="hero-scroll"
      >Discover your possibilities <ArrowDown :size="17" /></RouterLink
    ><span class="hero-caption">LEARN. BUILD. BELONG.</span>
  </section>
  <div class="intro-strip">
    <span><strong>4</strong> paths to your future</span
    ><span><strong>1995</strong> where our story began</span
    ><span><strong>One</strong> connected community</span>
  </div>
  <section id="discover" class="container section welcome">
    <p class="eyebrow">DIFFERENT PEOPLE. ONE PURPOSE.</p>
    <div>
      <h2>Your ideas belong here.<br />Your future starts here.</h2>
      <p class="lead">
        At the College of Computer Studies, technology meets creativity and
        purpose. Explore how computing, digital art, and information can make a
        difference—in your life and in the world around you.
      </p>
      <RouterLink class="text-link" to="/about"
        >Meet your college <ArrowUpRight :size="18"
      /></RouterLink>
    </div>
  </section>
  <section class="program-section section">
    <div class="container">
      <div class="section-heading">
        <div>
          <p class="eyebrow">FIND YOUR DIRECTION</p>
          <h2>One college.<br />Endless possibilities.</h2>
        </div>
        <p>
          Whether you see the world in code, color,<br class="desktop-break" />
          or connections, there’s a path for you.
        </p>
      </div>
      <div class="program-grid">
        <ProgramCard
          v-for="(p, i) in programs"
          :key="p.id"
          :program="p"
          :index="i"
        />
      </div>
    </div>
  </section>
  <section class="community-section">
    <div class="community-image">
      <img
        src="/images/outreach.jpg"
        alt="CCS representatives connecting with the local school community"
        loading="lazy"
      /><span>BUILDING CONNECTIONS THAT MATTER</span>
    </div>
    <div class="community-copy">
      <p class="eyebrow">MORE THAN A CLASSROOM</p>
      <h2>Learn with purpose.<br />Grow together.</h2>
      <p>
        Good ideas go further when we share them. Discover a college grounded in
        collaboration, Christian values, and service to the community.
      </p>
      <RouterLink class="button navy" to="/about"
        >Discover our story <ArrowUpRight :size="18"
      /></RouterLink>
      <div class="community-values">
        <span>Remember</span><span>Connect</span><span>Engage</span
        ><span>Build</span><span>Share</span>
      </div>
    </div>
  </section>
  <section class="container section">
    <div class="section-heading">
      <div>
        <p class="eyebrow">FROM OUR COMMUNITY</p>
        <h2>Stories worth sharing.</h2>
      </div>
      <RouterLink class="text-link" to="/news"
        >Explore news & events <ArrowUpRight :size="18"
      /></RouterLink>
    </div>
    <div class="news-grid">
      <NewsCard v-for="article in news" :key="article.id" :article="article" />
    </div>
  </section>
</template>
