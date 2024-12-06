import PropTypes from 'prop-types'
import { localizationsContext } from "./localizationContext"
import { useEffect, useRef, useState } from 'react'
import { Language } from '../../config/SystemVariable'
import { useTranslation } from 'react-i18next';

const LocalizationsProvider = ({ children }) => {
    const isEnglish = useRef(true)
    const [language, setLanguage] = useState("");
    const { i18n } = useTranslation()

    const changeLanguage = (lang) => {
        setLanguage(lang)
        localStorage.setItem("language", lang)

        const isArabic = lang === Language.AR
        isEnglish.current = !isArabic

        const rootElement = document.documentElement

        rootElement.setAttribute("dir", isArabic ? "rtl" : "ltr");
        rootElement.setAttribute("lang", isArabic ? Language.AR : Language.EN);

        i18n.changeLanguage(lang)
    }

    useEffect(() => {
        // Load User Option on component mount
        const currentLanguage = localStorage.getItem("language") || Language.EN;
        setLanguage(currentLanguage);
    }, []) // Empty dependency array ensures it runs only once after initial render

    return <localizationsContext.Provider value={{ changeLanguage, isEnglish: isEnglish.current, language }}>
        {children}
    </localizationsContext.Provider>
}

LocalizationsProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default LocalizationsProvider