import React from 'react';
import { StarBackground } from '../components/StarBackground';
import { Navbar } from '../components/Navbar';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { SkillsSection } from '../components/SkillsSection';
import { ProjectSection } from "../components/ProjectSection";
import { ContactSection } from '../components/ContactSection';
const Home = () => {
    return (
        <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
            {/* Background Effects */}
            <StarBackground/>
            {/* Navbar */}
            <Navbar/>
            {/* Main Content */}
            <HeroSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectSection/>
            <ContactSection/>
            {/* Footer */}
        </div>
    );
}

export default Home;
