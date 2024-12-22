import { useState } from 'react'
import DoctorCard from '../../components/doctors/DoctorCard'
import doctors from '../../../public/assets/data/doctors.json'
import {
  faHeartbeat,
  faBaby,
  faVenus,
  faEye,
  faBone,
  faTooth,
  faBrain,
  faUserMd,
  faProcedures,
  faStethoscope,
  faRibbon,
  faSyringe,
} from '@fortawesome/free-solid-svg-icons'
import { specialties } from '../../../public/assets/data/data'
import SideBar from '../../components/sidebar/SideBar'
import { BsSearch } from 'react-icons/bs'
import Pagination from '../../components/pagination/Pagination'

const iconMapping = {
  faHeartbeat,
  faBaby,
  faVenus,
  faEye,
  faBone,
  faTooth,
  faBrain,
  faUserMd,
  faProcedures,
  faStethoscope,
  faRibbon,
  faSyringe,
}

const Doctors = () => {
  const [searchTerm, setsearchTerm] = useState('')
  const [AavailableDocrors, setAavailableDocrors] = useState(doctors)

  const filterItem = (filterName) => {
    if (filterName === 'ALL') {
      return setAavailableDocrors(doctors)
    } else {
      const filterDoctor = doctors.filter((item) => {
        return item.specialty === filterName
      })
      setAavailableDocrors(filterDoctor)
    }
  }

  // search
  const handleSearchChange = (e) => {
    setsearchTerm(e.target.value)
    const filteredAdoctor = doctors.filter((doctor) => {
      return doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setAavailableDocrors(filteredAdoctor)
  }

  const handleSearch = (e) => {
    e.preventDefault()
  }

  // pagination
  const [currentPage, setcurrentPage] = useState(1)
  const doctorPerPage = 6
  const indexofLastProduct = currentPage * doctorPerPage
  const indexofFirstProduct = indexofLastProduct - doctorPerPage
  const currentDoctor = AavailableDocrors.slice(
    indexofFirstProduct,
    indexofLastProduct
  )
  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber)
  }

  return (
    <div className="hero_section">
      <div className="relative flex justify-center items-center">
        <img
          src="/assets/images/register-img.png"
          alt="Doctors Background"
          className="h-[300px] w-full object-cover"
        />
        <h1 className="absolute text-6xl text-white font-bold">All Doctors</h1>
      </div>

      <div className="w-full min-h-screen text-gray-200 ">
        {/* Main Section with Sidebar and Doctor Cards */}
        <div className="flex flex-col md:flex-row ">
          {/* Sidebar */}
          <SideBar
            iconMapping={iconMapping}
            filterItem={filterItem}
            specialties={specialties}
            className="w-full md:w-1/4"
          />

          {/* Doctors List */}
          <div className="w-full md:w-3/4 px-4 py-6">
            <div className="container w-full  min-h-screen flex  flex-col justify-between">
              <div className="">
                {' '}
                <div className="flex flex-col md:flex-row items-center  justify-between mb-4 -mt-8 p-4">
                  <h1 className="text-4xl md:text-5xl -mt-4 border-b border-indigo-500 font-semibold">
                    Doctors
                  </h1>
                  <form
                    action=""
                    onSubmit={handleSearch}
                    className="w-full md:w-auto mt-4 md:mt-0"
                  >
                    <label
                      htmlFor="special"
                      className="relative flex items-center rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                      <input
                        type="text"
                        id="special"
                        placeholder="Search doctor or specialty..."
                        className="peer border-none bg-transparent w-full md:w-auto placeholder-transparent focus:outline-none focus:ring-0 sm:text-lg"
                        onChange={handleSearchChange}
                      />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-3 peer-focus:text-xs">
                        Search...
                      </span>
                      <BsSearch className="text-lg text-textColor font-bold ml-2" />
                    </label>
                  </form>
                </div>
                <div className=" flex justify-center ">
                  <div className="grid grid-cols-1 md:grid-cols-2 w-full lg:grid-cols-3 gap-5">
                    {currentDoctor.map((doctor, index) => (
                      <DoctorCard key={index} doctor={doctor} />
                    ))}
                  </div>
                </div>
              </div>

              <Pagination
                doctorPerPage={doctorPerPage}
                totaldoctor={AavailableDocrors.length}
                paginate={paginate}
                activePage={currentPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors
