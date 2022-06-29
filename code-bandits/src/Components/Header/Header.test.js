import { test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
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

/*test("addToList function called when button is clicked", function () {
  const addToList = jest.fn();

  render(<AddItem addToList={addToList} buttonText={"TEST"} />);

  const button = screen.getByRole("button");

  userEvent.click(button);

  expect(addToList).toHaveBeenCalled();
});*/
