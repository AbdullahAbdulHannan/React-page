import React from 'react'
import Filter from './Filter'
import { FilterTitle, TFilterTitle } from '../constants/data'
import Cards from './Cards'

const Layout = () => {
  return (
    <>
    <div className='flex flex-wrap md:flex-nowrap'>
        <div className='flex-col md:block'>

    <Filter data={FilterTitle}/>
    <Filter data={TFilterTitle}/>
        </div>
    <div className="flex-1 ms-10 my-[8%]">
        <Cards />
      </div>
    </div>
    </>
  )
}

export default Layout