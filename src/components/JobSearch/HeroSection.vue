<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <head-line></head-line>
          <job-search-form></job-search-form>
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            class="w-80 h-80 object-contain"
            src="https://images.pexels.com/photos/3205567/pexels-photo-3205567.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>

<script>
import HeadLine from "@/components/JobSearch/HeadLine.vue";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

export default {
  name: "HeroSection",
  components: {
    HeadLine,
    JobSearchForm,
  },
};
</script>
