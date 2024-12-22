import { useEffect, useRef, useState } from 'react'
import { BiMenu } from 'react-icons/bi'
import { Link, NavLink } from 'react-router-dom'
import Login from '../../pages/Login'
const navlinks = [
  { path: '/home', display: 'Home' },
  { path: '/doctors', display: 'find a Doctors' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contact' },
]
const Header = () => {
  const [showLogin, setshowLogin] = useState(false)
  const handleLoginClick = () => {  
    setshowLogin(true)
  }
    const CloseForm = () => {
       setshowLogin(false)
    }
  const headref = useRef(null)
  const menuref = useRef(null)
  const handleSticky = () => {
    window.addEventListener('scroll', () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headref.current.classList.add('sticky_header')
      } else {
        headref.current.classList.remove('sticky_header')
      }
    })
  }
  useEffect(() => {
    handleSticky()
    return () => window.removeEventListener('scroll', handleSticky)
  })
  const togglemunu = () => menuref.current.classList.toggle('show_menu')

  return (
    <>
      {' '}
      <div className="header flex items-center text-gray-200" ref={headref}>
        <div className="w-full px-8 py-5 ">
          <div className="flex items-center justify-between">
            {/* =========logo======= */}
            <div className="">
              <img src="/assets/images/logo-full.svg" alt="" />
            </div>
            {/* ======menu==== */}
            <div className="navigation" ref={menuref} onClick={togglemunu}>
              <ul className="menu flex items-center gap-[2rem]">
                {navlinks.map((link, index) => (
                  <li key={index} className="">
                    <NavLink
                      to={link.path}
                      className={(navclass) =>
                        navclass.isActive
                          ? 'text-indigo-500 text-lg leading-7 font-semibold'
                          : 'text-headingColor text-lg leading-7 font-[500] hover:text-indigo-400 duration-150'
                      }
                    >
                      {link.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/* =======nav right===== */}
            <div className="flex items-center gap-4">
              <div className="">
                <Link to={'/'} className="hidden">
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img
                      src="/assets/images/avatar-icon.png"
                      alt=""
                      className="rounded-full w-full object-contain"
                    />
                  </figure>
                </Link>
              </div>
              <button
                onClick={handleLoginClick}
                className="bg-indigo-600 py-2  px-6 text-white 
              font-[600] h-[44px] flex items-center rounded-md hover:bg-indigo-700 duration-150  "
              >
                Login
              </button>
              <span className="md:hidden block" onClick={togglemunu}>
                <BiMenu className="h-6 w-6 cursor-pointer" />
              </span>
            </div>
          </div>
        </div>
        <div className="">{showLogin && <Login CloseForm={CloseForm} />}</div>
      </div>
    </>
  )
}

export default Header
