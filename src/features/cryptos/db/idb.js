import { openDB } from "idb";

const DB_NAME = "crypto-db";
const STORE = "cryptos";
const VERSION = 1;

let dbPromise;

export function getDb() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, VERSION, {
      upgrade(db) {
        db.createObjectStore(STORE, { keyPath: "id" });
      },
    });
  }
  return dbPromise;
}

export async function getCryptosByRange(limit) {
  const db = await getDb();
  const all = await db.getAll(STORE);
  const sorted = all.sort((a, b) => a.cmcRank - b.cmcRank);
  return sorted.slice(0, limit);
}

export async function putCryptos(items) {
  const db = await getDb();
  const tx = db.transaction(STORE, "readwrite");
  const store = tx.objectStore(STORE);

  try {
    for (const item of items) {
      await store.put(item);
    }

    await tx.done;
    // console.log('saved in IndexedDB.');
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function clearCryptos() {
  const db = await getDb();
  await db.clear(STORE);
}
