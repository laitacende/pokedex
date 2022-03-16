import React from 'react';

export default function ThemeToggle({ theme, toggleTheme } : { theme: any, toggleTheme: any }) {
    return (
        <div onClick={toggleTheme} className={"mode-toggle"}>
            {theme === 'light' ? <span className="material-icons-outlined">
            light_mode </span> : <span className="material-icons-outlined">dark_mode</span>}
        </div>
    );
}
