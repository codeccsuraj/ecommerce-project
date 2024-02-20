import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAnglesRight } from "react-icons/fa6";

import { categories } from '../../backend/CategoryList';
import { Link } from 'react-router-dom';
const Category = () => {
    const settings = {
        dots : true,
        Infinite : true,
        speed : 500,
        slidesToShow : 4,
        slidesToScroll : 1,
    }
  return (
    <>
        <div className='mx-8'>
            <Slider {...settings} className='w-[100%] py-4'>
                {
                    categories.map((item, idx)=> (
                        <div key={idx}>
                            <div className='flex gap-3 flex-col items-center text-center'>
                                <img src={item.image} alt="" className='size-3/4' />
                                <Link><h2 className='text-center text-2xl flex gap-2 items-center'>{item.categoryName} <FaAnglesRight /></h2></Link>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    </>
  )
}

export default Category