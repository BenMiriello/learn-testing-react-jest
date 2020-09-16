import React from "react";
import { render, cleanup } from "@testing-library/react";
import TestElements from "./TestElements";

afterEach(cleanup);

describe("TestElements", () => {
  it("H1 should be equal to 0", () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId("counter")).toHaveTextContent(0);
  });

  it('first button should be enabled', () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
  });

  it('second button should be disabled', () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId('button-down')).toBeDisabled();
  });
});
