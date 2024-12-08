/* eslint-disable react/prop-types */
import useLocalizationContext from "../../context/localizationContext/localizationContext"
import useLocalization from "../../hooks/useTranslation"
import Input from "../Shared/Input"


const Form = ({submit}) => {
    const setContent = useLocalization("form")
    const { isEnglish } = useLocalizationContext()

    const handelSubmit = (event) => {
        event.preventDefault()
        submit(true)
    }

    return (
        <div className="col-md-5 col-12 position-relative">
            <form className={`w-100 ${isEnglish ? "ms-auto" : "me-auto"} message-form p-3`} onSubmit={handelSubmit}>
                <Input id="userName" label={setContent("name.label")} placeholder={setContent("name.placeholder")} type="text">
                    <i className="fa-regular fa-user"></i>
                </Input>
                <Input id="userEmail" label={setContent("email.label")} placeholder={setContent("email.placeholder")} type="email">
                    <i className="fa-regular fa-envelope"></i>
                </Input>
                <Input id="userPhone" label={setContent("phone.label")} placeholder={setContent("phone.placeholder")} type="tel">
                    <i className="fa-solid fa-phone"></i>
                </Input>

                {/* select Service */}
                <div className="p-2 w-100">
                    <h6>{setContent("type.label")}</h6>
                    <div className="d-flex justify-content-evenly align-items-center">
                        <div className="service d-flex gap-2 align-items-center">
                            <input type="radio" name="service" value="Website" className="p-3" />
                            <label htmlFor="web">{setContent("type.items.0")}</label>
                        </div>
                        <div className="service  d-flex gap-2 align-items-center">
                            <input type="radio" name="service" value="Application" className="p-3" />
                            <label htmlFor="web">{setContent("type.items.1")}</label>
                        </div>
                    </div>
                </div>

                <button className="d-block btn btn-form  text-center p-2 my-3 mx-auto" type="submit">
                    {setContent("Submit")}
                </button>
            </form>
            <div className="circle position-absolute"></div>
        </div>
    )
}

export default Form