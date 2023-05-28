import style from "@/app/styles/number_section.module.css";
import Num_card from "./Num_card";
import { MdAppShortcut, MdAssignmentAdd, MdSupervisedUserCircle, MdPaid } from "react-icons/md";
const Number_section = () => {
  return (
    <section className={style.bg}>
      <div className="container p-3">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12">
            <Num_card
              icon={<MdAppShortcut />}
              counter={500}
              title="WORKS COMPLETED"
            />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <Num_card
              icon={<MdAssignmentAdd />}
              counter={7}
              title="YEARS OF EXPERIENCE"
            />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <Num_card
              icon={<MdSupervisedUserCircle />}
              counter={160}
              title="TOTAL CLIENTS"
            />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12">
            <Num_card
              icon={<MdPaid />}
              counter={270}
              title="AWARD WON"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Number_section;
