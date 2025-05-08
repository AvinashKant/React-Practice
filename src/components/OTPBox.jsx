import { Input } from "@headlessui/react";
import { useState } from "react";

export default function OTPBox({ children, otoSize = 4, setState }) {
  const [otps, setotps] = useState(new Array(otoSize).fill(null));
  const handleInputChange = (event, index) => {
    let newOtps = [...otps];
    newOtps[index] = event.target.value;
    console.table(newOtps);
    setotps(newOtps);
  };

  function closeModelBox() {
    setState(false);
  }

  return (
    <>
      <div className="absolute justify-center items-center bg-gray-200 w-auto">
        <div className="border-b flex p-1">
          <div className="">Heading</div>
          <div className="bg-red-500 text-white t-0 right-0 absolute">
            <button onClick={closeModelBox}>X</button>
          </div>
        </div>

        <div className="min-h-50">
          {otps.map(function (otp, index) {
            return (
              <Input
                attr-index={index}
                placeholder=""
                onChange={(event) => handleInputChange(event, index)}
                className="bg-white p-1 m-1 rounded-xl w-10"
              />
            );
          })}
        </div>

        <div className="absolute bottom-0 bg-amber-500 w-full">footer</div>
      </div>
    </>
  );
}
