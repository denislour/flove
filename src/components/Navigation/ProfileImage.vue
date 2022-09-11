<template>
  <img
    :src="profileImage"
    alt="profileImage"
    class="h-8 w-8 object-contain rounded-3xl"
  />
</template>

<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      profileImage:
        "https://i.pinimg.com/564x/de/79/91/de79915ce4085b4418293fdfc98e20fd.jpg",
    };
  },
};
</script>
