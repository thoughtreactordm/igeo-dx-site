<template>
  <Layout>
    <section class="showcase py-16 lg:py-32 w-full">
      <div
        class="container mx-auto md:px-16 flex flex-col items-center lg:text-center text-xl"
      >
        <g-link href="https://igeogame.com" title="IGEO DX Logo">
          <g-image
            src="~/assets/img/igeo_logo.png"
            class="logo mb-4"
            alt="Thought Reactor Logo"
          ></g-image>
        </g-link>

        <div class="info flex flex-col lg:items-center mt-8">
          <h1
            class="xs:text-3xl sm:text-5xl text-shadow leading-tight font-black uppercase"
          >
            Play the Open Alpha Now!
          </h1>
          <h1
            class="xs:text-2xl sm:text-3xl text-shadow leading-tight font-light uppercase"
          >
            Available for PC and Mac
          </h1>

          <div class="info-body lg:p-8">
            <p class="text-2xl my-6">
              Casual in it's approach but punishing in it's execution, IGEO is a
              Sokoban-style puzzler. Mechanically simple but challenging,
              players will push and combine like-shapes to solve increasingly
              complex spatial and logic puzzles.
            </p>

            <a
              class="button py-2 px-6 text-2xl"
              href="https://thoughtreactor.itch.io/igeo-dx"
              >Download Now at Itch.io!</a
            >
          </div>

          <div class="video xs:my-8 lg:my-0 w-full">
            <vimeo id="441158036"></vimeo>
          </div>
        </div>
      </div>
    </section>

    <site-footer></site-footer>
  </Layout>
</template>

<script>
import Vimeo from "../components/widgets/Vimeo.vue";
import SiteFooter from "../components/partials/SiteFooter.vue";

export default {
  metaInfo: {
    title: "Challenging Sokoban-style puzzler",
  },

  components: { Vimeo, SiteFooter },
};
</script>

<style lang="scss" scoped>
section.showcase {
  height: 100%;

  div.video-container {
    box-shadow: 0 15px 20px rgba(6, 31, 36, 1);
  }
}
</style>
