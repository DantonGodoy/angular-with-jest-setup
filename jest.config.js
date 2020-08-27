module.exports = {
  'preset': 'jest-preset-angular',
  'setupFilesAfterEnv': [
    '<rootDir>/setup-jest.ts'
  ],
  'transformIgnorePatterns': [
    'node_modules/(?!@ngrx|ngx-socket-io)'
  ],
  'transform': {
    '^.+\\.(ts|js|html)$': 'ts-jest'
  },
  'testPathIgnorePatterns': [
    '<rootDir>/node_modules',
    '<rootDir>/dist/',
    '<rootDir>/cypress/'
  ],
  "coverageThreshold": {
    "global": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  },
  "moduleNameMapper": {
    "^@assets/(.*)$": "<rootDir>/src/assets/$1",
    "^@env$": "<rootDir>/src/environments/$1",
    "^@directives/(.*)$": "<rootDir>/src/app/shared/directives/$1",
    "^@pipes/(.*)$": "<rootDir>/src/app/shared/pipes/$1",
    "^@providers/(.*)$": "<rootDir>/src/app/shared/providers/$1",
    "^@services/(.*)$": "<rootDir>/src/app/shared/services/$1",
    "^@utils/(.*)$": "<rootDir>/src/app/shared/utils/$1"
  }
};
