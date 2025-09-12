import React from 'react';
import { Users, Package, TrendingUp, DollarSign, Eye, ShoppingCart } from 'lucide-react';

const stats = [
  { name: 'Total Users', value: '2,345', change: '+4.75%', icon: Users, color: 'blue' },
  { name: 'Products', value: '1,234', change: '+2.3%', icon: Package, color: 'green' },
  { name: 'Revenue', value: '$45,678', change: '+12.5%', icon: DollarSign, color: 'purple' },
  { name: 'Orders', value: '987', change: '+8.2%', icon: ShoppingCart, color: 'orange' },
];

const recentActivity = [
  { action: 'New user registered', user: 'John Doe', time: '2 minutes ago', type: 'user' },
  { action: 'Product added', user: 'Admin', time: '15 minutes ago', type: 'product' },
  { action: 'Order completed', user: 'Jane Smith', time: '1 hour ago', type: 'order' },
  { action: 'User updated profile', user: 'Mike Johnson', time: '2 hours ago', type: 'user' },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-1">Welcome back! Here's what's happening today.</p>
      </div>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                  <p className="text-sm text-green-600 font-medium mt-2">{stat.change}</p>
                </div>
                <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                  <Icon size={24} className={`text-${stat.color}-600`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart Placeholder */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Overview</h3>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <TrendingUp size={48} className="text-blue-600 mx-auto mb-2" />
              <p className="text-gray-600">Chart visualization would go here</p>
            </div>
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">by {activity.user} • {activity.time}</p>
                </div>
                <Eye size={16} className="text-gray-400 hover:text-gray-600 cursor-pointer" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}