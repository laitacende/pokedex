import React, { useState } from 'react';

export default function UseDarkMode() {
    const [theme, setTheme] = useState('light');
    function toggleTheme() {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }
    return [theme, toggleTheme];
}