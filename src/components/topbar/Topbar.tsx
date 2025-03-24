import "./Topbar.scss";
import Logo from "../../assets/images/company.png";
import Button from "../../widgets/button/Button";
import Menu from "../../assets/images/icon-menu.svg";
import CloseIcon from "../../assets/images/icon-close.svg"; // Add a close icon
import { useState, useEffect } from "react";

type TopbarProps = {
  scrollToSection: (section: string) => void;
};

export default function Topbar({ scrollToSection }: TopbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "FEATURES", section: "features" },
    { name: "PROJECTS", section: "projects" },
  ];

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isMenuOpen && !(e.target as HTMLElement).closest(".menu-overlay")) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="topbar-wrapper">
        <img
          className="logo"
          src={Logo}
          alt="Company Logo"
          onClick={() => scrollToSection("banner")}
        />

        <div className="control-buttons">
          <div className="topbar-link-wrapper">
            {links.map(({ name, section }) => (
              <div
                key={section}
                className="topbar-link"
                onClick={() => scrollToSection(section)}
              >
                {name}
              </div>
            ))}
          </div>
          <Button
            inverted
            text="Register"
            onClick={() => scrollToSection("register")}
          />
          <img
            className="menu-icon"
            src={Menu}
            alt="Menu Icon"
            onClick={() => setIsMenuOpen(true)}
          />
        </div>
      </div>

      {isMenuOpen && (
        <div className="menu-overlay">
          <div className="menu-content">
            <img
              className="close-icon"
              src={CloseIcon}
              alt="Close Menu"
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="menu-links">
              {links.map(({ name, section }) => (
                <div
                  key={section}
                  className="menu-link"
                  onClick={() => {
                    scrollToSection(section);
                    setIsMenuOpen(false);
                  }}
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
