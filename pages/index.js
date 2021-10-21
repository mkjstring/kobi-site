import Layout from "../components/Layout";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import Service from "../components/Service";
import About from "../components/About";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

const Index = () => {
  return (
    <div className="wrapper">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Narrow&display=swap"
          rel="stylesheet"
        />
      </head>
      <Layout pageTitle="Kobi Childers Photography">
        <main className="main">
          <Header />
          <div className="content">
            <Carousel className="carousel" />
            <About className="about" />
            <Gallery className="gallery" />
            <Service className="service" />
            <Footer></Footer>
          </div>
        </main>
      </Layout>
    </div>
  );
};
export default Index;
