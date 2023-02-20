import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import YourProfile from "../YourProfile";

describe("YourProfile", () => {
  render(<YourProfile />);

  test("rendered", () => {
    expect(screen.getByRole("heading", { level: 2 }).textContent).toBe(
      "Your Profile",
    );
  });

  test("user event test", async () => {
    expect(screen.getByTestId("display-age").textContent).toBe("Age: 31");
    await userEvent.click(screen.getByTestId("increment-age"));
    expect(screen.getByTestId("display-age").textContent).toBe("Age: 32");
  });
});
