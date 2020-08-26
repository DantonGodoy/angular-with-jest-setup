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
    '<rootDir>/cypress/',
    '<rootDir>/src/test.ts'
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
    "^@env$": "<rootDir>/src/environments/environment.ts",
    "^@core/(.*)$": "<rootDir>/src/app/core/$1",
    "^@modules/(.*)$": "<rootDir>/src/app/modules/$1",
    "^@rest/(.*)$": "<rootDir>/src/app/rest/$1",
    "^@shared/(.*)$": "<rootDir>/src/app/shared/$1",
    "^@store/(.*)$": "<rootDir>/src/app/store/$1",
    "^@assets/(.*)$": "<rootDir>/src/assets/$1"
  }
};
