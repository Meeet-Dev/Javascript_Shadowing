// 🌐 Global Scope
let user = "Global User";

function example1() {
  // 👤 Function Scope - Shadowing the global 'user'
  let user = "Function User";
  console.log("example1:", user); // Function User
}

example1();
console.log("Global:", user); // Global User


// 🔄 Block Scope Shadowing (let and const)
let message = "Global Message";

{
  let message = "Block Scoped Message";
  console.log("Inside block:", message); // Block Scoped Message
}

console.log("Outside block:", message); // Global Message


// ⚠️ Shadowing with var (function scoped)
var topic = "JavaScript";

function example2() {
  var topic = "Shadowed JavaScript";
  console.log("Inside example2:", topic); // Shadowed JavaScript
}

example2();
console.log("Outside example2:", topic); // JavaScript


// 💥 Mixing var and let (example of accidental shadowing and hoisting behavior)
var language = "English";

{
  let language = "Spanish";
  console.log("Inside block with let:", language); // Spanish
}

console.log("Outside block with var:", language); // English


// ❗Shadowing also works with const
const framework = "React";

function frameworkInfo() {
  const framework = "Vue";
  console.log("Inside function:", framework); // Vue
}

frameworkInfo();
console.log("Global framework:", framework); // React
