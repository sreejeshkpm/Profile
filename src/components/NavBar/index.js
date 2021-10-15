import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  const location = useLocation();

  const trackScreenWidth = () => {
    const width = window.innerWidth;
    setScreenWidth(width);
    if (width > 600) {
      setOpen(true);
    }
  };

  const handleClose = () => {
    if (screenWidth < 600) {
      setOpen(false);
    }
  };

  useEffect(() => {
    trackScreenWidth();
    window.addEventListener("resize", trackScreenWidth);
    return () => window.removeEventListener("resize", trackScreenWidth);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <Link to="/">
            <img
              src="https://scontent.fcok1-1.fna.fbcdn.net/v/t1.6435-9/70460193_2665166206828232_2019539071923126272_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=b4gAxfio38UAX-Fr-n8&tn=H2bBkP4d5h7hyAiw&_nc_ht=scontent.fcok1-1.fna&oh=19cbe33fe5da43bb09e4a8f4650b60a6&oe=618FD128"
              alt="brand"
            />
          </Link>
        </div>
        <div className="list-wrapper">
          <img
            src=""
            alt="Menu bars"
            style={{ opacity: !open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />
          <img
            src=""
            alt="Menu cross"
            style={{ opacity: open ? 1 : 0 }}
            onClick={() => {
              setOpen(!open);
            }}
          />

          <ul style={{ left: open ? "0" : "-100vw" }}>
            <li>
              <Link
                to="/"
                onClick={handleClose}
                style={{ color: location.pathname === "/" && "#4071f4" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={handleClose}
                style={{ color: location.pathname === "/about" && "#4071f4" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                onClick={handleClose}
                style={{ color: location.pathname === "/skills" && "#4071f4" }}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/works"
                onClick={handleClose}
                style={{ color: location.pathname === "/works" && "#4071f4" }}
              >
                Works
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={handleClose}
                style={{ color: location.pathname === "/contact" && "#4071f4" }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;