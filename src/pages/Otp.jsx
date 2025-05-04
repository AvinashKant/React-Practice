import { useState } from "react";
import OTPBox from "../components/OTPBox";

export default function Otp() {
  const [isOtpOpen, setOtpOpen] = useState(false);

  let otpBox = (status) => setOtpOpen(status);

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
      <button onClick={()=>otpBox(true)}>Send OTP</button>

      {isOtpOpen && <OTPBox setClose={otpBox} otoSize={6}>
        sadas
      </OTPBox>}

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea consequatur consectetur iure dolor nemo voluptas quod repellendus obcaecati dolorum officia facilis assumenda, quas reiciendis doloremque tenetur nobis fugit sapiente voluptatibus.
      </div>
    </>
  );
}
