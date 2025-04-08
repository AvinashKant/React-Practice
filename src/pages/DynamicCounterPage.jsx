import DynamicCounter from "../components/DynamicCounter";
export default function DynamicCounterPage() {

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <h1>Dynamic counter</h1>
        <DynamicCounter />
      </div>
    </>
  );
}
