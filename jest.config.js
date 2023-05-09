const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
		'^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@api/(.*)$': '<rootDir>/src/api/$1',
    '^@ui/(.*)$': '<rootDir>/src/ui/$1',
    '^@lib/(.*)$': '<rootDir>/src/lib/$1',
    '^@types/(.*)$': '<rootDir>/src/types/$1',
    '^@states/(.*)$': '<rootDir>/src/states/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@modules/(.*)$': '<rootDir>/src/modules/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)