import { defineStore } from "pinia";
import { ref } from "vue";
import type { ClassInfo } from "@/types/api/classInfo";

export const useClassInfoStore = defineStore("classInfo", () => {
  const STORAGE_KEY = "class-info";

  const loadFromStorage = (): ClassInfo | null => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return null;
    }

    try {
      return JSON.parse(stored) as ClassInfo;
    } catch (error) {
      console.warn("[classInfoStore] Failed to parse stored class info", error);
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
  };

  const classInfo = ref<ClassInfo | null>(loadFromStorage());

  const setClassInfo = (payload: ClassInfo) => {
    classInfo.value = payload;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  };

  const clearClassInfo = () => {
    classInfo.value = null;
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    classInfo,
    setClassInfo,
    clearClassInfo,
  };
});
