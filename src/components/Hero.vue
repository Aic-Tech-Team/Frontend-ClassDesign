<template>
  <header
    class="relative isolate w-full h-dvh bg-transparent flex-col-center pointer-events-none"
  >
    <img
      src="../assets/images/AIC_logo_white.png"
      alt="aic logo"
      class="w-24 absolute top-10 left-1/2 -translate-x-1/2"
    />

    <TextType
      :text="props.text"
      :typingSpeed="75"
      :pauseDuration="1500"
      :show-cursor="false"
      class="text-6xl sm:pt-12 sm:text-7xl lg:text-8xl xl:text-9xl font-black text-center"
    />

    <a
      href="#spotlight-card"
      class="cursor-target pointer-events-auto cursor-none border-2 mt-8 sm:mt-12 border-white rounded-full px-10 pt-2 pb-3 text-white text-xl lg:text-2xl"
    >
      بزن بریم
    </a>

    <div
      class="flex-row-center absolute bottom-20 start-10 rotate-90 gap-2 translate-y-20 max-lg:translate-x-28"
    >
      <div class="bg-linear-to-r from-white to-transparent h-px w-48 sm:w-60" />
      <p class="text-white sm:text-lg whitespace-nowrap">بیا پایین</p>
    </div>
  </header>
</template>

<script setup lang="ts">
import TextType from "../blocks/TextType/TextType.vue";

const props = defineProps<{
  text: string[];
}>();
</script>
