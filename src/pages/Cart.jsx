import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { useCart } from 'react-use-cart'
const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
  } = useCart()
  if (isEmpty) return <><p>your cart is empty</p></>
  return (
    <>
      <div className='container-fluid'>
        <div className='container-sm'>
          <div className='row py-4'>
            <p className='text-2xl py-3'>Total {totalUniqueItems} items added in cart</p>
            <div className='col-lg-8'>
              {items.map((cartItem) => (
                <div className='card mb-3 py-2'>
                  <div className="row g-0">
                    <div className="col-md-3 flex items-center justify-center">
                      <img src={cartItem.image_1} alt="" className='img-fluid size-36	rounded-start' />
                    </div>
                    <div className='col-md-8 flex flex-col gap-3 justify-between'>
                      <div>
                        <h2 className='fs-5 font-semibold'>{cartItem.title}</h2>
                        {cartItem.discounted ? (
                          <p className='text-2xl font-semibold text-gray-600'>&#8377; {cartItem.discounted}</p>
                        ) : (
                          <p>&#8377; {cartItem.price}</p>
                        )}
                        <table className='table w-25'>
                          <tr>
                            <th scope='col'>Color</th>
                            <td>{cartItem.color}</td>
                          </tr>
                          <tr>
                            <th scope='col'>Size</th>
                            <td>{cartItem.size}</td>
                          </tr>
                        </table>
                      </div>
                      <div className='flex items-center justify-evenly border-2 px-1 w-1/2 py-2'>
                            <button onClick={() => updateItemQuantity(cartItem.id, cartItem.quantity + 1)} className='cursor-pointer'><FaPlus /></button>
                            <input type="text" className='w-8 text-center' value={cartItem.quantity} />
                            <button onClick={() => updateItemQuantity(cartItem.id, cartItem.quantity - 1)} className='cursor-pointer'><FaMinus /></button>
                      </div>
                      <div className='row bg-slate-200'>
                        <div className="col-lg text-center">
                          <button onClick={() => removeItem(cartItem.id)} className='btn'>Remove</button>
                        </div>
                        <div className='col-lg text-center'>
                          <button className='btn'>add to wishlist</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              <button className='btn btn-success bg-green-600'>Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart