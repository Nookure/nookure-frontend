<script setup>
import NavBarVue from "./components/NavBar.vue";
</script>

<template>
  <NavBarVue />
  <section>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </section>
  <div class="bg">
    <div class="content">
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <div :key="route.name">
            <component :is="Component"></component>
          </div>
        </transition>
      </router-view>
    </div>
  </div>
</template>
<style scoped>
@import "./assets/css/stars.css";

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}
.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-out {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

body {
  overflow: overlay;
}
:root {
  color-scheme: dark;
}
</style>
