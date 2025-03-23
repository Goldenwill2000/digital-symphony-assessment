import "./Topbar.scss";
import Logo from "../../assets/images/company.png";
import Button from "../../widgets/button/Button";
export default function Topbar() {
  return (
    <div className="topbar-wrapper">
      <img className="logo" src={Logo} alt="logo" />
      <div className="control-buttons">
        <Button text="Register" onClick={() => console.log("click")} />
      </div>
    </div>
  );
}
