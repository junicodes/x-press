import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faClock, faTicketAlt, faMoneyBill, faFilm, faStar, faRemove } from '@fortawesome/free-solid-svg-icons'
import { SignIn, SignUp, Dashboard } from '.';
library.add(fab, faSearch, faClock, faTicketAlt, faMoneyBill, faFilm, faStar, faRemove)

const App = () => {

  //Load current page pathe to state 
  useEffect(() => {
    
  }, [])
  
  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignUp />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/sign-in' element={<SignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
