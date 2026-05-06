import Card from '../components/Card';
import { LineChart, BarChart } from '../components/Charts';
import Table from '../components/Table';

const summary = [
  { title: 'Total Users', value: '2,543', icon: '👥', color: 'border-blue-500' },
  { title: 'Total Orders', value: '1,234', icon: '🛒', color: 'border-green-500' },
  { title: 'Revenue', value: '$48,563', icon: '💰', color: 'border-yellow-500' },
  { title: 'Growth', value: '12%', icon: '📈', color: 'border-purple-500' },
];

const orders = [
  { id: 'ORD-001', customer: 'John Doe', status: 'Delivered', amount: '$299.99', date: '2026-04-20' },
  { id: 'ORD-002', customer: 'Jane Smith', status: 'Pending', amount: '$149.50', date: '2026-04-21' },
  { id: 'ORD-003', customer: 'Bob Johnson', status: 'Cancelled', amount: '$599.00', date: '2026-04-19' },
  { id: 'ORD-004', customer: 'Alice Brown', status: 'Delivered', amount: '$89.99', date: '2026-04-18' },
  { id: 'ORD-005', customer: 'Charlie Wilson', status: 'Pending', amount: '$199.99', date: '2026-04-17' },
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {summary.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow p-6">
          <div className="font-bold text-slate-800 mb-2">Sales Overview</div>
          <LineChart />
        </div>
        <div className="bg-white rounded-xl shadow p-6">
          <div className="font-bold text-slate-800 mb-2">Monthly Data</div>
          <BarChart />
        </div>
      </div>
      {/* Table */}
      <div>
        <div className="font-bold text-slate-800 mb-2">Recent Orders</div>
        <Table orders={orders} />
      </div>
    </div>
  );
}
