<script setup lang="ts">
import { onMounted } from "vue";
import { useClassInfoApi } from "@/composables/api/useClassInfoApi";
import { useRoute, useRouter } from "vue-router";
import { useClassInfoStore } from "@/stores/classinfoStore";

const route = useRoute();
const router = useRouter();

const { getClassInfoAsync } = useClassInfoApi();
const classInfoStore = useClassInfoStore();

onMounted(async () => {
  try {
    const id = Number(route.params.id);
    const classInfo = await getClassInfoAsync(id);
    const classNumber = classInfo.class_number;

    if (classNumber) {
      classInfoStore.setClassInfo(classInfo);
      router.replace({
        name: "class-info",
        params: { classNumber },
      });
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
