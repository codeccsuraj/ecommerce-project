import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import SharedLayout from './SharedLayout'
import { Home } from '../pages'
import { authRoutes, contentRoutes } from './publicRoutes'
import { privateRoutes } from './privateRoutes'

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
                {contentRoutes.map((route, idx) => (
                    <Route key={idx} path={route.path} element={route.element} />
                ))}
                {privateRoutes.map((route, idx) => (
                        <Route key={idx} path={route.path} element={route.element} />
                ))}
            </Route>
        </Routes>
    </>
  )
}

export {Index}