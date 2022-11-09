import React from 'react'
import s from './App.module.css'
import { Header } from './ui/components/Header/Header'
import { HomePage } from './ui/pages/HomePage/HomePage'
import { SettingsPage } from './ui/pages/SettingsPage/SettingsPage'
import { TestPage } from './ui/pages/TestPage/TestPage'
import { Routes ,Route, Navigate } from 'react-router-dom'

export const App = () => {
  return (
    <div className={s.App}>
       <Header/>
       <Routes>
           <Route path='/' element={<HomePage/>} />
           <Route path='/settings' element={<SettingsPage/>} />
           <Route path='/test' element={<TestPage/>} />
           <Route path='*' element={<Navigate replace to="/" />} />
       </Routes> 
    </div>
  );
};
