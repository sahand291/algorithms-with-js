export default function binarySearch(
	numbers: number[],
	item: number,
): number | null {
	let low = 0;
	let high = numbers.length - 1;

	while (low <= high) {
		const mid = Math.floor((low + high) / 2);
		const guess = numbers[mid];

		if (guess === item) {
			return mid;
		}

		if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}

	return null;
}
