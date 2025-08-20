import React from 'react';

const AccountSettingsScreen = ({ navigate }) => (
    <div className="w-full h-full bg-gray-50 overflow-y-auto">
        <div className="p-4">
            <h1 className="text-xl font-bold text-gray-800">Account Settings</h1>
        </div>
        <div className="p-4">
            <div className="flex items-center">
                <div className="relative">
                    <img 
                        className="w-20 h-20 rounded-full" 
                        src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop" 
                        alt="Marry Doe"
                        onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/80x80/cccccc/333333?text=MD'; }}
                    />
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center border-2 border-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0-0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                </div>
                <div className="ml-4">
                    <h2 className="font-bold text-lg">Marry Doe</h2>
                    <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
                </div>
            </div>
            <p className="text-gray-700 mt-4">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
            <div className="border-t border-dashed border-gray-300 mt-6 pt-6">
            
            </div>
        </div>
    </div>
);

export default AccountSettingsScreen;