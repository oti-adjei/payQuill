import wailsLogo from './assets/wails.png'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import InvoicesPage from './pages/InvoicesPage';
import './styles/App.css'
import Dashboardt from './pages/Dashboard_cp';


function App() {
    return (
        // <div className="min-h-screen bg-white grid grid-cols-1 place-items-center justify-items-center mx-auto py-8">
        //     <div className="text-blue-900 text-2xl font-bold font-mono">
        //         <h1 className="content-center">Vite + React + TS + Tailwind</h1>
        //     </div>
        //     <div className="w-fit max-w-md">
        //         <a href="https://wails.io" target="_blank">
        //             <img src={wailsLogo} className="logo wails" alt="Wails logo" />
        //         </a>
        //     </div>
        // </div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Dashboardt />} />
                 <Route path="invoices" element={<InvoicesPage />} />
                 {/*<Route path="transactions" element={<div className="p-6"><h1 className=" font-bold">Transactions</h1><p className="mt-4">Transactions page content will go here.</p></div>} />
                <Route path="wallets" element={<div className="p-6"><h1 className="text-2xl font-bold">My Wallets</h1><p className="mt-4">Wallets page content will go here.</p></div>} />
                <Route path="settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Settings</h1><p className="mt-4">Settings page content will go here.</p></div>} />
                <Route path="*" element={<div className="p-6"><h1 className="text-2xl font-bold">Page Not Found</h1><p className="mt-4">The page you're looking for doesn't exist.</p></div>} /> */}
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App
