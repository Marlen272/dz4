import React, { useState, useEffect } from 'react';

const App = () => {
    const [storedUser, setStoredUser] = useState(null);

    useEffect(() => {
        const name = prompt('Введите ваше имя:');
        const lastname = prompt('Введите вашу фамилию:');

        if (storedUser) {
            alert(name === storedUser.name && lastname === storedUser.lastname ? 'Успешно' : 'Это не ты');
        } else {
            setStoredUser({ name, lastname });
        }
    }, [storedUser]);

    return null;
};

export default App;
