// import style from '@/app/styles/header.module.css';
import Link from "next/link";
import Nav from "./Nav";
// _app.js (or _app.tsx)
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark pt-3 pb-3 ps-4 pe-4 text-light">
      <div className="container-fluid">
        <Link href={"/"} className="navbar-brand text-light">CodeWithAJ</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{backgroundColor : "#fff"}}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Nav/>
      </div>
    </nav>
  );
};
export default Header;
