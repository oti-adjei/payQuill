import React, { useState } from 'react';
import { Search, MoreVertical, ListFilter } from 'lucide-react';

type Invoice = {
  id: string;
  client: string;
  invoiceNumber: string;
  amount: number;
  date: string;
  time: string;
  status: 'Paid' | 'Pending' | 'Unpaid';
  orders?: string;
  type?: string;
  logo?: string;
};

function InvoicesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Sample data
  const invoices: Invoice[] = [
    { 
      id: '1', 
      client: 'Gadget Gallery LTD', 
      invoiceNumber: 'MGL524874', 
      amount: 420.84, 
      date: '14 Apr 2022', 
      time: '8:00 PM', 
      status: 'Pending', 
      orders: '20',
      logo: 'https://via.placeholder.com/40/4285F4/FFFFFF?text=G'
    },
    { 
      id: '2', 
      client: 'Figma Subscription', 
      invoiceNumber: 'MGL524250', 
      amount: 244.80, 
      date: '14 Apr 2022', 
      time: '8:00 PM', 
      status: 'Paid', 
      orders: '01',
      logo: 'https://via.placeholder.com/40/FF5722/FFFFFF?text=F'
    },
    { 
      id: '3', 
      client: 'Jack Dawson Eric', 
      invoiceNumber: 'MGL524874', 
      amount: 200.00, 
      date: '14 Apr 2022', 
      time: '9:00 AM', 
      status: 'Unpaid', 
      orders: '02',
      logo: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=40&h=40&q=80'
    },
    { 
      id: '4', 
      client: 'UIHUT Subscription', 
      invoiceNumber: 'MGL524140', 
      amount: 84.00, 
      date: '14 Apr 2022', 
      time: '8:00 PM', 
      status: 'Paid', 
      orders: '01',
      logo: 'https://via.placeholder.com/40/2196F3/FFFFFF?text=U'
    },
    { 
      id: '5', 
      client: 'Citi Bank Ltd.', 
      invoiceNumber: 'MGL524245', 
      amount: 420.84, 
      date: '14 Apr 2022', 
      time: '8:00 PM', 
      status: 'Pending', 
      type: 'Withdraw',
      logo: 'https://via.placeholder.com/40/607D8B/FFFFFF?text=C'
    },
    { 
      id: '6', 
      client: 'Bitcoin Transaction', 
      invoiceNumber: 'MGL524254', 
      amount: 400.11, 
      date: '14 Apr 2022', 
      time: '8:00 PM', 
      status: 'Pending', 
      type: 'Technology',
      logo: 'https://via.placeholder.com/40/FF9800/FFFFFF?text=B'
    },
    { 
      id: '7', 
      client: 'Netflix Subscription', 
      invoiceNumber: 'MGL524487', 
      amount: 420.84, 
      date: '14 Apr 2022', 
      time: '7:00 PM', 
      status: 'Paid', 
      orders: '01',
      logo: 'https://via.placeholder.com/40/E50914/FFFFFF?text=N'
    },
    { 
      id: '8', 
      client: 'Sajib Rahman', 
      invoiceNumber: 'MGL524598', 
      amount: 500.10, 
      date: '14 Apr 2022', 
      time: '8:00 PM', 
      status: 'Paid', 
      type: 'Withdraw',
      logo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=40&h=40&q=80'
    },
  ];

  // Get status badge style
  const getStatusBadgeStyle = (status: string) => {
    if (status === 'Paid') {
      return darkMode 
        ? 'bg-green-900 text-green-200' 
        : 'bg-green-100 text-green-800';
    } else if (status === 'Pending') {
      return darkMode 
        ? 'bg-amber-900 text-amber-200' 
        : 'bg-amber-100 text-amber-800';
    } else {
      return darkMode 
        ? 'bg-red-900 text-red-200' 
        : 'bg-red-100 text-red-800';
    }
  };

  return (
     <div className={` min-h-fit w-full flex ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
    <main className="p-6 w-full">
      <h1 className="text-2xl font-bold mb-6">Invoices</h1>
      
      {/* Search and Actions */}
      <div className="flex justify-between items-center mb-6">
        <div className={`relative flex-1 max-w-md ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search invoices"
            className={`pl-10 pr-4 py-2 w-full rounded-lg ${
              darkMode 
                ? 'bg-gray-800 border-gray-700 focus:border-blue-500' 
                : 'bg-white border-gray-300 focus:border-blue-500'
            } border focus:outline-none focus:ring-1 focus:ring-blue-500`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex space-x-3">
          <button className={`flex items-center px-4 py-2 rounded-lg ${
            darkMode 
              ? 'bg-gray-800 text-gray-200 border border-gray-700' 
              : 'bg-white text-gray-700 border border-gray-300'
          }`}>
            <ListFilter size={18} className="mr-2" />
            <span>Filters</span>
          </button>
          <button className={`flex items-center px-4 py-2 rounded-lg ${
            darkMode 
              ? 'bg-lime-600 hover:bg-lime-700' 
              : 'bg-lime-500 hover:bg-lime-600'
          } text-white`}>
            <span>Create Invoice</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className={`rounded-lg overflow-x-auto shadow-sm ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <table className="w-full">
          <thead className={darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-50 text-gray-600'}>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Name/Client
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Orders/Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className={`divide-y ${darkMode ? 'divide-gray-700' : 'divide-gray-200'}`}>
            {invoices.map((invoice) => (
              <tr key={invoice.id} className={darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                      <img src={invoice.logo} alt={invoice.client} className="h-10 w-10 object-cover" />
                    </div>
                    <div className="ml-4">
                      <div className="font-medium">{invoice.client}</div>
                      <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Inv: {invoice.invoiceNumber}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium">{invoice.date}</div>
                  <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    at {invoice.time}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {invoice.orders || invoice.type || '-'}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="font-medium">${invoice.amount.toFixed(2)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeStyle(invoice.status)}`}>
                    {invoice.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
    </div>
  );
}

export default InvoicesPage;