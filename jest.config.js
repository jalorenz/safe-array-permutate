const { pathsToModuleNameMapper } = require("ts-jest/utils")
const { compilerOptions } = require("./tsconfig.json")

module.exports = {
	testRegex: ".spec.ts$",
	transform: {
		"^.+\\.(t|j)s$": "ts-jest",
	},
	moduleFileExtensions: ["js", "json", "ts"],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
		prefix: "<rootDir>/"
	}),
}
