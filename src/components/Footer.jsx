import React from 'react';

const Footer = () => {
  return (
    <div className='pt-12' style={{ background: 'var(--gradient-2, linear-gradient(90deg, #3B338B -2.24%, #D460A3 148.46%))' }}>
      <img src="/logo.png" alt="" className='mx-auto md:ms-[30%] mt-10' />
      <div className='flex justify-center text-white mt-10'>
        <a href="#" className='pe-4 md:pe-10'>Feature</a>
        <a href="#" className='pe-4 md:pe-10'>Pricing</a>
        <a href="#" className='pe-4 md:pe-10'>Listings</a>
      </div>
      <div className='border-t border-t-white text-center mt-5 pb-5'>
        <span className='text-base md:text-xl text-white'>© 2023 sponsor-list.vercel.app</span>
      </div>
    </div>
  );
};

export default Footer;
