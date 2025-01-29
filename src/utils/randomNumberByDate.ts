export default function randomNumberByDate(min: number, max: number): number {
	const today = new Date();
	const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();

	function seededRandom(seed: number) {
		const x = Math.sin(seed) * 10000;
		return x - Math.floor(x);
	}

	return Math.floor(seededRandom(seed) * (max - min + 1)) + min;
}
