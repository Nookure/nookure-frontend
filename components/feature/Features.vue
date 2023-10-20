<template>
  <div
    class="bg-stone-800 grid md:grid-cols-3 lg:grid-cols-4 mt-96 auto-rows-max m-4 pb-4 rounded-lg"
    id="features"
  >
    <Feature v-for="feature in features" :key="feature.title" :icon="feature.icon" :title="feature.title" :description="feature.description" />
  </div>
</template>

<script lang="ts" setup>
interface feature {
  icon: string;
  title: string;
  description: string;
}

const features: feature[] = [
  {
    icon: "i-heroicons-arrow-trending-up",
    title: "index.features.scalability.header",
    description: "index.features.scalability.description",
  },
  {
    icon: "i-heroicons-swatch",
    title: "index.features.customization.header",
    description: "index.features.customization.description",
  },
  {
    icon: "i-heroicons-lock-closed",
    title: "index.features.security.header",
    description: "index.features.security.description",
  },
  {
    icon: "i-heroicons-clipboard-document-check",
    title: "index.features.quality.header",
    description: "index.features.quality.description",
  },
];
</script>
