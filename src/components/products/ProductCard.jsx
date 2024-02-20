import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import { useCart } from 'react-use-cart';

const ProductCard = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    }

    const {addItem} = useCart();
    return (
        <>
            <div>
                <div className='mx-8'>
                    <Slider {...settings} className='w-[100%] py-4'>
                        {data.map((product) => (
                            <div key={product.id} className='py-4'>
                                <div className='py-3 rounded-lg mx-3 px-3 bg-slate-50'>
                                    <div>
                                        <div className='flex justify-center'>
                                            <Link>
                                                <img src={product.image_1} alt="" className='size-44' />
                                            </Link>
                                        </div>
                                    </div>
                                    <div>
                                        <p>{product.category}</p>
                                        <Link to={`/product/${product.id}`}><h4 className='font-medium'>{product.title.slice(0, 30)} ...</h4></Link>
                                        <ReactStars
                                            count={product.rating}
                                            size={24}
                                            activeColor="#5c5470"
                                            isHalf={true}
                                            value={product.rating}
                                            edit={false}
                                        />
                                        <div className='flex items-end justify-between'>
                                            <div>
                                                <p className=''>
                                                    {product.discount ? (
                                                        <>
                                                            <h3 className='text-[18px] text-green-600'>&#8377; {product.price}</h3>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <del>{product.price}</del>
                                                            <h3 className='text-[18px] text-green-600'>&#8377; {product.discounted}</h3>
                                                        </>
                                                    )}
                                                </p>
                                            </div>
                                            <div className='flex items-baseline'>
                                                <button onClick={() => addItem(product)} className='border-2 border-solid border-gray-700 w-full py-2 mt-3 px-3 hover:bg-gray-700 hover:text-white transition-all'>Add to cart</button>
                                            </div>
                                        </div>
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

export default ProductCard;
