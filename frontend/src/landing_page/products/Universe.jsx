const Universe = () => {
  return (
    <div className="container text-center mt-5 mb-5">
      <div className="row mt-5">
        <p className="fs-5">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </p>
      </div>
      <div className="row mt-5 p-3">
        <h4 className="fs-5 mb-4">The Zerodha Universe</h4>
        <p className="mb-4">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row p-5">
        <div className="col-12 col-md-4 p-3 mt-5">
          <a href="#" className="text-decoration-none">
            <img
              src="image/zerodhaFundhouse.png"
              alt="Zerodha Fund House"
              style={{ width: "50%" }}
            />
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Our asset management venture <br />
              that is creating simple and transparent index <br />
              funds to help you save for your goals.
            </p>
          </a>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <a href="#" className="text-decoration-none">
            <img
              src="image/sensibullLogo.svg"
              alt="Sensibull"
              style={{ width: "60%" }}
            />
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Options trading platform that lets you <br />
              create strategies, analyze positions, and examine <br />
              data points like open interest, FII/DII, and more.
            </p>
          </a>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <a href="#" className="text-decoration-none">
            <img src="image/tijori.svg" alt="Tijori" style={{ width: "40%" }} />
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Investment research platform <br />
              that offers detailed insights on stocks, <br />
              sectors, supply chains, and more.
            </p>
          </a>
        </div>

        <div className="col-12 col-md-4 p-3 mt-5">
          <a href="#" className="text-decoration-none">
            <img
              src="image/streakLogo.png"
              alt="Streak"
              style={{ width: "45%" }}
            />
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Systematic trading platform <br />
              that allows you to create and backtest <br />
              strategies without coding.
            </p>
          </a>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <a href="#" className="text-decoration-none">
            <img
              src="image/smallcaseLogo.png"
              alt="smallcase"
              style={{ width: "50%" }}
            />
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Thematic investing platform <br />
              that helps you invest in diversified <br />
              baskets of stocks on ETFs.
            </p>
          </a>
        </div>
        <div className="col-12 col-md-4 p-3 mt-5">
          <a href="#" className="text-decoration-none">
            <img
              src="image/dittoLogo.png"
              alt="Ditto"
              style={{ width: "35%" }}
            />
            <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
              Personalized advice on life <br />
              and health insurance. No spam <br />
              and no mis-selling.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Universe;
