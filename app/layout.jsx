import React from 'react';
import Navbar from '@/components/Navbar';
import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Property Pulse | Find The Perfect Rental',
  description: 'Find your dream rental property',
  keywords: 'rental, find rentals, find properties'
}

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
