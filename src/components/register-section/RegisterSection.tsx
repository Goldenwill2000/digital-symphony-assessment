import Button from "../../widgets/button/Button";
import Input from "../../widgets/input/Input";
import "./RegisterSection.scss";
export default function RegisterSection() {
  return (
    <div className="register-section-wrapper">
      <div className="register-title"> Register Now</div>
      <div>Our sales team will be in touch with you shortly</div>
      <div className="register-form">
        <Input type="text" placeholder="Your Name" fullWidth />
        <Input type="text" placeholder="Your Phone Number" fullWidth />
        <Input type="text" placeholder="Your Email Address" fullWidth />
        <Input type="text" placeholder="Choose Project" fullWidth />
        <div className="register-button-wrapper">
          <Button inverted text="SUBMIT" onClick={() => console.log("click")} />
        </div>
      </div>
    </div>
  );
}
