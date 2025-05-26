import { describe, expect, it } from "vitest";
import { appendNormalDigit, appendDecimalDigit } from "@utilities/keyboard";

describe("appendNormalDigit Tests", () => {
  it("Appends to a unit", () => {
    expect(appendNormalDigit(0, 9)).toBe(9);
  });
  it("Appends to a ten", () => {
    expect(appendNormalDigit(9, 9)).toBe(99);
  });
  it("Appends to a hundread", () => {
    expect(appendNormalDigit(99, 9)).toBe(999);
  });
  it("Appends to a thousand", () => {
    expect(appendNormalDigit(999, 9)).toBe(9999);
  });
  it("Appends to ten thousand", () => {
    expect(appendNormalDigit(9999, 9)).toBe(99999);
  });
});

describe("appendDecimalDigit", () => {
  it("Appends a tenth", () => {
    expect(appendDecimalDigit(0, 1, 1)).toBe(0.1);
  });
  it("Appends a hundredth", () => {
    expect(appendDecimalDigit(0, 1, 2)).toBe(0.01);
  });
  it("Appends a thousandth", () => {
    expect(appendDecimalDigit(0, 1, 3)).toBe(0.001);
  });
  it("Appends a thousandth", () => {
    expect(appendDecimalDigit(0, 1, 4)).toBe(0.0001);
  });
});
