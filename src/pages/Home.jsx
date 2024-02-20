import React from 'react'
import { Banner, Categories, ProductCard } from '../components'
import { products } from '../backend/ProductData'
import { IoIosTrendingUp } from "react-icons/io";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <Banner />
      <div className='mx-10 py-4'>
        <div className='flex items-center justify-between'>        
          <h2 className='text-4xl font-bold flex items-center gap-3'><IoIosTrendingUp /> Shop with trending deals..</h2>
          <Link className='text-md font-bold text-blue-700'>See all...</Link>
        </div>
        <ProductCard data={products} />
      </div>
      <div className='mx-10 py-4'>
        <div className='flex items-center justify-between py-4'>        
          <h2 className='text-4xl font-bold flex items-center gap-3'><IoIosTrendingUp /> Shop with trending deals..</h2>
          <Link className='text-md font-bold text-blue-700'>See all...</Link>
        </div>
        <Categories />
      </div>
    </>
  )
}

export default Home