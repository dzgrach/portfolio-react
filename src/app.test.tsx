import React from "react";
import { render, screen } from "@testing-library/react";

import "./i18n";

import App from "./app";

test("renders portfolio-react", () => {
  render(<App/>);
  const linkElement = screen.getByText(/About/i);
  expect(linkElement).toBeInTheDocument();
});
