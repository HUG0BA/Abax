import { describe, it, expect } from "vitest";
import {
  getWholePartAsNumber,
  getDecimalPartAsString,
  getDecimalPartAsNumber,
  getDecimalPositionCount,
} from "@utilities/number.js";

describe("getWholePartAsNumber tests", () => {
  it("Gets a unit", () => {
    expect(getWholePartAsNumber(1.3)).toBe(1);
  });
  it("Gets a  hundred", () => {
    expect(getWholePartAsNumber(11.333)).toBe(11);
  });
  it("Gets ten thousand", () => {
    expect(getWholePartAsNumber(1111.33333)).toBe(1111);
  });
  it("Gets a million ", () => {
    expect(getWholePartAsNumber(1111111.33333333)).toBe(1111111);
  });
  it("Gets a 0", () => {
    expect(getWholePartAsNumber(0.333333333333)).toBe(0);
  });
});

describe("getDecimalPartAsString tests", () => {
  it("Gets a tenth", () => {
    expect(getDecimalPartAsString(1.3)).toBe("3");
  });
  it("Gets a  thousandth", () => {
    expect(getDecimalPartAsString(1.333)).toBe("333");
  });
  it("Gets a ten thousandth", () => {
    expect(getDecimalPartAsString(1.33333)).toBe("33333");
  });
  it("Gets one hundred millonth", () => {
    expect(getDecimalPartAsString(1.33333333)).toBe("33333333");
  });
  it("Returns empty", () => {
    expect(getDecimalPartAsString(1)).toBe("");
  });
});

describe("getDecimalPartAsNumber tests", () => {
  it("Gets a tenth", () => {
    expect(getDecimalPartAsNumber(1.3)).toBe(3);
  });
  it("Gets a  thousandth", () => {
    expect(getDecimalPartAsNumber(1.333)).toBe(333);
  });
  it("Gets a ten thousandth", () => {
    expect(getDecimalPartAsNumber(1.33333)).toBe(33333);
  });
  it("Gets one hundred millonth", () => {
    expect(getDecimalPartAsNumber(1.33333333)).toBe(33333333);
  });
  it("Returns 0", () => {
    expect(getDecimalPartAsNumber(1)).toBe(0);
  });
});

describe("getDecimalPositionCount test", () => {
  it("Gets tenth count", () => {
    expect(getDecimalPositionCount(1.3)).toBe(1);
  });
  it("Gets thousandth count", () => {
    expect(getDecimalPositionCount(1.333)).toBe(3);
  });
  it("Gets ten thousandth count", () => {
    expect(getDecimalPositionCount(1.33333)).toBe(5);
  });
  it("Gets one hundred millionth count", () => {
    expect(getDecimalPositionCount(1.33333333)).toBe(8);
  });
  it("Returns zero", () => {
    expect(getDecimalPositionCount(1)).toBe(0);
  });
});
