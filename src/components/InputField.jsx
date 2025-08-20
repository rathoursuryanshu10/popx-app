import React from 'react';

const InputField = ({ label, type, placeholder }) => (
    <div className="relative mb-4">
        <label 
            className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-purple-700"
        >
            {label}{type !== 'radio' && <span className="text-red-500">*</span>}
        </label>
        <input
            type={type}
            placeholder={placeholder}
            className="block w-full rounded-md border-0 p-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm"
        />
    </div>
);

export default InputField;