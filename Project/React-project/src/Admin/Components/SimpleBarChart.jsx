import React from 'react'

const SimpleBarChart = () => {

    const monthlyData = [
    { month: 'Jan', sales: 40, revenue: 24 },
    { month: 'Feb', sales: 30, revenue: 14 },
    { month: 'Mar', sales: 20, revenue: 98 },
    { month: 'Apr', sales: 28, revenue: 39 },
    { month: 'May', sales: 19, revenue: 48 },
    { month: 'Jun', sales: 24, revenue: 38 },
  ];  

  
    return (
        <div>
            <div className="bg-white rounded-lg shadow-md p-6 w-full">
                <h2 className="text-xl font-bold text-gray-800 mb-6">Monthly Sales Overview</h2>
                <div className="flex items-end justify-between h-64 gap-4">
                    {monthlyData.map((data, index) => (
                        <div key={index} className="flex-1 flex flex-col items-center gap-2">
                            <div className="w-full flex flex-col items-center justify-end h-full gap-2">
                                <div
                                    className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-colors relative group"
                                    style={{ height: `${data.sales * 4}px` }}>
                                    <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {data.sales}
                                    </span>
                                </div>
                            </div>
                            <span className="text-xs font-medium text-gray-600">{data.month}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex items-center justify-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-blue-500 rounded"></div>
                        <span className="text-sm text-gray-600">Sales Volume</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SimpleBarChart
