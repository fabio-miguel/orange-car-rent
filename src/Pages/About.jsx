import Footer from "../components/Footer";
import AboutImg from "../images/about/about-img.jpeg";
import PagesBanner from "../components/PagesBanner";

const About = () => {
  return (
    <>
      <section className="about-page">
        <section className="hero-all-pages">
          <div className="hero-about-overlay"></div>
          <div className="container">
            <div className="hero-all-pages-text">
              <h3>
                About <span>Us</span>
              </h3>
            </div>
          </div>
        </section>

        <div className="container">
          <div className="about-content">
            <img src={AboutImg} alt="Orange Offices" />
            <div className="about-content-text">
              <h2>The keys from our hands to yours</h2>
              <p>
                Welcome to Orange Car Rent! We pride ourselves on being a global
                leader in providing top-notch car rental services that cater to
                all your mobility needs. With a history spanning decades, our
                company has grown to become synonymous with reliability and
                exceptional customer service. Whether you're embarking on a
                business trip, family vacation, or simply need a reliable ride
                for your commute, Orange Car Rent has you covered.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PagesBanner />
      <Footer />
    </>
  );
};
export default About;
