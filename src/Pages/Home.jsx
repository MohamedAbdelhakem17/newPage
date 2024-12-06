import Content from "../component/Content/Content"
import Form from "../component/Form/Form"
import UserOptions from "../component/UserOptions/UserOptions"

const Home = () => {
    return (
        <section className="home">
            <div className="container py-4 d-flex justify-content-between flex-column h-100">
                <UserOptions />
                <div className="row align-items-center justify-content-between">
                    <Content />
                    <Form />
                </div>
                <h2>hi</h2>
            </div>
        </section>
    )
}

export default Home