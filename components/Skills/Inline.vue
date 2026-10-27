<script setup lang="ts">
interface Group {
  label: string;
  items: string[];
}

defineProps<{
  groups: Group[];
}>();
</script>

<template>
  <div class="divide-y divide-slate-200 dark:divide-slate-800">
    <div
      v-for="(group, i) in groups"
      :key="group.label"
      v-motion
      :initial="{ opacity: 0, x: -12 }"
      :visibleOnce="{
        opacity: 1,
        x: 0,
        transition: { duration: 500, delay: i * 60, ease: [0.22, 1, 0.36, 1] },
      }"
      class="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8 py-4"
    >
      <!-- Label -->
      <p
        class="font-mono text-[11px] uppercase tracking-widest text-violet-500 dark:text-violet-400 sm:w-40 shrink-0"
      >
        {{ group.label }}
      </p>

      <!-- Items -->
      <div class="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <template v-for="(item, idx) in group.items" :key="item">
          <span class="text-sm text-slate-700 dark:text-slate-300">
            {{ item }}
          </span>
          <span
            v-if="idx < group.items.length - 1"
            class="text-slate-300 dark:text-slate-700 select-none"
            aria-hidden="true"
          >
            ·
          </span>
        </template>
      </div>
    </div>
  </div>
</template>
