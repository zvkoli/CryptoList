export default function CryptoItem({ crypto }) {
  return (
    <div className="flex flex-row justify-between items-center border-b-2 border-gray-200 p-4">
      <div className="w-1/2 flex flex-row gap-2">
        <span className="font-bold w-8">{crypto.cmcRank}</span>
        <span>
          {crypto.name}
          <span className="text-sm text-gray-500">({crypto.symbol})</span>
        </span>
      </div>

      <div className="w-1/2 flex flex-row justify-end items-center gap-4 min-w-[300px]">
        <span className="w-4/12">${crypto.quotes[2].price.toFixed(4)}</span>
        <span className="w-4/12">${crypto.high24h.toFixed(4)}</span>
        <span className="w-4/12">${crypto.low24h.toFixed(4)}</span>
      </div>
    </div>
  );
}
