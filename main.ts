// Entry program for make.fun's "news-image-20261123" bounty.
//
// The finished front-page image for Monday 23 November 2026 ships inside
// this repository as entry.png. Running this program delivers that image
// to the output directory the harness points at: it takes the directory
// from MAKEFUN_OUTPUT_DIR when set and falls back to /output otherwise,
// creates the directory if it is missing, and copies the image across
// byte for byte. Nothing is fetched, generated, or transformed at run
// time, so repeated runs always produce exactly the same file.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const sourceImage = join(here, "entry.png");

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(targetDir, { recursive: true });

const destination = join(targetDir, "entry.png");
copyFileSync(sourceImage, destination);
