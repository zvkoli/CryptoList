export default function CryptoItemSkeleton() {
  return (
    <div className="flex flex-row justify-between items-center border-b-2 border-gray-200 p-4 animate-pulse">
      <div className="w-1/2 flex flex-row gap-2">
        <div className="bg-gray-300 h-5 w-8 rounded"></div>
        <div className="flex justify-center items-center gap-1">
          <div className="bg-gray-300 h-5 w-20 rounded"></div>
          <div className="bg-gray-300 h-4 w-10 rounded"></div>
        </div>
      </div>

      <div className="w-1/2 flex flex-row justify-end items-center gap-4 min-w-[300px]">
        <div className="bg-gray-300 h-5 w-20 rounded"></div>
        <div className="bg-gray-300 h-5 w-20 rounded"></div>
        <div className="bg-gray-300 h-5 w-20 rounded"></div>
      </div>
    </div>
  );
}
