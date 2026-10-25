<script setup>
import { ref, computed } from "vue";
import { Search, X } from "lucide-vue-next";
import { people, programs } from "../data/content";
import PageIntro from "../components/PageIntro.vue";
import FacultyCard from "../components/FacultyCard.vue";
const query = ref(""),
  selected = ref("All");
const dean = computed(() => people.find((person) => person.role === "Dean"));
const categories = ["All", ...programs.map((p) => p.code), "College support"];
const groups = computed(() =>
  [
    ...programs.map((p) => ({ code: p.code, title: p.name })),
    { code: "College support", title: "College leadership & support" },
  ]
    .filter((g) => selected.value === "All" || g.code === selected.value)
    .map((g) => ({
      ...g,
      people: people.filter(
        (p) =>
          p.role !== "Dean" &&
          (g.code === "College support"
            ? !p.programs.length
            : p.programs.includes(g.code)) &&
          `${p.name} ${p.role} ${p.credentials || ""}`
            .toLowerCase()
            .includes(query.value.trim().toLowerCase()),
      ),
    }))
    .filter((g) => g.people.length),
);
const count = computed(
  () => new Set(groups.value.flatMap((g) => g.people.map((p) => p.name))).size,
);
function reset() {
  query.value = "";
  selected.value = "All";
}
</script>
<template>
  <PageIntro
    eyebrow="FACULTY & STAFF"
    title="People who help you grow."
    description="Meet the educators, coordinators, and support team behind the College of Computer Studies."
  />
  <section
    v-if="dean"
    class="container dean-message"
    aria-labelledby="dean-message-title"
  >
    <div class="dean-portrait">
      <img :src="dean.image" :alt="dean.name" />
      <div>
        <strong>{{ dean.name }}</strong>
        <span>{{ dean.credentials }} · {{ dean.role }}</span>
      </div>
    </div>
    <div class="dean-copy">
      <p class="eyebrow">COLLEGE LEADERSHIP</p>
      <h2 id="dean-message-title">Message from the Dean</h2>
      <p>
        In every school year for the College of Computer Studies, we look
        forward with great anticipation to the contributions the new class will
        make to campus life. In both the aspect of academic and non academic,
        each students is unique enough to achieve whatever they want to reach
        for in our college.
      </p>
      <p>
        The primary focus of CCS is teaching and learning. Our undergraduates
        are encouraged to think about their education as a whole, rather than
        just a term taken one thing at a time, and the different faculty members
        work with them not only during the start of the school year, but
        throughout the whole as well.
      </p>
      <p>
        Learning and growth with us does not always come in classroom and
        academic experiences. Other kinds of opportunities abound, not the least
        of them the daily occasions for friendship and fellowship with people
        from many different backgrounds and with a wide variety of interests. In
        addition, students participate in rich and varied extracurricular
        activities that the College and University has got to offer.
      </p>
      <p>
        As another year starts, a new challenge comes for each and everyone with
        us. Take this into your mind and hearts and be able to reach the dream
        that you have ever dreamt to succeed. Welcome dear students and have a
        great school year ahead of you.
      </p>
    </div>
  </section>
  <section class="container section no-top">
    <div class="directory-toolbar">
      <label class="search-box"
        ><Search :size="19" /><span class="sr-only"
          >Search faculty by name or role</span
        ><input
          v-model="query"
          type="search"
          placeholder="Search by name or role…"
      /></label>
      <p aria-live="polite">{{ count }} people found</p>
    </div>
    <div class="filter-row" aria-label="Filter faculty by program">
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

    <div v-if="!groups.length" class="empty-state">
      <Search :size="32" />
      <h2>No matching people</h2>
      <p>Try another name or choose a different program.</p>
      <button class="button navy" @click="reset">
        Clear filters <X :size="16" />
      </button>
    </div>
    <section v-for="group in groups" :key="group.code" class="faculty-group">
      <div class="group-heading">
        <h2>{{ group.title }}</h2>
        <span>{{ group.code }}</span>
      </div>
      <div class="faculty-grid">
        <FacultyCard
          v-for="person in group.people"
          :key="person.name"
          :person="person"
        />
      </div>
    </section>
  </section>
</template>
