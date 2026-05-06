import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';

export default function App() {
  const [active, setActive] = useState('Dashboard');
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar active={active} setActive={setActive} collapsed={collapsed} setCollapsed={setCollapsed} />
      <div className={`flex-1 transition-all duration-300 ${collapsed ? 'ml-16' : 'ml-56'}`}>
        <Navbar />
        <main className="p-6 mt-2">
          {active === 'Dashboard' && <Dashboard />}
          {/* Add routing for other pages here */}
        </main>
      </div>
    </div>
  );
}
