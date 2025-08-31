# freeCodeCamp - Daily Coding Challenges

The coding challenge of the day from freeCodeCamp.

This repository contains my personal solutions to the Daily Coding Challenges from the [freeCodeCamp "Daily Coding Challenge Archive"](https://www.freecodecamp.org/learn/daily-coding-challenge/archive).

The goal of this project is to consistently practice problem-solving, improve my JavaScript skills, and keep a log of my progress.

## Table of Contents

- [freeCodeCamp - Daily Coding Challenges](#freecodecamp---daily-coding-challenges)
  - [Table of Contents](#table-of-contents)
  - [File Structure](#file-structure)
  - [Tech Stack \& Tooling](#tech-stack--tooling)
    - [ESLint Configuration](#eslint-configuration)
    - [Husky Configuration](#husky-configuration)
  - [Running Challenges](#running-challenges)
  - [Contributing](#contributing)
  - [Disclaimer](#disclaimer)
  - [License](#license)

## File Structure

The challenges are organized by year, month, and day under the `src` directory for clarity and scalability:

```sh
freecodecamp-challenges/
├── src/
│   ├── 2025/
│   │   ├── 08/
│   │   │   ├── 2025-08-01--two-sum.js
│   │   │   ├── 2025-08-02--reverse-string.js
│   │   │   └── ...
│   │   ├── 09/
│   │   │   ├── 2025-09-01--palindrome-check.js
│   │   │   └── ...
│   │   └── ...
│   ├── 2026/
│   └── ...
├── tests/
│   ├── 2025/
│   │   ├── 08/
│   │   │   ├── 2025-08-01--two-sum.test.js
│   │   │   └── ...
│   └── ...
├── .eslintrc.js
├── .gitignore
├── .husky/
├── package.json
├── README.md
└── ...
```

**File Naming Convention:**

`src/YYYY/MM/YYYY-MM-DD--challenge-name.js`

Where:

- `YYYY`: The full year (e.g., 2025)
- `MM`: The two-digit month (e.g., 08 for August)
- `YYYY-MM-DD`: The full date of the challenge
- `challenge-name`: A descriptive, kebab-case name for the challenge

**Example:**
`2025/08/2025-08-31--reverse-a-string.js`

## Tech Stack & Tooling

This project uses modern JavaScript (ES6+) and is configured with the following tools to ensure code quality and consistency:

- **[ESLint](https://eslint.org/)**: A pluggable linter tool for identifying and reporting on patterns in JavaScript.
- **[Prettier](https://prettier.io/)**: An opinionated code formatter that enforces a consistent style.
- **[Husky](https://typicode.github.io/husky/)**: A tool that makes it easy to work with Git hooks.
- **[lint-staged](https://github.com/okonet/lint-staged)**: Runs linters on staged Git files, preventing bad code from being committed.

### ESLint Configuration

The `.eslintrc.js` file is configured for modern JavaScript and TypeScript, with rules to ensure clean, readable code.

### Husky Configuration

Husky is set up to run `npm run lint` and `npm run test` before each commit, preventing issues from entering the repository.

## Running Challenges

Each challenge is a standalone JavaScript file in `src/year/month/`. To run a specific challenge, use Node.js:

```bash
node src/2025/08/2025-08-01-two-sum.js
```

To run tests for a specific challenge:

```bash
npm test tests/2025/08/2025-08-01-two-sum.test.js
```

## Contributing

This is a personal project, but I welcome feedback and suggestions! If you'd like to contribute, please:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes with clear messages.
4. Push to your branch and open a pull request.

Please ensure your code adheres to the ESLint rules and passes all tests.

## Disclaimer

These are my personal solutions developed for learning purposes. They may not always represent the most optimal solution, but they reflect my understanding at the time of completion.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
