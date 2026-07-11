import { Arrow } from "../../icons/Arrow";
const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="row text-center mt-5">
          <h1>Zerodha Products</h1>
          <p className="text-muted mt-2">
            Sleek, modern, and intuitive trading platforms
          </p>
          <p className="text-muted mt-3" id="link">
            Check out our{" "}
            <a href="/investments">
              investment offerings <Arrow color="currentColor" />
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
