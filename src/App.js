import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

import "./App.css"

function App() {
    return (
        <div className="App">
            <Nav />
            <Header />
        </div>
    )
}

export default App;