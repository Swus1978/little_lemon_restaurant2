import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter as Router
import App from "./App";

test("renders learn react link", () => {
  render(
    <Router>
      {" "}
      {/* Wrap your component with Router */}
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
