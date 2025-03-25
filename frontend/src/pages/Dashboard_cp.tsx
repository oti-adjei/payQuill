import React, { useState } from 'react';
import {
  Sun,
  Moon,
  FileText,
  CreditCard,
  Wallet,
  PiggyBank,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
  ChevronRight,
  ChevronDown,
  Plus
} from 'lucide-react';

// Types for our app
type Invoice = {
  id: string;
  client: string;
  amount: number;
  date: string;
  status: 'paid' | 'pending' | 'overdue';
};

type Receipt = {
  id: string;
  vendor: string;
  amount: number;
  date: string;
  category: string;
};

function Dashboardt() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'invoices' | 'receipts'>('invoices');

  // Sample data
  const invoices: Invoice[] = [
    { id: 'INV-001', client: 'Acme Corp', amount: 1250.00, date: '2025-04-15', status: 'paid' },
    { id: 'INV-002', client: 'Globex Inc', amount: 3450.75, date: '2025-04-10', status: 'paid' },
    { id: 'INV-003', client: 'Stark Industries', amount: 4200.50, date: '2025-04-05', status: 'pending' },
    { id: 'INV-004', client: 'Wayne Enterprises', amount: 1800.25, date: '2025-03-28', status: 'overdue' },
  ];

  const receipts: Receipt[] = [
    { id: 'REC-001', vendor: 'Apple Inc', amount: 420.84, date: '2025-04-14', category: 'Mobile' },
    { id: 'REC-002', vendor: 'Netflix', amount: 100.00, date: '2025-04-05', category: 'Entertainment' },
    { id: 'REC-003', vendor: 'Figma Inc', amount: 244.20, date: '2025-04-02', category: 'Software' },
    { id: 'REC-004', vendor: 'Amazon', amount: 156.78, date: '2025-03-30', category: 'Office Supplies' },
  ];

  // Calculate totals
  const totalInvoiced = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const totalReceived = invoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + inv.amount, 0);
  const totalPending = invoices.filter(inv => inv.status === 'pending').reduce((sum, inv) => sum + inv.amount, 0);
  const totalExpenses = receipts.reduce((sum, rec) => sum + rec.amount, 0);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-fit min-w-fit flex ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className={`p-6 rounded-lg shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total balance</h3>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <Wallet size={16} className={darkMode ? 'text-green-400' : 'text-green-500'} />
              </div>
            </div>
            <p className="text-xl font-bold">${totalInvoiced.toFixed(2)}</p>
          </div>

          <div className={`p-6 rounded-lg shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total received</h3>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <CreditCard size={16} className={darkMode ? 'text-blue-400' : 'text-blue-500'} />
              </div>
            </div>
            <p className="text-2xl font-bold">${totalReceived.toFixed(2)}</p>
          </div>

          <div className={`p-6 rounded-lg shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total pending</h3>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <FileText size={16} className={darkMode ? 'text-yellow-400' : 'text-yellow-500'} />
              </div>
            </div>
            <p className="text-2xl font-bold">${totalPending.toFixed(2)}</p>
          </div>

          <div className={`p-6 rounded-lg shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total expenses</h3>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <PiggyBank size={16} className={darkMode ? 'text-red-400' : 'text-red-500'} />
              </div>
            </div>
            <p className="text-2xl font-bold">${totalExpenses.toFixed(2)}</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6">
          <div className="flex border-b border-gray-200 dark:border-gray-700">
            <button
              className={`py-4 px-6 font-medium text-sm ${activeTab === 'invoices'
                  ? `${darkMode ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-600 border-b-2 border-blue-600'}`
                  : `${darkMode ? 'text-gray-400' : 'text-gray-500'}`
                }`}
              onClick={() => setActiveTab('invoices')}
            >
              Invoices
            </button>
            <button
              className={`py-4 px-6 font-medium text-sm ${activeTab === 'receipts'
                  ? `${darkMode ? 'text-blue-400 border-b-2 border-blue-400' : 'text-blue-600 border-b-2 border-blue-600'}`
                  : `${darkMode ? 'text-gray-400' : 'text-gray-500'}`
                }`}
              onClick={() => setActiveTab('receipts')}
            >
              Receipts
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-xl font-bold">
            {activeTab === 'invoices' ? 'Recent Invoices' : 'Recent Receipts'}
          </h2>
          <button className={`flex items-center px-4 py-2 rounded-lg ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}>
            <Plus size={16} className="mr-2" />
            <span>Create New</span>
          </button>
        </div>

        {/* Table */}
        <div className={`rounded-lg overflow-hidden shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
          <table className="w-full">
            <thead className={darkMode ? 'bg-gray-700' : 'bg-gray-50'}>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  {activeTab === 'invoices' ? 'Client' : 'Vendor'}
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                  {activeTab === 'invoices' ? 'Status' : 'Category'}
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {activeTab === 'invoices' ? (
                invoices.map((invoice) => (
                  <tr key={invoice.id} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">{invoice.client}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{invoice.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{invoice.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                          ${invoice.status === 'paid'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : invoice.status === 'pending'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                            : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}>
                        {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm font-medium">${invoice.amount.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className={`text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300`}>
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                receipts.map((receipt) => (
                  <tr key={receipt.id} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium">{receipt.vendor}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{receipt.id}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{receipt.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{receipt.category}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <div className="text-sm font-medium">${receipt.amount.toFixed(2)}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className={`text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300`}>
                        View
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Dashboardt;