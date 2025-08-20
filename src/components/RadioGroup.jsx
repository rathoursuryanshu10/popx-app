import React from 'react';

const RadioGroup = ({ label, options, selected, setSelected }) => (
    <div className="mb-4">
        <label className="text-xs font-medium text-gray-900">{label}<span className="text-red-500">*</span></label>
        <div className="flex items-center space-x-4 mt-2">
            {options.map(option => (
                <div key={option.value} className="flex items-center">
                    <input
                        id={option.value}
                        name="agency-radio"
                        type="radio"
                        checked={selected === option.value}
                        onChange={() => setSelected(option.value)}
                        className="h-4 w-4 border-gray-300 text-purple-600 focus:ring-purple-600"
                    />
                    <label htmlFor={option.value} className="ml-2 block text-sm font-medium leading-6 text-gray-900">
                        {option.label}
                    </label>
                </div>
            ))}
        </div>
    </div>
);

export default RadioGroup;
