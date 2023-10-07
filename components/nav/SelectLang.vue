<script lang="ts" setup>
const { locale } = useI18n();

const en: lang = {
  key: "en",
  tl: "English",
  flag: "🇺🇸",
}

const es: lang = {
  key: "es",
  tl: "Español",
  flag: "🇪🇸",
}

interface lang {
  key: string;
  tl: string;
  flag: string;
}

const languages = [en.tl, es.tl];
const selected = ref(languages[0]);

watch(selected, (value) => {
  if (value === "English") {
    locale.value = "en";
  } else if (value === "Español") {
    locale.value = "es";
  }
});

</script>

<template>
  <USelectMenu searchable class="block" v-model="selected" :options="languages"/>
</template>
