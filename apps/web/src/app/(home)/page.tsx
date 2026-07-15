import React from 'react';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/home/HeroSection';
import CategoryGrid from '@/components/home/CategoryGrid';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import FlashSale from '@/components/home/FlashSale';
import StarterKits from '@/components/home/StarterKits';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoryGrid />
      <FeaturedProducts />
      <FlashSale />
      <StarterKits />
      <Footer />
    </>
  );
}
