<script setup lang="ts">
import { onMounted } from "vue";
import { useClassInfoApi } from "@/composables/api/useClassInfoApi";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const { getClassInfoAsync } = useClassInfoApi();

onMounted(async () => {
  try {
    const id = Number(route.params.id);
    const response = await getClassInfoAsync(id);

    const classNumber = response.number;

    if (classNumber) {
      router.replace(`/class-info/${classNumber}`);
    } else {
      console.error("Class number not found in API response");
    }
  } catch (err) {
    console.error("Failed to fetch class info:", err);
  }
});
</script>

<template>
  <div class="text-center p-10">
    <p class="text-lg font-semibold">در حال انتقال به صفحه کلاس...</p>
  </div>
</template>
