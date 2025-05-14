export default function MousePosition({ xPosition, YPosition }) {
  return (
    <>
      <div
        className="bg-red-800 w-5 h-5 rounded-4xl"
        style={{
          left: xPosition,
          top: YPosition,
          position: "absolute",
        }}
      ></div>
    </>
  );
}
