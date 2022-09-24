import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroImage from "../components/HeroImage/HeroImage";
import Footer from "../components/Footer/Footer";
import Card from "../components/Cards/Card";
import Img from "../../src/assets/photo.jpg";
import Heading from "../components/Heading";
import AboutMe from "../components/About/AboutMe";
import { useNavigate } from "react-router-dom";
function Home() {
    const navigate = useNavigate();
    const handle = () => {
        navigate("/project");
    };
    return (

        <div>
            <Navbar />
            <HeroImage image={Img} heading={"HI, I'M Frontend DEVELOPER"} para={"Shilpi Gupta"} />
            <Heading message={"Latest Works"} />
            <Card length={4} />

            <span onClick={handle} style={{
                color: "#ffff", position: "absolute", bottom: "-108%",
                right: "65%", fontSize: "1.6rem", cursor: "pointer"
            }}>...more</span>
            <Heading message={" About Me"} />
            <AboutMe style={{ backgroundColor: "#fdfdfd" }} />
            <Footer />
        </div>


    );
}

export default Home;