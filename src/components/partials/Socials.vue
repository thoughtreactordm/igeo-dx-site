<template>
  <section class="socials m-4">
    <h4 class="font-black text-3xl uppercase text-yellow-500">Keep up with us</h4>

    <div class="flex flex-wrap items-center justify-center text-orange-500">
      <a
        v-for="social in socials"
        :href="social.url"
        :title="social.label"
        :key="social.icon"
        class="social-icon p-2 hover:text-yellow-500"
        target="_blank"
      >
        <font-awesome-icon :icon="['fab', social.icon]" :size="size"></font-awesome-icon>
      </a>
    </div>

    <div class="mt-8">
      <h5 class="text-2xl text-yellow-500 font-black uppercase">Gaming Journo?</h5>
      <a
        class="text-2xl font-black uppercase text-orange-500 hover:text-yellow-500"
        href="https://www.indiedb.com/games/igeo-dx/presskit"
        target="_blank"
      >Press Kit</a>
    </div>
  </section>
</template>

<script>
export default {
  name: "socials",

  props: {
    size: {
      type: String,
      default: "lg",
    },
  },

  data() {
    return {
      socials: [
        {
          icon: "steam",
          label: "IGEO DX on Steam",
          url: "https://store.steampowered.com/app/659360/IGEO_DX/",
        },
        {
          icon: "itch-io",
          label: "IGEO DX at Itch.io",
          url: "https://thoughtreactor.itch.io/igeo-dx",
        },
        {
          icon: "twitter",
          label: "@igeogame on Twitter",
          url: "https://twitter.com/igeogame",
        },
        {
          icon: "instagram",
          label: "@igeodx on Instagram",
          url: "https://instagram.com/igeodx",
        },
        {
          icon: "discord",
          label: "IGEO DX Official Discord",
          url: "https://discord.gg/rBwgB6w",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
a.social-icon {
  transition: all 150ms ease-in-out;

  &:hover {
    transform: scale(1.05) translateY(-2px);
  }
}
</style>
