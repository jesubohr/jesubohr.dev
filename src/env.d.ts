/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PERSONAL_EMAIL: string
  readonly SENDER_EMAIL: string
  readonly SENDER_PASSWORD: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
