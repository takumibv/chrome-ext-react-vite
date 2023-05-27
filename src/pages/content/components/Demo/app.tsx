import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log("content view loaded");
  }, []);

  return (
    <>
      <div className="text-red-500">content view</div>
    </>
  );
}
