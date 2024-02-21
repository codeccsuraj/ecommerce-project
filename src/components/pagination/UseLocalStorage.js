import React, { useEffect, useState } from 'react';

const UseLocalStorage = ({ key, initialValue }) => {
    const [value, setValue] = useState(() => {
        try {
            const jsonValue = localStorage.getItem(key);
            return jsonValue ? JSON.parse(jsonValue) : initialValue;
        } catch (error) {
            console.error('Error parsing JSON from localStorage:', error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error stringifying value to JSON for localStorage:', error);
        }
    }, [key, value]);

    return [value, setValue];
};

export default UseLocalStorage;
