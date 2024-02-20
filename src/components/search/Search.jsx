import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <>
        <form action="" className='flex items-center'>
            <input type="search" placeholder='search products' className='px-5 py-2 w-full border-1 outline-none bg-slate-100 border-blue-800' />
            <Link className='text-2xl text-white bg-blue-700 px-3 py-2'><FaSearch /></Link>
        </form>
    </>
  )
}

export default Search