import { Input } from "@headlessui/react";
import { useState } from "react";

export default function OTPBox({children, otoSize=4, setState}) {

  const [otps, setotps] = useState(new Array(otoSize).fill(null))
  const handleInputChange = (event, index) => {
    let newOtps =  [...otps];
    newOtps[index] = event.target.value;
    console.table(newOtps);    
    setotps(newOtps);
  };

  return (
    <>
      <div className="absolute justify-center items-center bg-white w-auto">
        <div className="">
          <div className="border-b flex gap-5 p-1">
            <div>
                Heading
            </div>
            <div className="bg-red-500 text-white p-1 m-1 t-0">
                <button onClick={()=>setState(false)}>
                    X
                </button>
            </div>
          </div>

          <div className=" min-h-50">
            {
              otps.map(function (otp, index) {
                return <Input attr-index={index} placeholder="enter OTP" onChange={(event)=>handleInputChange(event, index)} />
              })
            }
          </div>

          <div className="absolute bottom-0 bg-amber-500 w-full">footer</div>
        </div>
      </div>
    </>
  );
}
