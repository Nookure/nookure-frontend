<script lang="ts" setup>
const goUp = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <div>
    <footer class="bg-stone-800 rounded-lg shadow m-4">
      <div class="mx-auto max-w-screen-lg p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <nuxt-link to="/" class="flex items-center">
              <NuxtImg src="/img/logo.png" height="30px" class="mx-2" />
              <span
                class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                >Nookure Studios</span
              >
            </nuxt-link>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2
                class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
              >
                {{ $t("footer.resources") }}
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <nuxt-link
                    to="https://maven.nookure.com"
                    target="__blank"
                    class="hover:underline"
                    >Maven Repo</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    to="https://javadocs.nookure.com/"
                    target="__blank"
                    class="hover:underline"
                    >Javadocs</nuxt-link
                  >
                </li>
              </ul>
            </div>
            <div>
              <h2
                class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
              >
                {{ $t("footer.followUs") }}
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <a href="https://github.com/Nookure" class="hover:underline"
                    >GitHub</a
                  >
                </li>
                <li>
                  <a href="https://discord.nookure.com/" class="hover:underline"
                    >Discord</a
                  >
                </li>
              </ul>
            </div>
            <div>
              <h2
                class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
              >
                {{ $t("footer.accounts") }}
              </h2>
              <ul class="text-gray-500 dark:text-gray-400 font-medium">
                <li class="mb-4">
                  <nuxt-link
                    target="_blank"
                    to="https://builtbybit.com/members/angelillo.321679/"
                    class="hover:underline"
                    >BuiltByBit</nuxt-link
                  >
                </li>
                <li>
                  <nuxt-link
                    target="_blank"
                    to="https://www.spigotmc.org/members/angelillo1508.1344043/"
                    class="hover:underline"
                    >SpigotMC</nuxt-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr
          class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
        />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
            >© {{ new Date().getFullYear() }} Nookure. {{ $t("footer.copyright") }}
          </span>
          <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <nuxt-link
              to="https://discord.nookure.com"
              target="_blank"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path
                  d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"
                />
              </svg>
              <span class="sr-only">Discord Community</span>
            </nuxt-link>
            <nuxt-link
              to="https://github.com/Nookure"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span class="sr-only">GitHub Profile</span>
            </nuxt-link>
            <nuxt-link
              @click="goUp"
              class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <UIcon name="i-heroicons-arrow-small-up" class="w-4 h-4" />
              <span class="sr-only">Go up</span>
            </nuxt-link>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
