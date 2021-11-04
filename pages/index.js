
import Head from "next/head";
import Header from "../components/Header";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import Service from "../components/Service";
import About from "../components/About";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import FadeInSection from "../components/FadeInSection";
import SocialMedia from "../components/SocialMedia";
import LazyImageLoad from "../components/LazyImageLoad";

const Index = () => {
  return (
    <div className="wrapper">
      <Head>
        <title> Kobi Childers Photography</title>
        <meta name="description" content="Check out photos by Kobi Childers"/>
        <meta property="og:title" content="Kobi Childers Photography"/>
      </Head>
      <Layout pageTitle="Kobi Childers Photography">
        <main className="main">
          <div className="content">
            <Header className="header" />
            <Carousel className="carousel" />
            <FadeInSection>
              <About className="about" />
            </FadeInSection>
            <LazyImageLoad/>
            <FadeInSection>
              <Service className="service" />
            </FadeInSection>
            <FadeInSection>
              <Footer />
            </FadeInSection>
            <div className="test-social-media">
              <SocialMedia />
            </div>
          </div>
        </main>
      </Layout>
    </div>
  );
};
export default Index;
