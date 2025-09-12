import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Calendar, 
  Filter,
  Eye,
  Trash2,
  Plus,
  Search,
  BarChart3,
  Users,
  ShoppingCart,
  DollarSign
} from 'lucide-react';

interface Report {
  id: string;
  name: string;
  type: 'sales' | 'users' | 'inventory' | 'financial';
  status: 'completed' | 'processing' | 'failed';
  createdAt: string;
  size: string;
  description: string;
}

export default function Reports() {
  const [reports] = useState<Report[]>([
    {
      id: '1',
      name: 'Monthly Sales Report',
      type: 'sales',
      status: 'completed',
      createdAt: '2024-01-15T10:30:00Z',
      size: '2.4 MB',
      description: 'Comprehensive sales analysis for January 2024'
    },
    {
      id: '2',
      name: 'User Activity Report',
      type: 'users',
      status: 'completed',
      createdAt: '2024-01-14T15:45:00Z',
      size: '1.8 MB',
      description: 'User engagement and activity metrics'
    },
    {
      id: '3',
      name: 'Inventory Status Report',
      type: 'inventory',
      status: 'processing',
      createdAt: '2024-01-14T09:15:00Z',
      size: '3.2 MB',
      description: 'Current inventory levels and stock analysis'
    },
    {
      id: '4',
      name: 'Financial Summary',
      type: 'financial',
      status: 'completed',
      createdAt: '2024-01-13T14:20:00Z',
      size: '1.5 MB',
      description: 'Revenue, expenses, and profit analysis'
    },
    {
      id: '5',
      name: 'Customer Analytics',
      type: 'users',
      status: 'failed',
      createdAt: '2024-01-12T11:30:00Z',
      size: '0 MB',
      description: 'Customer behavior and demographics analysis'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredReports = reports.filter(report => {
    const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || report.type === filterType;
    const matchesStatus = filterStatus === 'all' || report.status === filterStatus;
    
    return matchesSearch && matchesType && matchesStatus;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'sales':
        return <ShoppingCart className="w-4 h-4" />;
      case 'users':
        return <Users className="w-4 h-4" />;
      case 'inventory':
        return <BarChart3 className="w-4 h-4" />;
      case 'financial':
        return <DollarSign className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'sales':
        return 'bg-blue-100 text-blue-600';
      case 'users':
        return 'bg-green-100 text-green-600';
      case 'inventory':
        return 'bg-purple-100 text-purple-600';
      case 'financial':
        return 'bg-orange-100 text-orange-600';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'processing':
        return 'bg-yellow-100 text-yellow-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const reportTemplates = [
    {
      name: 'Sales Performance',
      description: 'Analyze sales trends and performance metrics',
      type: 'sales',
      icon: ShoppingCart
    },
    {
      name: 'User Analytics',
      description: 'Track user behavior and engagement',
      type: 'users',
      icon: Users
    },
    {
      name: 'Inventory Report',
      description: 'Monitor stock levels and inventory turnover',
      type: 'inventory',
      icon: BarChart3
    },
    {
      name: 'Financial Summary',
      description: 'Review revenue, costs, and profitability',
      type: 'financial',
      icon: DollarSign
    }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600 mt-1">Generate and manage your business reports</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <Plus className="w-4 h-4" />
          <span>Generate Report</span>
        </button>
      </div>

      {/* Quick Report Templates */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Generate</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reportTemplates.map((template, index) => {
            const Icon = template.icon;
            return (
              <button
                key={index}
                className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-all text-left group"
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${getTypeColor(template.type)}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {template.name}
                </h4>
                <p className="text-sm text-gray-600 mt-1">{template.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search reports..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Types</option>
                <option value="sales">Sales</option>
                <option value="users">Users</option>
                <option value="inventory">Inventory</option>
                <option value="financial">Financial</option>
              </select>
            </div>
            
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">All Status</option>
              <option value="completed">Completed</option>
              <option value="processing">Processing</option>
              <option value="failed">Failed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Report</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Type</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Status</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Created</th>
                <th className="text-left py-4 px-6 font-medium text-gray-900">Size</th>
                <th className="text-right py-4 px-6 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-6">
                    <div>
                      <p className="font-medium text-gray-900">{report.name}</p>
                      <p className="text-sm text-gray-600">{report.description}</p>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className={`inline-flex items-center space-x-2 px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(report.type)}`}>
                      {getTypeIcon(report.type)}
                      <span className="capitalize">{report.type}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                      {report.status === 'processing' && (
                        <div className="w-2 h-2 bg-yellow-600 rounded-full animate-pulse mr-1"></div>
                      )}
                      <span className="capitalize">{report.status}</span>
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {formatDate(report.createdAt)}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {report.size}
                  </td>
                  <td className="py-4 px-6 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      {report.status === 'completed' && (
                        <>
                          <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                            <Download className="w-4 h-4" />
                          </button>
                        </>
                      )}
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {filteredReports.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No reports found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Report Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Reports</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">{reports.length}</p>
            </div>
            <div className="p-3 rounded-lg bg-blue-100">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {reports.filter(r => r.status === 'completed').length}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-green-100">
              <Calendar className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Processing</p>
              <p className="text-2xl font-bold text-gray-900 mt-2">
                {reports.filter(r => r.status === 'processing').length}
              </p>
            </div>
            <div className="p-3 rounded-lg bg-yellow-100">
              <BarChart3 className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}