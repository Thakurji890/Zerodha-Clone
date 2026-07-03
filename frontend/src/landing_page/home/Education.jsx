import { Arrow } from "../../icons/Arrow";

const Education = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img
            src="image/education.svg"
            alt="varsity image"
            style={{ width: "80%%" }}
          />
        </div>
        <div className="col-6">
          <h3 className="mb-3">Free and open market education</h3>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Varsity
            <Arrow color="blue" />
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A <Arrow color="blue" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Education;
