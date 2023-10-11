<template>
  <nav class="">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <NuxtLink to="/" class="flex items-center md:w-1/2">
        <NuxtImg src="/img/logo-white.png" height="35px" class="mx-2" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >Nookure</span
        >
      </NuxtLink>
      <button
        type="button"
        class="inline-flex items-center md:w-1/2 p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-stone-500 hover:bg-stone-800 focus:ring-stone-600"
        aria-controls="navbar-default"
        aria-expanded="false"
        @click="toggleNav"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="items-center md:block flex-wrap hidden">
        <ul
          class="flex flex-col font-medium p-2 md:p-0 mt-2 border rounded-lg md:flex-row md:space-x- md:mt-0 md:border-0"
        >
          <NavBarButton
            v-for="page in pages"
            :key="page.to"
            :to="page.to"
            :tl="page.tl"
            :target="page.target"
          />

          <NavSelectLang />
        </ul>
      </div>
    </div>
    <div
      class="items-center md:hidden md:w-full flex-wrap transition-transform navbar-mobile navbar-mobile-hide"
      id="navbar-mobile"
    >
      <ul
        class="flex flex-col font-medium p-2 md:p-0 mt-2 rounded-lg md:flex-row md:space-x- md:mt-0 bg-stone-800 m-2"
      >
        <NavBarButton
          v-for="page in pages"
          :key="page.to"
          :to="page.to"
          :tl="page.tl"
          :target="page.target"
        />

        <NavSelectLang />
      </ul>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { useRoute } from "#vue-router";
const route = useRoute();
const pages = [
  {
    to: "/",
    tl: "nav.home",
  },
  {
    to: "/products",
    tl: "nav.products",
  },
  {
    to: "https://mastaff.nookure.com/",
    tl: "nav.docs",
    target: "__blank",
  },
];

const toggleNav = () => {
  const mobileNav = document.getElementById("navbar-mobile");
  if (mobileNav == null) return;

  mobileNav.classList.toggle("navbar-mobile-hide");
};

watch(route, () => {
  const mobileNav = document.getElementById("navbar-mobile");
  if (mobileNav == null) return;

  mobileNav.classList.add("navbar-mobile-hide");
});
</script>

<style>
.navbar-mobile {
  position: fixed;
  width: 100%;
  transition: all 0.5s ease-in-out;
  transform: translateY(0);
}

.navbar-mobile-hide {
  transform: translateY(-2000px);
}
</style>

<style scoped>
nav {
  z-index: 999999 !important;
}
</style>