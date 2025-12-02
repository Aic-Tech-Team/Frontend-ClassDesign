import { useApiConfig } from "@/composables/api/useApiConfig";
import axios from "axios";
import { appConfig } from "@/config";
import type { PlaceInfo, PlaceType } from "@/types/api/placeInfo";
import { useRouter } from "vue-router";

export const usePlaceInfoApi = () => {
  const { apiEndpoints } = useApiConfig();
  const { apiBaseUrl } = appConfig;
  const router = useRouter();

  const redirectToNotFound = async () => {
    try {
      await router.replace({ name: "not-found" });
    } catch {
      window.location.href = "/404";
    }
  };

  async function getPlaceInfoAsync(type: Lowercase<PlaceType>, number: number): Promise<PlaceInfo> {
    const url = apiEndpoints.placeInfo(type, number);
    try {
      const httpResponse = await axios.get<PlaceInfo>(url);
      const placeInfoResponse: PlaceInfo | null = httpResponse.data ?? null;

      if (
        !placeInfoResponse ||
        !placeInfoResponse.place_id ||
        !placeInfoResponse.scientist ||
        !placeInfoResponse.scientist.id
      ) {
        await redirectToNotFound();
        throw new Error("Place info not found");
      }

      placeInfoResponse.scientist.image = `${apiBaseUrl}/${placeInfoResponse.scientist.image}`;

      return placeInfoResponse;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        await redirectToNotFound();
      }

      throw error;
    }
  }

  return { getPlaceInfoAsync };
};
