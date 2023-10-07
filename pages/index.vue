<template>
  <Welcome />
  <FeatureFeatures />
</template>

<script lang="ts" setup>
const  { t } = useI18n()
useHead({
  title: t('index.meta.title'),
})
</script>