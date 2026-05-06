export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow sticky top-0 z-30">
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 w-64 max-w-full"
        />
      </div>
      <div className="flex items-center gap-6">
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <span className="text-xl">🔔</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
            A
          </div>
          <span className="text-sm font-medium text-slate-800">Admin</span>
        </button>
      </div>
    </header>
  );
}
