import React from "react";
import logo from "@assets/img/logo.svg";

const Popup = () => {
  return (
    <div className="p-4">
      <header>
        <img src={logo} alt="logo" />
        <p className="font-bold">
          Edit <code>src/pages/popup/Popup.tsx</code> and save to reload.
        </p>
        <a
          className="text-blue-500 underline"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!
        </a>
      </header>
    </div>
  );
};

export default Popup;
