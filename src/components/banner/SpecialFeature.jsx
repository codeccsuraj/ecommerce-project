import React from 'react'
import { specialFeature } from '../../backend/Content'
const SpecialFeature = () => {
  return (
    <>
        <div className='w-full bg-gray-200 py-3'>
            <div className='mx-10'>
                <div className="grid justify-evenly grid-cols-4">
                        {specialFeature.map((sp_item) => (
                            <div className='flex justify-center items-center gap-4 py-3 px-3'>
                                <div>
                                    <p className='text-4xl'>{sp_item.icon}</p>
                                </div>
                                <div>
                                    <h3 className='text-2xl font-bold'>{sp_item.title}</h3>
                                    <p className='text-gray-500'>{sp_item.slug}</p>
                                </div>
                            </div>
                        ))} 
                </div>
            </div>
        </div>
    </>
  )
}

export default SpecialFeature