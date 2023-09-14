<template>
  <div class="flex items-center justify-center align-middle flex-col h-full">
    <h1 class="xl:text-9xl md:text-8xl text-6xl">Welcome to <span class="nookure-welcome">Nookure</span></h1>
    <h2 class="xl:text-5xl md:text-4xl text-2xl text-stone-400">Where your ideas become code</h2>
  </div>
</template>

<style scoped>
div {
  padding-top: 25vh;
}

h1 {
  text-align: center;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: pulse 5s ease infinite;
}

h2 {
  text-align: center;
  font-weight: 400;
}

.nookure-welcome {
  background: #cf3030;
  background: radial-gradient(
    circle farthest-corner at center center,
    #cf3030 0%,
    #ff6666 50%,
    #ba5959 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient 5s ease infinite;
}

@keyframes gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulse {
  0% {
    filter: drop-shadow(0 0 80px #fc4a4a);
  }
  50% {
    filter: drop-shadow(0 0 40px #fc4a4a);
  }
  100% {
    filter: drop-shadow(0 0 80px #fc4a4a);
  }
}
</style>
