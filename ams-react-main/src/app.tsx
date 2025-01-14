import { createRoot } from "react-dom/client";
import { AcademyRouter } from "./ams-academy/router";

createRoot(document.getElementById("root") as HTMLElement).render(
  process.env.APP === "academy" ? <AcademyRouter /> : <p>SHOP</p>
);
