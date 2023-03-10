import React, { useState } from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import ClickAwayListener from "@mui/base/ClickAwayListener";

import logo from "../../assets/logo.png";
import logoDark from "../../assets/logo-dark.png";

import "./Navbar.scss";

const Navbar = ({ theme }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">
          {theme === "dark" ? (
            <img src={logoDark} alt="logo" />
          ) : (
            <img src={logo} alt="logo" />
          )}
        </a>
      </div>
      <ul className="app__navbar-links">
        {[
          "home",
          "about",
          "portfolio",
          "skills",
          "testimonials",
          "contact",
        ].map((item, index) => (
          <li
            className="app__flex p-text"
            key={`link-${item}`}
            tabIndex={index + 1}
          >
            <div />
            <a href={`#${item}`} aria-label={item}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <ClickAwayListener onClickAway={() => setToggle(false)}>
        <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <HiX onClick={() => setToggle(false)} />

              <ul>
                {[
                  "home",
                  "about",
                  "portfolio",
                  "skills",
                  "testimonials",
                  "contact",
                ].map((item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </ClickAwayListener>
    </nav>
  );
};

export default Navbar;
