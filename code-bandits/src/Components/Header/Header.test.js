import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "../Header/Header.js";
import { Button } from "react-bootstrap";

test("Header renders succesfully", function () {
  render(
    <Header>
      <Button onClick={jest.fn()} />
    </Header>
  );
  expect(screen.getByRole("heading")).toBeInTheDocument();
});

/*test("handleShow function called when button is clicked", function () {
  const handleShow = jest.fn();
  render(
    <Header>
      <Button onClick={handleShow}>Add Resource</Button>
    </Header>
  );
  const button = screen.getByRole("button");
  userEvent.click(button);
  expect(handleShow).toHaveBeenCalled();
});*/
