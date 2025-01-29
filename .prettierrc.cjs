/** @type {import("prettier").Config} */
module.exports = {
	printWidth: 100,
	tabWidth: 2,
	useTabs: true,
	semi: true,
	singleQuote: false,
	jsxSingleQuote: false,
	trailingComma: "none",
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: "always",
	endOfLine: "lf",
	plugins: ["@ianvs/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
	importOrder: [
		"<TYPES>",
		"<TYPES>^[.]",
		"",
		"^react$",
		"",
		"<THIRD_PARTY_MODULES>",
		"",
		"^[@]/",
		"",
		"^[.]"
	]
};
