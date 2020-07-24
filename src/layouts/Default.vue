<template>
  <div class="layout">
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

  color: #85bbc2;
  text-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}

.button {
  background-color: #e04a02;
  color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

  transition: all 0.1s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background-color: darken(#e04a02, 15%);
  }
}

h1,
h2,
h3,
h4 {
  color: #ea4e02;
}
</style>
