<template>
  <nav class="">
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <NuxtLink to="/" class="flex items-center">
        <NuxtImg src="/img/logo-white.png" height="35px" class="mx-2" />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap text-white"
          >Nookure</span
        >
      </NuxtLink>
      <button
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-stone-500 hover:bg-stone-800 focus:ring-stone-600"
        aria-controls="navbar-default"
        aria-expanded="false"
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
      <div class="items-center md:order-2 md:block hidden">
        <ul
          class="flex flex-col font-medium p-2 md:p-0 mt-2 border rounded-lg md:flex-row md:space-x- md:mt-0 md:border-0"
        >
          <NavBarButton to="/" tl="Home" />
          <NavBarButton to="/products" tl="Products" />
          <NavBarButton
            to="https://mastaff.nookure.com/"
            tl="Docs"
            target="__blank"
          />
        </ul>
      </div>
    </div>
  </nav>
</template>
