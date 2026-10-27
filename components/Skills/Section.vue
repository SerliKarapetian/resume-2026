<script setup lang="ts">
import { resume } from "~/data/resume";

const skills = computed(() => resume.skills);

const groups = computed(() =>
  Object.entries(skills.value).map(([label, items]) => ({ label, items })),
);
</script>

<template>
  <section id="skills" class="relative py-24 sm:py-32">
    <div class="container mx-auto px-6 max-w-5xl">
      <!-- Header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="mb-12 sm:mb-16 flex items-end justify-between gap-4"
      >
        <div>
          <p class="font-mono text-sm text-violet-500 mb-3">04 / skills</p>
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50"
          >
            What I work with
          </h2>
        </div>
        <span class="font-mono text-xs text-slate-400 dark:text-slate-600 pb-2">
          {{ groups.length }} categories
        </span>
      </div>

      <!-- Layout A: columns -->
      <SkillsColumns  :groups="groups" />

      <!-- Layout B: inline grouped tags -->
      <!-- <SkillsInline  :groups="groups" /> -->

    </div>
  </section>
</template>
