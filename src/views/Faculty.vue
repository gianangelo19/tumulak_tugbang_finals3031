<script setup>
import { ref, computed } from "vue";
import { Search, X } from "lucide-vue-next";
import { people, programs, directorySource } from "../data/content";
import PageIntro from "../components/PageIntro.vue";
import FacultyCard from "../components/FacultyCard.vue";
const query = ref(""),
  selected = ref("All");
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
