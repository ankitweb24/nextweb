import About_left from "./About_left";
import About_right from "./About_right";
const Aboutme = () => {
  return (
    <section className="container mt-5">
        <div className="row">
        <About_left/>
        <About_right/>
        </div>
    </section>
  )
}

export default Aboutme;