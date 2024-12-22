import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Pagination = ({ totaldoctor, doctorPerPage ,activePage,paginate}) => {
   const pageNumber = [];
    for (let i = 1; i <=Math.ceil(totaldoctor/doctorPerPage) ; i++){
        pageNumber.push(i)       
    }

    return (
      <div>
        <ul className="flex pt-12  gap-8 justify-center items-center text-xl">
          <li>
            <button
              onClick={() => {
                if (activePage >= pageNumber.length) {
                  
                  paginate(activePage - 1)
                }
              }}
              className="flex items-center"
            >
              {' '}
              <BsArrowLeft className="text-2xl" />
            </button>
          </li>
          {pageNumber.map((number) => (
            <li
              key={number}
              className={` ${
                number == activePage ? 'bg-indigo-400 rounded-full ' : ''
              }`}
            >
              <button
                className="rounded-full h-8 w-8 flex justify-center items-center  mx-auto hover:bg-indigo-500 duration-150"
                onClick={() => paginate(number)}
              >
                {number}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                if (activePage < pageNumber.length) {
                  paginate(activePage + 1)
                }
              }}
              className="flex items-center"
            >
              <BsArrowRight className="text-2xl" />
            </button>
          </li>
        </ul>
      </div>
    )
}

export default Pagination