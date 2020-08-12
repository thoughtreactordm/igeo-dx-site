<template>
  <transition name="lightbox" mode="out-in">
    <div
      class="fixed w-screen h-screen bg-black bg-opacity-75 z-50 flex justify-center items-center"
      v-if="active"
      @dblclick="$emit('lightbox-close')"
    >
      <div class="absolute right-0 top-0 text-white p-8">
        <button class="text-white hover:text-yellow-500" @click="$emit('lightbox-close')">
          <font-awesome-icon :icon="['fas', 'times']" size="2x" class="ml-2"></font-awesome-icon>
        </button>
      </div>
      <div>
        <div class="p-0 md:p-16">
          <g-image :src="require(`!!assets-loader!@images/${image}`)"></g-image>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "lightbox",

  props: {
    image: { type: String, default: "" },
    active: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss">
.lightbox-enter-active,
.lightbox-leave-active {
  transition: all 0.1s ease-in-out;
}
.lightbox-enter,
.lightbox-leave-to {
  opacity: 0;
  transform: scale(0.75);
}
</style>