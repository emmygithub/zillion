//pages/landingPage.jsx

import React, { useState } from 'react';
import { Menu, Search, ChevronDown, X } from 'lucide-react';
import NavigationBar from '../components/NavigationBar';
import { Routes, Route, useLocation } from 'react-router-dom';

import Industries from './Industries';
import ConsultingServices from './ConsultingServices';
import About from './About';
import Careers from './Careers';
import Digital from './Digital';
import Insights from './Insights';
import Contents from '../components/Contents';

function LandingPage() {
    const [activeSection, setActiveSection] = useState('Gaming Report');
    const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu toggle
    const location = useLocation(); // Get the current route

    // Sections content
    const sections = {
        'Gaming Report': {
            title: 'Gaming Report 2024',
            img: '/assets/1.jpg',
        },
        'Sustainability Guide': {
            title: 'Sustainability Guide',
            img: '/assets/2.jpg',
        },
        'Healthcare Private Equity': {
            title: 'Healthcare Private Equity',
            img: '/assets/3.jpg',
        },
        'AI Survey': {
            title: 'AI Survey',
            img: '/assets/4.jpg',
        }
    };

    const handleSectionChange = (section) => {
        if (activeSection !== section) {
            setActiveSection(section);
        }
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <Routes>
                <Route path="/" element={
                    <main className="relative h-screen">
                        {/* Background Section */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
                            style={{ backgroundImage: `url(${sections[activeSection].img})` }}
                        >
                            <NavigationBar />
                            {/* Main Content Section */}
                            <div className="container mx-auto px-4 py-20">
                                <h2 className="text-2xl sm:text-4xl mb-4">{activeSection}</h2>
                                <h1 className="text-4xl sm:text-6xl font-bold mb-8">{sections[activeSection].title}</h1>
                                <button className="bg-white text-black px-6 py-2 rounded-full flex items-center">
                                    READ THE REPORT
                                    <ChevronDown className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* Tabs to switch between sections */}
                        <div className="absolute bottom-0 left-0 right-0 flex justify-between p-4 text-sm">
                            {Object.keys(sections).map((section) => (
                                <span
                                    key={section}
                                    onClick={() => handleSectionChange(section)}
                                    className={`cursor-pointer ${activeSection === section ? 'font-bold' : ''} hover:underline`}
                                >
                                    {section}
                                </span>
                            ))}
                        </div>
                    </main>
                } />
                <Route path="/industries" element={<Industries />} />
                <Route path="/consulting-services" element={<ConsultingServices />} />
                <Route path="/digital" element={<Digital />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/about" element={<About />} />
                <Route path="/careers" element={<Careers />} />
            </Routes>

            {/* Only show Contents on the home page */}
            {location.pathname === '/' && <Contents />}
        </div>
    );
}

export default LandingPage;
