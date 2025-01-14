import { BrowserRouter, Route, Routes } from "react-router";

import { MantineProvider } from "@mantine/core";
import { Component } from "./component";
import { Frame } from "./frame";
import { ProductExample } from "./product-example/home";

import "@mantine/core/styles.css";

export function AcademyRouter() {
  return (
    <MantineProvider defaultColorScheme={"dark"}>
      <BrowserRouter basename={"/"}>
        <Routes>
          <Route path="/" element={<Frame />}>
            <Route path={"/component"} element={<Component text={"LABEL"} />} />
            <Route path={"/product"} element={<ProductExample />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}
