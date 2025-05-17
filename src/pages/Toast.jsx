import { ToastProvider, toast } from "../components/Toast/ToastProvider";

export default function Toast() {
  return (
    <div className="App">
      <button
        onClick={() => toast.success("Success Toast!")}
        className="bg-green-800 m-1"
      >
        Show Success
      </button>
      <button
        onClick={() => toast.error("Error Toast!")}
        className="bg-red-800 m-1"
      >
        Show Error
      </button>
      <button
        onClick={() => toast.info("Info Toast!")}
        className="bg-yellow-400 m-1"
      >
        Show Info
      </button>
    </div>
  );
}
