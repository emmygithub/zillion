
//About.jsx
import React from "react";
import NavigationTitle from "../components/NavigationTitle";
import Contents from "../components/Contents";
import Footer from "../components/Footer";


function About() {


    return (
        <div className="min-h-screen bg-white text-black">
            <NavigationTitle />
            <div className="container mx-auto px-4 py-20">
                <h1 className="text-4xl font-bold mb-4">About</h1>
                <p>Learn more about our company and values.</p>
            </div>
       

        </div>
    );

}


export default About;
