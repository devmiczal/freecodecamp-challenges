# freeCodeCamp - Daily Coding Challenges

The coding challenge of the day from freeCodeCamp.

This repository contains my personal solutions to the Daily Coding Challenges from the [freeCodeCamp "Daily Coding Challenge Archive"](https://www.freecodecamp.org/learn/daily-coding-challenge/archive).

The goal of this project is to consistently practice problem-solving, improve my JavaScript skills, project setup, and testing LLMs (commands, docJS, test jest, etc.).

## Table of Contents

- [freeCodeCamp - Daily Coding Challenges](#freecodecamp---daily-coding-challenges)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Setting Up Your Own Repository](#setting-up-your-own-repository)
    - [Step 1: Clone the Repository](#step-1-clone-the-repository)
    - [Step 2: Remove the Original Git History](#step-2-remove-the-original-git-history)
    - [Step 3: Initialize a New Git Repository](#step-3-initialize-a-new-git-repository)
    - [Step 4: Add to Your GitHub](#step-4-add-to-your-github)
    - [Additional Notes](#additional-notes)
  - [File Structure 📁](#file-structure-)
  - [Tech Stack \& Tooling](#tech-stack--tooling)
    - [Requirements](#requirements)
    - [ESLint Configuration](#eslint-configuration)
    - [Prettier Configuration](#prettier-configuration)
    - [Husky Configuration](#husky-configuration)
      - [Husky - problems](#husky---problems)
  - [Development Workflow](#development-workflow)
  - [Running Challenges](#running-challenges)
  - [Testing](#testing)
  - [Code Quality](#code-quality)
  - [Project Guidelines](#project-guidelines)
    - [Code Style](#code-style)
    - [Solution Structure](#solution-structure)
    - [Algorithm Categories Covered](#algorithm-categories-covered)
  - [AI Assistant Instructions](#ai-assistant-instructions)
  - [Contributing](#contributing)
  - [Disclaimer](#disclaimer)
  - [License](#license)

## Project Overview

This repository serves as:

- **Learning Platform**: Daily practice with algorithmic problems
- **Progress Tracker**: Organized solutions showing skill development over time
- **Code Quality Showcase**: Modern JavaScript with professional tooling setup
- **Reference Material**: Documented solutions for future review

**Key Features:**

- Modern ES6+ JavaScript implementation
- Comprehensive testing setup
- Automated code quality checks
- Organized file structure for scalability
- Professional development workflow

## Setting Up Your Own Repository

If you want to create your own copy of this repository to add your solutions to the daily challenges, follow these steps. This will allow you to manage your changes independently without affecting the original repository.

### Step 1: Clone the Repository

Download a copy of the repository to your computer:

```bash
# You can change the name of the repository folder (`freecodecamp-challenges`).
git clone git@github.com:devmiczal/freecodecamp-challenges.git freecodecamp-challenges
# Or
git clone https://github.com/devmiczal/freecodecamp-challenges.git freecodecamp-challenges

cd freecodecamp-challenges
```

### Step 2: Remove the Original Git History

To start with a clean history, remove the `.git` folder:

```bash
rm -rf .git
```

### Step 3: Initialize a New Git Repository

Create a new local repository:

```bash
git init
git add .
git commit -m "Initial commit: Fork of freeCodeCamp Daily Coding Challenges"
```

### Step 4: Add to Your GitHub

1. Go to [GitHub.com](https://github.com) and create a new repository (e.g., "my-freecodecamp-challenges").
2. Copy the URL of your new repository (e.g., `https://github.com/your-username/my-freecodecamp-challenges.git`).
3. Add the remote repository and push the changes:

```bash
git remote add origin https://github.com/your-username/my-freecodecamp-challenges.git
# main or master
git branch -M main
git push -u origin main
```

### Additional Notes

- Make sure you have Git installed and a GitHub account.
- After completing these steps, you can add your solutions, run tests, and commit changes just like in the original repository.
- If you encounter issues, check the GitHub documentation or seek help from the community.

## File Structure 📁

The challenges are organized by year, month, and day under the `src` directory for clarity and scalability:

```sh
freecodecamp-challenges/
├── .lintstagedrc.json
├── .nvmrc
├── .prettierignore
├── .prettierrc.json
├── eslint.config.mjs
├── LICENSE
├── package.json
├── package-lock.json
├── README.md
├── .ai/
│   └── llm_instructions.md
├── .github/
│   └── copilot-instructions.md
├── .husky/
│   ├── pre-commit
│   └── _/
├── .vscode/
│   └── settings.json
├── docs/
│   └── history-commands.md
└── src/
    └── 2025/
        └── 08/
            ├── 2025-08-31--hex-generator.js
            └── 2025-08-31--hex-generator.test.js
```

**File Naming Convention:**

- **Source File**: `src/YYYY/MM/YYYY-MM-DD--challenge-name.js`
- **Test File**: `src/YYYY/MM/YYYY-MM-DD--challenge-name.test.js`

Where:

- `YYYY`: The full year (e.g., 2025)
- `MM`: The two-digit month (e.g., 08 for August)
- `YYYY-MM-DD`: The full date of the challenge
- `challenge-name`: A descriptive, kebab-case name for the challenge

**Example:**
`src/2025/08/2025-08-31--reverse-a-string.js`
`src/2025/08/2025-08-31--reverse-a-string.test.js`

## Tech Stack & Tooling

This project uses modern JavaScript (ES6+) and is configured with the following tools to ensure code quality and consistency:

- **[Node.js](https://nodejs.org/)**: JavaScript runtime (v22+)
- **[ESLint](https://eslint.org/)**: Pluggable linter for identifying and reporting patterns
- **[Prettier](https://prettier.io/)**: Opinionated code formatter for consistent style
- **[Husky](https://typicode.github.io/husky/)**: Git hooks management
- **[lint-staged](https://github.com/okonet/lint-staged)**: Pre-commit linting for staged files
- **[Jest](https://jestjs.io/)**: Testing framework

### Requirements

- **Node.js**
  - Version 22 or later
  - My setup is 24
- **npm**: Version 11 or later
- **Git**: For version control and hooks

### ESLint Configuration

Modern flat config setup (`eslint.config.mjs`) with:

- ES6+ syntax support
- Node.js and browser globals
- Prettier integration
- Custom rules for code quality

```bash
# Run ESLint
npx eslint .

# Fix auto-fixable issues
npx eslint . --fix
```

### Prettier Configuration

Consistent code formatting with `.prettierrc.json`:

- 2-space indentation
- Single quotes
- Semicolons
- 110 character line width
- Others

```bash
# Format code
npx prettier --write .

# Check formatting
npx prettier --check .
```

### Husky Configuration

Pre-commit hooks ensure code quality:

- Runs ESLint on staged files
- Applies Prettier formatting
- Prevents bad code from entering repository

#### Husky - problems

<https://typicode.github.io/husky/getting-started.html>

```bash
# Fix executable permissions
chmod ug+x .husky/* && chmod ug+x .git/hooks/*

# Initialize Husky
npx husky init && npm install

# Alternative if issues persist
npx husky && npm install
```

## Development Workflow

1. **Create new challenge file**: Follow naming convention (e.g., `YYYY-MM-DD--challenge.js`).
2. **Implement solution**: Use modern JavaScript with proper documentation.
3. **Write tests**: Create a corresponding `*.test.js` file in the same directory.
4. **Run quality checks**: ESLint and Prettier automatically run on commit.
5. **Commit changes**: Husky ensures code quality before commit.

## Running Challenges

Each challenge is a standalone JavaScript file. Run with Node.js:

```bash
# Run specific challenge
node src/2025/08/2025-08-01--two-sum.js

# Run with debugging
node --inspect src/2025/08/2025-08-01--two-sum.js
```

## Testing

Test files are located next to the source files they are testing.

```bash
# Run a specific test file
npm test src/2025/08/2025-08-01--two-sum.test.js

# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

**Test File Template:**

```js
// src/YYYY/MM/YYYY-MM-DD--challenge-name.test.js
import { solutionFunction } from './YYYY-MM-DD--challenge-name.js';

describe('Challenge Name', () => {
  test('should solve a basic case', () => {
    expect(solutionFunction(input)).toBe(expectedOutput);
  });
});
```

## Code Quality

**Automated Checks:**

- **Pre-commit**: lint-staged runs ESLint + Prettier
- **CI/CD Ready**: Configuration supports GitHub Actions
- **Type Safety**: JSDoc comments for better documentation

**Manual Commands:**

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

## Project Guidelines

### Code Style

- Use modern ES6+ features (arrow functions, destructuring, template literals)
- Prefer `const` and `let` over `var`
- Write self-documenting code with meaningful variable names
- Include JSDoc for complex functions
- Handle edge cases and errors appropriately

### Solution Structure

```js
/**
 * Challenge: [Title]
 * Date: YYYY-MM-DD
 * Difficulty: [Easy/Medium/Hard]
 * Time Complexity: O(?)
 * Space Complexity: O(?)
 */

const solutionFunction = (input) => {
  // Implementation with comments
};

// Test examples
console.log(solutionFunction(testCase)); // Expected: result

export { solutionFunction };
```

### Algorithm Categories Covered

- Array manipulation and searching
- String processing and pattern matching
- Mathematical computations
- Data structure implementations
- Recursion and dynamic programming
- Sorting and searching algorithms
- Tree and graph traversal

## AI Assistant Instructions

For AI assistants helping with this project, see [llm_instructions.md](.ai/llm_instructions.md) for:

- Code standards and preferences
- Solution approach guidelines
- Testing requirements
- File structure conventions
- Communication style preferences

## Contributing

This is a personal learning project, but feedback and suggestions are welcome:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/improvement`)
3. **Follow** the established code style and naming conventions
4. **Test** your changes thoroughly
5. **Commit** with clear, descriptive messages
6. **Submit** a pull request

**Contribution Guidelines:**

- Ensure code passes all ESLint rules
- Include tests for new functionality
- Follow the established file naming convention
- Add JSDoc documentation for complex functions

## Disclaimer

These are personal solutions developed for learning purposes. They may not always represent the most optimal approach, but reflect my understanding and problem-solving approach at the time of implementation.

The solutions prioritize:

1. **Correctness**: Solving the problem as specified
2. **Readability**: Clear, maintainable code
3. **Learning**: Demonstrating understanding of concepts
4. **Performance**: Optimized where beneficial

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Happy Coding! 🚀**  

*"The only way to learn a new programming language is by writing programs in it."* - Dennis Ritchie
