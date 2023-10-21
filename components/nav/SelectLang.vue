<script lang="ts" setup>
const { locale } = useI18n();

onBeforeMount(() => {
  const localStorageLang = localStorage.getItem("page_lang");

  if (localStorageLang) {
    handleLang(localStorageLang);
    return;
  }

  const browserLang = navigator.language;

  handleLang(browserLang);

  localStorage.setItem("page_lang", browserLang);
});

const en: lang = {
  key: "en",
  tl: "English",
  flag: "🇺🇸",
  iso: "en-US",
}

const es: lang = {
  key: "es",
  tl: "Español",
  flag: "🇪🇸",
  iso: "es-ES",
}

interface lang {
  key: string;
  tl: string;
  flag: string;
  iso: string;
}

const languages = [en.tl, es.tl];
const selected = ref(languages[0]);

watch(selected, (value) => {
  handleLang(value);
});

const handleLang = (key: string) => {
  if (key.toLowerCase().startsWith("es")) {
    locale.value = es.key;
    selected.value = es.tl;
    localStorage.setItem("page_lang", es.iso);
  } else {
    locale.value = en.key;
    selected.value = en.tl;
    localStorage.setItem("page_lang", en.iso);
  }
}

</script>

<template>
  <USelectMenu searchable class="block" v-model="selected" :options="languages"/>
</template>
