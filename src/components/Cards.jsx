import React from 'react';
import { cards } from '../constants/data';

const Cards = () => {
  return (
    <>
      <h4 className='ms-5 my-5'>Find all of our investment offerings below!</h4>
      <div className="flex flex-wrap">
        {cards.map((v, i) => (
          <div key={i} className="flex-shrink-0 bg-gray-200 rounded-xl w-full sm:w-1/2 md:w-[30%] p-3 m-2">
            <img src={`/card-images/${v.image}`} alt="" className="w-full" />
            <div className='relative'>
              <img src="/tag.svg" alt="" className='relative bottom-8' />
              <div className='absolute inset-0 flex items-center justify-center bottom-20'>
                <span className='text-white font-bold capitalize '>{v.tagline}</span>
              </div>
            </div>
            <div className="flex justify-between text-sm font-bold">
              <span>Target IRR:</span>
              <span>{v.target}%</span>
            </div>
            <div className="flex justify-between text-sm font-bold">
              <span>Estimated Hold Period:</span>
              <span>{v.period} years</span>
            </div>
            <p>{v.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
