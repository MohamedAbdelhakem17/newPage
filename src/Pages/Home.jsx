/* eslint-disable react/prop-types */
import Content from "../component/Content/Content"
import Footer from "../component/Footer/Footer"
import Form from "../component/Form/Form"
import Spinner from "../component/Spinner/Spinner"
import UserOptions from "../component/UserOptions/UserOptions"

const Home = ({ submit }) => {
    return (
        <section className="home px-5 position-relative">
            <div className="container-fluid px-lg-5 px-2 col-lg-11 col-12 py-4 px-0 d-flex justify-content-between flex-column " style={{ minHeight: "100vh" }}>
                <UserOptions />
                <div className="row align-items-center justify-content-between">
                    <Content />
                    <Form submit={submit} />
                </div>
                <Spinner position={{ top: "150px", left: "45%" }} />
                <Spinner position={{ bottom: "50px", left: "50px" }} />
                <Spinner position={{ bottom: "50px", right: "30px" }} />
                <Footer />
            </div>
        </section>
    )
}

export default Home 