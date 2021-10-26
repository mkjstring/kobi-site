import Header from "../components/Header";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import Service from "../components/Service";
import About from "../components/About";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import SocialFollow from "../components/social-media";

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
        <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossOrigin="anonymous"
        ></link>
      </head>
      <Layout pageTitle="Kobi Childers Photography">
        <main className="main">
          <div className="content">
            <Header className="header" />
            <Carousel className="carousel" />
            <About className="about" />
            <Gallery className="gallery" />
            <Service className="service" />
            <Footer></Footer>
            <div className='test-social-media'>
            <SocialFollow />
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};
export default Index;
