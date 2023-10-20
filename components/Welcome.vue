<template>
  <div class="flex items-center justify-center align-middle flex-col h-full">
    <h1 class="xl:text-9xl md:text-8xl text-6xl pulse">{{ $t('index.welcome.header') }} <span class="red-glow-gradient">Nookure</span></h1>
    <h2 class="xl:text-5xl md:text-4xl text-2xl text-stone-400">{{ $t('index.welcome.subHeader') }}</h2>
  </div>
</template>

<style scoped>
div {
  padding-top: 25vh;
}

h2 {
  text-align: center;
  font-weight: 400;
}
</style>
