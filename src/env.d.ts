/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

//biome-ignore lint/complexity/noBannedTypes: add variables here
type ImportMetaEnv = {};

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
