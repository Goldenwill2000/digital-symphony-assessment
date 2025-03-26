import * as Aos from "aos";
import { useEffect, useState } from "react";
import Button from "../../widgets/button/Button";
import Dropdown from "../../widgets/dropdown/Dropdown";
import Input from "../../widgets/input/Input";
import "./RegisterSection.scss";
import { ToastContainer, toast } from "react-toastify";
export default function RegisterSection() {
  const [value, setValue] = useState("");
  const notify = () =>
    toast.success("Registration submitted successfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);
  return (
    <div className="register-section-wrapper">
      <div className="register-title" data-aos="fade-up">
        Register Now
      </div>
      <div data-aos="fade-up">
        Our sales team will be in touch with you shortly
      </div>
      <div className="register-form">
        <Input type="text" placeholder="Your Name" fullWidth />
        <Input type="number" placeholder="Your Phone Number" fullWidth />
        <Input type="text" placeholder="Your Email Address" fullWidth />
        <Dropdown
          value={value}
          options={[
            { label: "Palm Springs", value: "Palm Springs" },
            {
              label: "Southern Water",
              value: "Southern Water",
            },
            { label: "The Ruums", value: "The Ruums" },
          ]}
          onChange={(value) => setValue(value)}
        />
        {/* <Input type="text" placeholder="Choose Project" fullWidth /> */}
        <div className="register-button-wrapper">
          <Button inverted text="SUBMIT" onClick={() => notify()} />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
