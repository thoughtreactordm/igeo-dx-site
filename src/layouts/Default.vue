<template>
  <div class="layout">
    <div class="background"></div>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,700;0,900;1,400&display=swap");

body {
  font-family: "Nunito Sans", -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;

  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#0e3c43+0,061e24+100 */
  background: rgb(14, 60, 67); /* Old browsers */
  background: -moz-radial-gradient(
    center,
    ellipse cover,
    rgba(14, 60, 67, 1) 0%,
    rgba(6, 30, 36, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-radial-gradient(
    center,
    ellipse cover,
    rgba(14, 60, 67, 1) 0%,
    rgba(6, 30, 36, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(
    ellipse at center,
    rgba(14, 60, 67, 1) 0%,
    rgba(6, 30, 36, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0e3c43', endColorstr='#061e24',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */

  background-position-x: center;
  background-repeat: no-repeat;
  background-attachment: fixed;

  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
}

.background {
  position: fixed;
  width: 100%;
  opacity: 0.35;
  filter: blur(5px);
  height: 600px;
  background-image: url("../assets/img/bg.png");
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: contain;
  pointer-events: none;
  z-index: -1;
}
</style>
