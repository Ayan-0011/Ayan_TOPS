import React from 'react'

const StatCard = ({ icon, title, value, change, bgColor }) => {
    return (
        <div>
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                    <div className="flex-1">
                        <p className="text-gray-500 text-sm font-medium">{title}</p>
                        <p className="text-lg md:text-3xl font-bold text-gray-800 mt-2">{value}</p>
                        <p className={`text-sm mt-2 font-medium ${change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {change >= 0 ? '↑' : '↓'} {Math.abs(change)}% from last month
                        </p>
                    </div>
                    <div className={`${bgColor} p-4 rounded-full`}>
                        <span className="text-2xl">{icon}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StatCard
