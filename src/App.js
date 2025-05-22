import React from 'react';
import Header from './components/Header';
import Showcase from './components/Showcase';
import Tabs from './components/Tabs';
import Download from './components/Download';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Showcase />
      <Tabs /> 
      <Download />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
