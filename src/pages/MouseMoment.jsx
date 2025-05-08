import { useEffect, useState } from "react";
import MouseMove from "../components/MouseMove";

export default function MouseMoment() {
  const [xPosition, setXPosition] = useState(12.1);
  const [YPosition, setYPosition] = useState(12.1);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const id = setTimeout(() => {
        setXPosition(event.clientX);
        setYPosition(event.clientY);
      }, 100);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <h1>Add mouse pointer</h1>
      <MouseMove xPosition={xPosition} YPosition={YPosition} />
    </>
  );
}
