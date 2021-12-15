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
import { photos } from "../components/Photos";
import LogoAnimation from "../components/LogoAnimation";

const Index = () => {
  return (
    <div className="wrapper">
      <Head>
        <title> Kobi Mathis Photography</title>
        <meta name="description" content="Check out photos by Kobi Mathis" />
        <meta property="og:title" content="Kobi Mathis Photography" />
      </Head>
      <Layout pageTitle="Kobi Mathis Photography">
        <main className="main">
          <div className="content">
          <LogoAnimation/>
            <Header className="header" />
            <FadeInSection>
              <Carousel className="carousel" />
            </FadeInSection>
            <FadeInSection>
              <About className="about" />
            </FadeInSection>
            <Gallery className="gallery" photos={photos} onHomepage={false}/>
            <FadeInSection>
              <Service className="service" />
            </FadeInSection>
            <FadeInSection>
              <Footer />
            </FadeInSection>
            <SocialMedia />
          </div>
        </main>
      </Layout>
    </div>
  );
};

export default Index;
