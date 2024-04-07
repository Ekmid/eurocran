import Footer from "@components/Footer"
import Header from "@components/Header"
import Nav from "@components/Nav"

const Home = () => {
  return (
    <section className='w-full flex-col'>
      <Header/>
      <Nav/>
        <h1 className='head_text text-center'>
            Аренда спецтехники Liebherr
            <br className='max-md:hidden' />
            <span className='orange-gradient 
            text-center'>для любых задач</span>
        </h1>
        <p className='desc text-center'>
            Мобильные, гусеничные и башенные краны 
            LIEBHERR в аренду для любых задач и грузов. 
            работаем по всей России
        </p>
        <Footer/>
    </section>
  )
}

export default Home