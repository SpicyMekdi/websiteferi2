import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ProgramHighlights from '../components/home/ProgramHighlights';
import Statistics from '../components/home/Statistics';
import LatestNews from '../components/home/LatestNews';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProgramHighlights />
      <Statistics />
      <LatestNews />
    </main>
  );
}