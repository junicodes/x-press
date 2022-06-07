import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch, faClock, faTicketAlt, faMoneyBill, faFilm, faStar, faRemove } from '@fortawesome/free-solid-svg-icons'
import { SignIn, SignUp } from '.';
library.add(fab, faSearch, faClock, faTicketAlt, faMoneyBill, faFilm, faStar, faRemove)

const App = () => {
  return (
    <>
    <ToastContainer />
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
