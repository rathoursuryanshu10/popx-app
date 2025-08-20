import React from 'react';
import InputField from './InputField'; 

const LoginScreen = ({ navigate }) => (
    <div className="w-full h-full bg-white flex flex-col justify-center p-8">
        <div className="w-full">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Signin to your PopX account</h1>
            <p className="text-gray-500 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            
            <InputField label="Email Address" type="email" placeholder="Enter email address" />
            <InputField label="Password" type="password" placeholder="Enter password" />

            <button
                onClick={() => navigate('account-settings')}
                className="w-full text-white font-semibold py-3 px-4 rounded-lg shadow-md mt-4"
                style={{ backgroundColor: '#6C25FF' }}
            >
                Login
            </button>
        </div>
    </div>
);

export default LoginScreen;
