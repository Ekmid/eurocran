import Footer from "@components/Footer"
import Header from "@components/Header"
import Nav from "@components/Nav"
import Card from "@components/UI components/Card"
import Catalog from "@components/Catalog"

const CatalogPage = () => {
  return (
    <section className=' flex-col'>
      <Header/>
      <Nav/>
      <Catalog/>
      <Footer/>
    </section>
  )
}

export default CatalogPage