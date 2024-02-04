import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import SharedLayout from './SharedLayout'
import { Home } from '../pages'
import { authRoutes } from './publicRoutes'

const Index = () => {
  return (
    <>
        <Routes>
            <Route element={<Outlet />}>
                {authRoutes.map((route, idx) => (
                    <Route key={idx} path={route.path} element={route.element} />
                ))}
            </Route>
            <Route element={<SharedLayout />}>
                <Route path='/' element={<Home/>} />
            </Route>
        </Routes>
    </>
  )
}

export {Index}