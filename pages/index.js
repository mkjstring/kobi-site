import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from '../components/Gallery';
import Service from '../components/Service';
import About from '../components/About';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel'
const Index = () => {
  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Header />
      <Carousel />
      <Hero />
      <Gallery/>
      <Service />
      <About />
      <Footer />
    </Layout>
  )
}
export default Index;