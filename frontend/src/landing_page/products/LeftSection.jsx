import { Arrow } from "../../icons/Arrow.jsx";
import "../home/css/homePage.css";
const LeftSection = ({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5 mb-5 border-top">
      <div className="row align-items-center p-5 mt-5">
        <div className="col-12 col-md-7 p-3 p-md-5">
          <img src={imageUrl} alt="product image" className="img-fluid" />
        </div>
        <div className="col-12 col-md-4 offset-md-1 p-3 p-md-5">
          <h1 className="fs-2 mb-3">{productName}</h1>
          <p className="text-muted">{productDescription}</p>
          <div className="d-flex gap-4 mb-4 mt-4">
            <a href={tryDemo} className="custom-link">
              Try Demo <Arrow color="currentColor" />
            </a>
            <a href={learnMore} className="custom-link">
              Learn More <Arrow color="currentColor" />
            </a>
          </div>

          <div className="d-flex gap-3">
            <a href={googlePlay}>
              <img src="image/googlePlayBadge.svg" alt="play store image" />
            </a>
            <a href={appStore}>
              <img src="image/appstoreBadge.svg" alt="app store image" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
