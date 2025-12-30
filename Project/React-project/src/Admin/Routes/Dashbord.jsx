// import { UserButton, useUser } from '@clerk/clerk-react';
// import React, { createContext, useEffect, useState } from 'react';
// import axios from 'axios';
// import { getData } from '../../Context/DataContext';

// const Dashbord = () => {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [sidebarOpen, setSidebarOpen] = useState(true);
  // const [Myorders, setMyOrders] = useState([]);
  // const [allusers, setAllUsers] = useState([]);

  // // all data from fetch data in datacontext
  // const { data, FetchAllproducts, } = getData()
  // //console.log(data);



  // const { user } = useUser();
  // //console.log(user);


  // // orders data 
  // const orders = async () => {
  //   const orders = await axios.get("http://localhost:5000/orders")
  //   setMyOrders(orders.data)
  //   //console.log(Myorders);
  // }

  // //users data 
  // const User = async () => {
  //   const my_user = await axios.get("http://localhost:5000/users") 
  //   setAllUsers(my_user.data)
  //   //console.log(allusers);
    
  // }

  
  
  
  // useEffect(() => {
  //   orders();
  //   FetchAllproducts();
  //   User();
  // }, []);

  
  
  
  
  // const monthlyData = [
  //   { month: 'Jan', sales: 40, revenue: 24 },
  //   { month: 'Feb', sales: 30, revenue: 14 },
  //   { month: 'Mar', sales: 20, revenue: 98 },
  //   { month: 'Apr', sales: 28, revenue: 39 },
  //   { month: 'May', sales: 19, revenue: 48 },
  //   { month: 'Jun', sales: 24, revenue: 38 },
  // ];

  // const getStatusColor = (status) => {
  //   const colors = {
  //     'Delivered': 'bg-green-100 text-green-800',
  //     'Placed': 'bg-yellow-100 text-yellow-800',
  //     'Shipped': 'bg-blue-100 text-blue-800',
  //     'Processing': 'bg-purple-100 text-purple-800',
  //     'confirmed': 'bg-green-100 text-green-800',
  //     'Low Stock': 'bg-yellow-100 text-yellow-800',
  //     'Out of Stock': 'bg-red-100 text-red-800',
  //   };
  //   return colors[status] || 'bg-gray-100 text-gray-800';
  // };
  
  // const StatCard = ({ icon, title, value, change, bgColor }) => (
  //   <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
  //     <div className="flex items-center justify-between">
  //       <div className="flex-1">
  //         <p className="text-gray-500 text-sm font-medium">{title}</p>
  //         <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
  //         <p className={`text-sm mt-2 font-medium ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
  //           {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% from last month
  //         </p>
  //       </div>
  //       <div className={`${bgColor} p-4 rounded-full`}>
  //         <span className="text-2xl">{icon}</span>
  //       </div>
  //     </div>
  //   </div>
  // );
  
  // const SimpleBarChart = () => (
  //   <div className="bg-white rounded-lg shadow-md p-6">
  //     <h2 className="text-xl font-bold text-gray-800 mb-6">Monthly Sales Overview</h2>
  //     <div className="flex items-end justify-between h-64 gap-4">
  //       {monthlyData.map((data, index) => (
  //         <div key={index} className="flex-1 flex flex-col items-center gap-2">
  //           <div className="w-full flex flex-col items-center justify-end h-full gap-2">
  //             <div
  //               className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors relative group"
  //               style={{ height: `${data.sales * 2}%` }}
  //             >
  //               <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
  //                 {data.sales}
  //               </span>
  //             </div>
  //           </div>
  //           <span className="text-xs font-medium text-gray-600">{data.month}</span>
  //         </div>
  //       ))}
  //     </div>
  //     <div className="mt-4 flex items-center justify-center gap-6">
  //       <div className="flex items-center gap-2">
  //         <div className="w-3 h-3 bg-blue-500 rounded"></div>
  //         <span className="text-sm text-gray-600">Sales Volume</span>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const RecentActivity = () => (
  //   <div className="bg-white rounded-lg shadow-md p-6">
  //     <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
  //     <div className="space-y-4">
  //       {Myorders.slice(0, 4).map((order, index) => (
  //         <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
  //           <div className="flex items-center gap-3">
  //             <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
  //               <span className="text-blue-600 font-bold">📦</span>
  //             </div>
  //             <div>
  //               <p className="text-sm font-semibold text-gray-800">{order.username}</p>
  //               <p className="text-xs text-gray-500">{
  //                 order.items.map((item,idx)=>{
  //                   return <>
  //                   {idx + 1} - {item.title} <br/>
  //                   </>
  //                 })
  //               }</p>
  //             </div>
  //           </div>
  //           <div className="text-right">
  //             <p className="text-sm font-bold text-gray-800">₹ {order.totalAmount.toLocaleString("en-IN")}</p>
  //             <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
  //               {order.status}
  //             </span>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
  
  // //overall Amount 
  // const finalAmount = Myorders.reduce((acc, amt ) => acc + amt.totalAmount, 0)
  
  // const renderDashboard = () => (
  //   <div className="space-y-6">
  //     <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>

  //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  //       <StatCard icon="💰" title="Total Revenue" value={<span>₹ {finalAmount.toLocaleString("en-IN")}</span>} change={12} bgColor="bg-blue-500" />
  //       <StatCard icon="🛒" title="Total Orders" value={Myorders?.length} change={8} bgColor="bg-green-500" />
  //       <StatCard icon="📦" title="Total Products" value={data?.length} change={-3} bgColor="bg-purple-500" />
  //       <StatCard icon="👥" title="Total Users" value={allusers?.length} change={15} bgColor="bg-orange-500" />
  //     </div>

  //     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  //       <div className="lg:col-span-2">
  //         <SimpleBarChart />
  //       </div>
  //       <div>
  //         <RecentActivity />
  //       </div>
  //     </div>

  //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  //       <div className="bg-white rounded-lg shadow-md p-6">
  //         <h3 className="text-lg font-bold text-gray-800 mb-4">Top Categories</h3>
  //         <div className="space-y-3">
  //           <div className="flex justify-between items-center">
  //             <span className="text-sm text-gray-600">Mobiles</span>
  //             <span className="text-sm font-bold text-gray-800">40%</span>
  //           </div>
  //           <div className="w-full bg-gray-200 rounded-full h-2">
  //             <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
  //           </div>
  //           <div className="flex justify-between items-center">
  //             <span className="text-sm text-gray-600">laptops</span>
  //             <span className="text-sm font-bold text-gray-800">30%</span>
  //           </div>
  //           <div className="w-full bg-gray-200 rounded-full h-2">
  //             <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }}></div>
  //           </div>
  //           <div className="flex justify-between items-center">
  //             <span className="text-sm text-gray-600">Eyerbuts</span>
  //             <span className="text-sm font-bold text-gray-800">20%</span>
  //           </div>
  //           <div className="w-full bg-gray-200 rounded-full h-2">
  //             <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '20%' }}></div>
  //           </div>
  //           <div className="flex justify-between items-center">
  //             <span className="text-sm text-gray-600">accessories</span>
  //             <span className="text-sm font-bold text-gray-800">10%</span>
  //           </div>
  //           <div className="w-full bg-gray-200 rounded-full h-2">
  //             <div className="bg-red-500 h-2 rounded-full" style={{ width: '10%' }}></div>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="bg-white rounded-lg shadow-md p-6">
  //         <h3 className="text-lg font-bold text-gray-800 mb-4">Order Status</h3>
  //         <div className="space-y-4">
  //           <div className="flex items-center justify-between">
  //             <div className="flex items-center gap-2">
  //               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
  //               <span className="text-sm text-gray-600">Delivered</span>
  //             </div>
  //             <span className="text-sm font-bold text-gray-800">450</span>
  //           </div>
  //           <div className="flex items-center justify-between">
  //             <div className="flex items-center gap-2">
  //               <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
  //               <span className="text-sm text-gray-600">Shipped</span>
  //             </div>
  //             <span className="text-sm font-bold text-gray-800">123</span>
  //           </div>
  //           <div className="flex items-center justify-between">
  //             <div className="flex items-center gap-2">
  //               <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
  //               <span className="text-sm text-gray-600">Processing</span>
  //             </div>
  //             <span className="text-sm font-bold text-gray-800">89</span>
  //           </div>
  //           <div className="flex items-center justify-between">
  //             <div className="flex items-center gap-2">
  //               <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
  //               <span className="text-sm text-gray-600">Pending</span>
  //             </div>
  //             <span className="text-sm font-bold text-gray-800">67</span>
  //           </div>
  //         </div>
  //       </div>

  //       <div className="bg-white rounded-lg shadow-md p-6">
  //         <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Stats</h3>
  //         <div className="space-y-4">
  //           <div className="bg-blue-50 p-3 rounded-lg">
  //             <p className="text-xs text-gray-600">Avg Order Value</p>
  //             <p className="text-xl font-bold text-blue-600">$127.50</p>
  //           </div>
  //           <div className="bg-green-50 p-3 rounded-lg">
  //             <p className="text-xs text-gray-600">Conversion Rate</p>
  //             <p className="text-xl font-bold text-green-600">3.2%</p>
  //           </div>
  //           <div className="bg-purple-50 p-3 rounded-lg">
  //             <p className="text-xs text-gray-600">Active Users</p>
  //             <p className="text-xl font-bold text-purple-600">2,543</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
      
  //   </div>
  // );

  // const renderOrders = () => (
  //   <div className="space-y-6">
  //     <div className="flex justify-between items-center">
  //       <h1 className="text-3xl font-bold text-gray-800">Manage Orders</h1>
  //       <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium">
  //         Export Orders
  //       </button>
  //     </div>

  //     <div className="bg-white rounded-lg shadow-md overflow-hidden">
  //       <div className="overflow-x-auto">
  //         <table className="min-w-full divide-y divide-gray-200">
  //           <thead className="bg-gray-50">
  //             <tr>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
  //             </tr>
  //           </thead>
  //           <tbody className="bg-white divide-y divide-gray-200">
  //             {Myorders.map((order) => (
  //               <tr key={order.id} className="hover:bg-gray-50 transition-colors">
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.id}</td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{order.username}</td>
  //                 <td className="px-6 py-4 text-sm text-gray-900">
  //                   {order.items.map((item,idx) => (
  //                     <div key={item.id}>{idx + 1} - {item.title}</div>
  //                   ))}
  //                 </td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">₹ {order.totalAmount.toLocaleString("en-IN")}</td>
  //                 <td className="px-6 py-4 whitespace-nowrap">
  //                   <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(order.status)}`}>
  //                     {order.status}
  //                   </span>
  //                 </td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{
  //                   new Date(order.createdAt).toLocaleString("en-IN", {
  //                     day: "2-digit",
  //                     month: "short",
  //                     year: "numeric",
  //                     hour: "2-digit",
  //                     minute: "2-digit"
  //                   })
  //                 }</td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm">
  //                   <button className="text-blue-600 hover:text-blue-800 font-medium mr-3">View</button>
  //                   <button className="text-green-600 hover:text-green-800 font-medium">Update</button>
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const renderProducts = () => (
  //   <div className="space-y-6">
  //     <div className="flex justify-between items-center">
  //       <h1 className="text-3xl font-bold text-gray-800">Manage Products</h1>
  //       <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium">
  //         Add New Product
  //       </button>
  //     </div>

  //     <div className="bg-white rounded-lg shadow-md overflow-hidden">
  //       <div className="overflow-x-auto">
  //         <table className="min-w-full divide-y divide-gray-200">
  //           <thead className="bg-gray-50">
  //             <tr>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
  //             </tr>
  //           </thead>
  //           <tbody className="bg-white divide-y divide-gray-200">
  //             {data.map((product) => (
  //               <tr key={product.id} className="hover:bg-gray-50 transition-colors">
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.id}</td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.title}</td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.category}</td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">₹ {product.price.toLocaleString("en-IN")}</td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{product.stock}</td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm">
  //                   <button className="text-blue-600 hover:text-blue-800 font-medium mr-3">Edit</button>
  //                   <button className="text-red-600 hover:text-red-800 font-medium">Delete</button>
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
  //   </div>
  // );

  // const renderUsers = () => (
  //   <div className="space-y-6">
  //     <div className="flex justify-between items-center">
  //       <h1 className="text-3xl font-bold text-gray-800">Manage Users</h1>
  //       <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors font-medium">
  //         Add New User
  //       </button>
  //     </div>

  //     <div className="bg-white rounded-lg shadow-md overflow-hidden">
  //       <div className="overflow-x-auto">
  //         <table className="min-w-full divide-y divide-gray-200">
  //           <thead className="bg-gray-50">
  //             <tr>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Orders</th>
  //               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
  //             </tr>
  //           </thead>
  //           <tbody className="bg-white divide-y divide-gray-200">
  //             {allusers.map((item,idx) => (
  //               <tr key={item.id} className="hover:bg-gray-50 transition-colors">
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.name}</td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.email}</td>
  //                 <td className="px-6 py-4 whitespace-nowrap">
  //                   <span className={`px-3 py-1 text-xs font-medium rounded-full ${item.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
  //                     {item.role}
  //                   </span>
  //                 </td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(item.createdAt).toLocaleString("en-IN", {
  //                     day: "2-digit",
  //                     month: "short",
  //                     year: "numeric",
  //                     hour: "2-digit",
  //                     minute: "2-digit"
  //                   })
  //                 }</td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.orders}</td>
  //                 <td className="px-6 py-4 whitespace-nowrap text-sm">
  //                   <button className="text-blue-600 hover:text-blue-800 font-medium mr-3">Edit</button>
  //                   <button className="text-red-600 hover:text-red-800 font-medium">Delete</button>
  //                 </td>
  //               </tr>
  //             ))}
  //           </tbody>
  //         </table>
  //       </div>
  //     </div>
    //  </div>
  // );

