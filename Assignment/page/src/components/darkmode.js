import React, { useEffect, useState } from "react";

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.body.classList.add(theme);
    }, [theme]);

    const switchTheme = (e) => {
        if (theme === "dark") {
            document.body.classList.replace("dark", "light");
            setTheme("light");
            localStorage.setItem("theme", "light");
        } else {
            document.body.classList.replace("light", "dark");
            setTheme("dark");
            localStorage.setItem("theme", "dark");
        }
    };

    return (
        <div className="dark-mode-container">
          <button
            className={`dark-mode-button ${theme === "dark" ? "dark-mode-button-dark" : ""}`}
            id="darkMode"
            onClick={switchTheme}
          >
            {theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          </button>
        </div>
    );
};

export default DarkMode;