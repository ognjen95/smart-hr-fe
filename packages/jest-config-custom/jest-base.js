module.exports = {
    resetMocks: true,
    moduleDirectories: ['node_modules'],
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    coveragePathIgnorePatterns: [],
    coverageThreshold: null,
    collectCoverageFrom: [
      '**/*.{js,jsx,ts,tsx}',
      '!**/*.d.ts',
      '!**/node_modules/**',
      '!<rootDir>/out/**',
      '!<rootDir>/*.config.js',
      '!<rootDir>/coverage/**',
    ],
  }