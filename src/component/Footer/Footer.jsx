import useLocalization from "../../hooks/useTranslation"

const Footer = () => {
    const setContent = useLocalization("think")
    return (
        <div className="text-center">
            <h2 className="title footer">
                {setContent("word1")} <br /> {setContent("word2")}
            </h2>
        </div>
    )
}

export default Footer