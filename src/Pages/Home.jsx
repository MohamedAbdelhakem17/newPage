import Content from "../component/Content/Content";
import Footer from "../component/Footer/Footer";
import Form from "../component/Form/Form";
import Spinner from "../component/Spinner/Spinner";
import UserOptions from "../component/UserOptions/UserOptions";
import ThreeScene from "../component/SuccessSubmit/SuccessSubmit";
import { useState } from "react";

const Home = () => {
    const [isSubmit, setIsSubmit] = useState(false);
    return (
        <section className="home px-5 position-relative">
            {!isSubmit ? (
                <div
                    className="container-fluid px-lg-5 px-2 col-lg-11 col-12 py-4 px-0 d-flex justify-content-between flex-column "
                    style={{ minHeight: "100vh" }}
                >
                    <UserOptions />
                    <div className="row align-items-center justify-content-between">
                        <Content />
                        <Form submit={setIsSubmit} />
                    </div>
                    <Footer />
                </div>
            ) : (
                <ThreeScene />
            )}
            <Spinner position={{ top: "150px", left: "45%" }} />
            <Spinner position={{ bottom: "50px", left: "50px" }} />
            <Spinner position={{ bottom: "50px", right: "30px" }} />
        </section>
    );
};

export default Home;
