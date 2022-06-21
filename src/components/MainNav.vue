<template>
  <header class="w-full text-sm">
    <div class="w-full fixed top-0 left-0 bg-white h-16">
      <div
        class="flex flex-nowrap h-full p-8 mx-auto border-b border-solid border-brand-gray-1"
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

        <div class="flex items-center h-full ml-auto text-xl font-medium">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="Sign In" @click="loginUser" />
        </div>
      </div>

      <SubNav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from "@/components/ActionButton";
import ProfileImage from "@/components/ProfileImage";
import SubNav from "@/components/SubNav";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      brand: "Flove",
      url: "https://google.com",
      menuItems: [
        "Teams",
        "Locations",
        "Live of Flove",
        "How we hire",
        "Students",
        "Jobs",
      ],
      isLoggedIn: false,
    };
  },
  methods: {
    loginUser() {
      this.isLoggedIn = true;
    },
  },
};
</script>
