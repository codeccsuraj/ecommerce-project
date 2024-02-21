    import React from 'react';
    import { Link } from 'react-router-dom';
    import { FaList } from "react-icons/fa6";
    import { BsGrid3X3GapFill } from "react-icons/bs";
    import { products } from '../backend/ProductData';
    import ReactStars from "react-rating-stars-component";
    import { FaFilter } from "react-icons/fa";
    import { Pagination } from '../components';
    import UseLocalStorage from '../components/pagination/UseLocalStorage';




    const Shop = () => {
        const [currentPage, setCurrentPage] = UseLocalStorage({ key: 'currentPage', initialValue: 1 });
        const productPerPage = 12;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    // Calculate the index of the first and last products to be displayed
    const indexOfLastProduct = currentPage * productPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productPerPage;

    // Get the current products to be displayed based on pagination
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    return (
        <>
            <div className="container-fluid bg-rose-600 py-6">
                <div className="container-sm">
                    <h2 className='text-3xl fw-bold mb-3 text-white'>Shop</h2>
                    <nav aria-label="breadcrumb pb-3">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">Shop</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container-sm">
                    <div className="row justify-between gap-2 py-3">
                        <div className="col-lg-6">
                            <button className='btn flex items-center justify-between gap-3 btn-dark'><FaFilter /> Filter</button>
                        </div>
                        <div className="col-lg-3 flex items-center gap-4">
                            <select name="" id="" className='form-select'>
                                <option value="1" selected>Latest</option>
                                <option value="1" selected>Popular</option>
                                <option value="1" selected>Recent</option>
                                <option value="1" selected>Top Offers</option>
                            </select>
                            <div className="col flex items-center gap-2">
                                <button className="btn"><FaList /></button>
                                <button className="btn"><BsGrid3X3GapFill /></button>
                            </div>
                        </div>
                    </div>
                    <div className='row py-3'>
                        <div className="col-lg-12">
                            <h2 className='fs-3 fw-bold'>All Products</h2>
                        </div>
                        <div className='col-lg-12 flex gap-2 items-end'>
                            <h4 className='fs-5'>Showing Results</h4>
                            <span className='font-semibold text-[13px] text-secondary'>(1 - 24 product of 2094 products)</span>
                        </div>
                    </div>
                    <div className="row gap-0">
                        {currentProducts.map((shop) => (
                            <div className="col-lg-3 col-md-4 col-sm-12 px-2 mb-3">
                                <div className="card h-100 flex flex-col justify-between items-center">
                                    <div>
                                        <img src={shop.image_1} alt="" className="img-fluid size-40" />
                                    </div>
                                    <div className="card-body px-2">
                                        <h6 className="card-title m-0 font-semibold">
                                            <Link to={`/product/${shop.id}`}>{shop.title.slice(0, 22)}...</Link>
                                        </h6>
                                        <p className='m-0 p-0'>{shop.description.slice(0, 50)}</p>
                                        <div className="row align-items-center">
                                           <div className="col-lg-6 col-md-12">
                                                <ReactStars
                                                    count={shop.rating}
                                                    size={24}
                                                    activeColor="#f9d10c"
                                                    isHalf={true}
                                                    value={shop.rating}
                                                    edit={false}
                                                />
                                            </div>
                                            <div className="col-lg-6 col-md-12">
                                                {shop.discounted ? (
                                                    <p className="text-green-600 flex gap-2">
                                                        <span className="fs-6 font-bold">{shop.discounted}</span>
                                                        <del className='text-secondary'>{shop.price}</del>
                                                    </p>
                                                ) : (
                                                    <p className="fs-6 font-bold text-green-600">{shop.price}</p>
                                                )}
                                            </div>
                                            <button className="btn btn-warning w-100">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <Pagination
                        productsPerPage={productPerPage}
                        totalProducts={products.length}
                        currentPage={currentPage}
                        handlePageChange={handlePageChange}
                        key="pagination"
                    />
                </div>
            </div>
        </>
    );
    };

    export default Shop;
