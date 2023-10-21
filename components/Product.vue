<script lang="ts" setup>
import type Product from "~/interfaces/product";

defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true,
  },
});
</script>

<template>
  <div
    class="max-w-sm border rounded-lg shadow bg-gray-800 border-gray-700"
  >
    <img
      v-if="product.image"
      class="rounded-t-lg max-h-[180px] object-cover object-center w-full"
      :src="product.image"
      alt=""
    />

    <div class="p-5">
      <h5
        class="mb-2 text-2xl font-bold tracking-tight text-white"
      >
        {{ product.name }}
      </h5>
      <p class="mb-3 font-normal text-gray-400">
        {{ $t(product.description) }}
      </p>
      <a
        target="_blank"
        :href="product.url"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-cente rounded-lg focus:ring-4 focus:outline-none bg-red-400 hover:bg-red-500 focus:ring-red-700 transition-all duration-500"
      >
        {{ $t('resource.visitPage') }}
        <svg
          class="w-3.5 h-3.5 ml-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>
</template>
