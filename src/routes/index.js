import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SharedLayout from './SharedLayout'
import { Home } from '../pages'

const Index = () => {
  return (
    <>
        <Routes>
            <Route element={<SharedLayout />}>
                <Route path='/' element={<Home/>} />
            </Route>
        </Routes>
    </>
  )
}

export {Index}