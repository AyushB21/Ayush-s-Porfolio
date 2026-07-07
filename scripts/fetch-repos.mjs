// Build-time GitHub fetch. Runs on `prebuild` (and `npm run fetch:repos`).
// Caches results to src/data/repos.json so the page never hits the API at runtime.
// If the network/API is unavailable, the existing cached file is kept.
import { writeFileSync, existsSync, readFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '../src/data/repos.json');
const USERNAME = 'AyushB21';

async function main() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=100`,
      { headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'ab-motorsport-portfolio' } }
    );
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const repos = await res.json();

    const slim = repos
      .filter((r) => !r.fork)
      .map((r) => ({
        name: r.name,
        description: r.description,
        language: r.language,
        stars: r.stargazers_count,
        url: r.html_url,
        homepage: r.homepage || null,
        updated: r.updated_at,
      }))
      .sort((a, b) => b.stars - a.stars || new Date(b.updated) - new Date(a.updated));

    mkdirSync(dirname(OUT), { recursive: true });
    writeFileSync(OUT, JSON.stringify(slim, null, 2) + '\n');
    console.log(`[fetch-repos] cached ${slim.length} repos for ${USERNAME}`);
  } catch (err) {
    if (existsSync(OUT)) {
      const n = JSON.parse(readFileSync(OUT, 'utf8')).length;
      console.warn(`[fetch-repos] ${err.message} — keeping cached repos.json (${n} repos)`);
    } else {
      mkdirSync(dirname(OUT), { recursive: true });
      writeFileSync(OUT, '[]\n');
      console.warn(`[fetch-repos] ${err.message} — wrote empty repos.json`);
    }
  }
}

main();
