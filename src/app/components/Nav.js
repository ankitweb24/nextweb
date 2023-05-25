import Link from "next/link";
// import style from '@/app/styles/nav.module.css';
const Nav = () => {
  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav text-center  ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link href={"/"} className="nav-link text-light active">Home</Link>
        </li>
        <li className="nav-item">
        <Link href={"/about"} className="nav-link text-light ">About</Link>
        </li>
        <li className="nav-item">
        <Link href={"/myservice"} className="nav-link text-light ">Service</Link>
        </li>
        <li className="nav-item">
        <Link href={"/portfolio"} className="nav-link text-light ">Projects</Link>
        </li>
        <li className="nav-item">
        <Link href={"/contact"} className="nav-link text-light ">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
