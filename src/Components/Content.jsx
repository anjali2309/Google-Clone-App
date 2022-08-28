import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import { Results } from './Results'

export const Content = ()=>{
    return (
        <div className="Routes">
            <Routes>
                <Route path="/" element={<Navigate  to="/search" />} />
                {/* {['/search', '/images', '/news', '/videos'].map((path) => {
                    <Route
                    path = {path}
                    element = {<Results />} 
                  />
                })} */}
                <Route path="/search" element={<Results/>} />
                <Route path="/images" element={<Results/>} />
                <Route path="/news" element={<Results/>} />
                <Route path="/videos" element={<Results/>} />
                
            </Routes>
        </div>
    )
}

/*
agr redirect se phle <Route path="/"/> ye line likhi to redirect nii hua why???
 setting multiple paths to same component: used map earlier
*/ 