import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import LogoCollection from './components/LogoCollection';
import Highlights from './components/Highlights';
import NatureTechCloud from './components/NatureTechCloud';
import Products from './components/Products';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function HomePage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <AppAppBar />
      <Hero />
      <div>
        <LogoCollection />
        <Products />
        <Divider />
        <Reviews id="reviews" />
        <Divider />
        <Highlights id="highlights" />
        <Divider />
        <NatureTechCloud id="ntc" />
        <Divider />
        <FAQ id="faq" />
        <Divider />
        <Footer />
      </div>
    </AppTheme>
  );
}
