import React from 'react';

const Subscribe = () => {
  return (
    <div className='flex flex-col md:flex-row md:ms-[20%] mb-20'>
      <div className='w-[98%] md:w-1/3 h-60' style={{ background: 'var(--gradient-2, linear-gradient(90deg, #3B338B -2.24%, #D460A3 148.46%))' }}></div>
      <img src="/pen-cup.png" alt="" className='w-[95%] md:w-[30%] h-60 absolute left-[5%] md:left-[22%] pb-3' />
      <div className='w-full md:w-1/2 ms-0 md:ms-[12%]'>
        <h1 className='text-4xl md:text-6xl font-bold'>Subscribe To <span className='text-purple-500'>Our</span><span className='text-purple-800'> Newsletter</span></h1><br />
        <p className='text-sm md:text-base'>This is a great spot for a newsletter signup.</p><br />
        <input type="text" className='border-2 border-purple-800 outline-none rounded p-3 w-[80%] md:w-96' placeholder='Enter your e-mail address' />
        <button className='text-white font-bold text-2xl px-3 py-2 rounded mt-2 md:ms-5 ms-2' style={{ background: 'var(--gradient-2, linear-gradient(90deg, #3B338B -2.24%, #D460A3 148.46%))' }}>➢</button>
      </div>
    </div>
  );
};

export default Subscribe;
