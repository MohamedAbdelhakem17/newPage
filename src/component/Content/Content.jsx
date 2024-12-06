import useLocalization from "../../hooks/useTranslation"
import headphone from "../../assets/image/icons/iconheadphone.svg"
import iconlampa from "../../assets/image/icons/iconlampa.svg"
import staricon from "../../assets/image/icons/staricon.svg"
import darkStartIcon from "../../assets/image/icons/darkStartIcon.svg"
import useLocalizationContext from "../../context/localizationContext/localizationContext"
import useTheme from "../../context/themeContext/themeContext"
const Content = () => {
    const setContent = useLocalization("content")
    const { isEnglish } = useLocalizationContext()
    const { isDark } = useTheme()
    return <div className="col-md-6  col-12 content py-2">
        <h2 className="title mb-5">CODECRAFT </h2>

        <p className="py-1">{setContent("statement1")}</p>
        <p className="py-1">{setContent("statement2")}</p>

        <ul className="m-0 p-0 mt-5">
            <li className="py-1 d-flex "> <img className={`${isEnglish ? "pe-3" : "ps-3"}`} style={{ width: "40px" }} src={headphone} alt="icon" /> <span>{setContent("ul.li1")}</span></li>
            <li className="py-1"> <img className={`${isEnglish ? "pe-3" : "ps-3"}`} style={{ width: "40px" }} src={isDark ? darkStartIcon : staricon} alt="icon" /> <span>{setContent("ul.li2")}</span></li>
            <li className="py-1">  <img className={`${isEnglish ? "pe-3" : "ps-3"}`} style={{ width: "40px" }} src={iconlampa} alt="icon" /> <span>{setContent("ul.li3")}</span></li>
        </ul >
    </div >
}

export default Content