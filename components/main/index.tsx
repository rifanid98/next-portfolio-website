import React from 'react';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import QualificationSection from './sections/QualificationSection';
import PortfolioSection from './sections/PortfolioSection';
import ContactSection from './sections/ContactSection';
import ScrollUp from './ScrollUp';

const Main: React.FC = () => (
  <div className="main">
    <HomeSection />
    <AboutSection />
    <SkillsSection />
    <QualificationSection />
    {/* <ServicesSection /> */}
    <PortfolioSection />
    {/* <ProjectSection /> */}
    {/* <TestimonialSection /> */}
    <ContactSection />
    <ScrollUp />
  </div>
);

export default Main;
