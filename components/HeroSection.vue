<script setup lang="ts">
import { resume } from "~/data/resume";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};
</script>

<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
  >
    <!-- background -->
    <div
      class="pointer-events-none absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-violet-500/10 dark:bg-violet-500/15 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -bottom-32 -right-32 w-[24rem] h-[24rem] rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 blur-3xl"
      aria-hidden="true"
    />

    <div class="container mx-auto px-6 max-w-5xl relative">
      <!-- Availability badge -->
      <div
        v-if="resume.availableForWork"
        v-motion
        :initial="{ opacity: 0, y: 10 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 500 } }"
        class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-sm font-medium mb-8"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"
          />
          <span
            class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"
          />
        </span>
        {{ resume.availableForWork }}
      </div>

      <!-- Name -->
      <h1
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 80 } }"
        class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 leading-[1.05]"
      >
        {{ resume.firstName }}
        <span class="text-violet-500">{{ resume.lastName }}</span>
      </h1>

      <!-- Role -->
      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 180 } }"
        class="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-600 dark:text-slate-400"
      >
        {{ resume.role }}
      </h2>

      <!-- Tagline -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 280 } }"
        class="mt-6 max-w-2xl text-lg text-slate-500 dark:text-slate-400 leading-relaxed"
      >
        {{ resume.tagline }}
      </p>

      <!-- Location -->
      <p
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { duration: 600, delay: 380 } }"
        class="mt-4 text-sm font-mono text-slate-400 dark:text-slate-500"
      >
        <span class="text-violet-500">●</span>
        {{ resume.location }}
      </p>

      <!-- CTAs -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 480 } }"
        class="mt-10 flex flex-wrap items-center gap-4"
      >
        <button
          type="button"
          class="px-6 py-3 rounded-lg font-semibold bg-violet-500 text-white hover:bg-violet-600 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
          @click="scrollTo('projects')"
        >
          View Projects
        </button>

        <a
          :href="resume.resumePdf"
          download
          class="px-6 py-3 rounded-lg font-semibold border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-violet-500 hover:text-violet-500 dark:hover:border-violet-500 dark:hover:text-violet-400 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
        >
          Download CV
        </a>

        <button
          type="button"
          class="px-6 py-3 rounded-lg font-semibold text-slate-500 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
          @click="scrollTo('contact')"
        >
          Get in touch →
        </button>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { delay: 900 } }"
      class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2"
      aria-hidden="true"
    >
      <div
        class="relative w-7 h-11 rounded-full border-2 border-slate-300 dark:border-slate-700 flex justify-center pt-2"
      >
        <div
          v-motion
          :initial="{ y: 0, opacity: 1 }"
          :enter="{
            y: [0, 10, 0],
            opacity: [1, 0.3, 1],
            transition: {
              duration: 1600,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }"
          class="w-1.5 h-1.5 rounded-full bg-violet-500 shadow-[0_0_8px_rgba(139,92,246,0.8)]"
        />
      </div>
    </div>
  </section>
</template>
