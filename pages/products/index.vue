<script lang="ts" setup>
import products from '~/data/products';
const { t } = useI18n();

useHead({
  title: t("products.meta.title"),
  meta: [
    {
      name: "description",
      content: t("products.meta.description"),
    },
  ],
});
</script>

<template>
  <header class="text-center pulse xl:text-7xl md:text-6xl text-4xl my-8">
    <h1 v-html="$t('resource.header')" />
  </header>

  <section class="flex justify-center mt-24 flex-wrap gap-4 my-16">
    <Product v-for="product in products" :key="product.name" :product="product" />
  </section>
</template>
