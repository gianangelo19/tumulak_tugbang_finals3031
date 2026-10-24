<script setup>
import { reactive, ref, nextTick } from "vue";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-vue-next";
import PageIntro from "../components/PageIntro.vue";
import { validateContact } from "../data/contact";
const form = reactive({ name: "", email: "", topic: "", message: "" }),
  errors = ref({}),
  submitted = ref(false);
async function submit() {
  errors.value = validateContact(form);
  submitted.value = Object.keys(errors.value).length === 0;
  await nextTick();
  document
    .querySelector(submitted.value ? "#form-success" : '[aria-invalid="true"]')
    ?.focus();
}
</script>
<template>
  <PageIntro
    eyebrow="CONTACT US"
    title="Let’s start a conversation."
    description="Questions about programs, college life, or your next step? We’re here to help you find your way."
  />
  <section class="container section no-top contact-grid">
    <div>
      <h2>Come say hello.</h2>
      <div class="contact-item">
        <Mail />
        <div>
          <h3>Email the college</h3>
          <a href="mailto:ccssec@cpu.edu.ph">ccssec@cpu.edu.ph</a>
        </div>
      </div>
      <div class="contact-item">
        <Phone />
        <div>
          <h3>Call the college</h3>
          <a href="tel:+63333291971">(033) 329-1971</a>
          <p>Ask for local 1094</p>
        </div>
      </div>
      <div class="contact-item">
        <MapPin />
        <div>
          <h3>Visit us</h3>
          <p>
            Mary Thomas Hall<br />Central Philippine University<br />Lopez Jaena
            Street, Jaro<br />Iloilo City, Philippines
          </p>
          <a
            class="text-link"
            href="https://www.google.com/maps/search/?api=1&query=Mary+Thomas+Hall+Central+Philippine+University+Iloilo"
            target="_blank"
            rel="noopener"
            >Get directions <ArrowUpRight :size="17"
          /></a>
        </div>
      </div>
      <p class="source-note">
        Contact details from the
        <a
          href="https://ccs.cpu.edu.ph/contact-us/"
          target="_blank"
          rel="noopener"
          >CCS contact page ↗</a
        >.
      </p>
    </div>
    <form class="contact-form" novalidate @submit.prevent="submit">
      <p class="eyebrow">TRY THE INQUIRY FORM</p>
      <h2>What’s on your mind?</h2>
      <p class="demo-notice">
        Demonstration only. This form validates your message but does not send
        or store it. For an actual inquiry, use the email address or telephone
        number.
      </p>
      <div class="form-row">
        <div>
          <label for="name">Full name <span>(required)</span></label
          ><input
            id="name"
            v-model="form.name"
            autocomplete="name"
            required
            maxlength="120"
            :aria-invalid="!!errors.name"
            :aria-describedby="errors.name ? 'name-error' : undefined"
          />
          <p v-if="errors.name" id="name-error" class="field-error">
            {{ errors.name }}
          </p>
        </div>
        <div>
          <label for="email">Email <span>(required)</span></label
          ><input
            id="email"
            v-model="form.email"
            type="email"
            autocomplete="email"
            required
            maxlength="254"
            :aria-invalid="!!errors.email"
            :aria-describedby="errors.email ? 'email-error' : undefined"
          />
          <p v-if="errors.email" id="email-error" class="field-error">
            {{ errors.email }}
          </p>
        </div>
      </div>
      <label for="topic">I’d like to ask about <span>(required)</span></label
      ><select
        id="topic"
        v-model="form.topic"
        required
        :aria-invalid="!!errors.topic"
        :aria-describedby="errors.topic ? 'topic-error' : undefined"
      >
        <option value="" disabled>Select a topic</option>
        <option>Academic programs</option>
        <option>Admissions</option>
        <option>Faculty & staff</option>
        <option>Events & partnerships</option>
        <option>Other inquiry</option>
      </select>
      <p v-if="errors.topic" id="topic-error" class="field-error">
        {{ errors.topic }}
      </p>
      <label for="message">Your message <span>(required)</span></label
      ><textarea
        id="message"
        v-model="form.message"
        rows="5"
        required
        maxlength="2000"
        :aria-invalid="!!errors.message"
        :aria-describedby="errors.message ? 'message-error' : undefined"
      ></textarea>
      <p v-if="errors.message" id="message-error" class="field-error">
        {{ errors.message }}
      </p>
      <button class="button navy" type="submit">
        Check demo inquiry <ArrowUpRight :size="18" />
      </button>
      <div
        v-if="submitted"
        id="form-success"
        class="success-message"
        role="status"
        tabindex="-1"
      >
        <CheckCircle2 :size="20" /><span
          >Your inquiry passes validation. Nothing has been sent or stored.
          Email ccssec@cpu.edu.ph to contact the college.</span
        >
      </div>
    </form>
  </section>
</template>