//   return (
//     <div className="flex h-full bg-gray-100">
//       {/* Sidebar */}
//       <div className={`${sidebarOpen ? 'w-64' : 'w-0'} bg-gray-900  text-white transition-all duration-300 overflow-hidden flex-shrink-0`}>
//         <div className="p-6 sticky top-0 z-10">
//           <h2 className="text-2xl font-bold mb-8 text-white ">Admin Panel</h2>
//           <nav className="space-y-2">
//             <button
//               onClick={() => { setActiveTab('dashboard'); }}
//               className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'dashboard' ? 'bg-blue-600 shadow-lg' : 'hover:bg-gray-800'
//                 }`}
//             >
//               <span className="text-xl">📊</span>
//               <span className="font-medium">Dashboard</span>
//             </button>
//             <button
//               onClick={() => { setActiveTab('orders'); }}
//               className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'orders' ? 'bg-blue-600 shadow-lg' : 'hover:bg-gray-800'
//                 }`}
//             >
//               <span className="text-xl">🛒</span>
//               <span className="font-medium">Orders</span>
//             </button>
//             <button
//               onClick={() => { setActiveTab('products'); }}
//               className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'products' ? 'bg-blue-600 shadow-lg' : 'hover:bg-gray-800'
//                 }`}
//             >
//               <span className="text-xl">📦</span>
//               <span className="font-medium">Products</span>
//             </button>
//             <button
//               onClick={() => { setActiveTab('users'); }}
//               className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${activeTab === 'users' ? 'bg-blue-600 shadow-lg' : 'hover:bg-gray-800'
//                 }`}
//             >
//               <span className="text-xl">👥</span>
//               <span className="font-medium">Users</span>
//             </button>
//           </nav>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 overflow-x-auto ">
//         {/* Header */}
//         <div className="bg-white shadow-sm p-4 flex items-center justify-between sticky top-0 z-10">
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
//           >
//             <span className="text-2xl">{sidebarOpen ? '✕' : '☰'}</span>
//           </button>
//           <div className="flex items-center space-x-4">
//             <span className="text-gray-700 font-medium">Admin User</span>
//             <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
//               {<UserButton size={50} />}
//             </div>
//           </div>
//         </div>

//         {/* Content */}
       
//       </div>
//     </div>
//   );
// };

// export default Dashbord;