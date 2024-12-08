import { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import useLocalizationContext from "../../context/localizationContext/localizationContext";
import useLocalization from "../../hooks/useTranslation";
import Input from "../Shared/Input";

// eslint-disable-next-line react/prop-types
const Form = ({ submit }) => {
    const setContent = useLocalization("form");
    const { isEnglish } = useLocalizationContext();

    const initialValues = {
        userName: "",
        userEmail: "",
        userPhone: "",
        service: "",
    };

    const createValidationSchema = () => {
        return Yup.object({
            userName: Yup.string().required(setContent("validation.requiredName")).matches(/^[^\d]*$/, setContent("validation.noNumbers")),
            userEmail: Yup.string()
                .email(setContent("validation.invalidEmail"))
                .required(setContent("validation.required")),
            userPhone: Yup.string()
                .matches(/^\d+$/, setContent("validation.invalidPhone"))
                .required(setContent("validation.required")),
            service: Yup.string().required(setContent("validation.service")),
        });
    };

    const formik = useFormik({
        initialValues,
        validationSchema: createValidationSchema(),
        onSubmit: (values) => {
            console.log("Form Values:", values);
            submit(true);
        },
    });

    // Recreate validation schema on language change
    useEffect(() => {
        formik.setFormikState((prevState) => ({
            ...prevState,
            validationSchema: createValidationSchema(),
        }));
        formik.validateForm(); // Revalidate the form after updating the schema
    }, [isEnglish]); // Depend on the language state

    return (
        <div className="col-md-5 col-12 position-relative">
            <form
                className={`w-100 ${isEnglish ? "ms-auto" : "me-auto"} message-form p-3`}
                onSubmit={formik.handleSubmit}
            >
                {/* Name Input */}
                <Input
                    id="userName"
                    label={setContent("name.label")}
                    placeholder={setContent("name.placeholder")}
                    type="text"
                    formikHandler={formik.getFieldProps("userName")}
                    errors={formik.errors.userName}
                    touched={formik.touched.userName}
                >
                    <i className="fa-regular fa-user"></i>
                </Input>

                {/* Email Input */}
                <Input
                    id="userEmail"
                    label={setContent("email.label")}
                    placeholder={setContent("email.placeholder")}
                    type="email"
                    formikHandler={formik.getFieldProps("userEmail")}
                    errors={formik.errors.userEmail}
                    touched={formik.touched.userEmail}
                >
                    <i className="fa-regular fa-envelope"></i>
                </Input>

                {/* Phone Input */}
                <Input
                    id="userPhone"
                    label={setContent("phone.label")}
                    placeholder={setContent("phone.placeholder")}
                    type="tel"
                    formikHandler={formik.getFieldProps("userPhone")}
                    errors={formik.errors.userPhone}
                    touched={formik.touched.userPhone}
                >
                    <i className="fa-solid fa-phone"></i>
                </Input>

                {/* Service Selection */}
                <div className="p-2 w-100">
                    <h6>{setContent("type.label")}</h6>
                    <div className="d-flex justify-content-evenly align-items-center">
                        <div className="service d-flex gap-2 align-items-center">
                            <input
                                type="radio"
                                id="website"
                                name="service"
                                value="Website"
                                checked={formik.values.service === "Website"}
                                onChange={() => formik.setFieldValue("service", "Website")}
                            />
                            <label htmlFor="website">{setContent("type.items.0")}</label>
                        </div>
                        <div className="service d-flex gap-2 align-items-center">
                            <input
                                type="radio"
                                id="application"
                                name="service"
                                value="Application"
                                checked={formik.values.service === "Application"}
                                onChange={() => formik.setFieldValue("service", "Application")}
                            />
                            <label htmlFor="application">{setContent("type.items.1")}</label>
                        </div>
                    </div>
                </div>
                {formik.touched.service && formik.errors.service && (
                    <div className="text-danger">{formik.errors.service}</div>
                )}

                {/* Submit Button */}
                <button
                    className="d-block btn btn-form text-center p-2 my-3 mx-auto"
                    disabled={!(formik.dirty && formik.isValid)}
                    type="submit"
                >
                    {setContent("Submit")}
                </button>
            </form>
            <div className="circle position-absolute"></div>
        </div>
    );
};

export default Form;
