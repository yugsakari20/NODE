import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  Settings, 
  User,
  X,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const menuItems = [
  { id: 'dashboard', name: 'Dashboard', icon: LayoutDashboard },
  { id: 'users', name: 'Users', icon: Users },
  { id: 'products', name: 'Products', icon: Package },
  { id: 'profile', name: 'Profile', icon: User },
  { id: 'settings', name: 'Settings', icon: Settings },
];

export default function Sidebar({ currentPage, setCurrentPage, isOpen, setIsOpen }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        <div className="flex items-center justify-between h-16 px-6 bg-blue-600">
          <h1 className="text-xl font-bold text-white">AdminPanel</h1>
          <button 
            className="lg:hidden text-white hover:bg-blue-700 p-1 rounded"
            onClick={() => setIsOpen(false)}
          >
            <X size={20} />
          </button>
        </div>
        
        <nav className="mt-8">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsOpen(false);
                }}
                className={`
                  w-full flex items-center px-6 py-3 text-left transition-all duration-200 group
                  ${isActive 
                    ? 'bg-blue-50 text-blue-600 border-r-3 border-blue-600' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }
                `}
              >
                <Icon size={20} className="mr-3" />
                <span className="font-medium">{item.name}</span>
                {isActive && (
                  <ChevronRight size={16} className="ml-auto text-blue-600" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}