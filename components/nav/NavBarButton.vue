<script lang="ts" setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  tl: {
    type: String,
    required: true,
  },
  target: {
    type: String,
    default: "_self",
  },
});
</script>

<template>
  <li>
    <nuxt-link
      :target="target"
      :to="to"
      class="block py-2 pl-3 pr-4 text-red-white"
      aria-current="page"
      >{{ $t(tl) }}</nuxt-link
    >
  </li>
</template>

<style scoped>
.router-link-active {
  color: theme("colors.red.500");
  transition: color 0.1s ease-in-out;
}
</style>
