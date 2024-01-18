/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    rootDir: "./",
    transform: {
      "^.+\\.tsx?$": [
        "ts-jest",
        {
          tsconfig: "tsconfig.json",
        },
      ],
    },
    preset: "ts-jest",
    testEnvironment: "node",
    testRegex: "\\.spec\\.(ts|tsx)$",
    roots: ["<rootDir>/src/"],
    modulePaths: ["<rootDir>"],
    moduleDirectories: ["node_modules"],
  };
  