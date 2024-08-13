// components/LandingPage.tsx
import React from 'react';
import Navigation from '../components/Navigation';
import CryptoTable from '../components/CryptoTable';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navigation />

      <div className='mt-2 me-5 ms-5 mb-2'>
        <CryptoTable />
      </div>

      <Footer/>
    </div>
  );
}

export default LandingPage;
