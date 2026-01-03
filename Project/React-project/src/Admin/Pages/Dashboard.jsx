import React, { useEffect, useState } from 'react'
import StatCard from '../Components/StatCard'
import { getData } from '../../Context/DataContext';
import SimpleBarChart from '../Components/SimpleBarChart';
import RecentActivity from '../Components/RecentActivity';
import axios from 'axios';

const Dashboard = () => {
    const [Myorders, setMyOrders] = useState([]);
    const [allusers, setAllUsers] = useState([]);


    // all data from fetch data in datacontext
    const { data, FetchAllproducts } = getData()



    // orders data 
    const orders = async () => {
        const orders = await axios.get("http://localhost:5000/orders")
        setMyOrders(orders.data)
        //console.log(Myorders);
    }

    //users data 
    const User = async () => {
        const my_user = await axios.get("http://localhost:5000/users")
        setAllUsers(my_user.data)
        //console.log(allusers);

    }


    useEffect(() => {
        orders();
        FetchAllproducts();
        User();
    }, []);

    const AnimatedCounter = ({ target, prefix = "", duration = 2000 }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            let start = 0;
            const increment = target / (duration / 50);

            const timer = setInterval(() => {
                start += increment;

                if (start >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 30);

            return () => clearInterval(timer);
        }, [target, duration]);

        return (
            <span>
                {prefix}
                {count.toLocaleString("en-IN")}
            </span>
        );
    };

    //overall Amount 
    const finalAmount = Myorders.reduce((acc, amt) => acc + amt.totalAmount, 0)

    return (
        <div>
            <div className="space-y-6">
                <h1 className="md:text-3xl text-2xl text-center md:text-start font-bold text-gray-800">Dashboard Overview</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatCard icon="💰" title="Total Revenue" value={<AnimatedCounter target={finalAmount} prefix="₹ " />} change={12} bgColor="bg-blue-500" />
                    <StatCard icon="🛒" title="Total Orders" value={<AnimatedCounter target={Myorders.length} />} change={8} bgColor="bg-green-500" />
                    <StatCard icon="📦" title="Total Products" value={<AnimatedCounter target={data?.length || 0} />} change={-3} bgColor="bg-purple-500" />
                    <StatCard icon="👥" title="Total Users" value={<AnimatedCounter target={allusers.length} />} change={15} bgColor="bg-orange-500" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <SimpleBarChart />
                    </div>
                    <div>
                        <RecentActivity />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Top Categories</h3>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Mobiles</span>
                                <span className="text-sm font-bold text-gray-800">40%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">laptops</span>
                                <span className="text-sm font-bold text-gray-800">30%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">Eyerbuts</span>
                                <span className="text-sm font-bold text-gray-800">20%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '20%' }}></div>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-600">accessories</span>
                                <span className="text-sm font-bold text-gray-800">10%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-red-500 h-2 rounded-full" style={{ width: '10%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Order Status</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Delivered</span>
                                </div>
                                <span className="text-sm font-bold text-gray-800">450</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Shipped</span>
                                </div>
                                <span className="text-sm font-bold text-gray-800">123</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Processing</span>
                                </div>
                                <span className="text-sm font-bold text-gray-800">89</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <span className="text-sm text-gray-600">Pending</span>
                                </div>
                                <span className="text-sm font-bold text-gray-800">67</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Stats</h3>
                        <div className="space-y-4">
                            <div className="bg-blue-50 p-3 rounded-lg">
                                <p className="text-xs text-gray-600">Avg Order Value</p>
                                <p className="text-xl font-bold text-blue-600">$127.50</p>
                            </div>
                            <div className="bg-green-50 p-3 rounded-lg">
                                <p className="text-xs text-gray-600">Conversion Rate</p>
                                <p className="text-xl font-bold text-green-600">3.2%</p>
                            </div>
                            <div className="bg-purple-50 p-3 rounded-lg">
                                <p className="text-xs text-gray-600">Active Users</p>
                                <p className="text-xl font-bold text-purple-600">2,543</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard
