import { expect, test, describe } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import YourProfile from "../YourProfile";

describe("YourProfile", () => {
  render(<YourProfile />);

  test("rendered", () => {
    expect(screen.getByRole("heading", { level: 2 }).textContent).toBe(
      "Your Profile",
    );
  });

  test("increment age ボタンを押下すると歳を取ること", async () => {
    expect(screen.getByTestId("display-age").textContent).toBe("Age: 31");
    await userEvent.click(screen.getByTestId("increment-age"));
    expect(screen.getByTestId("display-age").textContent).toBe("Age: 32");
  });

  test("テキストフィールドを変更してサブミットボタンを押下すると、表示されている名前がテキストフィールドの値と同じ値に変わること", async () => {
    expect(screen.getByTestId("display-name").textContent).toBe("Name: YOU");
    await userEvent.clear(screen.getByTestId("name-input"));
    await userEvent.keyboard("ME");
    await userEvent.click(screen.getByText("Submit"));

    // 下記は fireEvent を使ったパターンだが、userEvent を使う方が最近では一般的。
    // 実際、ユーザーのインタラクションをそのまま表現しているのでわかりやすい。
    // fireEvent.change(screen.getByTestId("name-input"), {
    //   target: { value: "ME" },
    // });
    // fireEvent.click(screen.getByText("Submit"));
    expect(screen.getByTestId("display-name").textContent).toBe("Name: ME");
  });
});
