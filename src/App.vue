<template>
  <div>
    <main-nav />
    <hero-section />
  </div>
</template>

<script>
import MainNav from "@/components/MainNav.vue";
import HeroSection from "@/components/HeroSection.vue";

// Need to update playground js
// Checking test resource
// Learning with carefully

export default {
  name: "App",
  components: {
    MainNav,
    HeroSection,
  },
};
</script>
