export type AppConfig = {
  apiBaseUrl: string;
  apiPrefix: string;
  apiVersion: string;
  baseUrl: string;
};

export const getAppConfig = (): AppConfig => {
  const { VITE_API_BASE_URL } = import.meta.env as {
    VITE_API_BASE_URL?: string;
  };

  const apiBaseUrlRaw = VITE_API_BASE_URL ?? "";
  const apiBaseUrl = apiBaseUrlRaw.replace(/\/+$/, "");
  const apiPrefix = "/api";
  const apiVersion = "1.0";
  const baseUrl = `${apiBaseUrl}${apiPrefix}`;

  return { apiBaseUrl, apiPrefix, apiVersion, baseUrl };
};

export const appConfig = getAppConfig();
