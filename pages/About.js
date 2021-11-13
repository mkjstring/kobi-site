import Head from "next/head";
import Header from '../components/Header'

const About = () => {
  return (
    <div className="about-wrapper content">
        <Head>
        <title> Kobi Childers Photography</title>
        <meta name="description" content="About Kobi Childers" />
        <meta property="og:title" content="Kobi Childers Photography" />
      </Head>
      <Header className="header" />
      <div id="about">
          <div>
            <h3 className="about-header">
              <span className="text-warning">Delicious Tasty Kobi Studio</span>
            </h3>
            <p className="descriptive-text">
              Tasty baby Kobi make all worries disappear. Kobi master daddy
              makes all other picture people look like sloppy fat children. Make
              contact now and waste no juices.
            </p>
        <div>
          <div className="column">
            <h2>Dont you ever doubt me.</h2>
          </div>
          <div>
            <div>
              <div className="column">
                <h6 className="mission-header">Our Mission:</h6>
                <p className="descriptive-text">
                  To reach out and touch the face of God.
                </p>
              </div>
              <div className="column">
                <h6 className="vision-header">Our Vision:</h6>
                <p className="descriptive-text">
                  Lorem Ipsum has been the industrys standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default About;
