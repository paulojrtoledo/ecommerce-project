import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import { useThemeContext } from '../../contexts/ThemeContext'; 
import HeaderProducts from './components/HeaderProducts';
import HardwareProducts from './components/HardwareProducts';
import SmartDevicesProducts from './components/SmartDevicesProducts';
import NatureTechCloud from '../home-page/components/NatureTechCloud';
import GadgetsProducts from './components/GadgetsProducts';
import FAQ from '../home-page/components/FAQ';
import Footer from '../home-page/components/Footer';

export default function ProductsPage(props: { disableCustomTheme?: boolean }) {
  const { mode } = useThemeContext(); 
  
  return (
    <>
      <CssBaseline enableColorScheme />

      <HeaderProducts />
      <HardwareProducts id="hardwareproducts" />
      <div>
        <Divider />
        <GadgetsProducts id="gadgets" />
        <Divider />
        <SmartDevicesProducts id="smartdevicesproducts" />
        <Divider />
        <NatureTechCloud />
        <Divider />
        <FAQ />
        <Divider />
        <Footer />
      </div>
    </>
  );
}