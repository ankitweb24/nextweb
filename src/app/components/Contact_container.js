"use client";
import {
  MdLocationOn,
  MdRingVolume,
  MdEmail,
  MdFacebook,
  MdWhatsapp,
  MdSendTimeExtension,
  MdSendAndArchive,
} from "react-icons/md";
import Link from "next/link";
import style from "@/app/styles/contact.module.css";
import { useState } from "react";
import submitData from "../contactpage/data";
const Contact_container = () => {

  const [state, setState] = useState();

  //define the handleSubmit function
const handleSubmit = async (FormData) =>{
  try {
    const res = submitData({
      username : FormData.get("username"),
      email : FormData.get("email"),
      subject : FormData.get("subject"),
      msg : FormData.get("msg"),
    });

    if(res.status == 200){
      setState("success")
    }else{
      setState("error")
    }
  } catch (error) {
    console.log(error);
  }
}

  return (
    <>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="card bg-transparent border-0 text-light">
          <div className="card-title fs-1">Send Message Us</div>
          <hr style={{ width: "20%" }} />

          <form action={handleSubmit}>
            <div className="mb-3">
              <label for="username" className="form-label">
                User name
              </label>
              <input
                type="text"
                className="form-control border-0 text-light bg-dark"
                id="username"
                aria-describedby="username"
                name="username"
                autoComplete="off"
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control border-0 text-light bg-dark"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                autoComplete="off"
              />
              <div id="emailHelp" className="form-text  text-light">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control border-0 text-light bg-dark"
                id="subject"
                aria-describedby="subject"
                name="subject"
                autoComplete="off"
              />
            </div>

            <label for="floatingTextarea2" className="form-label">
              Type your message here
            </label>
            <div className="form-floating mb-3">
              <textarea
                className="form-control border-0 text-light bg-dark"
                placeholder="Leave a comment here"
                name="msg"
                id="floatingTextarea2"
                autoComplete="off"
                style={{ height: "100px" }}
              ></textarea>
              <label for="floatingTextarea2 text-light bg-dark">Message</label>
            </div>

            <button type="submit" name="submit" className="btn btn-primary">
              Send Message
            </button>
            <p className="text-light text-center p-2 bg-secondary ">{state}</p>
          </form>
        </div>
      </div>
      <div className="col-lg-6 col-md-6 col-sm-12">
        <div className="card bg-transparent border-0 text-light">
          <div className="card-title fs-1">Get in Touch</div>
          <hr style={{ width: "20%" }} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam
            magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
            mollitia inventore? dolorum dolorem soluta quidem expedita aperiam
            aliquid at. Totam magni ipsum suscipit amet? Autem nemo esse
            laboriosam ratione nobis mollitia inventore? mollitia inventore?
            dolorum dolorem soluta quidem expedita aperiam aliquid at. Totam
            magni ipsum suscipit amet? Autem nemo esse laboriosam ratione nobis
            mollitia inventore?
          </p>

          <ul className="list-group list-group-flush">
            <li className="list-group-item border-0 text-light bg-dark">
              <MdLocationOn className="me-2" /> 329 WASHINGTON ST BOSTON, MA
              02108
            </li>
            <li className="list-group-item border-0 text-light bg-dark">
              {" "}
              <MdRingVolume className="me-2" /> (617) 557-0089
            </li>
            <li className="list-group-item text-light bg-dark">
              <MdEmail className="me-2" /> contact@example.com
            </li>
          </ul>
          <div className="d-flex mt-4">
            <Link className={style.social_link} href={"/"}>
              <i>
                <MdFacebook />
              </i>
            </Link>
            <Link className={style.social_link} href={"/"}>
              <i>
                <MdWhatsapp />
              </i>
            </Link>
            <Link className={style.social_link} href={"/"}>
              <i>
                <MdSendTimeExtension />
              </i>
            </Link>
            <Link className={style.social_link} href={"/"}>
              <i>
                <MdSendAndArchive />
              </i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact_container;
