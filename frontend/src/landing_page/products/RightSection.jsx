import { Arrow } from "../../icons/Arrow";
import "../home/css/homePage.css";

const RightSection = ({
  imageUrl,
  productName,
  productDescription,
  learnMore,
  link,
}) => {
  return (
    <div className="container mt-5 mb-5 border-top">
      <div className="row align-items-center p-5 mt-5">
        <div className="col-12 col-md-4 p-3 p-md-5">
          <h1 className="fs-2 mb-3">{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div className="mt-4">
            <a href={learnMore} className="custom-link">
              {link} <Arrow color="currentColor" />
            </a>
          </div>
        </div>
        <div className="col-12 col-md-7 offset-md-1 p-3 p-md-5">
          <img src={imageUrl} alt="product image" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
