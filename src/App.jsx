import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen'; 
import LoginScreen from './components/LoginScreen'; 
import CreateAccountScreen from './components/CreateAccountScreen'; 
import AccountSettingsScreen from './components/AccountSettingsScreen'; 

function App() {
    const [page, setPage] = useState('welcome');

    const navigate = (newPage) => {
        setPage(newPage);
    };

    const renderPage = () => {
        switch (page) {
            case 'login':
                return <LoginScreen navigate={navigate} />;
            case 'create-account':
                return <CreateAccountScreen navigate={navigate} />;
            case 'account-settings':
                return <AccountSettingsScreen navigate={navigate} />;
            case 'welcome':
            default:
                return <WelcomeScreen navigate={navigate} />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-200 flex items-center justify-center font-sans">
            <div className="w-full max-w-sm h-[85vh] max-h-[900px] bg-white shadow-2xl rounded-3xl overflow-hidden relative">
                <div className="w-full h-full overflow-y-auto">
                    {renderPage()}
                </div>
            </div>
        </div>
    );
}

export default App;
