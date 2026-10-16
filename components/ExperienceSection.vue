<script setup lang="ts">
import { resume } from "~/data/resume";
import { useReveal } from "~/composables/useReveal";
</script>

<template>
  <section id="experience" class="relative py-24 sm:py-32">
    <div class="container mx-auto px-6 max-w-5xl">
      <!-- Section header -->
      <div v-motion v-bind="useReveal()" class="mb-12 sm:mb-16">
        <p class="font-mono text-sm text-violet-500 mb-3">02 / experience</p>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50"
        >
          Where I've worked
        </h2>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div
          class="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800"
          aria-hidden="true"
        />

        <div class="space-y-12 sm:space-y-16">
          <article
            v-for="(job, i) in resume.experience"
            :key="`${job.company}-${i}`"
            v-motion
            :initial="{ opacity: 0, x: -16 }"
            :visible-once="{
              opacity: 1,
              x: 0,
              transition: {
                duration: 600,
                delay: i * 150,
                ease: [0.22, 1, 0.36, 1],
              },
            }"
            class="relative pl-8 sm:pl-12"
          >
            <!-- Dot -->
            <span
              class="absolute left-0 top-2 w-4 h-4 rounded-full bg-white dark:bg-slate-950 ring-2 ring-violet-500 flex items-center justify-center"
              aria-hidden="true"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-violet-500" />
            </span>

            <!-- Period + location -->
            <div
              class="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-2"
            >
              <span class="text-violet-500">{{ job.period }}</span>
              <span v-if="job.location" class="flex items-center gap-1">
                <Icon name="mdi:map-marker-outline" class="w-3.5 h-3.5" />
                {{ job.location }}
              </span>
            </div>

            <!-- Role -->
            <h3
              class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-50"
            >
              {{ job.role }}
            </h3>

            <!-- Company -->
            <p class="text-base text-slate-600 dark:text-slate-400 mt-1 mb-4">
              {{ job.company }}
            </p>

            <!-- Bullets -->
            <ul v-if="job.bullets?.length" class="space-y-2 mb-5">
              <li
                v-for="(bullet, bi) in job.bullets"
                :key="bi"
                class="flex gap-3 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300"
              >
                <span
                  class="text-violet-500 mt-[0.4rem] shrink-0 w-1 h-1 rounded-full bg-violet-500"
                  aria-hidden="true"
                />
                <span>{{ bullet }}</span>
              </li>
            </ul>

            <!-- Tech pills -->
            <div v-if="job.tech?.length" class="flex flex-wrap gap-2">
              <span
                v-for="tech in job.tech"
                :key="tech"
                class="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
              >
                {{ tech }}
              </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
