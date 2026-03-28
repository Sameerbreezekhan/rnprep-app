export const JavaScriptQuestions = [
  {
    id: 1,
    tag: 'JavaScript',
    question: "What is JavaScript?",
    answer: `
        <p>
      JavaScript is a high-level, interpreted programming language used to make web pages interactive and dynamic.
    </p>

    <p>
      It is one of the core technologies of the web along with HTML and CSS.
    </p>

    <h4>Key Features:</h4>
    <ul>
      <li>Lightweight and fast</li>
      <li>Runs in the browser and on servers (Node.js)</li>
      <li>Supports object-oriented and functional programming</li>
      <li>Used for web and mobile app development (React Native)</li>
    </ul>

    <p>
      <b>In simple words:</b> JavaScript adds behavior and logic to websites and applications.
    </p>
    `
  },
  {
    id: 2,
    tag: 'JavaScript',
    question: "What are different data types in JavaScript?",
    answer: `
      <h2>1. Primitive Data Types</h2>
      <ul>
        <li>Store single value</li>
        <li>Immutable</li>
        <li>Stored by value</li>
        <li>Examples: String, Number, Boolean, Null, Undefined, Symbol, BigInt</li>
      </ul>

      <h2>2. Non-Primitive (Reference) Data Types</h2>
      <ul>
        <li>Store collection of values</li>
        <li>Mutable</li>
        <li>Stored by reference</li>
        <li>Example: Object (Array, Function, Date)</li>
      </ul>

      <p><b>Note:</b> Primitive values are copied, while reference types share memory location.</p>
    `
  },
  {
    id: 3,
    tag: 'JavaScript',
    question: "Hoisting in JavaScript?",
    answer: `
    <p>
      <strong>Hoisting</strong> is a JavaScript behavior where variable and function 
      declarations are moved to the top of their scope before execution.
    </p>

    <hr/>

    <h2>Example with Variable (var)</h2>

    <pre>
<code>
console.log(a);  // undefined
var a = 10;
</code>
    </pre>

    <p>
      The variable <strong>a</strong> is hoisted, but only its declaration — 
      not the value. That’s why it prints <strong>undefined</strong>.
    </p>

    <hr/>

    <h2>Function Declaration</h2>

    <pre>
<code>
fun();  

function fun() {
  console.log("Hello");
}
</code>
    </pre>

    <p>
      Function declarations are completely hoisted.  
      So we can call the function before defining it.
    </p>

    <hr/>

    <h2>Function Expression</h2>

    <pre>
<code>
fun();  

const fun = function() {
  console.log("Hello");
};
</code>
    </pre>

    <p>
      Function expressions are NOT hoisted like function declarations.  
      This will throw an error.
    </p>
  `
  },

  {
    id: 4,
    tag: 'JavaScript',
    question: "Primitive vs Non-Primitive Data Types?",
    answer: `
    <p>
      In JavaScript, data types are divided into 
      <strong>Primitive</strong> and <strong>Non-Primitive</strong> types.
    </p>

    <hr/>

    <h2>Primitive Data Types</h2>

    <p>
      Primitive data types store a single value and are immutable 
      (their value cannot be changed directly).
    </p>

    <pre>
<code>
// Examples of Primitive Types
let name = "sameer";     // String
let age = 25;           // Number
let isActive = true;    // Boolean
let x;                  // Undefined
let y = null;           // Null
</code>
    </pre>

    <p>
      Primitive values are stored directly in memory.
      When we copy them, the actual value is copied.
    </p>

    <hr/>

    <h2>Non-Primitive Data Types</h2>

    <p>
      Non-Primitive data types can store multiple values 
      and are mutable (their content can be changed).
    </p>

    <pre>
<code>
// Examples of Non-Primitive Types
let person = {
  name: "sameer",
  age: 25
};  // Object

let skills = ["JS", "React"];  // Array

function greet() {
  console.log("Hello");
}  // Function
</code>
    </pre>

    <p>
      Non-Primitive values are stored by reference.
      When copied, only the reference (address) is copied — 
      not the actual data.
    </p>

    <hr/>

    <h2>Key Differences</h2>

    <pre>
<code>
Primitive:
- Stores single value
- Immutable
- Copied by value

Non-Primitive:
- Stores multiple values
- Mutable
- Copied by reference
</code>
    </pre>

    <p>
      👉 In simple words:  
      Primitive = Simple value  
      Non-Primitive = Collection or structure
    </p>
  `
  },
  {
    id: 5,
    tag: 'JavaScript',
    question: "Difference between == and ===?",
    answer: `
    <p>
      In JavaScript, both <strong>==</strong> and <strong>===</strong> are comparison operators,
      but they work differently.
    </p>

    <hr/>

    <h2>== (Loose Equality)</h2>

    <p>
      The <strong>==</strong> operator compares only the values.
      If the data types are different, JavaScript automatically converts
      one value to match the other. This is called type coercion.
    </p>

    <pre>
<code>
console.log(5 == "5");          // true
console.log(true == 1);         // true
console.log(null == undefined); // true
</code>
    </pre>

    <p>
      Because of automatic type conversion, it may sometimes give unexpected results.
    </p>

    <hr/>

    <h2>=== (Strict Equality)</h2>

    <p>
      The <strong>===</strong> operator compares both value and data type.
      It does not perform type conversion.
    </p>

    <pre>
<code>
console.log(5 === "5");   // false
console.log(true === 1);  // false
console.log(10 === 10);   // true
</code>
    </pre>

    <p>
      This makes <strong>===</strong> more predictable and safer to use.
    </p>

    <hr/>

    <h2>Key Differences</h2>

    <pre>
<code>
==  → Compares value only (type conversion happens)
=== → Compares value + type (no type conversion)
</code>
    </pre>

    <p>
      Best practice: Always prefer <strong>===</strong> in modern JavaScript.
    </p>
  `
  },
  {
    id: 6,
    tag: 'JavaScript',
    question: "What is Type Coercion?",
    answer: `
    <p>
      <strong>Type Coercion</strong> is the automatic or manual conversion 
      of one data type into another in JavaScript.
    </p>

    <hr/>

    <h2>Implicit Type Coercion (Automatic)</h2>

    <p>
      JavaScript automatically converts data types when performing 
      operations between different types.
    </p>

    <pre>
<code>
console.log(5 + "5");   // "55" (number converted to string)
console.log("10" - 2);  // 8    (string converted to number)
console.log(true + 1);  // 2    (true becomes 1)
</code>
    </pre>

    <p>
      This happens automatically behind the scenes.
    </p>

    <hr/>

    <h2>Explicit Type Coercion (Manual)</h2>

    <p>
      When we manually convert one data type into another, 
      it is called explicit type coercion.
    </p>

    <pre>
<code>
Number("10");     // 10
String(25);       // "25"
Boolean(1);       // true
</code>
    </pre>

    <p>
      Here, we are clearly telling JavaScript to convert the type.
    </p>

    <hr/>

    <h2>Why It Matters</h2>

    <pre>
<code>
console.log(5 == "5");   // true  (due to type coercion)
console.log(5 === "5");  // false (no type coercion)
</code>
    </pre>

    <p>
      Type coercion can sometimes cause unexpected results, 
      so it is important to understand how JavaScript handles types.
    </p>
  `
  },
  {
    id: 7,
    tag: 'JavaScript',
    question: "What is an Arrow Function?",
    answer: `
    <p>
      An <strong>Arrow Function</strong> is a shorter and modern way 
      to write functions in JavaScript. It was introduced in ES6.
    </p>

    <hr/>

    <h2>Normal Function</h2>

    <pre>
<code>
function add(a, b) {
  return a + b;
}
</code>
    </pre>

    <hr/>

    <h2>Arrow Function</h2>

    <pre>
<code>
const add = (a, b) => {
  return a + b;
};
</code>
    </pre>

    <p>
      Arrow functions provide a cleaner and shorter syntax.
    </p>

    <hr/>

    <h2>Shorter Syntax (Implicit Return)</h2>

    <pre>
<code>
const add = (a, b) => a + b;
</code>
    </pre>

    <p>
      If there is only one expression, you can remove 
      curly braces and the return keyword.
    </p>

    <hr/>

    <h2>Important Difference (this keyword)</h2>

    <p>
      Arrow functions do not have their own <strong>this</strong>.
      They inherit <strong>this</strong> from their surrounding scope.
    </p>

    <pre>
<code>
const person = {
  name: "sameer",
  greet: () => {
    console.log(this.name);
  }
};
</code>
    </pre>

    <p>
      Because arrow functions do not bind their own <strong>this</strong>,
      they are not suitable for object methods when you need access to the object.
    </p>

    <hr/>

    <h2>When to Use</h2>

    <pre>
<code>
// Best for:
- Callback functions
- Short functions
- Functional programming style
</code>
    </pre>
  `
  },
  {
  id: 8,
  tag: 'JavaScript',
  question: "Difference between Arrow Function and Normal Function?",
  answer: `
    <p>
      Both arrow functions and normal functions are used to define functions
      in JavaScript, but they behave differently in some important ways.
    </p>

    <hr/>

    <h2>1. Syntax</h2>

    <p><strong>Normal Function:</strong></p>

    <pre>
<code>
function add(a, b) {
  return a + b;
}
</code>
    </pre>

    <p><strong>Arrow Function:</strong></p>

    <pre>
<code>
const add = (a, b) => a + b;
</code>
    </pre>

    <p>
      Arrow functions provide shorter and cleaner syntax.
    </p>

    <hr/>

    <h2>2. this Keyword</h2>

    <p>
      Normal functions have their own <strong>this</strong> depending on how they are called.
      Arrow functions do not have their own <strong>this</strong> — they inherit it
      from the surrounding scope.
    </p>

    <pre>
<code>
const person = {
  name: "sameer",
  greet: function() {
    console.log(this.name); // Works
  }
};
</code>
    </pre>

    <pre>
<code>
const person = {
  name: "sameer",
  greet: () => {
    console.log(this.name); // Undefined
  }
};
</code>
    </pre>

    <hr/>

    <h2>3. Hoisting</h2>

    <p>
      Normal function declarations are hoisted.
      Arrow functions are not hoisted (because they are usually assigned to variables).
    </p>

    <pre>
<code>
hello(); // Works

function hello() {
  console.log("Hi");
}
</code>
    </pre>

    <pre>
<code>
hello(); // Error

const hello = () => {
  console.log("Hi");
};
</code>
    </pre>

    <hr/>

    <h2>4. Arguments Object</h2>

    <p>
      Normal functions have an <strong>arguments</strong> object.
      Arrow functions do not have their own arguments object.
    </p>

    <pre>
<code>
function test() {
  console.log(arguments);
}
</code>
    </pre>

    <hr/>

    <h2>Key Differences</h2>

    <pre>
<code>
Normal Function:
- Has its own this
- Has arguments object
- Is hoisted (if declared normally)

Arrow Function:
- No own this (inherits from parent)
- No arguments object
- Not hoisted
- Shorter syntax
</code>
    </pre>
  `
},
{
  id: 9,
  tag: 'JavaScript',
  question: "What is a Callback Function?",
  answer: `
    <p>
      A <strong>callback function</strong> is a function that is passed 
      as an argument to another function and is executed later.
    </p>

    <hr/>

    <h2>Basic Example</h2>

    <pre>
<code>
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("sameer", sayBye);
</code>
    </pre>

    <p>
      In this example, <strong>sayBye</strong> is the callback function.
      It is passed to <strong>greet</strong> and executed inside it.
    </p>

    <hr/>

    <h2>Why Callbacks Are Used</h2>

    <p>
      Callbacks are mainly used for asynchronous operations like:
    </p>

    <pre>
<code>
// Examples
- API calls
- Timers
- Event handling
</code>
    </pre>

    <hr/>

    <h2>Asynchronous Example</h2>

    <pre>
<code>
setTimeout(function() {
  console.log("Executed after 2 seconds");
}, 2000);
</code>
    </pre>

    <p>
      Here, the function passed to <strong>setTimeout</strong> 
      is a callback that runs after 2 seconds.
    </p>

    <hr/>

    <h2>Key Points</h2>

    <pre>
<code>
- A callback is a function passed as an argument
- It is executed after some operation is completed
- Common in asynchronous programming
</code>
    </pre>
  `
},
{
  id: 10,
  tag: 'JavaScript',
  question: "What is IIFE?",
  answer: `
    <p>
      <strong>IIFE</strong> stands for 
      <strong>Immediately Invoked Function Expression</strong>.
      It is a function that runs immediately after it is defined.
    </p>

    <hr/>

    <h2>Basic Syntax</h2>

    <pre>
<code>
(function() {
  console.log("I run immediately!");
})();
</code>
    </pre>

    <p>
      The function is wrapped inside parentheses and 
      executed right away using <strong>()</strong>.
    </p>

    <hr/>

    <h2>With Parameters</h2>

    <pre>
<code>
(function(name) {
  console.log("Hello " + name);
})("sameer");
</code>
    </pre>

    <p>
      You can also pass arguments to an IIFE.
    </p>

    <hr/>

    <h2>Why Use IIFE?</h2>

    <pre>
<code>
- To avoid polluting the global scope
- To create a private scope
- To execute code immediately
</code>
    </pre>

    <hr/>

    <h2>Example with Private Variable</h2>

    <pre>
<code>
(function() {
  let count = 0;
  console.log(count);
})();
</code>
    </pre>

    <p>
      The variable <strong>count</strong> is not accessible outside 
      the IIFE, which helps protect data.
    </p>
  `
},
{
  id: 11,
  tag: 'JavaScript',
  question: "Function Declaration vs Function Expression?",
  answer: `
    <p>
      In JavaScript, functions can be defined in two main ways:
      <strong>Function Declaration</strong> and 
      <strong>Function Expression</strong>.
    </p>

    <hr/>

    <h2>Function Declaration</h2>

    <p>
      A function declaration defines a named function using the 
      <strong>function</strong> keyword.
    </p>

    <pre>
<code>
function greet() {
  console.log("Hello");
}

greet(); // Works
</code>
    </pre>

    <p>
      Function declarations are <strong>hoisted</strong>, 
      which means they can be called before they are defined.
    </p>

    <hr/>

    <h2>Function Expression</h2>

    <p>
      A function expression defines a function and assigns it 
      to a variable.
    </p>

    <pre>
<code>
const greet = function() {
  console.log("Hello");
};

greet(); // Works
</code>
    </pre>

    <p>
      Function expressions are <strong>not hoisted</strong>. 
      You cannot call them before they are defined.
    </p>

    <pre>
<code>
greet(); // Error

const greet = function() {
  console.log("Hello");
};
</code>
    </pre>

    <hr/>

    <h2>Key Differences</h2>

    <pre>
<code>
Function Declaration:
- Has a name
- Hoisted
- Can be called before definition

Function Expression:
- Stored in a variable
- Not hoisted
- Called only after definition
</code>
    </pre>
  `
},
{
  id: 12,
  tag: 'JavaScript',
  question: "What is 'this' keyword?",
  answer: `
    <p>
      The <strong>this</strong> keyword in JavaScript refers to the 
      object that is currently executing the function.
      Its value depends on how the function is called.
    </p>

    <hr/>

    <h2>1. Global Context</h2>

    <pre>
<code>
console.log(this);
</code>
    </pre>

    <p>
      In the global scope (browser), <strong>this</strong> refers to 
      the global object (window).
    </p>

    <hr/>

    <h2>2. Inside an Object Method</h2>

    <pre>
<code>
const person = {
  name: "sameer",
  greet: function() {
    console.log(this.name);
  }
};

person.greet(); // sameer
</code>
    </pre>

    <p>
      Here, <strong>this</strong> refers to the object that calls the method.
    </p>

    <hr/>

    <h2>3. Inside a Regular Function</h2>

    <pre>
<code>
function show() {
  console.log(this);
}

show();
</code>
    </pre>

    <p>
      In a normal function, <strong>this</strong> refers to the global object 
      (or undefined in strict mode).
    </p>

    <hr/>

    <h2>4. Inside an Arrow Function</h2>

    <pre>
<code>
const person = {
  name: "sameer",
  greet: () => {
    console.log(this.name);
  }
};

person.greet(); // undefined
</code>
    </pre>

    <p>
      Arrow functions do not have their own <strong>this</strong>.
      They inherit it from the surrounding scope.
    </p>

    <hr/>

    <h2>Key Points</h2>

    <pre>
<code>
- 'this' depends on how a function is called
- In object methods → refers to that object
- In normal functions → global object (or undefined in strict mode)
- Arrow functions → inherit 'this' from parent scope
</code>
    </pre>
  `
},
{
  id: 13,
  tag: 'JavaScript',
  question: "What is Scope? (Global, Local, Block)",
  answer: `
    <p>
      <strong>Scope</strong> determines where variables are accessible 
      in your code. It defines the visibility and lifetime of variables.
    </p>

    <hr/>

    <h2>1. Global Scope</h2>

    <p>
      A variable declared outside any function or block 
      has global scope. It can be accessed anywhere in the program.
    </p>

    <pre>
<code>
let name = "sameer";

function greet() {
  console.log(name);
}

greet(); // sameer
</code>
    </pre>

    <p>
      Global variables are accessible throughout the entire application.
    </p>

    <hr/>

    <h2>2. Local Scope (Function Scope)</h2>

    <p>
      A variable declared inside a function has local scope.
      It can only be accessed inside that function.
    </p>

    <pre>
<code>
function greet() {
  let message = "Hello";
  console.log(message);
}

greet(); // Hello
console.log(message); // Error
</code>
    </pre>

    <p>
      Local variables are not accessible outside the function.
    </p>

    <hr/>

    <h2>3. Block Scope</h2>

    <p>
      Variables declared with <strong>let</strong> and <strong>const</strong>
      inside a block (inside { }) have block scope.
    </p>

    <pre>
<code>
if (true) {
  let age = 25;
  const city = "Delhi";
}

console.log(age);  // Error
console.log(city); // Error
</code>
    </pre>

    <p>
      The variable exists only inside that block.
      Note: <strong>var</strong> does not follow block scope.
    </p>

    <hr/>

    <h2>Key Differences</h2>

    <pre>
<code>
Global Scope:
- Accessible everywhere

Local (Function) Scope:
- Accessible only inside the function

Block Scope:
- Accessible only inside { }
- Works with let and const
</code>
    </pre>
  `
},
{
  id: 14,
  tag: 'JavaScript',
  question: "What is Closure?",
  answer: `
    <p>
      A <strong>closure</strong> is created when a function remembers 
      and can access variables from its outer (parent) scope 
      even after the outer function has finished executing.
    </p>

    <hr/>

    <h2>Basic Example</h2>

    <pre>
<code>
function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
</code>
    </pre>

    <p>
      Here, the <strong>inner</strong> function remembers the 
      variable <strong>count</strong> from the outer function,
      even after <strong>outer()</strong> has finished executing.
      This is called a closure.
    </p>

    <hr/>

    <h2>Why Closures Are Useful</h2>

    <pre>
<code>
- Data privacy (private variables)
- Maintaining state
- Creating function factories
</code>
    </pre>

    <hr/>

    <h2>Example: Data Privacy</h2>

    <pre>
<code>
function createUser() {
  let password = "12345";

  return {
    getPassword: function() {
      return password;
    }
  };
}

const user = createUser();
console.log(user.getPassword()); // 12345
</code>
    </pre>

    <p>
      The variable <strong>password</strong> is private 
      and cannot be accessed directly from outside.
      It is protected using closure.
    </p>

    <hr/>

    <h2>Key Points</h2>

    <pre>
<code>
- Closure = Function + Lexical Environment
- Inner function remembers outer variables
- Helps in data hiding and state management
</code>
    </pre>
  `
},
{
  id: 15,
  tag: 'JavaScript',
  question: "What is Lexical Scope?",
  answer: `
    <p>
      <strong>Lexical Scope</strong> means that the scope of a variable 
      is determined by its position in the source code.
      In simple words, a function can access variables 
      from its parent scope based on where it is written.
    </p>

    <hr/>

    <h2>Basic Example</h2>

    <pre>
<code>
let globalVar = "I am global";

function outer() {
  let outerVar = "I am outer";

  function inner() {
    console.log(globalVar);
    console.log(outerVar);
  }

  inner();
}

outer();
</code>
    </pre>

    <p>
      The <strong>inner</strong> function can access both 
      <strong>globalVar</strong> and <strong>outerVar</strong>
      because of lexical scope.
    </p>

    <hr/>

    <h2>Important Rule</h2>

    <pre>
<code>
- Inner functions can access outer variables
- Outer functions cannot access inner variables
</code>
    </pre>

    <hr/>

    <h2>Example Showing Limitation</h2>

    <pre>
<code>
function outer() {
  let secret = "Hidden";

  function inner() {
    console.log(secret);
  }
}

console.log(secret); // Error
</code>
    </pre>

    <p>
      The variable <strong>secret</strong> cannot be accessed 
      outside its lexical scope.
    </p>

    <hr/>

    <h2>Relation with Closure</h2>

    <pre>
<code>
Closure works because of lexical scope.
A function remembers variables from where it was defined.
</code>
    </pre>

    <p>
      Lexical scope decides variable access at the time of writing code,
      not at the time of execution.
    </p>
  `
},
{
  id: 16,
  tag: 'JavaScript',
  question: "What is Scope Chain?",
  answer: `
    <p>
      The <strong>scope chain</strong> is the mechanism JavaScript uses 
      to find variables. When a variable is used, JavaScript looks for it 
      in the current scope. If it is not found, it moves to the outer scope,
      and continues until it reaches the global scope.
    </p>

    <hr/>

    <h2>How It Works</h2>

    <pre>
<code>
let globalVar = "Global";

function outer() {
  let outerVar = "Outer";

  function inner() {
    let innerVar = "Inner";
    console.log(innerVar);
    console.log(outerVar);
    console.log(globalVar);
  }

  inner();
}

outer();
</code>
    </pre>

    <p>
      When <strong>inner</strong> tries to access a variable:
      <br/>
      1. It first checks its own scope.
      <br/>
      2. Then it checks the outer function scope.
      <br/>
      3. Finally, it checks the global scope.
    </p>

    <hr/>

    <h2>Lookup Process</h2>

    <pre>
<code>
Current Scope → Parent Scope → Global Scope
</code>
    </pre>

    <p>
      If the variable is not found in any scope,
      JavaScript throws a reference error.
    </p>

    <hr/>

    <h2>Example of Error</h2>

    <pre>
<code>
function test() {
  console.log(a);
}

test(); // ReferenceError
</code>
    </pre>

    <p>
      Since <strong>a</strong> is not found in the current scope 
      or any outer scope, it results in an error.
    </p>

    <hr/>

    <h2>Key Points</h2>

    <pre>
<code>
- Scope chain is used to resolve variables
- Search starts from current scope
- Moves outward step by step
- Stops at global scope
</code>
    </pre>
  `
},
{
  id: 17,
  tag: 'React Native',
  question: "How are Closures useful in React Native?",
  answer: `
    <p>
      Closures are very useful in React Native because they help 
      preserve state, handle events, and manage asynchronous logic.
      Since React is built on JavaScript, closures are used everywhere 
      behind the scenes.
    </p>

    <hr/>

    <h2>1. Maintaining State in Event Handlers</h2>

    <pre>
<code>
function Counter() {
  const [count, setCount] = useState(0);

  function handlePress() {
    setCount(count + 1);
  }

  return <Button title="Increment" onPress={handlePress} />;
}
</code>
    </pre>

    <p>
      The function <strong>handlePress</strong> forms a closure.
      It remembers the value of <strong>count</strong> from its scope.
    </p>

    <hr/>

    <h2>2. Inside useEffect</h2>

    <pre>
<code>
useEffect(() => {
  const timer = setTimeout(() => {
    console.log("Count:", count);
  }, 1000);

  return () => clearTimeout(timer);
}, [count]);
</code>
    </pre>

    <p>
      The callback inside <strong>setTimeout</strong> is a closure.
      It remembers the value of <strong>count</strong>.
    </p>

    <hr/>

    <h2>3. Creating Private Variables</h2>

    <pre>
<code>
function createLogger() {
  let logs = [];

  return function(message) {
    logs.push(message);
    console.log(logs);
  };
}

const logger = createLogger();
logger("First");
logger("Second");
</code>
    </pre>

    <p>
      The variable <strong>logs</strong> is private.
      Closure keeps it accessible only to the returned function.
    </p>

    <hr/>

    <h2>4. Avoiding Recalculation (Memoization Concept)</h2>

    <pre>
<code>
const memoizedValue = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
</code>
    </pre>

    <p>
      The function inside <strong>useMemo</strong> uses closure
      to remember values from its surrounding scope.
    </p>

    <hr/>

    <h2>Why Closures Matter in React Native</h2>

    <pre>
<code>
- Used in event handlers
- Used in hooks (useState, useEffect, useMemo)
- Help maintain state
- Enable data privacy
- Essential for async logic
</code>
    </pre>

    <p>
      In simple terms, React Native relies heavily on closures
      because every function component and hook uses them internally.
    </p>
  `
},
{
  id: 18,
  tag: 'JavaScript',
  question: "How to Clone an Object?",
  answer: `
    <p>
      Cloning an object means creating a copy of an object.
      There are two types of cloning:
      <strong>Shallow Copy</strong> and <strong>Deep Copy</strong>.
    </p>

    <hr/>

    <h2>1. Shallow Copy (Spread Operator)</h2>

    <pre>
<code>
const user = { name: "sameer", age: 25 };

const copy = { ...user };

console.log(copy);
</code>
    </pre>

    <p>
      The spread operator creates a shallow copy.
      It copies only the first level of properties.
    </p>

    <hr/>

    <h2>2. Using Object.assign()</h2>

    <pre>
<code>
const user = { name: "sameer", age: 25 };

const copy = Object.assign({}, user);
</code>
    </pre>

    <p>
      This also creates a shallow copy.
    </p>

    <hr/>

    <h2>Problem with Shallow Copy</h2>

    <pre>
<code>
const user = {
  name: "sameer",
  address: { city: "Delhi" }
};

const copy = { ...user };

copy.address.city = "Mumbai";

console.log(user.address.city); // Mumbai
</code>
    </pre>

    <p>
      Nested objects are still copied by reference.
      That’s why changing the nested value affects the original object.
    </p>

    <hr/>

    <h2>3. Deep Copy (JSON Method)</h2>

    <pre>
<code>
const deepCopy = JSON.parse(JSON.stringify(user));
</code>
    </pre>

    <p>
      This creates a deep copy, but it does not work with:
    </p>

    <pre>
<code>
- Functions
- Undefined
- Date
- Special objects (Map, Set)
</code>
    </pre>

    <hr/>

    <h2>4. Modern Way (structuredClone)</h2>

    <pre>
<code>
const deepCopy = structuredClone(user);
</code>
    </pre>

    <p>
      <strong>structuredClone</strong> creates a proper deep copy
      and is the recommended modern approach.
    </p>

    <hr/>

    <h2>Key Differences</h2>

    <pre>
<code>
Shallow Copy:
- Copies first level only
- Nested objects share reference

Deep Copy:
- Copies all levels
- No shared references
</code>
    </pre>
  `
},
{
  id: 19,
  tag: 'JavaScript',
  question: "Shallow Copy vs Deep Copy?",
  answer: `
    <p>
      When copying objects in JavaScript, there are two types of copying:
      <strong>Shallow Copy</strong> and <strong>Deep Copy</strong>.
    </p>

    <hr/>

    <h2>Shallow Copy</h2>

    <p>
      A shallow copy copies only the first level of properties.
      Nested objects are still copied by reference.
    </p>

    <pre>
<code>
const user = {
  name: "sameer",
  address: { city: "Delhi" }
};

const copy = { ...user };

copy.address.city = "Mumbai";

console.log(user.address.city); // Mumbai
</code>
    </pre>

    <p>
      The nested object <strong>address</strong> is shared,
      so changing it affects the original object.
    </p>

    <hr/>

    <h2>Deep Copy</h2>

    <p>
      A deep copy creates a completely independent copy.
      All nested objects are also cloned.
    </p>

    <pre>
<code>
const user = {
  name: "sameer",
  address: { city: "Delhi" }
};

const deepCopy = structuredClone(user);

deepCopy.address.city = "Mumbai";

console.log(user.address.city); // Delhi
</code>
    </pre>

    <p>
      Now the original object is not affected.
    </p>

    <hr/>

    <h2>Common Ways to Create Copies</h2>

    <pre>
<code>
Shallow Copy:
- Spread operator { ...obj }
- Object.assign()

Deep Copy:
- structuredClone()
- JSON.parse(JSON.stringify(obj)) (limited)
</code>
    </pre>

    <hr/>

    <h2>Key Differences</h2>

    <pre>
<code>
Shallow Copy:
- Copies first level only
- Nested objects share reference
- Faster

Deep Copy:
- Copies all levels
- No shared references
- Safer for nested data
</code>
    </pre>
  `
},
{
  id: 20,
  tag: 'JavaScript',
  question: "What is Destructuring?",
  answer: `
    <p>
      <strong>Destructuring</strong> is a JavaScript feature that allows 
      you to extract values from objects or arrays and assign them 
      to variables in a clean and shorter way.
    </p>

    <hr/>

    <h2>1. Object Destructuring</h2>

    <pre>
<code>
const user = {
  name: "sameer",
  age: 25
};

const { name, age } = user;

console.log(name); // sameer
console.log(age);  // 25
</code>
    </pre>

    <p>
      Instead of writing <strong>user.name</strong> and 
      <strong>user.age</strong>, we extract them directly.
    </p>

    <hr/>

    <h2>2. Renaming Variables</h2>

    <pre>
<code>
const { name: userName } = user;

console.log(userName); // sameer
</code>
    </pre>

    <hr/>

    <h2>3. Default Values</h2>

    <pre>
<code>
const { city = "Delhi" } = user;

console.log(city); // Delhi
</code>
    </pre>

    <hr/>

    <h2>4. Array Destructuring</h2>

    <pre>
<code>
const colors = ["red", "green", "blue"];

const [first, second] = colors;

console.log(first);  // red
console.log(second); // green
</code>
    </pre>

    <hr/>

    <h2>5. Destructuring in Function Parameters</h2>

    <pre>
<code>
function greet({ name, age }) {
  console.log(name, age);
}

greet({ name: "sameer", age: 25 });
</code>
    </pre>

    <p>
      This is commonly used in React and React Native components.
    </p>

    <hr/>

    <h2>Why Destructuring is Important</h2>

    <pre>
<code>
- Cleaner and shorter code
- Improves readability
- Commonly used in React props
- Reduces repetitive object access
</code>
    </pre>
  `
},
{
  id: 21,
  tag: 'JavaScript',
  question: "What is Spread and Rest Operator?",
  answer: `
    <p>
      The <strong>spread</strong> and <strong>rest</strong> operators use the same syntax 
      (<strong>...</strong>) but they serve different purposes.
    </p>

    <hr/>

    <h2>1. Spread Operator (...)</h2>

    <p>
      The spread operator is used to expand elements of an array 
      or properties of an object.
    </p>

    <pre>
<code>
// Array Example
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4];

console.log(arr2); // [1, 2, 3, 4]
</code>
    </pre>

    <pre>
<code>
// Object Example
const user = { name: "sameer" };
const updatedUser = { ...user, age: 25 };

console.log(updatedUser);
// { name: "sameer", age: 25 }
</code>
    </pre>

    <p>
      Spread is commonly used to clone objects and update state in React.
    </p>

    <hr/>

    <h2>2. Rest Operator (...)</h2>

    <p>
      The rest operator collects multiple elements 
      into a single array or object.
    </p>

    <pre>
<code>
// Function Example
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // 6
</code>
    </pre>

    <pre>
<code>
// Object Destructuring Example
const user = {
  name: "sameer",
  age: 25,
  city: "Delhi"
};

const { name, ...rest } = user;

console.log(name); // sameer
console.log(rest); // { age: 25, city: "Delhi" }
</code>
    </pre>

    <hr/>

    <h2>Key Difference</h2>

    <pre>
<code>
Spread:
- Expands values
- Used when copying or merging

Rest:
- Collects values
- Used in function parameters or destructuring
</code>
    </pre>

    <p>
      In simple terms:
      Spread → Expands
      Rest → Collects
    </p>
  `
},
{
  id: 22,
  tag: 'JavaScript',
  question: "Explain map(), filter(), reduce(), forEach()",
  answer: `
    <p>
      These are important array methods in JavaScript used to 
      iterate and manipulate array data.
    </p>

    <hr/>

    <h2>1. map()</h2>

    <p>
      <strong>map()</strong> creates a new array by transforming 
      each element of the original array.
    </p>

    <pre>
<code>
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]
</code>
    </pre>

    <p>
      map() always returns a new array.
    </p>

    <hr/>

    <h2>2. filter()</h2>

    <p>
      <strong>filter()</strong> creates a new array 
      with elements that satisfy a condition.
    </p>

    <pre>
<code>
const numbers = [1, 2, 3, 4];

const even = numbers.filter(num => num % 2 === 0);

console.log(even); // [2, 4]
</code>
    </pre>

    <p>
      filter() returns only matching elements.
    </p>

    <hr/>

    <h2>3. reduce()</h2>

    <p>
      <strong>reduce()</strong> reduces the array to a single value.
    </p>

    <pre>
<code>
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((total, num) => {
  return total + num;
}, 0);

console.log(sum); // 10
</code>
    </pre>

    <p>
      reduce() is commonly used for:
    </p>

    <pre>
<code>
- Calculating totals
- Grouping data
- Flattening arrays
</code>
    </pre>

    <hr/>

    <h2>4. forEach()</h2>

    <p>
      <strong>forEach()</strong> executes a function 
      for each element in the array.
      It does not return a new array.
    </p>

    <pre>
<code>
const numbers = [1, 2, 3];

numbers.forEach(num => {
  console.log(num);
});
</code>
    </pre>

    <p>
      forEach() is mainly used for side effects like logging.
    </p>

    <hr/>

    <h2>Key Differences</h2>

    <pre>
<code>
map()     → Transforms elements → Returns new array
filter()  → Filters elements    → Returns new array
reduce()  → Reduces to one value → Returns single value
forEach() → Just loops           → Returns undefined
</code>
    </pre>
  `
},
{
  id: 23,
  tag: 'JavaScript',
  question: "How to Merge Arrays or Objects?",
  answer: `
    <p>
      In JavaScript, arrays and objects can be merged using 
      the <strong>spread operator</strong> or built-in methods.
    </p>

    <hr/>

    <h2>1. Merging Arrays (Spread Operator)</h2>

    <pre>
<code>
const arr1 = [1, 2];
const arr2 = [3, 4];

const merged = [...arr1, ...arr2];

console.log(merged); // [1, 2, 3, 4]
</code>
    </pre>

    <p>
      The spread operator expands elements from both arrays 
      into a new array.
    </p>

    <hr/>

    <h2>2. Merging Arrays (concat)</h2>

    <pre>
<code>
const merged = arr1.concat(arr2);

console.log(merged); // [1, 2, 3, 4]
</code>
    </pre>

    <p>
      concat() also returns a new merged array.
    </p>

    <hr/>

    <h2>3. Merging Objects (Spread Operator)</h2>

    <pre>
<code>
const user = { name: "sameer" };
const details = { age: 25 };

const merged = { ...user, ...details };

console.log(merged);
// { name: "sameer", age: 25 }
</code>
    </pre>

    <p>
      If properties have the same key, the last value overrides the previous one.
    </p>

    <hr/>

    <h2>4. Merging Objects (Object.assign)</h2>

    <pre>
<code>
const merged = Object.assign({}, user, details);
</code>
    </pre>

    <p>
      Object.assign() also merges objects into a new object.
    </p>

    <hr/>

    <h2>Important Note</h2>

    <pre>
<code>
- Spread and Object.assign create shallow copies
- Nested objects will still share references
</code>
    </pre>

    <hr/>

    <h2>Key Summary</h2>

    <pre>
<code>
Arrays:
- [...arr1, ...arr2]
- arr1.concat(arr2)

Objects:
- { ...obj1, ...obj2 }
- Object.assign({}, obj1, obj2)
</code>
    </pre>
  `
},
{
  id: 24,
  tag: 'JavaScript',
  question: "What is Prototype?",
  answer: `
    <p>
      In JavaScript, every object has a hidden property called 
      <strong>prototype</strong>. It allows objects to inherit 
      properties and methods from another object.
    </p>

    <hr/>

    <h2>Understanding Prototype</h2>

    <p>
      JavaScript uses <strong>prototype-based inheritance</strong>.
      Instead of classes (like other languages), objects inherit 
      directly from other objects.
    </p>

    <pre>
<code>
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello " + this.name);
};

const user1 = new Person("sameer");

user1.greet(); // Hello sameer
</code>
    </pre>

    <p>
      The method <strong>greet</strong> is not inside the object itself.
      It exists on <strong>Person.prototype</strong> and is shared 
      by all instances.
    </p>

    <hr/>

    <h2>Prototype Chain</h2>

    <pre>
<code>
console.log(user1.__proto__ === Person.prototype); // true
</code>
    </pre>

    <p>
      When accessing a property, JavaScript first checks:
      <br/>
      1. The object itself
      <br/>
      2. Its prototype
      <br/>
      3. The prototype's prototype
      <br/>
      This continues until null.
    </p>

    <hr/>

    <h2>Why Prototype is Important</h2>

    <pre>
<code>
- Enables inheritance
- Saves memory (shared methods)
- Forms the base of JavaScript object system
</code>
    </pre>

    <hr/>

    <h2>Simple Example</h2>

    <pre>
<code>
const arr = [1, 2, 3];

console.log(arr.map); 
</code>
    </pre>

    <p>
      The method <strong>map()</strong> exists because 
      arrays inherit from <strong>Array.prototype</strong>.
    </p>
  `
},
{
  id: 25,
  tag: 'JavaScript',
  question: "What is Prototypal Inheritance?",
  answer: `
    <p>
      <strong>Prototypal inheritance</strong> is a mechanism in JavaScript 
      where one object can inherit properties and methods from another object 
      using the prototype chain.
    </p>

    <hr/>

    <h2>How It Works</h2>

    <p>
      Every JavaScript object has an internal link to another object 
      called its prototype. If a property is not found in the object, 
      JavaScript looks for it in its prototype.
    </p>

    <hr/>

    <h2>Example Using Constructor Function</h2>

    <pre>
<code>
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  console.log(this.name + " makes a sound");
};

const dog = new Animal("Dog");

dog.speak(); // Dog makes a sound
</code>
    </pre>

    <p>
      The object <strong>dog</strong> inherits the 
      <strong>speak</strong> method from <strong>Animal.prototype</strong>.
    </p>

    <hr/>

    <h2>Prototype Chain Lookup</h2>

    <pre>
<code>
console.log(dog.__proto__ === Animal.prototype); // true
</code>
    </pre>

    <p>
      When calling <strong>dog.speak()</strong>, JavaScript:
      <br/>
      1. Checks inside dog object
      <br/>
      2. If not found, checks Animal.prototype
      <br/>
      3. Continues up the chain until null
    </p>

    <hr/>

    <h2>Modern Class Syntax (Behind the Scenes)</h2>

    <pre>
<code>
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound");
  }
}

const dog = new Animal("Dog");
dog.speak();
</code>
    </pre>

    <p>
      Even though this looks like class-based inheritance,
      JavaScript still uses prototypal inheritance internally.
    </p>

    <hr/>

    <h2>Why It Is Important</h2>

    <pre>
<code>
- Enables object inheritance
- Allows method sharing
- Saves memory (methods stored in prototype)
- Forms the foundation of JavaScript OOP
</code>
    </pre>
  `
},
{
  id: 26,
  tag: 'JavaScript',
  question: "ES6 Classes vs Constructor Functions?",
  answer: `
    <p>
      ES6 classes and constructor functions are two ways to create objects 
      and implement inheritance in JavaScript. 
      Under the hood, both use prototypal inheritance.
    </p>

    <hr/>

    <h2>1. Constructor Function</h2>

    <pre>
<code>
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function() {
  console.log("Hello " + this.name);
};

const user = new Person("sameer");
user.greet();
</code>
    </pre>

    <p>
      Constructor functions were used before ES6.
      Methods are added to the prototype manually.
    </p>

    <hr/>

    <h2>2. ES6 Class</h2>

    <pre>
<code>
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const user = new Person("sameer");
user.greet();
</code>
    </pre>

    <p>
      ES6 classes provide a cleaner and more readable syntax.
      Internally, they still use prototypes.
    </p>

    <hr/>

    <h2>Key Differences</h2>

    <pre>
<code>
Constructor Function:
- Older syntax
- Methods added using prototype
- Can be called without 'new' (not recommended)

ES6 Class:
- Cleaner, modern syntax
- Must be called with 'new'
- Methods are non-enumerable
- Supports class features like extends and super
</code>
    </pre>

    <hr/>

    <h2>Important Note</h2>

    <p>
      ES6 classes are syntactic sugar over constructor functions.
      JavaScript still uses prototypal inheritance internally.
    </p>
  `
},
{
  id: 27,
  tag: 'JavaScript',
  question: "What is extends and super?",
  answer: `
    <p>
      In ES6 classes, <strong>extends</strong> and <strong>super</strong> 
      are used for inheritance.
      They allow one class to inherit properties and methods from another class.
    </p>

    <hr/>

    <h2>1. extends Keyword</h2>

    <p>
      The <strong>extends</strong> keyword is used to create a child class 
      that inherits from a parent class.
    </p>

    <pre>
<code>
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
}

const dog = new Dog();
dog.speak(); // Animal makes a sound
</code>
    </pre>

    <p>
      The class <strong>Dog</strong> inherits the method 
      from the <strong>Animal</strong> class.
    </p>

    <hr/>

    <h2>2. super Keyword</h2>

    <p>
      The <strong>super</strong> keyword is used to call 
      the parent class constructor or methods.
    </p>

    <pre>
<code>
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound");
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Calls parent constructor
    this.breed = breed;
  }

  speak() {
    super.speak(); // Calls parent method
    console.log("Dog barks");
  }
}

const dog = new Dog("Tommy", "Labrador");
dog.speak();
</code>
    </pre>

    <hr/>

    <h2>Important Rules</h2>

    <pre>
<code>
- extends creates inheritance
- super() must be called before using 'this' in child constructor
- super.method() calls parent methods
</code>
    </pre>

    <hr/>

    <h2>Summary</h2>

    <pre>
<code>
extends → Inherit from another class
super   → Access parent constructor or methods
</code>
    </pre>
  `
},
{
  id: 28,
  tag: 'JavaScript',
  question: "What are Template Literals?",
  answer: `
    <p>
      <strong>Template literals</strong> are a modern way to create strings 
      in JavaScript using backticks (<strong>\` \`</strong>) instead of quotes.
      They allow embedded expressions, multi-line strings, and cleaner syntax.
    </p>

    <hr/>

    <h2>1. Basic Syntax</h2>

    <pre>
<code>
const name = "sameer";

const message = \`Hello \${name}\`;

console.log(message); // Hello sameer
</code>
    </pre>

    <p>
      The <strong>\${ }</strong> syntax allows you to insert variables 
      directly inside the string.
    </p>

    <hr/>

    <h2>2. Multi-line Strings</h2>

    <pre>
<code>
const text = \`
This is line one
This is line two
\`;

console.log(text);
</code>
    </pre>

    <p>
      Template literals support multi-line strings 
      without using \\n.
    </p>

    <hr/>

    <h2>3. Expressions Inside Strings</h2>

    <pre>
<code>
const a = 5;
const b = 10;

console.log(\`Sum is \${a + b}\`); // Sum is 15
</code>
    </pre>

    <p>
      You can insert calculations or function calls inside \${ }.
    </p>

    <hr/>

    <h2>Before ES6 (Old Way)</h2>

    <pre>
<code>
const message = "Hello " + name;
</code>
    </pre>

    <p>
      Template literals make string concatenation cleaner and more readable.
    </p>

    <hr/>

    <h2>Why It Is Important</h2>

    <pre>
<code>
- Cleaner string interpolation
- Supports multi-line strings
- Allows embedded expressions
- Commonly used in React JSX
</code>
    </pre>
  `
},
{
  id: 29,
  tag: 'JavaScript',
  question: "What are Default Parameters?",
  answer: `
    <p>
      <strong>Default parameters</strong> allow you to assign default values 
      to function parameters. If no value (or undefined) is passed, 
      the default value is used.
    </p>

    <hr/>

    <h2>Basic Example</h2>

    <pre>
<code>
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();        // Hello Guest
greet("sameer"); // Hello sameer
</code>
    </pre>

    <p>
      If no argument is provided, the function uses the default value.
    </p>

    <hr/>

    <h2>Works Only with undefined</h2>

    <pre>
<code>
function test(value = 10) {
  console.log(value);
}

test(undefined); // 10
test(null);      // null
</code>
    </pre>

    <p>
      Default values are used only when the argument is 
      <strong>undefined</strong>, not null.
    </p>

    <hr/>

    <h2>Using Expressions as Default</h2>

    <pre>
<code>
function calculate(a, b = a * 2) {
  return a + b;
}

console.log(calculate(5)); // 15
</code>
    </pre>

    <p>
      Default parameters can also use expressions or 
      other parameter values.
    </p>

    <hr/>

    <h2>Before ES6 (Old Way)</h2>

    <pre>
<code>
function greet(name) {
  name = name || "Guest";
  console.log("Hello " + name);
}
</code>
    </pre>

    <p>
      ES6 default parameters make the code cleaner and more predictable.
    </p>

    <hr/>

    <h2>Why It Is Important</h2>

    <pre>
<code>
- Prevents undefined values
- Makes functions more flexible
- Reduces extra conditional checks
- Improves readability
</code>
    </pre>
  `
},
{
  id: 30,
  tag: 'JavaScript',
  question: "What are Modules (import/export)?",
  answer: `
    <p>
      <strong>Modules</strong> allow you to split your code into 
      separate files and reuse them using <strong>import</strong> 
      and <strong>export</strong>.
    </p>

    <p>
      They help organize code, improve maintainability, 
      and avoid global scope pollution.
    </p>

    <hr/>

    <h2>1. Named Export</h2>

    <pre>
<code>
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
</code>
    </pre>

    <pre>
<code>
// app.js
import { add, subtract } from "./math";

console.log(add(2, 3));
</code>
    </pre>

    <p>
      Named exports must be imported using the same name 
      inside curly braces.
    </p>

    <hr/>

    <h2>2. Default Export</h2>

    <pre>
<code>
// greet.js
export default function greet() {
  console.log("Hello");
}
</code>
    </pre>

    <pre>
<code>
// app.js
import greet from "./greet";

greet();
</code>
    </pre>

    <p>
      A file can have only one default export.
      It can be imported with any name.
    </p>

    <hr/>

    <h2>3. Import Everything</h2>

    <pre>
<code>
import * as math from "./math";

console.log(math.add(2, 3));
</code>
    </pre>

    <hr/>

    <h2>Key Differences</h2>

    <pre>
<code>
Named Export:
- Multiple per file
- Must use same name while importing

Default Export:
- Only one per file
- Can use any name while importing
</code>
    </pre>

    <hr/>

    <h2>Why Modules Are Important</h2>

    <pre>
<code>
- Organize large applications
- Avoid global variable conflicts
- Improve code reusability
- Essential in React and React Native
</code>
    </pre>
  `
},
{
  id: 31,
  tag: 'JavaScript',
  question: "What is Optional Chaining?",
  answer: `
    <p>
      <strong>Optional chaining</strong> allows you to safely access 
      deeply nested object properties without causing an error 
      if a value is null or undefined.
    </p>

    <hr/>

    <h2>Problem Without Optional Chaining</h2>

    <pre>
<code>
const user = {};

console.log(user.address.city); 
// Error: Cannot read property 'city' of undefined
</code>
    </pre>

    <p>
      If <strong>address</strong> does not exist, 
      JavaScript throws an error.
    </p>

    <hr/>

    <h2>Using Optional Chaining (?.)</h2>

    <pre>
<code>
const user = {};

console.log(user.address?.city); 
// undefined (no error)
</code>
    </pre>

    <p>
      The <strong>?.</strong> operator checks if the value exists.
      If it is null or undefined, it returns undefined instead of throwing an error.
    </p>

    <hr/>

    <h2>With Arrays</h2>

    <pre>
<code>
const users = [];

console.log(users[0]?.name); 
</code>
    </pre>

    <hr/>

    <h2>With Function Calls</h2>

    <pre>
<code>
const user = {
  greet: () => "Hello"
};

console.log(user.greet?.());
</code>
    </pre>

    <hr/>

    <h2>Why It Is Important</h2>

    <pre>
<code>
- Prevents runtime errors
- Makes code cleaner
- Useful for API responses
- Common in React and React Native
</code>
    </pre>
  `
},
{
  id: 32,
  tag: 'JavaScript',
  question: "What is Nullish Coalescing (??)?",
  answer: `
    <p>
      The <strong>nullish coalescing operator (??)</strong> is used 
      to provide a default value when a variable is 
      <strong>null</strong> or <strong>undefined</strong>.
    </p>

    <hr/>

    <h2>Basic Syntax</h2>

    <pre>
<code>
const value = null;

const result = value ?? "Default Value";

console.log(result); // Default Value
</code>
    </pre>

    <p>
      If the left side is null or undefined,
      the right side value is returned.
    </p>

    <hr/>

    <h2>Difference Between ?? and ||</h2>

    <pre>
<code>
const count = 0;

console.log(count || 10); // 10
console.log(count ?? 10); // 0
</code>
    </pre>

    <p>
      The <strong>||</strong> operator treats 0, false, "", and null 
      as falsy values.
    </p>

    <p>
      The <strong>??</strong> operator only checks for 
      null and undefined.
    </p>

    <hr/>

    <h2>Common Use Case</h2>

    <pre>
<code>
const user = {
  name: "sameer",
  age: null
};

const age = user.age ?? 18;

console.log(age); // 18
</code>
    </pre>

    <hr/>

    <h2>Why It Is Important</h2>

    <pre>
<code>
- Safer default values
- Avoids unwanted falsy checks
- Works well with optional chaining
</code>
    </pre>

    <p>
      Example with optional chaining:
    </p>

    <pre>
<code>
const city = user.address?.city ?? "Unknown";
</code>
    </pre>
  `
},
{
  id: 33,
  tag: 'JavaScript',
  question: "What is a Promise?",
  answer: `
    <p>
      A <strong>Promise</strong> is an object in JavaScript 
      that represents the eventual completion or failure 
      of an asynchronous operation.
    </p>

    <p>
      It helps handle asynchronous code in a cleaner 
      and more structured way.
    </p>

    <hr/>

    <h2>Promise States</h2>

    <pre>
<code>
1. Pending   → Initial state
2. Fulfilled → Operation successful
3. Rejected  → Operation failed
</code>
    </pre>

    <hr/>

    <h2>Creating a Promise</h2>

    <pre>
<code>
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation Successful");
  } else {
    reject("Operation Failed");
  }
});
</code>
    </pre>

    <hr/>

    <h2>Consuming a Promise</h2>

    <pre>
<code>
myPromise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
</code>
    </pre>

    <p>
      <strong>.then()</strong> handles success  
      <strong>.catch()</strong> handles errors
    </p>

    <hr/>

    <h2>Real Example (setTimeout)</h2>

    <pre>
<code>
const delay = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Done after 2 seconds");
  }, 2000);
});

delay.then(data => console.log(data));
</code>
    </pre>

    <hr/>

    <h2>Why Promises Are Important</h2>

    <pre>
<code>
- Handle asynchronous operations
- Avoid callback hell
- Improve readability
- Used in API calls (fetch, axios)
</code>
    </pre>
  `
},
{
  id: 34,
  tag: 'JavaScript',
  question: "States of a Promise?",
  answer: `
    <p>
      A <strong>Promise</strong> in JavaScript has three possible states.
      These states represent the lifecycle of an asynchronous operation.
    </p>

    <hr/>

    <h2>1. Pending</h2>

    <pre>
<code>
// Initial state
</code>
    </pre>

    <p>
      The promise is still executing.
      The result is not yet available.
    </p>

    <hr/>

    <h2>2. Fulfilled (Resolved)</h2>

    <pre>
<code>
// Operation completed successfully
resolve("Success");
</code>
    </pre>

    <p>
      The asynchronous operation completed successfully,
      and the promise returns a value.
    </p>

    <hr/>

    <h2>3. Rejected</h2>

    <pre>
<code>
// Operation failed
reject("Error occurred");
</code>
    </pre>

    <p>
      The asynchronous operation failed,
      and the promise returns an error.
    </p>

    <hr/>

    <h2>Example Showing All States</h2>

    <pre>
<code>
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true;

    if (success) {
      resolve("Data Loaded");
    } else {
      reject("Failed to Load");
    }
  }, 2000);
});
</code>
    </pre>

    <p>
      When created → Pending  
      If resolve() is called → Fulfilled  
      If reject() is called → Rejected
    </p>

    <hr/>

    <h2>Important Rule</h2>

    <pre>
<code>
- A promise can move from Pending → Fulfilled
- Or from Pending → Rejected
- Once settled, it cannot change state
</code>
    </pre>
  `
},
{
  id: 35,
  tag: 'JavaScript',
  question: "What is Promise Chaining?",
  answer: `
    <p>
      <strong>Promise chaining</strong> allows you to execute multiple 
      asynchronous operations in sequence using multiple 
      <strong>.then()</strong> methods.
    </p>

    <p>
      Each <strong>.then()</strong> returns a new promise, 
      which allows the next .then() to run.
    </p>

    <hr/>

    <h2>Basic Example</h2>

    <pre>
<code>
const myPromise = new Promise((resolve) => {
  resolve(5);
});

myPromise
  .then(result => {
    console.log(result); // 5
    return result * 2;
  })
  .then(result => {
    console.log(result); // 10
    return result + 3;
  })
  .then(result => {
    console.log(result); // 13
  });
</code>
    </pre>

    <hr/>

    <h2>How It Works</h2>

    <pre>
<code>
- First .then() receives resolved value
- It returns a new value
- That value is passed to the next .then()
- This continues in a chain
</code>
    </pre>

    <hr/>

    <h2>Handling Errors in Chain</h2>

    <pre>
<code>
myPromise
  .then(result => {
    throw new Error("Something went wrong");
  })
  .catch(error => {
    console.log(error.message);
  });
</code>
    </pre>

    <p>
      If any promise in the chain fails,
      control moves directly to the nearest <strong>.catch()</strong>.
    </p>

    <hr/>

    <h2>Why Promise Chaining is Important</h2>

    <pre>
<code>
- Avoids callback hell
- Keeps async code readable
- Executes async tasks in order
- Common in API call sequences
</code>
    </pre>
  `
},
{
  id: 36,
  tag: 'JavaScript',
  question: "Promise.all() vs Promise.race()?",
  answer: `
    <p>
      <strong>Promise.all()</strong> and <strong>Promise.race()</strong> 
      are methods used to handle multiple promises at the same time.
      However, they behave differently.
    </p>

    <hr/>

    <h2>1. Promise.all()</h2>

    <p>
      Promise.all() waits for all promises to complete.
      If all promises are resolved, it returns an array of results.
      If any promise is rejected, it immediately rejects.
    </p>

    <pre>
<code>
const p1 = Promise.resolve("A");
const p2 = Promise.resolve("B");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
  .then(results => {
    console.log(results); // ["A", "B", "C"]
  })
  .catch(error => {
    console.log(error);
  });
</code>
    </pre>

    <p>
      If even one promise fails, the entire Promise.all() fails.
    </p>

    <hr/>

    <h2>2. Promise.race()</h2>

    <p>
      Promise.race() returns the result of the first promise 
      that settles (either resolved or rejected).
    </p>

    <pre>
<code>
const p1 = new Promise(resolve =>
  setTimeout(() => resolve("First"), 1000)
);

const p2 = new Promise(resolve =>
  setTimeout(() => resolve("Second"), 2000)
);

Promise.race([p1, p2])
  .then(result => {
    console.log(result); // "First"
  });
</code>
    </pre>

    <p>
      It does not wait for all promises — only the fastest one.
    </p>

    <hr/>

    <h2>Key Differences</h2>

    <pre>
<code>
Promise.all():
- Waits for all promises
- Returns array of results
- Fails if any promise fails

Promise.race():
- Returns first settled promise
- Can resolve or reject first
- Does not wait for others
</code>
    </pre>

    <hr/>

    <h2>When to Use</h2>

    <pre>
<code>
Use Promise.all():
- When you need all results (e.g., multiple API calls)

Use Promise.race():
- When you need the fastest response
- Implementing timeout logic
</code>
    </pre>
  `
},
{
  id: 37,
  tag: 'JavaScript',
  question: "What is async/await?",
  answer: `
    <p>
      <strong>async/await</strong> is a modern way to handle 
      asynchronous operations in JavaScript.
      It makes asynchronous code look and behave 
      like synchronous code.
    </p>

    <hr/>

    <h2>1. async Keyword</h2>

    <p>
      The <strong>async</strong> keyword is used before a function.
      It automatically makes the function return a Promise.
    </p>

    <pre>
<code>
async function greet() {
  return "Hello";
}

greet().then(console.log); // Hello
</code>
    </pre>

    <hr/>

    <h2>2. await Keyword</h2>

    <p>
      The <strong>await</strong> keyword pauses execution 
      until the promise is resolved.
      It can only be used inside an async function.
    </p>

    <pre>
<code>
function delay() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done"), 2000);
  });
}

async function run() {
  const result = await delay();
  console.log(result);
}

run();
</code>
    </pre>

    <hr/>

    <h2>3. Error Handling</h2>

    <pre>
<code>
async function fetchData() {
  try {
    const data = await Promise.resolve("Success");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
</code>
    </pre>

    <p>
      Errors are handled using try...catch.
    </p>

    <hr/>

    <h2>Before async/await (Promise Chain)</h2>

    <pre>
<code>
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));
</code>
    </pre>

    <hr/>

    <h2>With async/await</h2>

    <pre>
<code>
async function fetchData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
</code>
    </pre>

    <hr/>

    <h2>Why async/await is Important</h2>

    <pre>
<code>
- Cleaner and readable code
- Avoids deep promise chaining
- Easier error handling
- Common in API calls
</code>
    </pre>
  `
},
{
  id: 38,
  tag: 'JavaScript',
  question: "Error Handling in async/await?",
  answer: `
    <p>
      Error handling in <strong>async/await</strong> is done using 
      <strong>try...catch</strong> blocks.
      Since async functions return promises, errors can be caught 
      like synchronous code.
    </p>

    <hr/>

    <h2>1. Basic try...catch Example</h2>

    <pre>
<code>
async function fetchData() {
  try {
    const response = await Promise.reject("Something went wrong");
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
</code>
    </pre>

    <p>
      If the promise is rejected, execution jumps to the catch block.
    </p>

    <hr/>

    <h2>2. Real API Example</h2>

    <pre>
<code>
async function getData() {
  try {
    const res = await fetch(url);
    
    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error.message);
  }
}
</code>
    </pre>

    <hr/>

    <h2>3. Using .catch() with async Function</h2>

    <pre>
<code>
async function test() {
  throw new Error("Failed");
}

test().catch(error => console.log(error.message));
</code>
    </pre>

    <p>
      Since async functions return promises, 
      you can also use .catch() outside the function.
    </p>

    <hr/>

    <h2>Important Points</h2>

    <pre>
<code>
- Use try...catch inside async function
- Throw errors manually using throw
- async functions always return a Promise
- Unhandled errors cause promise rejection
</code>
    </pre>

    <hr/>

    <h2>Best Practice</h2>

    <pre>
<code>
- Always wrap await calls in try...catch
- Handle network errors separately
- Provide fallback UI in React Native apps
</code>
    </pre>
  `
},
{
  id: 39,
  tag: 'JavaScript',
  question: "Difference between async/await and Promises?",
  answer: `
    <p>
      Both <strong>Promises</strong> and <strong>async/await</strong> 
      are used to handle asynchronous operations in JavaScript.
      However, async/await is built on top of Promises 
      and provides cleaner syntax.
    </p>

    <hr/>

    <h2>1. Using Promises (.then)</h2>

    <pre>
<code>
fetch(url)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });
</code>
    </pre>

    <p>
      Uses chaining with .then() and .catch().
    </p>

    <hr/>

    <h2>2. Using async/await</h2>

    <pre>
<code>
async function fetchData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
</code>
    </pre>

    <p>
      Looks like synchronous code and uses try...catch for errors.
    </p>

    <hr/>

    <h2>Key Differences</h2>

    <pre>
<code>
Promises:
- Uses .then() and .catch()
- Can create chaining
- Harder to read when deeply nested

async/await:
- Built on top of Promises
- Cleaner and more readable
- Uses try...catch for errors
- Easier to debug
</code>
    </pre>

    <hr/>

    <h2>Important Note</h2>

    <pre>
<code>
- async/await does NOT replace Promises
- It is just syntactic sugar over Promises
- Under the hood, it still uses Promises
</code>
    </pre>

    <hr/>

    <h2>When to Use</h2>

    <pre>
<code>
Use Promises:
- When chaining multiple independent tasks

Use async/await:
- When writing sequential async code
- For better readability
</code>
    </pre>
  `
},
{
  id: 40,
  tag: 'JavaScript',
  question: "What is Event Loop, Call Stack, Callback Queue, Microtask vs Macrotask?",
  answer: `
    <p>
      These concepts explain how JavaScript handles asynchronous operations.
      JavaScript is single-threaded, but it can handle async tasks 
      using the Event Loop.
    </p>

    <hr/>

    <h2>1. Call Stack</h2>

    <p>
      The <strong>Call Stack</strong> is a data structure 
      that keeps track of function execution.
      It follows LIFO (Last In, First Out).
    </p>

    <pre>
<code>
function first() {
  second();
}

function second() {
  console.log("Hello");
}

first();
</code>
    </pre>

    <p>
      Execution order:
      <br/>
      first() → second() → console.log()
    </p>

    <hr/>

    <h2>2. Callback Queue (Task Queue)</h2>

    <p>
      The <strong>Callback Queue</strong> stores asynchronous callbacks 
      like setTimeout, setInterval, or DOM events.
    </p>

    <pre>
<code>
setTimeout(() => {
  console.log("Async Task");
}, 0);
</code>
    </pre>

    <p>
      The callback waits in the queue 
      until the call stack becomes empty.
    </p>

    <hr/>

    <h2>3. Event Loop</h2>

    <p>
      The <strong>Event Loop</strong> continuously checks:
    </p>

    <pre>
<code>
- Is the call stack empty?
- If yes, move callback from queue to stack
</code>
    </pre>

    <p>
      It allows JavaScript to handle asynchronous operations 
      even though it is single-threaded.
    </p>

    <hr/>

    <h2>Example Flow</h2>

    <pre>
<code>
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");
</code>
    </pre>

    <p>
      Output:
      <br/>
      Start
      <br/>
      End
      <br/>
      Timeout
    </p>

    <p>
      Because setTimeout callback goes to the queue,
      and runs only after the stack is empty.
    </p>

    <hr/>

    <h2>4. Microtask vs Macrotask</h2>

    <p>
      JavaScript has two types of queues:
    </p>

    <pre>
<code>
Microtask Queue:
- Promise.then()
- Promise.catch()
- MutationObserver

Macrotask Queue:
- setTimeout
- setInterval
- setImmediate
</code>
    </pre>

    <hr/>

    <h2>Important Rule</h2>

    <pre>
<code>
Microtasks are executed before macrotasks.
</code>
    </pre>

    <hr/>

    <h2>Example Showing Order</h2>

    <pre>
<code>
console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");
</code>
    </pre>

    <p>
      Output:
      <br/>
      Start
      <br/>
      End
      <br/>
      Promise
      <br/>
      Timeout
    </p>

    <p>
      Promise runs first because it is a microtask.
    </p>

    <hr/>

    <h2>Summary</h2>

    <pre>
<code>
Call Stack → Executes synchronous code
Callback Queue → Stores async callbacks
Event Loop → Moves tasks when stack is empty
Microtasks → Run before macrotasks
</code>
    </pre>
  `
},
{
  id: 41,
  tag: 'React Native',
  question: "How JavaScript runs in React Native?",
  answer: `
    <p>
      In React Native, JavaScript code runs inside a 
      <strong>JavaScript Engine</strong> (Hermes or JSC).
      It does not directly manipulate native UI.
    </p>

    <hr/>

    <h2>How It Works</h2>

    <pre>
<code>
JS Code → JS Thread → Bridge → Native Modules → UI
</code>
    </pre>

    <p>
      JavaScript communicates with native iOS/Android code 
      through a bridge.
    </p>

    <hr/>

    <h2>Important Points</h2>

    <pre>
<code>
- JS runs in separate thread
- UI rendering happens on native side
- Communication happens via bridge
</code>
    </pre>
  `
},
{
  id: 42,
  tag: 'React Native',
  question: "What is JS Thread?",
  answer: `
    <p>
      The <strong>JS Thread</strong> is where all JavaScript code runs.
      It handles business logic, state updates, API calls, and event handling.
    </p>

    <hr/>

    <h2>Responsibilities</h2>

    <pre>
<code>
- Execute JS code
- Handle state updates
- Process user interactions
- Communicate with native via bridge
</code>
    </pre>

    <p>
      If the JS thread is blocked, the app may freeze or become unresponsive.
    </p>
  `
},
{
  id: 43,
  tag: 'React Native',
  question: "What is Native Thread?",
  answer: `
    <p>
      The <strong>Native Thread</strong> is responsible for 
      rendering UI and handling animations.
    </p>

    <hr/>

    <h2>Responsibilities</h2>

    <pre>
<code>
- Render UI components
- Perform layout calculations
- Handle gestures and animations
</code>
    </pre>

    <p>
      Native thread ensures smooth UI performance.
    </p>
  `
},
{
  id: 44,
  tag: 'React Native',
  question: "What is JS Bridge?",
  answer: `
    <p>
      The <strong>JS Bridge</strong> is a communication layer 
      between JavaScript and native code.
    </p>

    <hr/>

    <h2>How It Works</h2>

    <pre>
<code>
JS Thread ↔ Bridge ↔ Native Thread
</code>
    </pre>

    <p>
      Communication is asynchronous.
      Data is serialized and sent across threads.
    </p>

    <hr/>

    <h2>Important Note</h2>

    <pre>
<code>
- Bridge can become bottleneck
- Too many bridge calls reduce performance
</code>
    </pre>
  `
},
{
  id: 45,
  tag: 'React Native',
  question: "Why avoid blocking JS Thread?",
  answer: `
    <p>
      Since React Native runs JavaScript on a single thread,
      blocking it will freeze the app.
    </p>

    <hr/>

    <h2>Example of Blocking Code</h2>

    <pre>
<code>
while(true) {
  console.log("Blocking");
}
</code>
    </pre>

    <p>
      This prevents user interaction and UI updates.
    </p>

    <hr/>

    <h2>Best Practices</h2>

    <pre>
<code>
- Avoid heavy calculations on JS thread
- Use InteractionManager
- Use background threads or native modules
</code>
    </pre>
  `
},
{
  id: 46,
  tag: 'React',
  question: "How State Updates Work in React?",
  answer: `
    <p>
      When state updates, React does not immediately update the UI.
      It schedules an update and re-renders the component.
    </p>

    <hr/>

    <h2>Flow</h2>

    <pre>
<code>
setState() → Re-render → Virtual DOM → Diffing → Update Real DOM
</code>
    </pre>

    <p>
      State updates are asynchronous and may be batched.
    </p>
  `
},
{
  id: 47,
  tag: 'React',
  question: "Why Use Pure Functions in Components?",
  answer: `
    <p>
      A pure function always returns the same output 
      for the same input and has no side effects.
    </p>

    <hr/>

    <h2>Why Important in React?</h2>

    <pre>
<code>
- Predictable UI
- Easier testing
- Better performance
- Enables React.memo optimization
</code>
    </pre>

    <p>
      React components should ideally be pure.
    </p>
  `
},
{
  id: 48,
  tag: 'React',
  question: "What is Reconciliation?",
  answer: `
    <p>
      <strong>Reconciliation</strong> is the process 
      where React compares the new Virtual DOM 
      with the previous one to detect changes.
    </p>

    <hr/>

    <h2>Process</h2>

    <pre>
<code>
1. Create new Virtual DOM
2. Compare with old Virtual DOM
3. Find differences (diffing)
4. Update only changed parts
</code>
    </pre>
  `
},
{
  id: 49,
  tag: 'React',
  question: "What is Virtual DOM?",
  answer: `
    <p>
      The <strong>Virtual DOM</strong> is a lightweight copy 
      of the real DOM stored in memory.
    </p>

    <hr/>

    <h2>How It Works</h2>

    <pre>
<code>
State Change → New Virtual DOM → Diffing → Update Real DOM
</code>
    </pre>

    <p>
      This makes UI updates faster and more efficient.
    </p>

    <hr/>

    <h2>Why It Is Important</h2>

    <pre>
<code>
- Improves performance
- Minimizes direct DOM manipulation
- Enables efficient re-rendering
</code>
    </pre>
  `
}




































































];



