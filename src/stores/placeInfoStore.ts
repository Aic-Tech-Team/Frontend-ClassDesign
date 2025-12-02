import { defineStore } from "pinia";
import { ref } from "vue";
import type { PlaceInfo } from "@/types/api/placeInfo";

export const usePlaceInfoStore = defineStore("placeInfo", () => {
  const STORAGE_KEY = "place-information";

  const loadFromStorage = (): PlaceInfo | null => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (!stored) {
      return null;
    }

    try {
      return JSON.parse(stored) as PlaceInfo;
    } catch (error) {
      console.warn("[classInfoStore] Failed to parse stored class info", error);
      sessionStorage.removeItem(STORAGE_KEY);
      return null;
    }
  };

  const placeInfo = ref<PlaceInfo | null>(loadFromStorage());

  const setPlaceInfo = (payload: PlaceInfo) => {
    placeInfo.value = payload;
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  };

  const clearPlaceInfo = () => {
    placeInfo.value = null;
    sessionStorage.removeItem(STORAGE_KEY);
  };

  return {
    placeInfo,
    setPlaceInfo,
    clearPlaceInfo,
  };
});
