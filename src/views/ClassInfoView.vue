<template>
  <main
    class="relative isolate bg-linear-to-b from-brand-primary-900 via-brand-primary-500 to-brand-primary-700"
  >
    <Hero :text="heroText" />

    <div
      id="spotlight-card"
      class="relative isolate lg:px-20 px-4 xs:px-8 pointer-events-none sm:mt-32 mt-24 scroll-m-12"
    >
      <div
        class="bg-white/20 backdrop-blur-xs rounded-3xl p-4 xs:p-6 mx-auto flex gap-6 xs:gap-10 items-center max-lg:flex-col"
      >
        <figure
          class="rounded-2xl cursor-target overflow-hidden w-full max-w-[400px] shrink-0 xs:h-[580px] pointer-events-auto backdrop-blur-xs p-2"
        >
          <PixelCard
            variant="default"
            :gap="8"
            :speed="45"
            colors="#f8fafc,#f1f5f9,#cbd5e1"
            :no-focus="false"
            class-name="!size-full  border-none isolate rounded-xl overflow-hidden"
          >
            <img
              class="size-full object-cover absolute inset-0 -z-10"
              :src="scientistImage"
              :alt="scientistName"
            />
          </PixelCard>
        </figure>

        <section class="max-lg:text-center">
          <q
            class="text-lg 2xs:text-xl xs:text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-bold text-white"
          >
            {{ scientistName }}
          </q>

          <p
            class="text-base 2xl:text-lg text-justify lg:pe-4 leading-relaxed xl:leading-loose font-light text-white/75 mt-4 xs:mt-6"
          >
            {{ scientistDescription }}
          </p>
        </section>
      </div>
    </div>

    <footer
      class="mt-6 overflow-hidden sm:mt-10 lg:mt-20 relative pointer-events-none max-xl:h-[380px] max-lg:h-[350px]"
    >
      <svg
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150 h-full w-auto"
      >
        <path
          d="M 0,400 L 0,100 C 110.66666666666669,110.13333333333333 221.33333333333337,120.26666666666667 406,116 C 590.6666666666666,111.73333333333333 849.3333333333333,93.06666666666668 1034,88 C 1218.6666666666667,82.93333333333332 1329.3333333333335,91.46666666666667 1440,100 L 1440,400 L 0,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#2a1456"
          fill-opacity="0.53"
          class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <path
          d="M 0,400 L 0,233 C 170.13333333333333,211.8 340.26666666666665,190.6 499,191 C 657.7333333333333,191.4 805.0666666666666,213.39999999999998 960,224 C 1114.9333333333334,234.60000000000002 1277.4666666666667,233.8 1440,233 L 1440,400 L 0,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#2a1456"
          fill-opacity="1"
          class="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
      </svg>

      <section
        class="absolute bottom-10 left-0 w-full flex-col-center gap-8 px-10"
      >
        <img
          src="../assets/images/AIC_logo_white.png"
          alt="aic logo"
          class="w-40"
        />

        <p class="sm:text-sm text-center lg:text-lg text-white">
          ساخته شده با 🤍 انجمن علمی هوش مصنوعی
        </p>
      </section>
    </footer>

    <Particles
      :particle-count="2500"
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

    <TargetCursor
      v-if="isLargeScreen"
      :spin-duration="5"
      :hide-default-cursor="true"
    />
  </main>
</template>

