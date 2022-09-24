import React from "react";
import Navbar from "../../../../React_Portfolio/portfolio/src/components/Navbar/Navbar";
import HeroImage from "../../../../React_Portfolio/portfolio/src/components/HeroImage/HeroImage";
import Footer from "../components/Footer/Footer";
import Img from "../assets/photo3.jpg";
import Form from "../components/Form/Form";
 import Heading from "../components/Heading";
function Contact() {
    return (
        <div>
            <div>
                <Navbar />
                <HeroImage  image={Img} heading={ <Heading message ={ `
 React developer passionate to develope seamless user experience with responsive design.` } /> } style={{ height: "30vh" }} /> 

                <Form />
                <Footer />
            </div>
        </div>
    );
}

export default Contact;