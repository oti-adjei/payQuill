import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { 
  Sun, 
  Moon, 
  FileText, 
  CreditCard, 
  Wallet, 
  Settings, 
  HelpCircle, 
  LogOut,
  ChevronDown,
  Search,
  BarChart3
} from 'lucide-react';

function Layout() {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen flex ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      {/* Sidebar */}
      <div className={`w-1/5 ${darkMode ? 'bg-gray-800' : 'bg-white'} flex-shrink-0 flex flex-col`}>
        <div className="p-6">
          <div className="flex items-center space-x-2 mb-8">
            <div className={`w-8 h-8 rounded-md flex items-center justify-center ${darkMode ? 'bg-indigo-600' : 'bg-lime-500'}`}>
              <span className="text-white font-bold">M</span>
            </div>
            <span className="text-xl font-bold">Maglo.</span>
          </div>

          <nav>
            <ul className="space-y-2">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `flex items-center p-3 rounded-lg ${
                      isActive 
                        ? darkMode ? 'bg-gray-700' : 'bg-lime-500 text-white'
                        : darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
                    }`
                  }
                >
                  <BarChart3 className="mr-3 h-5 w-5" />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/transactions" 
                  className={({ isActive }) => 
                    `flex items-center p-3 rounded-lg ${
                      isActive 
                        ? darkMode ? 'bg-gray-700' : 'bg-lime-500 text-white'
                        : darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
                    }`
                  }
                >
                  <CreditCard className="mr-3 h-5 w-5" />
                  <span>Transactions</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/invoices" 
                  className={({ isActive }) => 
                    `flex items-center p-3 rounded-lg ${
                      isActive 
                        ? darkMode ? 'bg-gray-700' : 'bg-lime-500 text-white'
                        : darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
                    }`
                  }
                >
                  <FileText className="mr-3 h-5 w-5" />
                  <span>Invoices</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/wallets" 
                  className={({ isActive }) => 
                    `flex items-center p-3 rounded-lg ${
                      isActive 
                        ? darkMode ? 'bg-gray-700' : 'bg-lime-500 text-white'
                        : darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
                    }`
                  }
                >
                  <Wallet className="mr-3 h-5 w-5" />
                  <span>My Wallets</span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/settings" 
                  className={({ isActive }) => 
                    `flex items-center p-3 rounded-lg ${
                      isActive 
                        ? darkMode ? 'bg-gray-700' : 'bg-lime-500 text-white'
                        : darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'
                    }`
                  }
                >
                  <Settings className="mr-3 h-5 w-5" />
                  <span>Settings</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-auto p-6">
          <ul className="space-y-2">
            <li>
              <a href="#" className={`flex items-center p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}>
                <HelpCircle className="mr-3 h-5 w-5" />
                <span>Help</span>
              </a>
            </li>
            <li>
              <a href="#" className={`flex items-center p-3 rounded-lg ${darkMode ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-gray-100 text-gray-600'}`}>
                <LogOut className="mr-3 h-5 w-5" />
                <span>Logout</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className={`py-4 px-6 flex items-center justify-between ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm`}>
          <h1 className="text-2xl font-bold">Maglo Finance</h1>
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode} 
              className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-400' : 'bg-gray-100 text-gray-600'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <Search size={20} className={darkMode ? 'text-gray-400' : 'text-gray-600'} />
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <span className="font-small">Mahfuzul Nabil</span>
              <ChevronDown size={16} />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;