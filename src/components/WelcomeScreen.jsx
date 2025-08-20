import React from 'react';

const WelcomeScreen = ({ navigate }) => (
    <div className="w-full h-full bg-white flex flex-col justify-end p-8">
        <div className="w-full">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome to PopX</h1>
            <p className="text-gray-500 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            
            <div className="space-y-3">
                <button
                    onClick={() => navigate('create-account')}
                    className="w-full text-white font-semibold py-3 px-4 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105"
                    style={{ backgroundColor: '#6C25FF' }}
                >
                    Create Account
                </button>
                
                <button
                    onClick={() => navigate('login')}
                    className="w-full font-semibold py-3 px-4 rounded-lg shadow-md transform transition-transform duration-200 hover:scale-105"
                    style={{ backgroundColor: '#CEBAFB', color: '#1D2226' }}
                >
                    Already Registered? Login
                </button>
            </div>
        </div>
    </div>
);

export default WelcomeScreen;
