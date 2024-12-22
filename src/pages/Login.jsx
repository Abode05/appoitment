import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Signup from './Signup'

function Login({ CloseForm }) {
  const [isLogin, setIsLogin] = useState(true)
  const [FormData, setFormData] = useState({
    email: '',
    password: '',
  })

  const ToggleForm = () => {
    setIsLogin(!isLogin)
  }

  useEffect(() => {
    // لإيقاف التمرير عند فتح الـ modal
    document.body.style.overflow = 'hidden'

    return () => {
      // إعادة التمرير عند إغلاق الـ modal
      document.body.style.overflow = 'auto'
    }
  }, [])

  const handleInputChange = (e) => {
    setFormData({
      ...FormData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div
      className="fixed inset-0 z-20
       bg-black/50 flex items-center justify-center min-h-screen"
      onClick={CloseForm}
    >

      {isLogin ? (
              <div
        className="bg-[#22313f] rounded-lg shadow w-full
         max-w-lg p-6 relative  max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="space-y-4 md:space-y-6 sm:p-6">
          <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-white md:text-2xl">
             Login
          </h1>
            <form className=" flex flex-col gap-2 ">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-semibold text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-2.5 h-12 bg-transparent border border-gray-300 rounded-lg text-white focus:border-indigo-500 outline-none"
                  placeholder="name@company.com"
                  required
                  onChange={handleInputChange}
                  value={FormData.email}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-semibold text-gray-300"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="w-full p-2.5 h-12 bg-transparent border border-gray-300 rounded-lg text-white focus:border-indigo-500 outline-none"
                  placeholder="••••••••"
                  required
                  onChange={handleInputChange}
                  value={FormData.password}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-8  border border-indigo-500 rounded"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm ">
                    <label htmlFor="remember" className="text-gray-400">
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  onClick={CloseForm}
                  to="/"
                  className="text-sm font-medium text-indigo-600 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full py-2.5  px-5 text-lg
                 font-semibold text-white bg-indigo-600
                  rounded-lg hover:bg-indigo-700 duration-150"
              >
                Login
              </button>
              <p className="font-light text-gray-400    ">
                Don’t have an account yet?{' '}
                <button
                  onClick={ToggleForm}
                  className="font-medium text-indigo-600 hover:underline"
                >
                  Sign up
                </button>
              </p>
            </form>
          </div>
          </div>
          ) : (
            <Signup ToggleForm={ToggleForm} />
          )}
        </div>
  
  )
}

export default Login
