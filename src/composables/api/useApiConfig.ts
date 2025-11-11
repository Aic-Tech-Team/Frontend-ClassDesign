import { appConfig } from "@/config";

export const useApiConfig = () => {
  const { baseUrl } = appConfig;

  const apiEndpoints = {
    // * Users Endpoints
    biography: (id: number) => `${baseUrl}/biography-scientist/${id}`,
    classInfo: (id: number) => `${baseUrl}/q/${id}`,
    // TODO: Config your endpoints...
  };

  return {
    baseUrl,
    apiEndpoints,
  };
};
