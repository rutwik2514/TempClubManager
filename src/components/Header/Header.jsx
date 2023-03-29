import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
import logo from "../../assests/images/Logo.svg"

const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "Clubs",
    url: "#",
  },
  {
    display: "Upcoming Events",
    url: "#",
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
function handleClick(){
  window.location.href = "/login"
}
  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo ">
            <img src={logo} style={{width : '30vw'}}></img>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu d-flex" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
              <button type="button" className="btn  mt-3 ms-3" style={{height : '4vh', paddingBottom : '4vh', backgroundColor:'orange'}} onClick={handleClick}>Login</button>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                  IIIT SURAT
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
