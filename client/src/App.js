import React, { useEffect } from  'react'
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { current } from './JS/Actions/user';
import Add from './Pages/Add/Add';
import Edit from './Pages/Edit/Edit';
import Error from './Pages/Errors/Error';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Profile from './Pages/Profile/Profile'
import Users from './Pages/Users/Users';
import PrivateRoutes from './Routes/PrivateRoutes';

function App() {
const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(current())
    }
  }, [dispatch])
  return (
    <div className="App">
      <NavBar />
    <h1> MERN APP  </h1>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/users' element={<Users />} />
      <Route path='/add' element={<Add />} />
      <Route path='/edit/:id' element={<Edit />} />
      <Route path='/register' element={<Register/>} />
      <Route path='/*' element={<Error />} />
      <Route path='/profile' element={<PrivateRoutes> <Profile /> </PrivateRoutes>} />
      <Route path='/login' element={<Login />} />
    </Routes>
    </div>
  );
}

export default App;
