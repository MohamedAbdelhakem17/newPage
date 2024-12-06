import { useState, useEffect, useRef } from "react";
import { themeContext } from "./themeContext";
import PropTypes from "prop-types";
import { Mode } from "../../config/SystemVariable";

const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(null);
    const isDark = useRef(false);

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

    // Initialize theme mode
    useEffect(() => {
        const userSelect = localStorage.getItem("mode");
        if (userSelect) {
            setMode(userSelect);
            isDark.current = userSelect === Mode.DARK;
        } else {
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            setMode(systemPrefersDark ? Mode.DARK : Mode.LIGHT);
        }
    }, []);

    // Update DOM and `isDark` reference when mode changes
    useEffect(() => {
        if (mode) {
            const root = document.documentElement;
            root.classList.remove(Mode.DARK, Mode.LIGHT);
            root.classList.add(mode);
            isDark.current = mode === Mode.DARK;
        }
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
