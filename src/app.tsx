import { createRoot } from "react-dom/client";
import { AcademyRouter } from "./ams-academy/router";
import { Shop } from "./ams-shop-exercise/shop";
import React from "react";
import { CartProvider } from "./CartContext";

createRoot(document.getElementById("root") as HTMLElement).render(
  process.env.APP === "academy" ? (
    <AcademyRouter />
  ) : (
    <React.StrictMode>
      <CartProvider>
        <Shop />
      </CartProvider>
    </React.StrictMode>
  )
);
