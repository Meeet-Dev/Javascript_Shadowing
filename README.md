# 🕶️ Shadowing in JavaScript

## 📘 What is Shadowing?

**Shadowing** occurs when a variable declared within a certain scope (e.g., block, function) has the same name as a variable in an outer scope. The inner variable **"shadows"** the outer one, meaning the inner declaration takes precedence within its scope.

---

## 🧠 How Shadowing Works

- **Function Scope:**  
  A variable declared within a function with the same name as a global variable will shadow the global one within that function.

- **Block Scope:**  
  Using `let` or `const`, variables can shadow outer scope variables inside `{}` blocks.

- **`var` Shadowing:**  
  `var` is function-scoped, so it behaves differently in block contexts and can lead to unexpected behavior.

- **Hoisting Impact:**  
  Shadowing can lead to confusion, especially when using `var`, due to hoisting behavior.

- **`let` & `const`:**  
  These are block-scoped and provide more predictable shadowing behavior.

---

## 📌 Key Points

- Shadowing does **not** affect the outer variable.
- Shadowed variables exist **only within the local/function/block scope**.
- You can shadow variables with `let`, `const`, or `var`, but their scoping rules affect how the shadowing behaves.
- Shadowing is legal and often used intentionally to create **localized** versions of variables.

---

## ✅ Best Practices

- Avoid using the same variable names in nested scopes unless necessary.
- Prefer `let` and `const` over `var` to prevent accidental shadowing and hoisting issues.
- Use descriptive names for variables to reduce chances of shadowing conflicts.
