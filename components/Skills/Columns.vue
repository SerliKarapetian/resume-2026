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
  <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
    <div
      v-for="(group, i) in groups"
      :key="group.label"
      v-motion
      :initial="{ opacity: 0, y: 16 }"
      :visibleOnce="{
        opacity: 1,
        y: 0,
        transition: { duration: 500, delay: i * 70, ease: [0.22, 1, 0.36, 1] },
      }"
    >
      <!-- Category label -->
      <p
        class="font-mono text-[11px] uppercase tracking-widest text-violet-500 dark:text-violet-400 mb-3"
      >
        {{ group.label }}
      </p>

      <!-- Items -->
      <ul class="space-y-1.5">
        <li
          v-for="item in group.items"
          :key="item"
          class="text-sm text-slate-600 dark:text-slate-300"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>
