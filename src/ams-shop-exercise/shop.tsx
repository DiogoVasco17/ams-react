import { BrowserRouter, Route, Routes } from "react-router";
import { MantineProvider } from "@mantine/core";
import { ProductExample } from "./product/home";
import { Cart } from "./product/cart";
import "@mantine/core/styles.css";

export function Shop() {
  return (
    <MantineProvider defaultColorScheme={"dark"}>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path={"/product"} element={<ProductExample />} />
          <Route path={"/cart"} element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
