import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Cards from "../components/Cards";
import ContactUs from "../components/ContactUs";
import Resources from "../components/Resources";
import Footer from "../components/Footer";
import TopIcon from "../components/TopIcon";

function Home(){

        return(
            <>
            <div className="home">
                <Header />
                <Main />
                <Cards />
                <ContactUs />
                <Resources />
                <TopIcon />
                <Footer />
            </div>
            </>
        )

}export default Home;