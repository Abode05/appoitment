import { Route, Routes } from 'react-router-dom'
import {  lazy } from 'react'


// استخدام Lazy loading للصفحات
const Home = lazy(() => import('../pages/Home'))
const Doctors = lazy(() => import('../pages/Doctors/Doctors'))
const DoctorsDetails = lazy(() => import('../pages/Doctors/DoctorDetails'))
const Login = lazy(() => import('../pages/Login'))
const Signup = lazy(() => import('../pages/Signup'))
const Services = lazy(() => import('../pages/Services'))
const Contact = lazy(() => import('../pages/Contact'))

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorsDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  )
}

export default Routers
