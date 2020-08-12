<template>
  <section></section>
</template>

<script>
export default {
  name: "get-game",

  data() {
    return {
      platforms: [
        {
          name: "Itch.io",
          content: `<iframe
            frameborder="0"
            src="https://itch.io/embed/570688?bg_color=0f2e32&amp;fg_color=85bbc2&amp;link_color=EBBF00&amp;border_color=33555b"
            width="552"
            height="167"
            ><a href="https://thoughtreactor.itch.io/igeo-dx"
              >IGEO DX by Thought Reactor</a
            ></iframe
          >`,
        },
      ],
    };
  },
};
</script>
