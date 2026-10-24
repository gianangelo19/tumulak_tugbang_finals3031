<script setup>
import { ArrowUpRight, ArrowRight } from "lucide-vue-next";
import { programs } from "../data/content";
</script>
<template>
  <section class="next-step">
    <div>
      <p class="eyebrow">YOUR NEXT CHAPTER</p>
      <h2>Great things begin<br />with a little curiosity.</h2>
    </div>
    <RouterLink class="button gold" to="/contact"
      >Start a conversation <ArrowUpRight :size="19"
    /></RouterLink>
  </section>
  <footer class="site-footer">
    <div class="footer-grid">
      <div>
        <RouterLink class="brand" to="/"
          ><img
            src="/images/ccs-logo.png"
            alt="CCS logo"
            width="52"
            height="52"
          /><span
            >College of<br /><strong>Computer Studies</strong></span
          ></RouterLink
        >
        <p>
          Different people. One purpose.<br />Building a better tomorrow,
          together.
        </p>
        <a
          class="text-link"
          href="https://cpu.edu.ph/"
          target="_blank"
          rel="noopener"
          >Central Philippine University <ArrowUpRight :size="15"
        /></a>
      </div>
      <div>
        <h3>Explore</h3>
        <RouterLink to="/about">Our college</RouterLink
        ><RouterLink to="/faculty">Faculty & staff</RouterLink
        ><RouterLink to="/news">News & events</RouterLink
        ><RouterLink to="/contact">Contact us</RouterLink>
      </div>
      <div>
        <h3>Find your program</h3>
        <RouterLink v-for="p in programs" :key="p.id" :to="`/programs/${p.id}`"
          >{{ p.code }} <ArrowRight :size="13"
        /></RouterLink>
      </div>
      <div>
        <h3>Come say hello</h3>
        <p>
          Mary Thomas Hall<br />Lopez Jaena Street, Jaro<br />Iloilo City,
          Philippines
        </p>
        <a href="mailto:ccssec@cpu.edu.ph">ccssec@cpu.edu.ph</a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>CCS 3031 · Website Redesign Project</span
      ><span>Student concept · Not the official CPU website</span
      ><a href="https://ccs.cpu.edu.ph/" target="_blank" rel="noopener"
        >Official CCS site ↗</a
      >
    </div>
    <p class="image-credit">
      Campus photo:
      <a
        href="https://commons.wikimedia.org/wiki/File:Mary_Thomas_Hall_at_Central_Philippine_University.jpg"
        target="_blank"
        rel="noopener"
        >Johngaje92 / Wikimedia Commons</a
      >
      ·
      <a
        href="https://creativecommons.org/licenses/by-sa/4.0/"
        target="_blank"
        rel="noopener"
        >CC BY-SA 4.0</a
      >
      · Cropped and shaded for layout. College images: CPU CCS.
    </p>
  </footer>
</template>
