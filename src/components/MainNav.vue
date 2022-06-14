<template>
  <header class="w-full text-sm">Main Nav</header>
  <div class="w-full fixed top-0 left-0 bg-white h-16">
    <div
      class="flex flex-nowrap h-full p-8 mx-auto border-b border-solid border-grand-gray-1"
    >
      <a href="/" class="flex items-center h-full text-xl font-semibold">{{
        brand
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return { brand: "Flove" };
  },
};
</script>
