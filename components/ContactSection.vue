<script setup lang="ts">
import { resume } from "~/data/resume";

const socials = computed(() =>
  Object.entries(resume.socials).map(([key, url]) => ({
    key,
    url,
    label: key.charAt(0).toUpperCase() + key.slice(1),
    display: url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""),
    icon:
      key === "github"
        ? "mdi:github"
        : key === "linkedin"
          ? "mdi:linkedin"
          : "mdi:link-variant",
  })),
);
</script>

<template>
  <section id="contact" class="relative py-24 sm:py-32">
    <div class="container mx-auto px-6 max-w-5xl">
      <!-- Header -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :visibleOnce="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="mb-10 sm:mb-12"
      >
        <p class="font-mono text-sm text-violet-500 mb-3">05 / contact</p>
        <h2
          class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-50"
        >
          Let's build something together.
        </h2>
        <p
          class="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl"
        >
          Have a project in mind, or just want to say hi? My inbox is always
          open.
        </p>
      </div>

      <!-- Contact grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <!-- Email (primary) -->
        <a
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: { duration: 500, delay: 120, ease: [0.22, 1, 0.36, 1] },
          }"
          :href="`mailto:${resume.email}`"
          class="group relative flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-4 sm:p-5 transition-all duration-300 hover:border-violet-500/40 hover:bg-white dark:hover:bg-slate-900/70 hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-0.5"
        >
          <div
            class="shrink-0 w-9 h-9 rounded-xl bg-violet-500/10 text-violet-500 flex items-center justify-center"
          >
            <Icon name="mdi:email-outline" class="w-4 h-4" />
          </div>

          <div class="min-w-0 flex-1">
            <p
              class="font-mono text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500 mb-0.5"
            >
              Email
            </p>
            <p
              class="text-sm font-medium whitespace-nowrap text-slate-900 dark:text-slate-50 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors"
            >
              {{ resume.email }}
            </p>
          </div>
        </a>

        <!-- Socials -->
        <a
          v-for="(s, i) in socials"
          :key="s.key"
          v-motion
          :initial="{ opacity: 0, y: 16 }"
          :visibleOnce="{
            opacity: 1,
            y: 0,
            transition: {
              duration: 500,
              delay: 200 + i * 80,
              ease: [0.22, 1, 0.36, 1],
            },
          }"
          :href="s.url"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative flex items-center gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-4 sm:p-5 transition-all duration-300 hover:border-violet-500/40 hover:bg-white dark:hover:bg-slate-900/70 hover:shadow-xl hover:shadow-violet-500/5 hover:-translate-y-0.5"
        >
          <div
            class="shrink-0 w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 group-hover:bg-violet-500/10 group-hover:text-violet-500 flex items-center justify-center transition-colors"
          >
            <Icon :name="s.icon" class="w-4 h-4" />
          </div>

          <div class="min-w-0 flex-1">
            <p
              class="font-mono text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500 mb-0.5"
            >
              {{ s.label }}
            </p>
            <p
              class="text-sm font-medium whitespace-nowrap text-slate-900 dark:text-slate-50 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors"
            >
              {{ s.display }}
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
