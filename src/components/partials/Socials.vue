<template>
  <div class="m-4 flex flex-wrap items-center justify-center">
    <a
      v-for="social in socials"
      :href="social.url"
      :title="social.label"
      :key="social.icon"
      class="social-icon p-2 hover:text-orange-700"
      target="_blank"
    >
      <font-awesome-icon
        :icon="['fab', social.icon]"
        :size="size"
      ></font-awesome-icon>
    </a>
  </div>
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