<script setup lang="ts">
import { computed, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import Hero from "../components/Hero.vue";
import Particles from "../blocks/Particles/Particles.vue";
import PixelCard from "../blocks/PixelCard/PixelCard.vue";
import { useClassInfoStore } from "@/stores/classinfoStore";
import TargetCursor from "../blocks/TargetCursor/TargetCursor.vue";

import { useMediaQuery } from "@vueuse/core";

const isLargeScreen = useMediaQuery("(min-width: 768px)");

const route = useRoute();
const router = useRouter();
const classInfoStore = useClassInfoStore();

const fallbackHeroText = ["اطلاعات کلاس"];
const fallbackScientistName = "نام دانشمند";
const fallbackDescription = "توضیحات";
const fallbackImage = new URL("../assets/images/lotfi.jpg", import.meta.url)
  .href;

const classNumber = computed(() => Number(route.params.classNumber ?? 0));
const classInfo = computed(() => classInfoStore.classInfo);
const scientist = computed(() => classInfo.value?.scientist ?? null);

const heroText = computed(() => {
  const classNumber = classInfo.value?.class_number;
  const className = `${classNumber?.toString().length! < 3 ? "آتلیه" : "کلاس"} ${classNumber}`;
  return className && className.trim().length > 0
    ? [className]
    : fallbackHeroText;
});

const scientistName = computed(() => {
  const { value } = scientist;
  if (!value) {
    return fallbackScientistName;
  }

  const fullName = value.full_name?.trim();
  if (fullName) {
    return fullName;
  }

  const firstName = value.first_name?.trim() ?? "";
  const lastName = value.last_name?.trim() ?? "";
  const combined = `${firstName} ${lastName}`.trim();

  return combined || fallbackScientistName;
});

const scientistDescription = computed(() => {
  const description = scientist.value?.description?.trim();
  return description || fallbackDescription;
});

const scientistImage = computed(() => scientist.value?.image ?? fallbackImage);

const redirectHome = async () => {
  try {
    await router.replace({ name: "home" });
  } catch {
    window.location.href = "/";
  }
};

watchEffect(() => {
  if (
    !classNumber.value ||
    !classInfo.value ||
    classInfo.value.class_number !== classNumber.value
  ) {
    void redirectHome();
  }
});
</script>

<style scoped>
.path-0 {
  animation: pathAnim-0 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes pathAnim-0 {
  0% {
    d: path(
      "M 0,400 L 0,100 C 110.66666666666669,110.13333333333333 221.33333333333337,120.26666666666667 406,116 C 590.6666666666666,111.73333333333333 849.3333333333333,93.06666666666668 1034,88 C 1218.6666666666667,82.93333333333332 1329.3333333333335,91.46666666666667 1440,100 L 1440,400 L 0,400 Z"
    );
  }
  25% {
    d: path(
      "M 0,400 L 0,100 C 129.7333333333333,127.86666666666666 259.4666666666666,155.73333333333332 435,145 C 610.5333333333334,134.26666666666668 831.8666666666668,84.93333333333334 1007,71 C 1182.1333333333332,57.06666666666667 1311.0666666666666,78.53333333333333 1440,100 L 1440,400 L 0,400 Z"
    );
  }
  50% {
    d: path(
      "M 0,400 L 0,100 C 190.8,116.26666666666667 381.6,132.53333333333333 554,139 C 726.4,145.46666666666667 880.4000000000001,142.13333333333333 1025,134 C 1169.6,125.86666666666666 1304.8,112.93333333333334 1440,100 L 1440,400 L 0,400 Z"
    );
  }
  75% {
    d: path(
      "M 0,400 L 0,100 C 153.86666666666667,114.8 307.73333333333335,129.6 477,126 C 646.2666666666667,122.4 830.9333333333334,100.40000000000002 994,93 C 1157.0666666666666,85.59999999999998 1298.5333333333333,92.79999999999998 1440,100 L 1440,400 L 0,400 Z"
    );
  }
  100% {
    d: path(
      "M 0,400 L 0,100 C 110.66666666666669,110.13333333333333 221.33333333333337,120.26666666666667 406,116 C 590.6666666666666,111.73333333333333 849.3333333333333,93.06666666666668 1034,88 C 1218.6666666666667,82.93333333333332 1329.3333333333335,91.46666666666667 1440,100 L 1440,400 L 0,400 Z"
    );
  }
}

.path-1 {
  animation: pathAnim-1 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes pathAnim-1 {
  0% {
    d: path(
      "M 0,400 L 0,233 C 170.13333333333333,211.8 340.26666666666665,190.6 499,191 C 657.7333333333333,191.4 805.0666666666666,213.39999999999998 960,224 C 1114.9333333333334,234.60000000000002 1277.4666666666667,233.8 1440,233 L 1440,400 L 0,400 Z"
    );
  }
  25% {
    d: path(
      "M 0,400 L 0,233 C 146.93333333333334,212.86666666666667 293.8666666666667,192.73333333333332 457,206 C 620.1333333333333,219.26666666666668 799.4666666666667,265.93333333333334 966,276 C 1132.5333333333333,286.06666666666666 1286.2666666666667,259.5333333333333 1440,233 L 1440,400 L 0,400 Z"
    );
  }
  50% {
    d: path(
      "M 0,400 L 0,233 C 171.06666666666666,219.26666666666665 342.1333333333333,205.53333333333333 512,219 C 681.8666666666667,232.46666666666667 850.5333333333333,273.1333333333333 1005,280 C 1159.4666666666667,286.8666666666667 1299.7333333333333,259.93333333333334 1440,233 L 1440,400 L 0,400 Z"
    );
  }
  75% {
    d: path(
      "M 0,400 L 0,233 C 175.06666666666666,237.8 350.1333333333333,242.6 512,230 C 673.8666666666667,217.4 822.5333333333333,187.4 975,185 C 1127.4666666666667,182.6 1283.7333333333333,207.8 1440,233 L 1440,400 L 0,400 Z"
    );
  }
  100% {
    d: path(
      "M 0,400 L 0,233 C 170.13333333333333,211.8 340.26666666666665,190.6 499,191 C 657.7333333333333,191.4 805.0666666666666,213.39999999999998 960,224 C 1114.9333333333334,234.60000000000002 1277.4666666666667,233.8 1440,233 L 1440,400 L 0,400 Z"
    );
  }
}
</style>
