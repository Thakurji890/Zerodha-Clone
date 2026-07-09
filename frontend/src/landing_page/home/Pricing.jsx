import { Arrow } from "../../icons/Arrow";
import "./css/homePage.css";

const Pricing = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 col-md-4">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="custom-link">
            See pricing <Arrow color="#387ed1" />
          </a>
        </div>

        <div className="col-2 d-none d-md-block"></div>

        <div className="col-12 col-md-6">
          <div className="row text-center">
            <div className="col border p-3 ">
              <h1>₹0</h1>
              <p>Free account opening</p>
            </div>
            <div className="col border p-3">
              <h1>₹0</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col border p-3">
              <h1>₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
