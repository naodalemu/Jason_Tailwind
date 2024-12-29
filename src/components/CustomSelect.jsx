import React, { useState, useEffect, useRef } from "react";
import Flag from "react-world-flags";

function CustomSelect({ options }) {
    const [selected, setSelected] = useState(options[0]);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // Reference for the dropdown element

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
    };

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        // Close the dropdown if the click is outside the dropdownRef element
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        // Attach the event listener to the document
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener on unmount
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            className="mb-4 bg-light-gray border border-border-gray rounded-xl px-5 py-4"
            ref={dropdownRef} // Attach the ref to the dropdown wrapper
        >
            <label className="block text-sm font-medium text-gray-700 mb-2">
                Nationaliteit
            </label>
            <div className="relative">
                <button
                    type="button"
                    onClick={toggleDropdown}
                    className="w-full bg-light-gray flex items-center justify-between rounded-lg"
                >
                    <div className="flex items-center space-x-2">
                        <Flag
                            code={selected.code}
                            className="w-6 h-6 object-cover rounded-3xl"
                        />
                        <span className="text-lg">{selected.name}</span>
                    </div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                {isOpen && (
                    <ul className="absolute w-full bg-white shadow-lg border border-gray-300 rounded-lg mt-2 max-h-60 overflow-y-auto z-10">
                        {options.map((option) => (
                            <li
                                key={option.code}
                                className="px-4 py-2 flex items-center space-x-2 cursor-pointer hover:bg-gray-100"
                                onClick={() => handleSelect(option)}
                            >
                                <Flag
                                    code={option.code}
                                    className="w-6 h-6 object-cover rounded-3xl"
                                />
                                <span>{option.name}</span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default CustomSelect;
