<script setup lang="ts">
import { resume } from "~/data/resume";
import { useReveal } from "~/composables/useReveal";
</script>

<template>
  <section id="about" class="relative py-24 sm:py-32">
    <div class="container mx-auto px-6 max-w-5xl">
      <!-- Section header -->
      <div v-motion v-bind="useReveal()" class="mb-12 sm:mb-16">
        <p class="font-mono text-sm text-violet-500 mb-3">01 / about</p>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50"
        >
          A little about me
        </h2>
      </div>

      <!-- Content -->
      <div
        class="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-start"
      >
        <!-- Avatar -->
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible-once="{
            opacity: 1,
            scale: 1,
            transition: { duration: 600, ease: [0.22, 1, 0.36, 1] },
          }"
          class="relative mx-auto md:mx-0"
        >
          <div
            class="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden ring-1 ring-slate-200 dark:ring-slate-800 shadow-lg shadow-slate-200/50 dark:shadow-black/40"
          >
            <img
              :src="resume.avatar"
              :alt="`Portrait of ${resume.name}`"
              class="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <!-- //todo: change it to a status later -->
          <!-- Small accent dot -->
          <span
            class="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-violet-500 ring-4 ring-white dark:ring-slate-950"
            aria-hidden="true"
          />
        </div>

        <!-- Text -->
        <div class="space-y-5">
          <p
            v-for="(para, i) in resume.about"
            :key="i"
            v-motion
            :initial="{ opacity: 0, y: 16 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 150 + i * 120 },
            }"
            class="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300"
          >
            {{ para }}
          </p>

          <!-- Socials row -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 16 }"
            :visible-once="{
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 400 },
            }"
            class="flex flex-wrap items-center gap-3 pt-4"
          >
            <a
              v-if="resume.socials.github"
              :href="resume.socials.github"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-violet-500 hover:text-violet-500 dark:hover:border-violet-500 dark:hover:text-violet-400 transition-colors duration-200"
            >
              <Icon name="mdi:github" class="text-xl" />
              GitHub
            </a>

            <a
              v-if="resume.socials.linkedin"
              :href="resume.socials.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-violet-500 hover:text-violet-500 dark:hover:border-violet-500 dark:hover:text-violet-400 transition-colors duration-200"
            >
              <Icon name="mdi:linkedin" class="text-xl" />
              LinkedIn
            </a>

            <a
              :href="`mailto:${resume.email}`"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-violet-500 hover:text-white dark:hover:bg-violet-500 dark:hover:text-white transition-colors duration-200"
            >
              <Icon name="mdi:email" class="text-xl" />
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
