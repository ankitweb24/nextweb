import style from "@/app/styles/heropage.module.css";
import Header from "./Header";
import { Hero_content } from "./Hero_content";
import Aboutme from "./Aboutme";
import Service from "./Service";
import Number_section from "./Number_section";
import Portfolio from "./Portfolio";
const Heropage = () => {
  return (
    <>
      <section className={style.hero_page}>
        <Header />
        <Hero_content />
      </section>
      <Aboutme />
      <Service />
      <Number_section/>
      <Portfolio/>
    </>
  );
};

export default Heropage;
