import { useState } from 'react';

const menu = [
  { name: 'Dashboard', icon: '🏠' },
  { name: 'Users', icon: '👥' },
  { name: 'Products', icon: '📦' },
  { name: 'Orders', icon: '🛒' },
  { name: 'Analytics', icon: '📈' },
  { name: 'Settings', icon: '⚙️' },
];

export default function Sidebar({ active, setActive, collapsed, setCollapsed }) {
  return (
    <aside className={`bg-slate-900 text-white h-screen fixed top-0 left-0 z-40 transition-all duration-300 ${collapsed ? 'w-16' : 'w-56'}`}>
      <div className="flex items-center justify-between p-4 border-b border-slate-800">
        <span className={`font-bold text-lg transition-all duration-300 ${collapsed ? 'hidden' : 'block'}`}>Admin</span>
        <button onClick={() => setCollapsed(!collapsed)} className="text-xl focus:outline-none">
          {collapsed ? '→' : '←'}
        </button>
      </div>
      <nav className="mt-6">
        {menu.map((item) => (
          <button
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center gap-3 w-full px-4 py-3 my-1 rounded-lg transition font-medium text-left ${
              active === item.name ? 'bg-blue-600 shadow-lg' : 'hover:bg-slate-800'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className={`${collapsed ? 'hidden' : 'block'}`}>{item.name}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
