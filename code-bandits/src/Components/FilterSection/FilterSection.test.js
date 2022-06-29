import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import FilterSection from "./FilterSection";

test("FilterSection component renders successfully", function () {
  render(<FilterSection />);
  expect(
    screen.getByLabelText("Article")
  ).toBeInTheDocument();
});

