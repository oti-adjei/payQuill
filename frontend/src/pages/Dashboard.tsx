import React from 'react';
import { Wallet, CreditCard, FileText, PiggyBank, ChevronRight } from 'lucide-react';

function Dashboard() {
  // Sample data
  const totalBalance = 5240.21;
  const totalSpending = 250.80;
  const totalSaved = 550.25;
  
  const transactions = [
    { 
      id: '1', 
      name: 'Iphone 13 Pro MAX', 
      vendor: 'Apple, Inc', 
      amount: 420.84, 
      date: '14 Apr 2022', 
      type: 'Mobile',
      logo: 'https://via.placeholder.com/40/4285F4/FFFFFF?text=A'
    },
    { 
      id: '2', 
      name: 'Netflix Subscription', 
      vendor: 'Netflix', 
      amount: 100.00, 
      date: '05 Apr 2022', 
      type: 'Entertainment',
      logo: 'https://via.placeholder.com/40/E50914/FFFFFF?text=N'
    },
    { 
      id: '3', 
      name: 'Figma Subscription', 
      vendor: 'Figma, Inc', 
      amount: 244.20, 
      date: '02 Apr 2022', 
      type: 'Software',
      logo: 'https://via.placeholder.com/40/FF5722/FFFFFF?text=F'
    }
  ];

  const scheduledTransfers = [
    {
      id: '1',
      name: 'Saleh Ahmed',
      date: 'April 28, 2022 at 11:00',
      amount: 435.00,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=40&h=40&q=80'
    },
    {
      id: '2',
      name: 'Delowar Hossain',
      date: 'April 25, 2022 at 11:00',
      amount: 132.00,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=40&h=40&q=80'
    },
    {
      id: '3',
      name: 'Moinul Hasan Nayem',
      date: 'April 25, 2022 at 11:00',
      amount: 826.00,
      avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=40&h=40&q=80'
    }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 rounded-lg shadow-sm bg-gray-800 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-400">Total balance</h3>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-700">
              <Wallet size={16} className="text-green-400" />
            </div>
          </div>
          <p className="text-2xl font-bold">${totalBalance.toFixed(2)}</p>
        </div>
        
        <div className="p-6 rounded-lg shadow-sm bg-gray-800 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-400">Total spending</h3>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-700">
              <CreditCard size={16} className="text-blue-400" />
            </div>
          </div>
          <p className="text-2xl font-bold">${totalSpending.toFixed(2)}</p>
        </div>
        
        <div className="p-6 rounded-lg shadow-sm bg-gray-800 text-white">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-gray-400">Total saved</h3>
            <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-700">
              <PiggyBank size={16} className="text-purple-400" />
            </div>
          </div>
          <p className="text-2xl font-bold">${totalSaved.toFixed(2)}</p>
        </div>
      </div>

      {/* Working Capital Chart Placeholder */}
      <div className="mb-8 p-6 rounded-lg shadow-sm bg-gray-800 text-white">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Working Capital</h2>
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
              <span className="text-sm text-gray-300">Income</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
              <span className="text-sm text-gray-300">Expenses</span>
            </div>
            <select className="bg-gray-700 border-gray-600 text-gray-200 rounded-md px-3 py-1 text-sm">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
        </div>
        <div className="h-64 flex items-center justify-center text-gray-500">
          <p>Chart visualization would go here</p>
        </div>
      </div>

      {/* Recent Transactions and Scheduled Transfers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Transactions */}
        <div className="p-6 rounded-lg shadow-sm bg-gray-800 text-white">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Recent Transaction</h2>
            <a href="#" className="text-blue-400 flex items-center text-sm">
              View All <ChevronRight size={16} />
            </a>
          </div>
          
          <table className="w-full">
            <thead className="text-gray-400 text-xs uppercase">
              <tr>
                <th className="text-left pb-3">Name/Business</th>
                <th className="text-left pb-3">Type</th>
                <th className="text-left pb-3">Amount</th>
                <th className="text-left pb-3">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {transactions.map(transaction => (
                <tr key={transaction.id} className="hover:bg-gray-700">
                  <td className="py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                        <img src={transaction.logo} alt={transaction.name} className="h-10 w-10 object-cover" />
                      </div>
                      <div className="ml-4">
                        <div className="font-medium">{transaction.name}</div>
                        <div className="text-sm text-gray-400">{transaction.vendor}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 text-gray-300">{transaction.type}</td>
                  <td className="py-4 font-medium">${transaction.amount.toFixed(2)}</td>
                  <td className="py-4 text-gray-400">{transaction.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Scheduled Transfers */}
        <div className="p-6 rounded-lg shadow-sm bg-gray-800 text-white">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Scheduled Transfers</h2>
            <a href="#" className="text-blue-400 flex items-center text-sm">
              View All <ChevronRight size={16} />
            </a>
          </div>
          
          <div className="space-y-4">
            {scheduledTransfers.map(transfer => (
              <div key={transfer.id} className="flex items-center justify-between py-3">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                    <img src={transfer.avatar} alt={transfer.name} className="h-10 w-10 object-cover" />
                  </div>
                  <div className="ml-4">
                    <div className="font-medium">{transfer.name}</div>
                    <div className="text-sm text-gray-400">{transfer.date}</div>
                  </div>
                </div>
                <div className="font-medium text-red-400">- ${transfer.amount.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wallet Cards */}
      <div className="mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Wallet</h2>
          <button className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-gray-800 text-white relative overflow-hidden">
            <div className="mb-6">
              <p className="text-gray-400 text-sm">Maglo. <span className="ml-2 text-xs">Universal Bank</span></p>
            </div>
            <div className="mb-6">
              <div className="w-12 h-8 bg-gray-700 rounded-md mb-4"></div>
              <p className="text-xl tracking-widest">5495 7381 3759 2321</p>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className="absolute right-4 top-4">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.5 12C7.5 12 9 10 12 10C15 10 16.5 12 16.5 12C16.5 12 15 14 12 14C9 14 7.5 12 7.5 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-700 text-white relative overflow-hidden">
            <div className="mb-6">
              <p className="text-gray-400 text-sm">Maglo. <span className="ml-2 text-xs">Commercial Bank</span></p>
            </div>
            <div className="mb-6">
              <div className="w-12 h-8 bg-gray-600 rounded-md mb-4"></div>
              <p className="text-xl tracking-widest">85952548****</p>
              <p className="text-sm text-gray-400 mt-1">09/25</p>
            </div>
            <div className="absolute top-0 right-0 w-16 h-16">
              <div className="absolute right-4 top-4">
                <svg viewBox="0 0 24 24" className="w-8 h-8 text-gray-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M2 10H22" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-4 right-4">
              <svg viewBox="0 0 36 36" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="4" fill="#1A1F71"/>
                <path d="M14.2 21.8H11.8L13.5 14.2H15.9L14.2 21.8Z" fill="white"/>
                <path d="M23.3 14.4C22.7 14.2 21.8 14 20.7 14C18.3 14 16.6 15.2 16.6 17C16.6 18.3 17.8 19 18.7 19.4C19.6 19.8 19.9 20.1 19.9 20.4C19.9 20.9 19.3 21.1 18.7 21.1C17.8 21.1 17.3 21 16.5 20.7L16.2 20.6L15.9 22.7C16.6 23 17.7 23.2 18.8 23.2C21.4 23.2 23 22 23 20.1C23 19.1 22.4 18.3 21 17.7C20.2 17.3 19.7 17.1 19.7 16.7C19.7 16.4 20 16 20.8 16C21.5 16 22 16.1 22.4 16.3L22.6 16.4L22.9 14.4H23.3Z" fill="white"/>
                <path d="M26.3 14.2H24.5C24 14.2 23.6 14.3 23.4 14.8L20.7 21.8H23.3C23.3 21.8 23.6 20.9 23.7 20.7C23.9 20.7 26 20.7 26.3 20.7C26.4 21 26.6 21.8 26.6 21.8H29L26.3 14.2ZM24.3 18.8C24.5 18.3 25.2 16.4 25.2 16.4C25.2 16.4 25.4 15.9 25.5 15.6L25.6 16.3C25.6 16.3 26.1 18.4 26.2 18.8H24.3Z" fill="white"/>
                <path d="M10.7 14.2L8.2 19.3L8 18.4C7.5 16.9 6.2 15.3 4.7 14.4L7 21.8H9.6L13.7 14.2H10.7Z" fill="white"/>
                <path d="M6.8 14.2H2.9L2.8 14.4C5.8 15.2 7.8 17.5 8.5 20.1L7.7 14.8C7.6 14.3 7.2 14.2 6.8 14.2Z" fill="#F9A51A"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;