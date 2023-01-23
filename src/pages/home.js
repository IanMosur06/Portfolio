import React from "react";

import Nav from "../components/Nav";
import Header from "../components/Header";
import About from "../components/About";
import Work from "../components/Work";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <body>
        <div className="App">
            <Nav />
            <Header />
            <About />
            <Work />
            <Footer />
        </div>
        </body>
    );
};

export default Home;