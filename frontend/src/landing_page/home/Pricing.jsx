import { Arrow } from "../../icons/Arrow";

const Pricing = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="">
            See pricing <Arrow color="blue" />
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6"></div>
      </div>
    </div>
  );
};

export default Pricing;
