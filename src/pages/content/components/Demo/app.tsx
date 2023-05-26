import { useEffect } from "react";
import style from "../../index.css";

export default function App() {
  useEffect(() => {
    console.log("content view loaded");
  }, []);

  return (
    <>
      <style type="text/css">{style.toString()}</style>
      <div className="">content view</div>
    </>
  );
}
