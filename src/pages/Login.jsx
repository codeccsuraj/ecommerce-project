import React from 'react'
import { Link } from 'react-router-dom'
import login_img from '../assets/loginbg.png'
const Login = () => {
  return (
    <>
        <div className='w-screen overflow-x-hidden '>
            <div className='mx-32 grid grid-cols-2'>
                <div>
                    <img src={login_img} alt="" className='object-cover'/>
                </div>
                <div className='flex flex-col items-center'>
                    <h2 className='text-3xl py-4 text-center'>Login here</h2>
                    <p>Not a existing User ? <Link to='/signup' className='text-cyan-600 font-bold'>Sign in here</Link></p>
                    <form action="" className='w-full'>
                        <div className='form-group flex flex-col gap-2 py-3'>
                            <label htmlFor="email" className='text-lg font-bold'>Email</label>
                            <input type="email" placeholder='Enter your email' className='w-full py-3 px-3 border-none outline-none bg-slate-100 rounded-2xl' />
                        </div>
                        <div className='form-group flex flex-col gap-2 py-3'>
                            <label htmlFor="password" className='text-lg font-bold'>Password</label>
                            <input type="password" placeholder='Enter your password' className='w-full py-3 px-3 border-none outline-none bg-slate-100 rounded-2xl' />
                        </div>
                        <div className='form-group flex justify-center gap-2 py-3'>
                            <button className='bg-orange-700 py-3 text-lg font-bold rounded-2xl w-2/4'>Login</button>
                        </div>  
                    </form>
                    <div className='py-3'>
                        <p>
                            Don't remember password ? <Link className='text-cyan-600 font-bold'>forgot now</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login