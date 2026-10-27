<script setup lang="ts">
type ProjectContext = "personal" | "team" | "company";

interface Project {
  name: string;
  subtitle?: string;
  description: string;
  role?: string;
  tech?: string[];
  link?: string;
  live?: string;
  featured?: boolean;
  status?: "Live" | "In development" | "Archived";
  context?: ProjectContext;
}

const props = defineProps<{
  project: Project;
  index: number;
}>();

const label = computed(() => String(props.index + 1).padStart(2, "0"));

const statusDot = computed(() => {
  switch (props.project.status) {
    case "Live":
      return "bg-emerald-500";
    case "In development":
      return "bg-amber-500";
    case "Archived":
      return "bg-slate-400 dark:bg-slate-600";
    default:
      return "";
  }
});

const statusText = computed(() => {
  switch (props.project.status) {
    case "Live":
      return "text-emerald-600 dark:text-emerald-400";
    case "In development":
      return "text-amber-600 dark:text-amber-400";
    default:
      return "text-slate-500 dark:text-slate-500";
  }
});

const contextLabel = computed(() => {
  switch (props.project.context) {
    case "team":
      return "Team";
    case "company":
      return "Company";
    case "personal":
      return "Personal";
    default:
      return null;
  }
});

const contextStyles = computed(() => {
  switch (props.project.context) {
    case "team":
      return "text-sky-600 dark:text-sky-400 bg-sky-500/10 border-sky-500/20";
    case "company":
      return "text-slate-600 dark:text-slate-400 bg-slate-500/10 border-slate-500/20";
    case "personal":
      return "text-violet-600 dark:text-violet-400 bg-violet-500/10 border-violet-500/20";
    default:
      return "";
  }
});

// Only nudge the reader for personal/team projects still being built.
// Company work is expected to be private — say nothing.
const showInProgressNote = computed(
  () =>
    !props.project.live &&
    !props.project.link &&
    props.project.context !== "company" &&
    props.project.status === "In development",
);
</script>

<template>
  <article
    v-motion
    :initial="{ opacity: 0, y: 24 }"
    :visibleOnce="{
      opacity: 1,
      y: 0,
      transition: {
        duration: 600,
        delay: index * 80,
        ease: [0.22, 1, 0.36, 1],
      },
    }"
    class="group relative flex flex-col rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 p-6 sm:p-7 transition-all duration-300 hover:border-violet-500/40 hover:bg-white dark:hover:bg-slate-900/70 hover:shadow-xl hover:shadow-violet-500/5"
  >
    <!-- Top row: status + context -->
    <div class="flex items-center justify-between mb-5">
      <!-- Status -->
      <div v-if="project.status" class="flex items-center gap-2">
        <span
          :class="[
            'w-1.5 h-1.5 rounded-full',
            statusDot,
            project.status === 'Live' && 'animate-pulse',
          ]"
        />
        <span
          :class="['font-mono text-xs uppercase tracking-widest', statusText]"
        >
          {{ project.status }}
        </span>
      </div>

      <!-- Context -->
      <span
        v-if="contextLabel"
        class="font-mono text-xs text-slate-300 dark:text-slate-700"
      >
        {{ contextLabel }}
      </span>
    </div>

    <!-- Title -->
    <h3
      class="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50 group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors mb-2"
    >
      {{ project.name }}
    </h3>

    <!-- Subtitle / role -->
    <p
      v-if="project.subtitle || project.role"
      class="font-mono text-xs text-slate-500 dark:text-slate-500 mb-4 truncate"
    >
      <span v-if="project.subtitle">{{ project.subtitle }}</span>
      <span v-if="project.subtitle && project.role" class="mx-1.5">·</span>
      <span v-if="project.role">{{ project.role }}</span>
    </p>

    <!-- Description (expandable) -->
    <details v-if="project.description.length > 140" class="group/details mb-5">
      <summary
        class="text-base leading-relaxed text-slate-600 dark:text-slate-300 cursor-pointer list-none line-clamp-3 group-open/details:line-clamp-none [&::-webkit-details-marker]:hidden"
      >
        {{ project.description }}
      </summary>
      <button
        type="button"
        class="mt-2 text-xs font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
        @click.prevent="
          ($event.target as HTMLElement)
            .closest('details')
            ?.removeAttribute('open')
        "
      >
        Show less
      </button>
    </details>
    <p
      v-else
      class="text-base leading-relaxed text-slate-600 dark:text-slate-300 mb-5"
    >
      {{ project.description }}
    </p>

    <!-- Bottom row: tech + actions -->
    <div
      class="mt-auto flex items-center justify-between gap-3 pt-5 border-t border-slate-100 dark:border-slate-800/60"
    >
      <!-- Tech -->
      <div v-if="project.tech?.length" class="flex flex-wrap gap-1.5 min-w-0">
        <span
          v-for="t in project.tech"
          :key="t"
          class="px-2 py-1 rounded-md text-xs font-mono bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800"
        >
          {{ t }}
        </span>
      </div>
      <span v-else class="font-mono text-xs text-slate-400 dark:text-slate-600">
        —
      </span>

      <!-- Actions -->
      <div class="flex items-center gap-3 shrink-0">
        <a
          v-if="project.live"
          :href="project.live"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
        >
          Live Demo
          <Icon name="mdi:arrow-right" class="w-4 h-4" />
        </a>

        <a
          v-if="project.link"
          :href="project.link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-violet-500 dark:hover:text-violet-400 transition-colors"
        >
          <Icon name="mdi:github" class="w-4 h-4" />
          Source
        </a>

        <span
          v-if="showInProgressNote"
          class="text-xs font-mono text-slate-400 dark:text-slate-600"
        >
          In progress
        </span>
      </div>
    </div>
  </article>
</template>
