import Portfolio_card from "./Portfolio_card";
const Portfolio_section = () => {
  return (
    <div className="row">
      <div className="col-sm-12, col-md-4, col-lg-4">
        <Portfolio_card imgPath ="images/portfolio/one.jpg" title = "EMP MANAGMENT SYSTEM" />
      </div>
      <div className="col-sm-12, col-md-4, col-lg-4">
        <Portfolio_card  imgPath ="images/portfolio/two.jpg" title = "EMP MANAGMENT SYSTEM" />
      </div>
      <div className="col-sm-12, col-md-4, col-lg-4">
        <Portfolio_card imgPath ="images/portfolio/three.jpg"  title = "EMP MANAGMENT SYSTEM"/>
      </div>
    </div>
  );
};

export default Portfolio_section;
