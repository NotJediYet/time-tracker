import { sum } from "#utils/sum";
import { describe, expect, it } from "vitest";

describe("sum", () => {
    it("should return the sum of the numbers", () => {
        expect(sum(1, 2, 3)).toBe(6);
        expect(sum(-1, -2, -3)).toBe(-6);
        expect(sum(0, 0, 0)).toBe(0);
    }); 
});