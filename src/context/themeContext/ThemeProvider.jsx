import { useState, useEffect, useRef } from "react";
import { themeContext } from "./themeContext";
import PropTypes from "prop-types";
import { Mode } from "../../config/SystemVariable";

const ThemeProvider = ({ children }) => {
    const initialMode =
        localStorage.getItem("mode") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? Mode.DARK : Mode.LIGHT);
        
    const [mode, setMode] = useState(initialMode);
    const isDark = useRef(initialMode === Mode.DARK);

    // Save mode to localStorage
    const saveUserData = (mode) => {
        localStorage.setItem("mode", mode);
    };

    // Toggle between light and dark modes
    const toggleMode = (newMode = mode === Mode.DARK ? Mode.LIGHT : Mode.DARK) => {
        setMode(newMode);
        saveUserData(newMode);
        isDark.current = newMode === Mode.DARK;
    };

    // Sync DOM class and `isDark` whenever mode changes
    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove(Mode.DARK, Mode.LIGHT);
        root.classList.add(mode);
        isDark.current = mode === Mode.DARK;
    }, [mode]);

    return (
        <themeContext.Provider value={{ isDark: isDark.current, toggleMode }}>
            {children}
        </themeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeProvider;
