import { Link } from "react-router-dom";
import './home.css'
function Home() {
    return (
        <>

            <div className="openingPage">
                <h1>REACT QUIZ APP</h1>
                <Link to="/quiz">
                    <div className="btn">Start Quiz</div>
                </Link>


            </div>
        </>
    )
}

export default Home;