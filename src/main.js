// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library, layer } from "@fortawesome/fontawesome-svg-core";
import { faTwitch } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faItchIo } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faSteam } from "@fortawesome/free-brands-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";

library.add(
  faItchIo,
  faTwitch,
  faTwitter,
  faDiscord,
  faInstagram,
  faHeart,
  faTimes,
  faSteam,
  faNewspaper
);

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("font-awesome-icon", FontAwesomeIcon);

  head.meta.push({
    name: "description",
    content:
      "Challenging game where you solve spatial and logic puzzles by pushing and combining like-shapes",
  });

  head.meta.push({
    name: "theme-color",
    content: "#EBBF00",
  });

  head.meta.push({
    name: "keywords",
    content:
      "puzzle, game, igeo, challenging, logic, isometric, hard games, brain games, brain teaser, pc game",
  });

  head.script.push({
    type: "application/ld+json",
    json: {
      "@context": "http://schema.org",
      "@type": "VideoGame",
      name: "IGEO DX",
      url: "https://igeogame.com",
      sameAs: [
        "https://twitter.com/igeogame",
        "https://instagram.com/igeodx",
        "https://store.steampowered.com/app/659360/IGEO_DX/",
        "https://thoughtreactor.itch.io/igeo-dx",
      ],
      author: {
        "@type": "Organization",
        name: "Thought Reactor",
        url: "https://thought-reactor.net",
      },
      publisher: "Thought Reactor",
      genre: ["Puzzle", "Arcade", "Logic"],
      gamePlatform: ["Microsoft Windows", "Apple MacOS"],
    },
  });
}
