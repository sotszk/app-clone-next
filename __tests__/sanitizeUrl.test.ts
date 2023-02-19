import { expect, test, describe } from "vitest";
import sanitizeUrl from "../src/lib/sanitizeUrl";

describe("sanitizeUrl", () => {
  test("許可したドメイン以外のURLがサニタイズされること", () => {
    const result = sanitizeUrl("https://example.com", ["https://github.com"]);
    expect(result).toStrictEqual("/");
  });

  test("部分一致でURLのサニタイズを回避できないこと", () => {
    const result = sanitizeUrl("https://example.com?q=https://github.com", [
      "https://github.com",
    ]);
    expect(result).toStrictEqual("/");
  });

  test("許可ドメインの場合にサニタイズされないこと", () => {
    const redirectTo = "https://github.com/sotszk/app-clone-next";
    const result = sanitizeUrl("https://github.com/sotszk/app-clone-next", [
      "https://github.com",
    ]);
    expect(result).toStrictEqual(redirectTo);
  });
});
