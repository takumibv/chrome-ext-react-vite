import App from "@src/pages/content/components/Demo/app";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import ReactDOM from "react-dom";
import "../../index.css";

refreshOnUpdate("pages/content");

const ROOT_DOM_ID = "chrome-extension-boilerplate-react-vite-content-view-root";

const injectDomElements = () => {
  const currentRoot = document.getElementById(ROOT_DOM_ID);
  if (currentRoot) currentRoot.remove();

  const rootElement = document.createElement("div");
  rootElement.id = ROOT_DOM_ID;
  document.body.appendChild(rootElement);
  const shadowRoot = rootElement.attachShadow({ mode: "open" });
  const shadowWrapper = document.createElement("div");
  shadowRoot.append(shadowWrapper);

  ReactDOM.render(<App />, shadowWrapper);
};

(function () {
  if (window.top === window) {
    const setLoaded = () => injectDomElements();

    // Check page has loaded and if not add listener for it
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", setLoaded);
    } else {
      setLoaded();
    }
  }
})();
