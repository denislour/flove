<template>
  <header class="w-full text-sm">
    <div class="w-full fixed top-0 left-0 bg-white h-16">
      <div
        class="flex flex-nowrap h-full p-8 mx-auto border-b border-solid border-grand-gray-1"
      >
        <a
          :href="url"
          class="flex items-center h-full text-3xl font-semibold"
          >{{ brand }}</a
        >
        <nav class="h-full ml-12">
          <ul class="flex h-full list-none m-0 p-0">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="items-center flex h-full text-xl font-medium ml-9 first:ml-0"
            >
              {{ menuItem }}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "MainNav",
  data() {
    return {
      brand: "Flove",
      url: "https://google.com",
      menuItems: [
        "Teams",
        "Localtions",
        "Live of Flove",
        "How we hire",
        "Students",
        "Jobs",
      ],
    };
  },
};
</script>
