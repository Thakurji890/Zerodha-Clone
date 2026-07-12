import React from 'react';

const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero" style={{ background: "#387ed1", color: "white" }}>
      <div className="p-5" style={{ margin: "0 10%" }}>
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h4 className="fs-4">Support Portal</h4>
          <a href="" className="text-white text-decoration-none border-bottom">Track tickets</a>
        </div>
        
        <div className="row">
          <div className="col-12 col-md-7 mb-4 mb-md-0">
            <h1 className="fs-4 mb-4">Search for an answer or browse help topics to create a ticket</h1>
            <div className="position-relative mb-4">
              <input 
                type="text" 
                className="form-control form-control-lg rounded-0" 
                placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." 
                style={{ height: "60px" }}
              />
            </div>
            <div className="d-flex flex-wrap gap-4 mt-4" style={{ fontSize: "14px" }}>
              <a href="" className="text-white border-bottom text-decoration-none pb-1">Track account opening</a>
              <a href="" className="text-white border-bottom text-decoration-none pb-1">Track segment activation</a>
              <a href="" className="text-white border-bottom text-decoration-none pb-1">Intraday margins</a>
              <a href="" className="text-white border-bottom text-decoration-none pb-1">Kite user manual</a>
            </div>
          </div>
          <div className="col-12 col-md-5 ps-md-5">
            <h2 className="fs-4 mb-4">Featured</h2>
            <ol className="text-white">
              <li className="mb-3"><a href="" className="text-white text-decoration-none">Rights Entitlements listing in July 2026</a></li>
              <li className="mb-3"><a href="" className="text-white text-decoration-none">Current Takeovers and Delisting - July 2026</a></li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
