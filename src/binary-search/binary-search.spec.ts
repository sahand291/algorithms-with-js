import { describe, test, expect } from "vitest";

import binarySearch from "./binary-search";

describe("binary search tests", () => {
	const a = 5;
	const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	test("it should find middle number", () => {
		const res = binarySearch(arr, 5);
		expect(res).toEqual(5);
	});

	test("it should find first index", () => {
		const res = binarySearch(arr, 0);
		expect(res).toEqual(0);
	});

	test("it should find last index", () => {
		const res = binarySearch(arr, 10);
		expect(res).toEqual(10);
	});

	test("it should find first half", () => {
		const res = binarySearch(arr, 2);
		expect(res).toEqual(2);
	});

	test("it should find second half", () => {
		const res = binarySearch(arr, 9);
		expect(res).toEqual(9);
	});
});
