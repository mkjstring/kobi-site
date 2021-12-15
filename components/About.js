import Link from  'next/link'

const About = () => {
  return (
    <section id="about">
        <div className="about">
          <h3 className="about-header">
            <span className="text-warning">KOBI MATHIS PHOTOGRAPHY</span>
          </h3>
          <p className="descriptive-text">Kobi Mathis is a photographer and musician based out of Huntsville, AL.</p>
          <Link id="about-link" href="/About">CLICK FOR MORE INFO</Link>
        </div>
    </section>
  );
};
export default About;
