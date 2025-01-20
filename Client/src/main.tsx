import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../src/app/layout/App";
import Styles from "../src/app/layout/Styles.scss"
import Navbar from "./app/layout/NavBar";
import { Provider } from "./components/ui/provider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);
