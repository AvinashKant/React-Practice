export default function Toast({ children, setClose }) {
  return (
    <>
      <div className="absolute right-0 top-0 z-40 m-1">
        <button
          className="absolute top-0.5 right-0 top-0 m-1 text-red-950 "
          onClick={() => setClose(false)}
        >
          X
        </button>
        <div className="bg-amber-100 p-5">{children}</div>
      </div>
    </>
  );
}
