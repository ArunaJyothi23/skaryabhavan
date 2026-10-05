import fs from 'fs/promises';
import path from 'path';

const LOCAL_SITE_PATH = path.join(process.cwd(), 'src', 'data', 'site_content.json');

const PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const FIRESTORE_BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

let cachedSiteContent: { data: any; timestamp: number } | null = null;
const CACHE_TTL = 1000; // 1 second micro-cache

function deepMerge(target: any, source: any): any {
  if (!source) return target;
  const output = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object && !Array.isArray(source[key]) && key in target) {
      output[key] = deepMerge(target[key], source[key]);
    } else {
      output[key] = source[key];
    }
  }
  return output;
}

export async function getSiteContent(): Promise<any> {
  const now = Date.now();
  if (cachedSiteContent && now - cachedSiteContent.timestamp < CACHE_TTL) {
    return cachedSiteContent.data;
  }

  // 1. Read local baseline
  let defaultData = {};
  try {
    const raw = await fs.readFile(LOCAL_SITE_PATH, 'utf-8');
    defaultData = JSON.parse(raw);
  } catch (err) {
    console.error('Error reading local site_content.json:', err);
  }

  // 2. Query Firestore Cloud if configured
  if (API_KEY && PROJECT_ID) {
    try {
      const url = `${FIRESTORE_BASE}/content/site?key=${API_KEY}`;
      const res = await fetch(url, { signal: AbortSignal.timeout(1500) });
      if (res.ok) {
        const json = await res.json();
        if (json?.fields?.data?.stringValue) {
          const parsed = JSON.parse(json.fields.data.stringValue);
          const merged = deepMerge(defaultData, parsed);
          cachedSiteContent = { data: merged, timestamp: now };
          return merged;
        }
      }
    } catch {
      // Seamlessly fall back to local defaults
    }
  }

  cachedSiteContent = { data: defaultData, timestamp: now };
  return defaultData;
}

export async function updateSiteContent(updatedData: any): Promise<boolean> {
  cachedSiteContent = null; // Invalidate cache

  // Write to local disk if in node environment
  try {
    await fs.writeFile(LOCAL_SITE_PATH, JSON.stringify(updatedData, null, 2), 'utf-8');
  } catch (e) {
    // Non-fatal on serverless
  }

  // Persist to Cloud Firestore if configured
  if (API_KEY && PROJECT_ID) {
    try {
      const url = `${FIRESTORE_BASE}/content/site?key=${API_KEY}`;
      const res = await fetch(url, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fields: {
            data: { stringValue: JSON.stringify(updatedData) },
            updatedAt: { stringValue: new Date().toISOString() }
          }
        })
      });
      return res.ok;
    } catch (err) {
      console.error('Error persisting to Firestore:', err);
    }
  }

  return true;
}

export function invalidateCache() {
  cachedSiteContent = null;
}
