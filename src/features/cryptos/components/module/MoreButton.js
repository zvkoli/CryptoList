export default function MoreButton({ onClick }) {
  return (
    <button 
      onClick={onClick} 
      className="px-4 py-2 rounded bg-indigo-600 text-white"
    >
      More Show
    </button>
  );
}
