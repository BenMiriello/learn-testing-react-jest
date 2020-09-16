import React from "react";
import { render, cleanup } from "@testing-library/react";
import TestElements from "./TestElements";

afterEach(cleanup);

describe("TestElements", () => {
  it("should be equal to 0", () => {
    const x = render(<TestElements />);
    const { getByTestId } = x;
    debugger;
    expect(getByTestId("counter")).toHaveTextContent(0);
  });

  it('should be enabled', () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
  });

  it('should be disabled', () => {
    const { getByTestId } = render(<TestElements />);
    expect(getByTestId('button-down')).toBeDisabled();
  });
});
