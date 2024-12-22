import { Suspense } from "react"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Routers from "../routes/Routers"
import { DNA } from "react-loader-spinner"


const Layout = () => {
  return (
    <>
      <Suspense
        fallback={
          <div className="absolute inset-0 hero_section -mt-8 flex justify-center items-center text-headingColor">
            {' '}
            <DNA
              visible={true}
              height="90"
              width="90"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
            />
          </div>
        }
      >
        {' '}
        <div className="hero_section">
          {' '}
          <Header />
          <main>
            <Routers />
          </main>
          <Footer/>
        </div>
      </Suspense>
    </>
  )
}

export default Layout