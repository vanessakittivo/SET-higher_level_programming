# 0x13. JavaScript - Objects, Scopes and Closures

This project introduces JavaScript objects, classes, inheritance, and methods.

## Tasks

### `0-rectangle.js`
Creates an empty `Rectangle` class.

### `1-rectangle.js`
Creates a `Rectangle` class with a constructor that initializes `width` and `height`.

### `2-rectangle.js`
Creates a `Rectangle` class that checks if `width` and `height` are positive integers.

### `3-rectangle.js`
Adds a `print()` method that prints the rectangle using `X`.

### `4-rectangle.js`
Adds:
- `print()`
- `rotate()`
- `double()`

### `5-square.js`
Creates a `Square` class that inherits from `Rectangle`.

### `6-square.js`
Adds a `charPrint(c)` method to the `Square` class.

## Requirements

- JavaScript
- Node.js
- Classes
- Inheritance
- `require` and `module.exports`

## Usage

Example:

```bash
node 2-rectangle.js

# Task 0: AI Pair Programming

## AI-Assisted Audit Prompt

```text
Analyze the addTask() method in this TaskQueue class as a senior JavaScript developer.

Focus specifically on scope and closures.

1. Explain the scope of the nested notify() function.
2. Identify exactly which variables notify() can access from its surrounding scopes.
3. Explain which variables notify() actually closes over and how the closure is created.
4. Check the use of priority and name carefully. Is name actually available inside notify()?
5. Identify any variables that should be block-scoped using let or const.
6. Explain whether there is any issue with this inside notify().
7. Do not rewrite the code yet.
```

## AI-Assisted Refactoring Prompt

```text
Analyze and refactor this TaskQueue class with a focus on the Single Responsibility Principle (SRP).

1. Identify all SRP violations in addTask().
2. Focus on task validation, task storage, queue state, logging,
   processing, and high-priority notification.
3. Explain why these responsibilities make addTask() harder to test.
4. Refactor addTask() so it is responsible only for adding a valid task.
5. Extract logging, scheduling/processing, and notification behavior.
6. Resolve the name scope/closure problem.
7. Use const or let where appropriate.
8. Keep the solution simple.
9. Explain why the refactoring improves maintainability.
```

## Verification Prompt

```text
Review my task_queue_clean.js as a senior JavaScript developer.

Verify:

1. addTask() only adds valid tasks.
2. Logging and scheduling are separated.
3. High-priority notification is separated.
4. The original name scope/closure problem is resolved.
5. Variables are appropriately block-scoped.
6. There are no remaining scope or closure issues.
7. Intended behavior is preserved.
8. The solution is not unnecessarily complex.

Explain WHY each issue matters.
```

## Reflection

LLMs are pattern-matching engines, so they can recognize common structural problems such as mixed responsibilities, scope mistakes, and unnecessary coupling. In this TaskQueue exercise, asking the AI to audit the `notify()` closure and identify the SRP violations helped me understand why `name` was not available in that scope and why logging and scheduling should not be mixed into `addTask()`, instead of simply copying a "fixed" version without understanding the changes.
