import Footer from "@components/Footer"
import Header from "@components/Header"
import Nav from "@components/Nav"
import Banner1 from "@components/Banner1"
import Banner2 from "@components/Banner2"
import Card from "@components/UI components/Card"

const HomePage = () => {
  return (
    <section className='w-full flex-col'>
      <Header/>
      <Nav/>
      <Banner1/>
      <Banner2/>
      <Footer/>
    </section>
  )
}

export default HomePage