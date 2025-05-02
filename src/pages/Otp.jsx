import { useState } from "react";
import OTPBox from "../components/OTPBox";

export default function Otp() {
  const [isOtpOpen, setOtpOpen] = useState(false);

  function OpenOtpBox() {
    setOtpOpen(true);
  }

  return (
    <>
      <div className="group">
        <div className="bg-blue-50">Alphabet</div>
        <ol className="invisible group-hover:visible bg-blue-100 pl-1">
          <li>ABC</li>
          <li>XYZ</li>
          <li>123</li>
        </ol>
      </div>
      <button onClick={OpenOtpBox}>Send OTP</button>

      {isOtpOpen && <OTPBox />}
    </>
  );
}
