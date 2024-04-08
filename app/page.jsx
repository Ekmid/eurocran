import Footer from "@components/Footer"
import Header from "@components/Header"
import Nav from "@components/Nav"
import Banner from "@components/Banner"

const Home = () => {
  return (
    <section className='w-full flex-col'>
      <Header/>
      <Nav/>
      <Banner/>
      <Footer/>
    </section>
  )
}

export default Home