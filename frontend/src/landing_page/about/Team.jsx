import { Link } from "react-router-dom";
const Team = () => {
  return (
    <div className="container">
      <div className="row p-5 ">
        <h1 className="text-center mt-5">People</h1>
      </div>

      <div className="row p-5">
        <div className="col-6 p-5 text-center">
          <img
            src="image/nithinKamath.jpg"
            alt="Nithin Kamath image"
            style={{ borderRadius: "100%", width: "75%" }}
          />
          <h5>Nithin Kamath</h5>
          <p className="text-grey">Founder, CEO</p>
        </div>
        <div className="col-6 p-5 text-left">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a href="" style={{ color: "#387ed1" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="" style={{ color: "#387ed1" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="" style={{ color: "#387ed1" }}>
              Twitter
            </a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
