import React from 'react'
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import useGetCurrentUser from './hooks/useGetCurrentUser'

function App() {
  useGetCurrentUser()
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
