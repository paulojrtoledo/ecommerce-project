import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import AppTheme from '../shared-theme/AppTheme';
import HeaderProducts from './components/HeaderProducts';
import HardwareProducts from './components/HardwareProducts';
import SmartDevicesProducts from './components/SmartDevicesProducts';
import NatureTechCloudProducts from './components/NatureTechCloudProducts';
import GadgetsProducts from './components/GadgetsProducts';
import FAQProducts from './components/FAQProducts';
import FooterProducts from './components/FooterProducts';

export default function ProductsPage(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />

      <HeaderProducts />
      <HardwareProducts />
      <div>
        <Divider />
        <GadgetsProducts />
        <Divider />
        <SmartDevicesProducts />
        <Divider />
        <NatureTechCloudProducts />
        <Divider />
        <FAQProducts />
        <Divider />
        <FooterProducts />
      </div>
    </AppTheme>
  );
}
