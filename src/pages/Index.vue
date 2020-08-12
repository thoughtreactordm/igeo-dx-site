<template>
  <Layout>
    <lightbox
      :active="lightbox"
      :image="currentScreenshot"
      @lightbox-close="closed"
    />
    <section class="showcase py-8 w-full">
      <div
        class="container mx-auto md:px-16 flex flex-col items-center text-center text-xl"
      >
        <g-link href="https://igeogame.com" title="IGEO DX Logo">
          <g-image
            src="~/assets/img/igeo_logo.png"
            class="logo p-2 sm:p-0"
            alt="IGEO DX Logo"
          ></g-image>
        </g-link>

        <h1
          class="text-center text-2xl md:text-4xl lg:w-3/5 font-bold text-white leading-none my-16"
        >
          Solve challenging spatial logic puzzles by pushing and combining
          like-shapes
        </h1>

        <!-- VIDEO -->
        <div class="w-full">
          <div class="video w-full p-2 md:px-16">
            <vimeo
              id="441158036"
              class="border-2 border-teal-700 hover:border-yellow-500"
            ></vimeo>
          </div>
        </div>

        <!-- SCREENSHOTS -->
        <div class="screenshots flex justify-around px-2 py-4 md:px-16 md:py-8">
          <a
            v-for="(s, index) in screenshots"
            :key="'ss_' + index"
            :title="'IGEO Screenshot #' + (index + 1)"
            class="border-2 border-teal-700 hover:border-yellow-500"
            href="javascript:void(0);"
            @click="openScreenshot(s)"
            :class="{ 'mr-2': index < screenshots.length - 1 }"
          >
            <g-image
              :src="require(`!!assets-loader!@images/${s}`)"
              :alt="'IGEO Screenshot #' + (index + 1)"
            />
          </a>
        </div>

        <!-- BODY CONTENT -->
        <div
          class="info-body p-2 py-8 lg:p-16 bg-teal-900 mt-8 text-teal-200 shadow-lg bg-opacity-75 md:border-2 md:border-yellow-500"
        >
          <h2
            class="text-3xl md:text-4xl text-yellow-500 font-black uppercase leading-tight mb-4"
          >
            Casual But Challenging
          </h2>
          <p class="mb-8 md:text-2xl">
            Casual in it's approach but punishing in it's execution, IGEO DX is
            a fun and rewarding Sokoban-style puzzle game. Mechanically simple
            but challenging, players will push and combine like-shapes to solve
            increasingly complex spatial and logic puzzles.
          </p>

          <p class="mb-8 md:text-2xl">
            The goal is simple:
            <strong>clear the board</strong>. To remove shapes from the board
            players will have to push two of the same shape together. Combining
            shapes can have different effects and
            <em>combining unlike shapes results in a game over</em>.
          </p>

          <p class="mb-16 md:text-2xl">
            It's not always so simple! With pits and walls, the player must move
            precisely to keep from falling off the board or trapping a shape in
            a tough spot.
          </p>

          <h3 class="text-3xl md:text-4xl text-yellow-500 font-black uppercase">
            Where Can I Get It?
          </h3>

          <p class="text-2xl font-bold mb-2">
            The game is currently available for free in Open Alpha through
            Itch.io.
          </p>
        </div>
      </div>
    </section>

    <site-footer></site-footer>
  </Layout>
</template>

<script>
import Vimeo from "../components/widgets/Vimeo.vue";
import Lightbox from "../components/widgets/Lightbox.vue";
import SiteFooter from "../components/partials/SiteFooter.vue";

export default {
  metaInfo: {
    title: "Challenging spatial & logic game",
  },

  components: { Vimeo, Lightbox, SiteFooter },

  data() {
    return {
      screenshots: [
        "Alpha_SS005.png",
        "Alpha_SS006.png",
        "Alpha_SS007.png",
        "Alpha_SS008.png",
      ],
      currentScreenshot: "",
      lightbox: false,
    };
  },

  methods: {
    openScreenshot(image) {
      this.currentScreenshot = image;
      this.lightbox = true;
    },
    closed() {
      this.lightbox = false;
    },
  },
};
</script>

<style lang="scss" scoped>
section.showcase {
  height: 100%;

  div.video-container {
    box-shadow: 0 15px 20px rgba(6, 31, 36, 1);
  }
}

.screenshots {
  a {
    transition: all 0.1s ease-in-out;
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);

    &:hover {
      transform: scale(1.05);
      box-shadow: 6px 6px 7px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
