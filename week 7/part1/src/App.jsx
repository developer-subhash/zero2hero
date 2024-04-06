import { Suspense, lazy, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import Header from './component/Header'
import PropDrilling from './component/PropDrilling';

// component lazy loading for optimization
const Landing = lazy(() => import('./component/Landing'));
const Dashboard = lazy(() => {return import('./component/Dashboard')}); // observe syntax, need to return

function App() {

  return (
    <div>
      <div>
        <h1>Hello</h1>
      </div>
      <BrowserRouter>
      {/* useNavigate hook can only be invoked inside BrowserRouter component otherwise error will be thrown */}
      <Header />
      <Routes>
        <Route path="/dashboard" element={<Suspense fallback={"loading...."}><Dashboard /></Suspense>}></Route>
        <Route path="/" element={<Suspense fallback={"loading ...."}><Landing /></Suspense>}></Route>
      </Routes>
      <br />
      <PropDrilling />
    </BrowserRouter>
    </div>
  )
}

export default App
