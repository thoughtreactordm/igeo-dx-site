<template>
  <footer class="bg-gradient-t-footer xs:p-4 sm:p-16 mt-8 text-center">
    <socials size="2x" />

    <p class="font-bold">
      IGEO DX&copy;{{ year }} Thought Reactor, All Rights Reserved.
    </p>

    <div class="font-bold mt-4 flex items-center justify-center">
      <p>
        Built with
        <font-awesome-icon
          :icon="['fas', 'heart']"
          fixed-width
        ></font-awesome-icon
        >&nbsp;using
        <a
          href="https://vuejs.org"
          class="hover:underline hover:text-orange-300"
          >Vue</a
        >,
        <a
          href="https://gridsome.org"
          class="hover:underline hover:text-orange-300"
          >Gridsome</a
        >, and
        <a
          href="https://tailwindcss.com"
          class="hover:underline hover:text-orange-300"
          >TailwindCSS</a
        >. <br />Hosted on
        <a
          href="https://netflify.com"
          class="hover:underline hover:text-orange-300"
          >Netlify</a
        >.
      </p>
    </div>

    <div>
      <p class="mt-2 text-sm">
        This site is open source and can be found on
        <a
          class="hover:underline hover:text-orange-300"
          href="https://github.com/thoughtreactordm/tr2020"
          >GitHub</a
        >.
      </p>
    </div>
  </footer>
</template>

<script>
import Socials from "@/components/partials/Socials.vue";

export default {
  name: "site-footer",

  components: { Socials },

  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>
