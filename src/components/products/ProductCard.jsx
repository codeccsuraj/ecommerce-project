import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";


const ProductCard = ({data}) => {
    const settings = {
        dots : true,
        Infinite : true,
        speed : 500,
        slidesToShow : 4,
        slidesToScroll : 1,
    }
  return (
    <>
        <div>
            <div className='mx-8'>
                <Slider {...settings} className='w-[100%] py-4'>
                    {data.map((product) => (
                        <div key={product.id} className='py-4'>
                            <div className='border py-3 rounded-lg mx-3 px-3 border-solid border-slate-500'>
                                <div>
                                    <div className='flex justify-center'>
                                        <Link>
                                            <img src={product.image_1} alt="" className='size-44' />
                                        </Link>
                                    </div>
                                </div>
                                <div>
                                    <Link><h4 className='font-medium'>{product.title.slice(0, 20)} ...</h4></Link>
                                    <p className='text-[14px] text-gray-700 font-semibold'>{product.description.slice(0,55)} ...</p>
                                    <ReactStars
                                        count={product.rating} 
                                        size={24}
                                        activeColor="#5c5470"
                                        isHalf={true}
                                        value={product.rating}
                                        edit={false}
                                    />
                                    <button className='border-2 border-solid border-gray-700 w-full py-2 mt-3 rounded-full font-bold'>Add to cart</button>
                                    <button className='bg-gray-700 w-full py-2 mt-3 text-white rounded-full font-bold'>Buy now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </>
  )
}

export default ProductCard