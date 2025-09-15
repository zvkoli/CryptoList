"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { getCryptosByRange, putCryptos } from "../db/idb";

export function useCryptos({ initialCount, updateIntervalMs }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      try {
        const local = await getCryptosByRange(count);
        if (!signal.aborted && local.length > 0) {
          setItems(local);
        }

        const res = await axios.get("/api/cryptos", { signal });
        const fetched = res.data?.data?.cryptoCurrencyList ?? [];

        if (!signal.aborted && fetched.length > 0) {
          await putCryptos(fetched);
          setItems(fetched.slice(0, count));
        }
      } catch (err) {
        if (!axios.isCancel(err)) {
          console.error("Fetch error:", err);
        }
      } finally {
        if (!signal.aborted) setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, updateIntervalMs);

    return () => {
      controller.abort();
      clearInterval(interval);
    };
  }, [count, updateIntervalMs]);

  const loadMore = useCallback(() => {
    setCount((prev) => prev + 50);
  }, []);

  return { items, loading, loadMore };
}
