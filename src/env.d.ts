/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly APP_API_PREFIX_BASE: string;
  readonly APP_API_BASE_URL: string;
  readonly DEFAULT_LANGUAGE: string;
  readonly TENANCY_NAME: string;
  readonly COMPANY_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}