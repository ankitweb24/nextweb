import { MdLaptopChromebook, MdRouter, MdCameraEnhance, MdSettingsCell, MdOutlineDeveloperMode, MdBusiness } from "react-icons/md";
import Service_card from "./Service_card";
const Service = () => {
  return (
    <section className="container mt-5 text-center text-light">
      <h1>Service</h1>
      <p>this is the service section.</p>
      <div className="row">
      <div className="col-sm-12, col-md-4, col-lg-4">
                <Service_card title = "WEB DESIGN" icon={<MdLaptopChromebook />}/>
                <Service_card title = "RESPONSIVE DESIGN" icon = {<MdSettingsCell/>}/>
            </div>
            <div className="col-sm-12, col-md-4, col-lg-4">
                <Service_card title = "WEB DEVELOPMENT" icon = {<MdRouter/>}/>
                <Service_card title = "GRAPHIC DESIGN" icon ={<MdOutlineDeveloperMode/>}/>
            </div>
            <div className="col-sm-12, col-md-4, col-lg-4">
                <Service_card title = "PHOTOGRAPHY" icon  = {<MdCameraEnhance/>}/>
                <Service_card title= "MARKETING SERVICES" icon = {<MdBusiness/>}/>
            </div>
      </div>
    </section>
  );
};

export default Service;
