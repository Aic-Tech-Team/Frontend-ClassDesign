import { appConfig } from "@/config";
import type { PlaceType } from "@/types/api/placeInfo";

export const useApiConfig = () => {
  const { baseUrl } = appConfig;

  const apiEndpoints = {
    // * Users Endpoints
    biography: (id: number) => `${baseUrl}/biography-scientist/${id}`,
    placeInfo: (type: Lowercase<PlaceType>, number: number) => `${baseUrl}/q/${type}/${number}`,
    // TODO: Config your endpoints...
  };

  return {
    baseUrl,
    apiEndpoints,
  };
};
