import { Arrow } from "../../icons/Arrow";
import "./css/homePage.css";

const Education = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-6">
          <img
            src="image/education.svg"
            alt="varsity image"
            className="education-img"
          />
        </div>
        <div className="col-12 col-md-6">
          <h3 className="mb-3">Free and open market education</h3>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="custom-link">
            Varsity
            <Arrow color="currentColor" />
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="custom-link">
            TradingQ&A <Arrow color="currentColor" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
