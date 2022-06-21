<template>
  <div
    class="text-xl font-medium w-full h-16 bg-white border-b border-solid border-brand-gray-1"
  >
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage">
        <font-awesome-icon :icon="['fas', 'search']" />
        <span>
          <span class="text-brand-green-1"> 1653 </span>
          jobs matched
        </span>
      </div>
    </div>
  </div>
  <div></div>
</template>

<script>
export default {
  name: "SubNav",
  data() {
    return {
      onJobResultsPage: true,
    };
  },
};
</script>
