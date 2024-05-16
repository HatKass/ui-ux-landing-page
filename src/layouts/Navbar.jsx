import Logo from "../assets/Logo.svg";
import X from "../assets/X.svg";
import Menu from "../assets/Menu.svg";
import User from "../assets/User.svg";
import { useState } from "react";
import { LINKS, LINKS_USER } from "../constants";

const Navbar = () => {
  const [openMenuLinks, setOpenMenuLinks] = useState(false);
  const handleMenuLinksChange = () => {
    setOpenMenuUser(false);
    setOpenMenuLinks(!openMenuLinks);
  };

  const [openMenuUser, setOpenMenuUser] = useState(false);
  const handleMenuUserChange = () => {
    setOpenMenuLinks(false);
    setOpenMenuUser(!openMenuUser);
  };

  return (
    <nav className="bg-white">
      <div className="flex lg:px-20 lg:py-6 justify-between p-6 w-full mb-8">
        <div className="flex gap-x-[74px]">
          <img src={Logo} alt="logo" />
          <ul className="hidden lg:flex justify-between items-center gap-x-14">
            {LINKS.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.libele}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex gap-x-14 text-[#36485C]">
          <button>Open an Account</button>
          <button className="flex items-center gap-x-3">
            <img src={User} alt="user" />
            Sign In
          </button>
        </div>
        <div className="lg:hidden flex justify-center items-center gap-3">
          <button onClick={handleMenuUserChange}>
            <img src={User} alt="user" />
          </button>
          <button onClick={handleMenuLinksChange}>
            <img src={Menu} alt="menu" />
          </button>
        </div>
      </div>
      {openMenuLinks && (
        <ul className="flex border-b py-4 flex-col justify-center items-center space-y-4 bg-white z-20 absolute w-full left-0">
          {LINKS.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.libele}</a>
            </li>
          ))}
        </ul>
      )}
      {openMenuUser && (
        <ul className="flex border-b py-4 flex-col justify-center items-center space-y-4 bg-white z-20 absolute w-full left-0">
          {LINKS_USER.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.libele}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
