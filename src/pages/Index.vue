<template>
  <Layout>
    <section class="showcase py-8 sm:py-16 w-full">
      <div class="container mx-auto md:px-16 flex flex-col items-center lg:text-center text-xl">
        <g-link href="https://igeogame.com" title="IGEO DX Logo">
          <g-image
            src="~/assets/img/igeo_logo.png"
            class="logo mb-2 sm:mb-4 p-4 sm:p-0"
            alt="Thought Reactor Logo"
          ></g-image>
        </g-link>

        <div class="info flex flex-col lg:items-center mt-8 text-center">
          <h1
            class="text-orange-700 text-4xl md:text-5xl text-shadow leading-tight font-black uppercase"
          >Play the Alpha</h1>
          <h2
            class="xs:text-2xl sm:text-3xl text-shadow leading-tight font-light uppercase mb-8"
          >Available for PC and Mac</h2>

          <div class="video w-full p-8 lg:p-16">
            <vimeo id="441158036"></vimeo>
          </div>

          <div class="info-body lg:p-8">
            <h3
              class="text-3xl uppercase font-black text-yellow-500"
            >Casual Approach. Punishing Execution.</h3>
            <p class="text-2xl my-6">
              IGEO DX is a
              <em>Sokoban</em>-style puzzler with mechanically simple but challenging gameplay. Push and combine like-shapes to solve increasingly complex spatial and logic puzzles.
            </p>

            <p class="text-2xl my-6 mt-16">
              <strong>The game is currently available for free in Open Alpha through Itch.io.</strong>
            </p>

            <a
              class="bg-orange-700 hover:bg-yellow-600 text-white py-2 px-6 text-2xl"
              href="https://thoughtreactor.itch.io/igeo-dx"
            >Download Now at Itch.io!</a>
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
    title: "Challenging Sokoban-style puzzler"
  },

  components: { Vimeo, SiteFooter }
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
