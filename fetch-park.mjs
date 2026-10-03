// Run locally: node --env-file=.env scripts/fetch-park.mjs
// Fetches park data from the NPS API and saves it to src/data/<parkCode>.json
import { writeFile, mkdir } from "node:fs/promises";

const apiKey = process.env.VITE_NPS_API_KEY;
if (!apiKey) {
  throw new Error("Missing VITE_NPS_API_KEY. Is it in your .env file?");
}

// Add more park codes here if you want more parks later.
const parkCodes = ["yell"];

await mkdir("src/data", { recursive: true });

for (const code of parkCodes) {
  const response = await fetch(
    `https://developer.nps.gov/api/v1/parks?parkCode=${code}`,
    { headers: { "X-Api-Key": apiKey } }
  );

  if (!response.ok) {
    throw new Error(`NPS request failed for ${code}: ${response.status}`);
  }

  const json = await response.json();
  if (!json.data || json.data.length === 0) {
    throw new Error(`No data returned for park code "${code}"`);
  }

  await writeFile(`src/data/${code}.json`, JSON.stringify(json.data[0], null, 2));
  console.log(`Saved src/data/${code}.json`);
}
