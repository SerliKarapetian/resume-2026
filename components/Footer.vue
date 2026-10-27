<script setup lang="ts">
import { resume } from "~/data/resume";
const year = new Date().getFullYear();

const backToTop = () => {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
};
</script>

<template>
  <footer class="relative border-t border-slate-200 dark:border-slate-800">
    <div class="container mx-auto px-6 max-w-5xl py-8 sm:py-10">
      <div
        class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6"
      >
        <!-- Left: copyright -->
        <p class="font-mono text-xs text-slate-500 dark:text-slate-500">
          © {{ year }} Serli
        </p>

        <!-- Right: built with + source + back to top -->
        <div
          class="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs text-slate-500 dark:text-slate-500"
        >
          <span>
            Built with
            <span class="text-slate-700 dark:text-slate-300">Nuxt 3</span>
            +
            <span class="text-slate-700 dark:text-slate-300">Tailwind</span>
          </span>

          <span class="text-slate-300 dark:text-slate-700" aria-hidden="true"
            >·</span
          >

          <a
            :href="resume.repoUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="group inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
          >
            Source
            <Icon
              name="mdi:arrow-top-right"
              class="w-3 h-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <span class="text-slate-300 dark:text-slate-700" aria-hidden="true"
            >·</span
          >

          <button
            type="button"
            class="group inline-flex items-center gap-1 text-slate-600 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
            @click="backToTop"
          >
            Back to top
            <Icon
              name="mdi:arrow-up"
              class="w-3 h-3 transition-transform group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>
