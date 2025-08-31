# GitHub Copilot / AI agent instructions for this repository

This file gives focused, actionable guidance for AI coding agents working in the freeCodeCamp Daily Coding Challenges repo.

Principles
- Keep changes minimal and follow the project's naming conventions: source files live in `src/YYYY/MM/` and are named `YYYY-MM-DD--challenge-name.js`. Tests co-locate as `*.test.js` beside the source.
- Use modern ES2024+ JavaScript (arrow functions, const/let, export syntax) and include a short JSDoc header for each challenge file.
- Preserve README and `.ai/llm_instructions.md` guidance when suggesting project-wide changes.

What this repo contains (big picture)
- A collection of standalone daily JS challenge solutions organized by date under `src/`.
- Each solution should be runnable with Node.js and exported for Jest tests.
- Project-level tooling: ESLint (flat config `eslint.config.mjs`), Prettier, Husky, lint-staged, and Jest for tests.

Key files to inspect when working
- `README.md` — project conventions, commands, and examples.
- `.ai/llm_instructions.md` — detailed AI-specific conventions and coding preferences to follow.
- Example solution and test: `src/2025/08/2025-08-31--hex-generator.js` and its test `2025-08-31--hex-generator.test.js`.

Concrete conventions to follow (examples)
- File structure: when adding a new challenge for 2025-09-01 called "reverse-string":
  - Create `src/2025/09/2025-09-01--reverse-string.js`
  - Create `src/2025/09/2025-09-01--reverse-string.test.js`
- Exports: export named functions. Example: `export { solutionFunction }`.
- Tests: use Jest `describe`/`test` structure and import the named export from the sibling file.

Developer workflows & commands (as found in project docs)
- Run a single challenge with Node: `node src/YYYY/MM/FILE.js`.
- Run tests: `npm test` or `npm test <path-to-test-file>`.
- Lint: `npx eslint .` and fix with `npx eslint . --fix`.
- Format: `npx prettier --write .`

Project-specific patterns and gotchas
- Date-based filenames are authoritative. Don't rename existing files to a different date.
- Co-located tests are relied upon by repository conventions — always create a `.test.js` for new solutions.
- Keep changes small and focused per PR — one challenge per change is preferred.

Integration points & external dependencies
- Node.js 22+ (maintainer uses v24). Keep syntax compatible with Node 22+.
- Jest is used for testing (configured in `package.json`). Avoid adding new heavy dependencies without maintainer approval.

When editing or creating code
- Use the project's ESLint + Prettier style (see `eslint.config.mjs` and `.prettierrc` in repo root).
- Add JSDoc header including date, difficulty (if known), and complexity comments for non-trivial solutions.
- Add minimal unit tests: happy path + 1-2 edge cases.

What not to do
- Do not change package-level configs (ESLint, Prettier, Husky) unless the change is small and justified.
- Do not introduce global scripts or move files out of `src/` without user approval.

If you need clarification, ask the maintainer these specific questions
- Should I target Node 24-only features or remain compatible with Node 22?
- Do you want every solution to include complexity (time/space) annotations?

Quick checklist for PRs created by an AI agent
- [ ] File(s) placed under `src/YYYY/MM/` with correct filename
- [ ] Named exports used and imported by tests
- [ ] Tests added and passing locally (run `npm test`)
- [ ] ESLint and Prettier checks pass (run `npx eslint . --fix` and `npx prettier --check .`)

Please review and tell me which parts you want shortened, expanded, or converted into stricter rules.

---

Additional, requested items

- Templates (copy into new challenge files):

  - Source file template (`src/YYYY/MM/YYYY-MM-DD--challenge-name.js`):

    ```javascript
    /**
     * Challenge: [Title]
     * Date: YYYY-MM-DD
     * Source: [optional URL]
     * Difficulty: [Easy/Medium/Hard]
     *
     * Description: short description
     *
     * @param {type} input - description
     * @returns {type}
     */

    // Minimal, named export
    const solutionFunction = (input) => {
      // ...implementation
    };

    // Quick local runner (optional) -------------------------------------------------
    // if you need to run manually: node src/YYYY/MM/YYYY-MM-DD--challenge-name.js
    // console.log(solutionFunction(exampleInput));

    export { solutionFunction };
    ```

  - Test file template (`src/YYYY/MM/YYYY-MM-DD--challenge-name.test.js`):

    ```javascript
    import { solutionFunction } from './YYYY-MM-DD--challenge-name.js';

    describe('YYYY-MM-DD - Challenge Name', () => {
      test('basic case', () => {
        expect(solutionFunction(basicInput)).toEqual(expectedOutput);
      });

      test('edge case: empty input', () => {
        expect(solutionFunction(null)).toEqual(edgeExpected);
      });
    });
    ```

- Node.js version policy

  - Default compatibility target: Node 22+. Prefer writing code that runs on Node 22 and 24 unless the maintainer explicitly approves Node-24-only features.
  - If you intentionally use Node-24-only syntax or features, mention it in the file JSDoc header and add a short rationale in the PR description.

- Debugging examples (useful snippets)

  - Run a single challenge file with Node (works for local runner in source file):

    ```bash
    node src/2025/08/2025-08-31--hex-generator.js
    ```

  - Run Node with inspector (attach debugger):

    ```bash
    node --inspect-brk src/2025/08/2025-08-31--hex-generator.js
    ```

  - Run a single Jest test file (npm script):

    ```bash
    npm test -- src/2025/08/2025-08-31--hex-generator.test.js
    ```

  - Run Jest in watch mode for a file (fast iteration):

    ```bash
    npx jest --watch src/2025/08/2025-08-31--hex-generator.test.js
    ```

Notes
- Keep PRs small: one challenge per PR remains the convention.
- When adding Node-24 features or changing tooling, call out the change explicitly in PR description and wait for maintainer approval.

---

If you want, I can also add these templates as actual example files in `src/2025/09/` (one source + one test) so contributors can copy them. Reply which option you prefer.
