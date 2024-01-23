import React, { useState } from 'react';
import '../App.css';
import { FilterTitle } from '../constants/data';
import Cards from './Cards';

const Filter = ({ data }) => {
  const [checkboxStates, setCheckboxStates] = useState(Array(FilterTitle.length).fill(false));

  const handleCheckboxChange = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };

  return (
    // <div className="flex">
      <div className="w-[100%] py-2 ms-5">
        <h4 className="text-amber-900 text-xl font-semibold m-5 mt-12">Your Heading</h4>
        <div className="bg-gray-200 rounded-t-xl pt-5">
          {data.map((v, i) => (
            <div key={i} className="flex justify-between items-center w-[98%] mt-5 border-b pb-3">
              <input
                type="checkbox"
                name=""
                id={`checkbox-${i}`}
                className="checkbox"
                checked={checkboxStates[i]}
                onChange={() => handleCheckboxChange(i)}
              />
              <span>{v.title}</span>
              <span
                className={`border border-red-200 rounded-full px-3 ${checkboxStates[i]
                  ? 'bg-gradient-to-r from-purple-800 to-pink-500 text-white'
                  : ''}`}
              >
                1
              </span>
            </div>
          ))}
        </div>
      </div>
     
  );
};

export default Filter;
