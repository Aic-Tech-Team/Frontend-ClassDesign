import { useApiConfig } from "@/composables/api/useApiConfig";
import axios from "axios";
import { appConfig } from "@/config";
import type { ClassInfo } from "@/types/api/classInfo";
import { useRouter } from "vue-router";

export const useClassInfoApi = () => {
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

  async function getClassInfoAsync(id: number): Promise<ClassInfo> {
    const url = apiEndpoints.classInfo(id);
    try {
      const httpResponse = await axios.get<ClassInfo>(url);
      const classInfoResponse: ClassInfo | null = httpResponse.data ?? null;

      if (
        !classInfoResponse ||
        !classInfoResponse.class_id ||
        !classInfoResponse.scientist ||
        !classInfoResponse.scientist.id
      ) {
        await redirectToNotFound();
        throw new Error("Class info not found");
      }

      classInfoResponse.scientist.image = `${apiBaseUrl}/${classInfoResponse.scientist.image}`;

      return classInfoResponse;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        await redirectToNotFound();
      }

      throw error;
    }
  }

  return { getClassInfoAsync };
};
