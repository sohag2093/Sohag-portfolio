import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Interior Graphic Designer & Interior Specialist</h4>
                <h5>Like bug Furniture Company (Malaysia)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Creating high-quality 3D models and renders of furniture products
              for marketing and advertising purposes. Producing photorealistic
              visuals for e-commerce, catalogues, and promotional campaigns.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Graphic Designer</h4>
                <h5>Shatrong Printing Press (Bangladesh)</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Designed marketing materials, posters, banners, brochures, and print
              advertisements. Created product packaging and promotional graphics,
              and prepared print-ready files for commercial printing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma / Bachelor in Accounting</h4>
                <h5>Govt. Haraganga College (Bangladesh)</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed studies with a strong foundation in business and accounting principles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
