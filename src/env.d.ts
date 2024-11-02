// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
type ImportMetaEnv = {};

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
