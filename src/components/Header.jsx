import React, { useState } from 'react';

const Header = () => {
  const [activeTab, setActiveTab] = useState('all');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div
        style={{
          background: 'var(--gradient-2, linear-gradient(90deg, #3B338B -2.24%, #D460A3 148.46%))',
        }}
        className='flex flex-col md:flex-row'
      >
        <h2 className='text-3xl p-3 font-bold text-white ms-4 md:ms-12'>Listings</h2>
        <div className='rounded-full m-4 border border-white'>
          <ul className='flex justify-between ml-4 md:ml-16 my-2'>
            <li
              className={`md:me-12 cursor-pointer rounded-full px-3 py-1 ${
                activeTab === 'all' ? 'bg-white text-black' : 'text-white'
              }`}
              onClick={() => handleTabClick('all')}
            >
              All
            </li>
            <li
              className={`md:me-12 cursor-pointer rounded-full px-3 py-1 ${
                activeTab === 'invest' ? 'bg-white text-black' : 'text-white'
              }`}
              onClick={() => handleTabClick('invest')}
            >
              Invest
            </li>
            <li
              className={`md:me-12 cursor-pointer rounded-full px-3 py-1 ${
                activeTab === 'pledge' ? 'bg-white text-black' : 'text-white'
              }`}
              onClick={() => handleTabClick('pledge')}
            >
              Pledge
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
