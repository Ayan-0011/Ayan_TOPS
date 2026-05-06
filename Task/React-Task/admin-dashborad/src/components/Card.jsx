export default function Card({ title, value, icon, color }) {
  return (
    <div className={`flex items-center gap-4 p-6 rounded-xl shadow bg-white hover:shadow-lg transition border-l-4 ${color} min-w-[180px]`}>
      <div className="text-3xl">{icon}</div>
      <div>
        <div className="text-gray-500 text-sm font-medium">{title}</div>
        <div className="text-2xl font-bold text-slate-800">{value}</div>
      </div>
    </div>
  );
}
