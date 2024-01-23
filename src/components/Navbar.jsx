import React from 'react';

const Navbar = () => {
  return (
    <>
      <div className='md:flex  justify-between items-center'>
        <div className='md:flex items-center m-5'>
          <img src="/logo.png" alt="" className='h-12 w-80' />
          <ul className='flex justify-between ml-4 md:ml-16'>
            <li className='md:me-12'>Feature</li>
            <li className='md:me-12'>Pricing</li>
            <li className='md:me-12'>Listings</li>
          </ul>
        </div>
        <button className='ml-auto md:me-4 rounded-md text-white py-2 px-5' style={{ background: 'linear-gradient(90deg, #3B338B -64.34%, #D460A3 129.99%)' }}>Dashboard</button>
      </div>
    </>
  );
}

export default Navbar;
