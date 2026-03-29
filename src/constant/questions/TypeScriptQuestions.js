export const TypeScriptQuestions = [
  
{
  id: 1,
  tag: 'TypeScript',
  question: "What is TypeScript?",
  answer: `
    <p>
      <strong>TypeScript</strong> is a strongly typed programming language built on top of JavaScript.
    </p>

    <hr/>

    <h2>Why TypeScript?</h2>

    <ul>
      <li>Adds static typing</li>
      <li>Better IDE support</li>
      <li>Catches errors at compile time</li>
      <li>Compiles to JavaScript</li>
    </ul>

    <p>
      In simple words, TypeScript is JavaScript with types.
    </p>
  `
},
{
  id: 2,
  tag: 'TypeScript',
  question: "Why do we use TypeScript?",
  answer: `
    <p>
      We use <strong>TypeScript</strong> to write safer and scalable applications.
    </p>

    <hr/>

    <h2>Benefits</h2>

    <ul>
      <li>Early error detection</li>
      <li>Improved code readability</li>
      <li>Great for large projects</li>
      <li>Better auto-completion</li>
    </ul>
  `
},
{
  id: 3,
  tag: 'TypeScript',
  question: "How is TypeScript different from JavaScript?",
  answer: `
    <p>
      TypeScript is a superset of JavaScript.
    </p>

    <hr/>

    <h2>Main Differences</h2>

    <ul>
      <li>TypeScript supports static typing</li>
      <li>JavaScript is dynamically typed</li>
      <li>TypeScript must be compiled</li>
      <li>JavaScript runs directly in browser</li>
    </ul>
  `
},
{
  id: 4,
  tag: 'TypeScript',
  question: "What are basic data types in TypeScript?",
  answer: `
    <p>
      TypeScript provides several built-in data types.
    </p>

    <hr/>

    <h2>Primitive Types</h2>

    <ul>
      <li>string</li>
      <li>number</li>
      <li>boolean</li>
      <li>null</li>
      <li>undefined</li>
    </ul>

    <hr/>

    <h2>Special Types</h2>

    <ul>
      <li>any</li>
      <li>unknown</li>
      <li>void</li>
      <li>never</li>
    </ul>
  `
},
{
  id: 5,
  tag: 'TypeScript',
  question: "What is Type Annotation?",
  answer: `
    <p>
      <strong>Type Annotation</strong> means explicitly defining the type of a variable.
    </p>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
let name: string = "sameer";
let age: number = 25;
</code>
    </pre>
  `
},
{
  id: 6,
  tag: 'TypeScript',
  question: "What is 'any' type?",
  answer: `
    <p>
      The <strong>any</strong> type disables type checking.
    </p>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
let value: any = 10;
value = "Hello";
value = true;
</code>
    </pre>

    <p>
      Not recommended for large applications.
    </p>
  `
},
{
  id: 7,
  tag: 'TypeScript',
  question: "What is 'unknown' type?",
  answer: `
    <p>
      <strong>Unknown</strong> is a safer alternative to any.
    </p>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
let value: unknown = "Hello";

// Need type checking
if (typeof value === "string") {
  console.log(value.toUpperCase());
}
</code>
    </pre>
  `
},
{
  id: 8,
  tag: 'TypeScript',
  question: "What is Union Type?",
  answer: `
    <p>
      Union type allows a variable to hold multiple types.
    </p>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
let id: string | number;

id = 101;
id = "A102";
</code>
    </pre>
  `
},
{
  id: 9,
  tag: 'TypeScript',
  question: "What is Interface?",
  answer: `
    <p>
      Interface defines the structure of an object.
    </p>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
interface User {
  name: string;
  age: number;
}
</code>
    </pre>
  `
},
{
  id: 10,
  tag: 'TypeScript',
  question: "What is Type Alias?",
  answer: `
    <p>
      Type alias is used to create a custom type.
    </p>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
type User = {
  name: string;
  age: number;
};
</code>
    </pre>
  `
},
{
  id: 11,
  tag: 'TypeScript',
  question: "Difference between Interface and Type?",
  answer: `
    <p>
      Both are used to define types.
    </p>

    <hr/>

    <h2>Differences</h2>

    <ul>
      <li>Interface supports declaration merging</li>
      <li>Type supports union & intersection</li>
      <li>Interface is mainly used for objects</li>
    </ul>
  `
},
{
  id: 12,
  tag: 'TypeScript',
  question: "What is Tuple?",
  answer: `
    <p>
      Tuple is a fixed-length array with specific types.
    </p>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
let user: [string, number] = ["sameer", 25];
</code>
    </pre>
  `
},
{
  id: 13,
  tag: 'TypeScript',
  question: "What is Enum?",
  answer: `
    <p>
      Enum defines a set of named constants.
    </p>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
enum Role {
  Admin,
  User,
  Guest
}
</code>
    </pre>
  `
},
{
  id: 14,
  tag: 'TypeScript',
  question: "What is Optional Property?",
  answer: `
    <p>
      Optional properties are defined using <strong>?</strong>.
    </p>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
interface User {
  name: string;
  age?: number;
}
</code>
    </pre>
  `
},
{
  id: 15,
  tag: 'TypeScript',
  question: "How to define Function type?",
  answer: `
    <p>
      We can define types for parameters and return type.
    </p>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
function add(a: number, b: number): number {
  return a + b;
}
</code>
    </pre>
  `
},
{
  id: 16,
  tag: 'TypeScript',
  question: "What is 'void' in TypeScript?",
  answer: `
    <p>
      The <strong>void</strong> type is used when a function does not return anything.
    </p>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
function log(): void {
  console.log("Hello");
}
</code>
    </pre>
  `
},
{
  id: 17,
  tag: 'TypeScript',
  question: "What is Type Inference?",
  answer: `
    <p>
      TypeScript automatically detects the type based on assigned value.
    </p>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
let city = "Delhi"; // inferred as string
</code>
    </pre>
  `
},
{
  id: 18,
  tag: 'TypeScript',
  question: "Can TypeScript be used with React Native?",
  answer: `
    <p>
      Yes, TypeScript works perfectly with React and React Native.
    </p>

    <hr/>

    <h2>Benefits in React Native</h2>

    <ul>
      <li>Better props validation</li>
      <li>Safer state management</li>
      <li>Improved developer experience</li>
    </ul>
  `
}
];