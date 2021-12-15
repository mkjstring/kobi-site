import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import FadeInSection from "../components/FadeInSection";
import SocialMedia from "../components/SocialMedia";

const AboutPage = () => {
  const PATH = "/img/kobi/";
  return (
    <div className="about-wrapper content">
      <Head>
        <title> Kobi Mathis Photography</title>
        <meta name="description" content="About Kobi Mathis" />
        <meta property="og:title" content="Kobi Mathis Photography" />
      </Head>
      <Header className="about-header" />
      <div>
        <body id="about-grid">
          <h3 className="about-header">
            <span className="text-warning">FROM THE ARTIST</span>
          </h3>
          <FadeInSection className="image-fade-1 image1" key={1}>
            <Image
              className="about-photo"
              loading="eager"
              src={`${PATH}_F0A4432.jpg`}
              alt="test"
              height={900}
              key={1} // use normal <img> attributes as props
              width={600}
            />
          </FadeInSection>

          <FadeInSection className="bio-text">
            <p className="descriptive-text">
              As an Alabama native, I wanted nothing more than to get out of the
              red state in which I was born. This drive to broaden my
              surroundings inadvertently birthed my passion for photography. I
              began touring as a drummer at 18 years old, at which time I also
              began experimenting with a cheap camera during our down time.
            </p>
            <p>
              After several years of touring, my interest in photography grew,
              and my understanding of it as an art and form of expression. I
              went from an enthusiastic amateur, to landing a job as a
              photographer for the top local digital marketing firm in just a
              few years. I soon became the director of film and photography
              within this firm. During this time, I shot product, food , high
              fashion, business portraits, lifestyle, events, and more.
            </p>
            <p>
              Over time, and through finally stepping out as an independent
              photographer, I have shifted my focus on that which inspires me
              most; everyday moments, candid, in scene, and environmental
              portraits. I aim to capture the sum of a moment in time, the
              emotion.
            </p>
            <p>
              I later came full circle, from touring in a band, to capturing
              live music from the other side. It began with small, local shows.
              I have been afforded with great opportunities to cover major music
              artist and events.
            </p>
            <p>
              Looking toward the future, I hope to push my reach toward covering
              events/subjects that bring attention to the state of Earth’s
              damaged landscapes. I want to capture the sides of life that are
              not pushed by social media. It’s my hope that by sharing my
              perspective, it can be reflected in the hearts and minds of
              viewers too. It is also from this perspective that I have found my
              dissonant home state to be a blessing in disguise.
            </p>
            <p>
              In my portfolio, I’ve included landscapes from different locations
              that, simply, made me feel something. I hope to portray joy,
              empathy, concern, or even depression in my photos, and that you
              will be moved in some ways too. Most of all, I hope you enjoy!
            </p>
            <p>
              - KOBI MATHIS
            </p>
          </FadeInSection>
        </body>
      </div>
      <SocialMedia className="about-social"/>
    </div>
  );
};
export default AboutPage;
