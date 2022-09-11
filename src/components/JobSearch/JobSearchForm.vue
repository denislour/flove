<template>
  <form
    class="flex items-center w-full h-12 mt-14 border border-solid border-brand-gray-3 rounded-3xl"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />
    <div class="flex flex-nowrap flex-1 h-full text-base font-light">
      <div class="relative flex items-center flex-1 h-full pr-3">
        <div class="absolute left-0 -top-10">Role</div>
        <input
          type="text"
          v-model="role"
          placeholder="Software engineer"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
      <span
        class="flex items-center h-full px-3 border-l border-r border-brand-gray-3"
      >
        in
      </span>
      <div class="relative flex items-center flex-1 h-full pr-3">
        <div class="absolute left-0 -top-10">Where?</div>
        <input
          type="text"
          v-model="location"
          placeholder="Los Angeles"
          class="w-full text-lg font-normal focus:outline-none"
        />
      </div>
      <action-button
        text="Search"
        type="secondary"
        class="rounded-r-3xl"
      ></action-button>
    </div>
  </form>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
export default {
  name: "JobSearchForm",
  components: { ActionButton },
  data() {
    return {
      role: "",
      location: "",
    };
  },
};
</script>
