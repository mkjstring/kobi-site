import Header from "../components/Header"
import Layout from "../components/Layout";
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Narrow&display=swap"
          rel="stylesheet"
        />
      </head>
      <Layout pageTitle="Kobi Childers Photography">
        <main className="main">
          <div className="content">
            <Header className="header" />
            <Carousel className="carousel" />
            <Gallery className="gallery" />
            <About className="about" />
            <Service className="service" />
            <Footer></Footer>Í
          </div>
        </main>
      </Layout>
    </div>
  );
};
export default Index;
