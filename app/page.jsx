import Footer from "@components/Footer"
import Header from "@components/Header"
import Nav from "@components/Nav"
import Banner1 from "@components/Banner1"

const Home = () => {
  return (
    <section className='w-full flex-col'>
      <Header/>
      <Nav/>
      <Banner1/>
      <Footer/>
    </section>
  )
}

export default Home