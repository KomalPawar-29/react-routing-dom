import "./About.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function About () {
    return(
        <div className="footer-container">
            <Navbar/>
            <h1>About</h1>
            <p>
                This is the about page. You can put information here.
            </p>
            <Footer/>
        </div>
    )
}