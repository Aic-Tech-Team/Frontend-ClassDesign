<script setup lang="ts">
import { RouterView } from "vue-router";
import TargetCursor from "./blocks/TargetCursor/TargetCursor.vue";

import { useMediaQuery } from "@vueuse/core";

const isLargeScreen = useMediaQuery("(min-width: 768px)");
</script>

<template>
  <RouterView />
  <TargetCursor
    v-if="isLargeScreen"
    :spin-duration="5"
    :hide-default-cursor="true"
  />
</template>
