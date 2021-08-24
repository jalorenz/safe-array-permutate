import { func, func2 } from "~lib/index";

describe("Index", () => {
  it("sample test", () => {
    expect(func()).toEqual(1)
  })

  it("second sample test", () => {
    expect(func2()).toEqual(2)
  })
})
