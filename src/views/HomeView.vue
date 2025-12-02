<script setup lang="ts">
import Particles from "../blocks/Particles/Particles.vue";
import TextType from "../blocks/TextType/TextType.vue";
</script>

<template>
  <main
    class="relative isolate bg-linear-to-br  from-brand-primary-900 via-brand-primary-500 to-brand-primary-700 h-dvh w-dvw"
  >
    <img
      src="../assets/images/AIC_logo_white.png"
      alt="aic logo"
      class="w-24 absolute top-10 left-1/2 -translate-x-1/2"
    />

    <div
      class="absolute pt-10 sm:pt-16 flex-col-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6 sm:px-10 pointer-events-none w-full"
    >
      <TextType
        text="توسعه دهندگان مشغول کارند..."
        :typingSpeed="75"
        :pauseDuration="1500"
        :show-cursor="false"
        class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-center w-full"
      />
    </div>

    <Particles
      :particle-count="500"
      :particle-spread="10"
      :speed="0.1"
      :particle-colors="['#ffffff']"
      :move-particles-on-hover="true"
      :particle-hover-factor="1"
      :alpha-particles="true"
      :particle-base-size="100"
      :size-randomness="1"
      :camera-distance="20"
      :disable-rotation="false"
      class="-z-10 size-auto"
    />
  </main>
</template>

<style>
.cls-1 {
  fill: #f2f2f2;
}

.cls-2 {
  fill: #f2f2f2;
}

.cls-3 {
  fill: #f2f2f2;
}

.cls-4 {
  fill: #f2f2f2;
}
</style>
