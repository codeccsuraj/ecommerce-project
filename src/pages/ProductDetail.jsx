import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../backend/ProductData';
import ReactStars from "react-rating-stars-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlus, FaMinus } from "react-icons/fa";



const ProductList = () => {
    const { id } = useParams();
    const product = products.find(product => product.id === parseInt(id))
  return (
    <>
        <div className='mx-10'>
            <div className='grid grid-cols-2 py-4'>
                <div>
                    <div className='size-3/4 flex justify-center'>
                        <img src={product.image_1} alt="" className='object-cover max-h-[80vh]' />
                    </div>
                </div>
                <div>
                    <div className='poduct-info-box'>
                        <h6>{product.category}</h6>
                        <h2 className='uppercase font-bold text-3xl'>{product.title}</h2>
                        <ReactStars
                            count={product.rating} 
                            size={24}
                            activeColor="#f9d10c"
                            isHalf={true}
                            value={product.rating}
                            edit={false}
                        />
                        <p>{product.description.slice(0, 250)}</p>
                    </div>
                    {product.discounted ? (
                        <div className='flex gap-3 items-center'>
                            <del className='text-1xl font-bold text-red-700'>&#8377; {product.price}</del>
                            <p className='text-2xl font-bold text-green-700'>&#8377; {product.discounted}</p>
                        </div>
                    ) : (
                        <p className='text-2xl font-bold text-green-700'>&#8377; {product.price}</p>
                    )}
                    <div className='attribues-box flex gap-3 items-center py-4'>
                        <p className='font-bold text-2xl'>Size : </p>
                        <div>
                            <button className='border-2 rounded-full shadow-lg px-3'>L</button>
                        </div>
                        <div>
                            <button className='border-2 rounded-full shadow-lg px-3'>XL</button>
                        </div>
                        <div>
                            <button className='border-2 rounded-full shadow-lg px-3'>XXL</button>
                        </div>
                        <div>
                            <button className='border-2 rounded-full shadow-lg px-3'>XXXL</button>
                        </div>
                    </div>
                    <div className='flex justify-between w-[40%]'>
                        <div className='flex items-center justify-evenly border-2 px-1 w-1/2 rounded-full'>
                            <span className='cursor-pointer'><FaPlus /></span>
                            <input type="text" className='w-8 text-center' value={0} />
                            <span className='cursor-pointer'><FaMinus /></span>
                        </div>
                        <div>
                            <button className='bg-green-500 px-4 py-2 rounded-full font-bold text-white'>Buy now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProductList