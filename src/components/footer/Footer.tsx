import "./Footer.scss";
import LocationIcon from "../../assets/images/icon-location.png";
import PhoneIcon from "../../assets/images/icon-phone.png";
import TimeIcon from "../../assets/images/icon-time.png";

export default function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-data-wrapper">
          <img className="footer-icon" src={LocationIcon} alt="" />
          <div>
            Unit C-3-7, Block C, Pacific Place Commercial Centre, Jalan PJU
            1A/4, Ara Damansara, 47301 Petaling Jaya.
          </div>
        </div>
        <div className="footer-data-wrapper ">
          <img className="footer-icon" src={TimeIcon} alt="" />
          <div>
            <div>Mon - Fri I 9 AM - 6 PM</div>
            <div>Sat - Sun I 10 AM - 5PM</div>
          </div>
        </div>
        <div className="footer-data-wrapper">
          <img className="footer-icon" src={PhoneIcon} alt="" />
          <div>03 1234 1234</div>
        </div>
      </div>

      <div className="footer-disclaimer">
        <div className="footer-disclaimer-text">© DIGITAL SYMPHONY 2024</div>
        <div className="footer-disclaimer-text">DISLAIMER | PRIVACY POLICY</div>
      </div>
    </>
  );
}
