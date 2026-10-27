<script setup lang="ts">
onMounted(() => {
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const shouldBeDark = stored ? stored === "dark" : prefersDark;
  document.documentElement.classList.toggle("dark", shouldBeDark);
});
</script>

<template>
  <div>
    <HeroSection />
    <AboutSection />
    <ExperienceSection />
    <ProjectsSection />
    <SkillsSection />
    <ContactSection />
    <Footer />
  </div>
</template>
