import {useState} from 'react';

export function useLocalStorage (key, initialValue) {
    const [storageValue, setStorageValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch(error) {
            console.log("error setting sotrage initial value: ", error);
            return initialValue
        }
    });

    const setValue = value => {
        try {
            setStorageValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.log("storage setValue error: ", error);
        }
    }

    return [storageValue, setValue]

}