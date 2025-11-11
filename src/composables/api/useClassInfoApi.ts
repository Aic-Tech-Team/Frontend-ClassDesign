import { useApiConfig } from "@/composables/api/useApiConfig";
import axios from "axios";
import type { ClassInfo } from "@/types/api/classInfo";

export const useClassInfoApi = () => {
  const { apiEndpoints } = useApiConfig();

  async function getClassInfoAsync(id: number): Promise<ClassInfo> {
    const url = apiEndpoints.classInfo(id);
    const httpResponse = await axios.get<ClassInfo>(url);
    const classInfoResponse: ClassInfo = httpResponse.data;

    return classInfoResponse;
  }

  return { getClassInfoAsync };
};
