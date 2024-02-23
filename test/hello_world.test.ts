import { hello } from "../src/hello_world";

describe("test hello", () => {
  it("should return hello world in test", () => {
    expect(hello()).toBe("Hello world!");
  });
});
