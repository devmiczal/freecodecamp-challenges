# LLM Instructions for freeCodeCamp Daily Coding Challenges

This document provides guidelines for AI assistants working with this project.

## Project Context

This is a personal learning repository containing daily coding challenge solutions from freeCodeCamp. The maintainer is a Full-Stack Web Developer using modern JavaScript (ES6+) and follows specific coding practices.

## Code Standards & Preferences

### JavaScript Style

- Use modern ES6+ syntax (arrow functions, destructuring, template literals, etc.)
- Prefer `const` and `let` over `var`
- Use meaningful variable names in camelCase
- Include JSDoc comments for complex functions
- Write clean, readable code with proper indentation

### File Organization

- Follow the strict naming convention: `YYYY-MM-DD--challenge-name.js`
- Place solutions in `src/YYYY/MM/` directories
- Create corresponding test files in `tests/YYYY/MM/`
- Each file should be self-contained with its own solution

### Code Structure Template

```javascript
/**
 * Challenge: [Challenge Title]
 * Date: YYYY-MM-DD
 * Source: [freeCodeCamp URL if available]
 * Difficulty: [Easy/Medium/Hard]
 * 
 * Description:
 * [Brief description of the problem]
 * 
 * @param {type} param - Parameter description
 * @return {type} Return value description
 */

// Solution implementation here
function solutionFunction(param) {
  // Implementation
}

// Test cases or examples
console.log(solutionFunction(testInput)); // Expected output

// Export for testing (if needed)
export { solutionFunction };
```

## When Helping with Solutions

### Problem Analysis

1. Clearly explain the problem requirements
2. Identify input/output specifications
3. Consider edge cases and constraints
4. Discuss time/space complexity when relevant

### Solution Approach

1. Start with a brute force approach if needed
2. Optimize step by step
3. Explain the reasoning behind each optimization
4. Provide multiple solutions when beneficial

### Code Quality

- Write clean, commented code
- Use descriptive variable names
- Include error handling where appropriate
- Follow the project's ESLint rules
- Ensure code passes formatting checks

## Testing Considerations

### Test Cases to Include

- Happy path scenarios
- Edge cases (empty inputs, null, undefined)
- Boundary conditions
- Invalid inputs
- Performance with large datasets

### Test File Structure

```javascript
// tests/YYYY/MM/YYYY-MM-DD--challenge-name.test.js
import { solutionFunction } from '../../../src/YYYY/MM/YYYY-MM-DD--challenge-name.js';

describe('Challenge Name', () => {
  test('should handle basic case', () => {
    expect(solutionFunction(input)).toBe(expectedOutput);
  });
  
  test('should handle edge case', () => {
    expect(solutionFunction(edgeCase)).toBe(expectedResult);
  });
});
```

## Environment Setup Context

- Node.js version 22+ (maintainer uses v24)
- Modern ESLint configuration with Prettier integration
- Husky for pre-commit hooks
- lint-staged for automated code quality checks
- Arch Linux development environment

## Common Patterns in This Project

### Algorithm Categories

- Array manipulation and searching
- String processing
- Mathematical computations
- Data structure implementations
- Recursion and dynamic programming
- Tree and graph algorithms

### Performance Considerations

- Always consider Big O notation
- Optimize for readability first, performance second
- Comment on trade-offs between time and space complexity
- Provide benchmarking suggestions for performance-critical solutions

## File Generation Guidelines

When creating new challenge files:

1. **Check the date format**: Ensure YYYY-MM-DD matches the actual date
2. **Create directory structure**: Make sure `src/YYYY/MM/` exists
3. **Follow naming convention**: Use kebab-case for challenge names
4. **Include proper headers**: Add JSDoc with challenge details
5. **Create test file**: Always provide corresponding test file
6. **Test the solution**: Verify code works before committing

## Anti-Patterns to Avoid

- Don't use deprecated JavaScript features
- Avoid overly complex one-liners that sacrifice readability
- Don't skip error handling in production-ready code
- Avoid hardcoded values without explanation
- Don't ignore the project's linting rules

## Communication Style

When explaining solutions:

- Start with problem understanding
- Break down complex algorithms step by step
- Use examples to illustrate concepts
- Explain why certain approaches are chosen
- Mention alternative solutions when relevant
- Keep explanations clear and educational
