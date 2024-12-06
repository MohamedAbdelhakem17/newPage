import { Language, Mode } from "../../config/SystemVariable"
import useTheme from "../../context/themeContext/themeContext"
import darkIcon from "../../assets/image/icons/darkIcon.svg"
import lighticon from "../../assets/image/icons/lighticon.svg"
import useLocalizationContext from "../../context/localizationContext/localizationContext"

const UserOptions = () => {
    const { toggleMode, isDark } = useTheme()
    const { changeLanguage, isEnglish } = useLocalizationContext()

    const handleChangeLanguage = () => {
        const lang = isEnglish ? Language.AR : Language.EN;
        changeLanguage(lang);
    };

    return (
        <div className={`d-flex justify-content-${isEnglish ? "end" : "start"} gap-2 align-items-center user-options`}>
            <img src={`${isDark ? lighticon : darkIcon}`} onClick={() => toggleMode(isDark ? Mode.LIGHT : Mode.DARK)} style={{ width: "30px", cursor: "pointer", height: "25px" }} />

            <div onClick={handleChangeLanguage} className={`d-flex user-select-none  align-items-center gap-2 ${isDark ? "text-white" : "text-black"}`} style={{ cursor: "pointer", height: "25px" }}>
                <h3 className="fw-light m-0" >{isEnglish ? "en" : "ar"}</h3>
                <i className={`fa-solid fa-caret-down m-0 ${isDark ? "text-white" : "text-black"} h5`} ></i>
            </div>
        </div>
    )
}

export default UserOptions