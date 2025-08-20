import React, { useState } from 'react';
import InputField from './InputField'; 
import RadioGroup from './RadioGroup'; 

const CreateAccountScreen = ({ navigate }) => {
    const [isAgency, setIsAgency] = useState('yes');

    return (
        <div className="w-full h-full bg-white flex flex-col justify-between p-8">
            <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Create your PopX account</h1>
                
                <InputField label="Full Name" type="text" placeholder="Full Name" />
                <InputField label="Phone number" type="tel" placeholder="Phone number" />
                <InputField label="Email address" type="email" placeholder="Email address" />
                <InputField label="Password" type="password" placeholder="Password" />
                <InputField label="Company name" type="text" placeholder="Company name" />
                
                <RadioGroup 
                    label="Are you an Agency?"
                    options={[{label: 'Yes', value: 'yes'}, {label: 'No', value: 'no'}]}
                    selected={isAgency}
                    setSelected={setIsAgency}
                />
            </div>
            
            <button
                onClick={() => navigate('account-settings')}
                className="w-full text-white font-semibold py-3 px-4 rounded-lg shadow-md"
                style={{ backgroundColor: '#6C25FF' }}
            >
                Create Account
            </button>
        </div>
    );
};

export default CreateAccountScreen;