<template>
  <Welcome />
  <FeatureFeatures />
</template>

<script lang="ts" setup>
const { t } = useI18n();
useHead({
  title: t("index.meta.title"),
  meta: [
    {
      name: "description",
      content: t("index.meta.description"),
    },
  ],
});
</script>
