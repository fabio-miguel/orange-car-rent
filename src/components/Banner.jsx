// import CarRight from "../images/banner/car-right.png";
import CarRight3 from "../images/banner/car-right-3.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section id="home" className="banner-section banner-img">
        <div className="container">
          <div className="banner-content">
            <div className="banner-content-col-1">
              <p className="explore-text">
                <span>
                  <i class="fa-solid fa-thumbs-up"></i>
                </span>
                100% Trusted car rental platform in the World
              </p>
              <h1>
                Find Your Best <br></br>
                <span>Dream Car for Rental</span>
              </h1>
              <p className="banner-paragraph">
                Secure Your Car Rental With a Quick & Easy Booking at The Best
                Price Guaranteed. Unbeatable prices, unlimited miles, flexible
                pick-up options and much more.
              </p>
              <div className="banner-btns-container">
                <Link className="btn btn-view-all">
                  View all Cars <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link className="btn btn-learn-more" to="/">
                  Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>
            <div className="banner-content-col-2">
              <img src={CarRight3} className="img-fluid" alt="banner-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Banner;
