<template>
  <section class="bg-yellow-500 mt-8 shadow-xl">
    <div class="tabs flex justify-start">
      <button
        v-for="p in platforms"
        :key="p.name"
        @click="setContent(p)"
        class="px-4 py-2 bg-yellow-500 hover:bg-yellow-700 hover:text-yellow-100"
        :class="{
          'bg-yellow-800 text-yellow-100': currentContent === p.name,
          'text-yellow-900': currentContent !== p.name,
        }"
      >
        <font-awesome-icon
          :icon="['fab', p.icon]"
          fixed-width
        ></font-awesome-icon>
        {{ p.name }}
      </button>
    </div>

    <div class="content flex justify-center bg-yellow-800 p-4">
      <div v-for="p in currentPlatform" :key="p.name">
        <div v-html="p.content" class="hidden md:block"></div>
        <div class="visible md:hidden">
          <a
            :href="p.link"
            target="_blank"
            class="block bg-orange-500 text-white px-8 py-6 m-8"
          >
            {{ p.buttonLabel }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "get-game",

  data() {
    return {
      platforms: [
        {
          name: "Itch.io",
          icon: "itch-io",
          content: `<iframe
            frameborder="0"
            src="https://itch.io/embed/570688?bg_color=0f2e32&amp;fg_color=85bbc2&amp;link_color=EBBF00&amp;border_color=33555b"
            width="552"
            height="167"
            ><a href="https://thoughtreactor.itch.io/igeo-dx"
              >IGEO DX by Thought Reactor</a
            ></iframe
          >`,
          buttonLabel: "Download at Itch.io",
          link: "https://thoughtreactor.itch.io/igeo-dx",
        },
        {
          name: "Steam",
          icon: "steam",
          content: `<iframe src="https://store.steampowered.com/widget/659360/" frameborder="0" width="646" height="190"></iframe>`,
          buttonLabel: "Wishlist on Steam",
          link: "https://store.steampowered.com/app/659360/IGEO_DX/",
        },
      ],
      currentContent: "Steam",
    };
  },

  computed: {
    currentPlatform() {
      return this.platforms.filter((p) => {
        return p.name === this.currentContent;
      });
    },
  },

  methods: {
    setContent(c) {
      this.currentContent = c.name;
    },
  },
};
</script>
