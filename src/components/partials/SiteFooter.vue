<template>
  <footer class="bg-gradient-t-footer xs:p-4 sm:p-16 mt-8 text-center text-teal-600">
    <socials size="2x" />

    <div class="mt-8">
      <div class="flex justify-center">
        <g-link href="https://mindnumbinteractive.com" title="Thought Reactor">
          <g-image
            src="~/assets/img/mindnumb_white.svg"
            class="logo p-4 opacity-50 hover:opacity-100"
            alt="Mindnumb Interactive Logo"
            style="max-width: 120px; filter: drop-shadow(2px 2px 10px rgba(0,0,0,0.2);"
          ></g-image>
        </g-link>
      </div>

      <p class="font-bold">IGEO DX&copy;{{ year }} Mindnumb Interactive, All Rights Reserved.</p>

      <div class="font-bold mt-4 flex items-center justify-center">
        <p>
          Built with
          <font-awesome-icon :icon="['fas', 'heart']" fixed-width></font-awesome-icon>&nbsp;using
          <a href="https://vuejs.org" class="hover:underline hover:text-yellow-500">Vue</a>,
          <a href="https://gridsome.org" class="hover:underline hover:text-yellow-500">Gridsome</a>, and
          <a
            href="https://tailwindcss.com"
            class="hover:underline hover:text-yellow-500"
          >TailwindCSS</a>.
          <br />Hosted on
          <a
            href="https://netflify.com"
            class="hover:underline hover:text-yellow-500"
          >Netlify</a>.
        </p>
      </div>

      <div>
        <p class="mt-2 text-sm">
          This site is open source and can be found on
          <a
            class="hover:underline hover:text-yellow-500"
            href="https://github.com/thoughtreactordm/igeo-dx-site"
          >GitHub</a>.
        </p>
      </div>
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
