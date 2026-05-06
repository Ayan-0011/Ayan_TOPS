const statusColor = {
  Delivered: 'bg-green-100 text-green-800',
  Pending: 'bg-yellow-100 text-yellow-800',
  Cancelled: 'bg-red-100 text-red-800',
};

export default function Table({ orders }) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow p-4">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700">Order ID</th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700">Customer</th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700">Status</th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700">Amount</th>
            <th className="px-4 py-2 text-left text-xs font-semibold text-gray-700">Date</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-2 font-bold text-blue-600">{order.id}</td>
              <td className="px-4 py-2">{order.customer}</td>
              <td className="px-4 py-2">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[order.status]}`}>{order.status}</span>
              </td>
              <td className="px-4 py-2">{order.amount}</td>
              <td className="px-4 py-2">{order.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
