"use client";
import { useCryptos } from "../../hooks/useCryptos";
import CryptoItem from "../module/CryptoItem";
import CryptoItemSkeleton from "../module/CryptoItemSkeleton";
import MoreButton from "../module/MoreButton";

export default function CryptoList() {
  const { items, loading, loadMore } = useCryptos({
    initialCount: 10,
    updateIntervalMs: 60000,
  });

  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center gap-2 p-2">
      <div className="w-full overflow-x-auto">
        <div className="min-w-[700px]">
          <div className="w-full flex flex-row justify-between items-center p-4 font-bold bg-indigo-600 rounded text-white">
            <div className="w-1/2 flex flex-row gap-2">
              <span>Coin</span>
            </div>
            <div className="w-1/2 flex flex-row justify-end items-center gap-4">
              <span className="w-4/12">Price</span>
              <span className="w-4/12">High 24h</span>
              <span className="w-4/12">Low 24h</span>
            </div>
          </div>

          <div className="w-full">
            {loading && items.length === 0
              ? Array.from({ length: 10 }).map((_, i) => (
                  <CryptoItemSkeleton key={i} />
                ))
              : items.map((item) => <CryptoItem key={item.id} crypto={item} />)}
          </div>
        </div>
      </div>

      <MoreButton onClick={loadMore} />
    </div>
  );
}
