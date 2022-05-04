module.exports = {
  // collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**', '!<rootDir>/src/**/*-protocols.ts', '!**/protocols/**', '!**/test/**', '!<rootDit>/src/main/**'],
  coverageDirectory: 'coverage',
  roots: ['<rootDir>/src'],
  // testEnvironment: "jest-environment-node",
  // testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  preset: '@shelf/jest-mongodb'
}
