<script setup lang="ts">
import { resume } from "~/data/resume";

const projects = computed(() => resume.projects);
</script>

<template>
  <section id="projects" class="relative py-24 sm:py-32">
    <div class="container mx-auto px-6 max-w-5xl">
      <!-- Header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="mb-12 sm:mb-16 flex items-end justify-between gap-4"
      >
        <div>
          <p class="font-mono text-sm text-violet-500 mb-3">03 / projects</p>
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50"
          >
            Things I've built
          </h2>
        </div>
        <span class="font-mono text-xs text-slate-400 dark:text-slate-600 pb-2">
          {{ projects.length }} total
        </span>
      </div>

      <!-- Grid: 2 columns, bigger cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ProjectCard
          v-for="(project, i) in projects"
          :key="project.name"
          :project="project"
          :index="i"
        />
      </div>
    </div>
  </section>
</template>
