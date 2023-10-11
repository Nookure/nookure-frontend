<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  }
})

</script>

<template>
  <div class="text-center max-w-3xl xl:mx-10 border-stone-500 py-6">
    <div class="bg-stone-900 m-3 rounded-lg p-4 inline-block">
      <UIcon :name="icon" class="text-6xl text-stone-400 " />
    </div>
    <h3 class="text-3xl">{{ $t(title) }}</h3>

    <p class="text-stone-400 text-xl mt-2" >{{ $t(description) }}</p>
  </div>
</template>