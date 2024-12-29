import React from "react";


function Volwassene({ title, id }) {
    return (
        <div className="pb-8">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            
            <div className="mb-4 flex items-center space-x-4">
                <label className="flex items-center">
                   ` <input type="radio" name={`gender${id}`} value="De Heer" className="w-4 h-4 text-blue-600" />
                    <span className="ml-2">De Heer</span>
                </label>
                <label className="flex items-center">
                    <input type="radio" name={`gender${id}`} value="Mevrouw" className="w-4 h-4 text-blue-600" />
                    <span className="ml-2">Mevrouw</span>
                </label>
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Voornaam"
                />
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Achternaam"
                />
            </div>

            <div className="mb-4">
                <input
                    type="date"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Nationaliteit</label>
                <select
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                >
                    <option value="Nederlandse">Nederlandse</option>
                    <option value="Andere">Andere</option>
                </select>
            </div>
        </div>
    );
}

export default Volwassene;