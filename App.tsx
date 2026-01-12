
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookCollection from './components/BookCollection';
import InteractiveLearning from './components/InteractiveLearning';
import CharacterJourney from './components/CharacterJourney';
import EducationalValue from './components/EducationalValue';
import ParentEducatorResources from './components/ParentEducatorResources';
import UniverseSection from './components/UniverseSection';
import ResourceHub from './components/ResourceHub';
import BrandValues from './components/BrandValues';
import EducatorCorner from './components/EducatorCorner';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <BookCollection />
        <InteractiveLearning />
        <CharacterJourney />
        <EducationalValue />
        <ParentEducatorResources />
        <UniverseSection />
        <ResourceHub />
        <BrandValues />
        <EducatorCorner />
      </main>
      <Footer />
    </div>
  );
};

export default App;
