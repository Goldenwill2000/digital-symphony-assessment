import "./Footer.scss";
import LocationIcon from "../../assets/images/icon-location.png";
import PhoneIcon from "../../assets/images/icon-phone.png";
import TimeIcon from "../../assets/images/icon-time.png";
import Logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-data-wrapper">
          <img className="footer-icon" src={LocationIcon} alt="Location Icon" />
          <div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Unit+C-3-7,+Block+C,+Pacific+Place+Commercial+Centre,+Jalan+PJU+1A/4,+Ara+Damansara,+47301+Petaling+Jaya"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              Unit C-3-7, Block C, Pacific Place Commercial Centre, Jalan PJU
              1A/4, Ara Damansara, 47301 Petaling Jaya.
            </a>
          </div>
        </div>

        <div className="footer-data-wrapper">
          <img className="footer-icon" src={TimeIcon} alt="Time Icon" />
          <div>
            <div>Mon - Fri | 9 AM - 6 PM</div>
            <div>Sat - Sun | 10 AM - 5 PM</div>
          </div>
        </div>

        <div className="footer-data-wrapper">
          <img className="footer-icon" src={PhoneIcon} alt="Phone Icon" />
          <div>
            <a href="tel:0312341234" className="footer-link">
              03 1234 1234
            </a>
          </div>
        </div>

        <div className="logo-wrapper">
          <div>A Development by</div>
          <img className="footer-logo" src={Logo} alt="Company Logo" />
        </div>
      </div>

      <div className="footer-disclaimer">
        <div className="footer-disclaimer-text">© DIGITAL SYMPHONY 2024</div>
        <div className="footer-disclaimer-text">
          DISCLAIMER | PRIVACY POLICY
        </div>
      </div>
    </>
  );
}
