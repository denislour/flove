<template>
  <section class="mb-16">
    <h1 class="font-bold tracking-tighter text-8xl mb-14">
      <span :class="[actionClasses]">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h1 class="text-3xl font-light">Find your next job in Bobo Corp</h1>
  </section>
</template>

<script>
import nextElementInList from "@/utils/nextElementInList";
export default {
  name: "HeadLine",
  data() {
    return {
      action: "Build", //this.action.toLowerCase() = build
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.changedTitle();
    console.log("child created");
  },
  beforeUnmount() {
    clearInterval(this.interval);
    console.log("child before unmount");
  },
  methods: {
    changedTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];
        this.action = nextElementInList(actions, this.action);
      }, 3000);
    },
  },
};
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
