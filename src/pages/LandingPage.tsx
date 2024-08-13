// components/LandingPage.tsx
import React from 'react';
import Navigation from '../components/Navigation';
import CryptoTable from '../components/CryptoTable';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Navigation />

      <div className='mt-2 me-5 ms-5 mb-2'>
        <CryptoTable />
      </div>
    </div>
  );
}

export default LandingPage;
