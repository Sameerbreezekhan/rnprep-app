export const CodingQuestions = [
  {
    id: 1,
    tag: 'Coding',
    question: "Reverse a string?",
    answer: `
      <pre>
<code>
let a = "sameer";<br/>

let l = a.length;<br/>
let r = "";<br/>

const reverse = () => {<br/>
  for (let i = l - 1; i >= 0; i--) {<br/>
    r = r + a[i];<br/>
  }<br/>
  console.log(r);<br/>
};<br/>

reverse();<br/>
</code>
      </pre>
    `
  },
   {
    id: 2,
    tag: 'Coding',
    question: "Reverse a Number?",
    answer: `
      <pre>
<code>

let a=1234;</br>
let r=0;</br>
let b=a.toString();</br>

console.log(b.split('').reverse().join(''))</br>
const reverse=()=>{</br>
    while(a>0){</br>
    let d=a%10;</br>
    r=r*10+d;</br>
    a=Math.floor(a/10)</br>
  }</br>
    console.log(r)</br>
}</br>
reverse();

</code>
      </pre>
    `
  },
   {
    id: 3,
    tag: 'Coding',
    question: "Check whether number is pallindrome?",
    answer: `
      <pre>
<code>

let a=121;</br>
let r=0;</br>

// let b=a.toString()</br>
// let rev=b.split('').reverse().join('');</br>
//  console.log(a==rev?"yes":"no")</br>

const pallindrom=()=>{</br>
    let temp=a;</br>
    while(temp>0){</br>
        let d=temp%10;</br>
        r=r*10+d;</br>
        temp=Math.floor(temp/10);</br>
    }</br>
    console.log(a===r?"yes":"no")</br>
}</br>

pallindrom()


</code>
      </pre>
    `
  },
   {
    id: 4,
    tag: 'Coding',
    question: "Check whether string is pallindrome?",
    answer: `
      <pre>
<code>

let r="";</br>
let l=a.length;</br>

let rev=a.split('').reverse().join('');</br>
console.log(a===rev?"yes":"no")</br>

const pallindrom=()=>{</br>
    for(let i=l-1;i>=0;i--){</br>
        r=r+a[i];</br>
    }</br>
    console.log(a===r?"yes":"no");</br>
}</br>
pallindrom();</br>

</code>
      </pre>
    `
  },
    {
    id: 5,
    tag: 'Coding',
    question: "Find even odd number?",
    answer: `
      <pre>
<code>
let a=[1,2,3,4,5];</br>

let even=[];</br>
let odd=[];</br>

const find=()=>{</br>
    for(let i=0;i<=a.length-1;i++){</br>
         if(a[i]%2==0){</br>
    even=[...even,a[i]]</br>
    }</br>
    else{</br>
      odd=[...odd,a[i]]</br>
    }</br>
    }</br>
     console.log(even,odd)</br>
}</br>

find();</br>

 let even=a.filter((item)=>item%2==0)</br>
    let odd=a.filter((item)=>item%2!=0)</br>

</code>
      </pre>
    `
  },
     {
    id: 6,
    tag: 'Coding',
    question: "Sum of Digit?",
    answer: `
      <pre>
<code>
let b=a.toString();</br>
let arr=b.split('');</br>
let sum=arr.reduce((c,a)=>parseInt(c)+parseInt(a),0);</br>
console.log(sum);</br>

// const cal=()=>{</br>
    
//     let sum=0;</br>
//     while(a>0){</br>
//           let d=a%10;</br>
//           sum=sum+d;</br>
//           a=Math.floor(a/10)</br>
//     }</br>
//     console.log(sum)</br>
//   }</br>
//   cal()</br>
</code>
      </pre>
    `
  },
    {
    id: 7,
    tag: 'Coding',
    question: "Check Vovel?",
    answer: `
      <pre>
<code>

let a="sameer";</br>
let l=a.length;</br>
let v=["o","u","e","i","a"];</br>
let c=[];</br>

let b=a.split('')</br>
let r=b.filter((item)=>v.includes(item));</br>
console.log(r)</br>

// const find=()=>{</br>
//     for(let i=0;i<=l-1;i++){</br>
//         if(v.includes(a[i])){</br>
//             c=[...c,a[i]]</br>
//         }</br>
//     }</br>
//     console.log(c,c.length)</br>
// }</br>
// find()

</code>
      </pre>
    `
  },
     {
    id: 8,
    tag: 'Coding',
    question: "Find Max Min From Array?",
    answer: `
      <pre>
<code>
let a=[1,2,3,9,4,5]
let temp=a[0];
// console.log(Math.max(...a))
 const cal=()=>{
    for(let i=0;i<=a.length-1;i++){
            if(temp<a[i]){
            temp=a[i];
        }
    }
    console.log(temp)
 }
cal()
</code>
      </pre>
    `
  },
   {
    id: 9,
    tag: 'Coding',
    question: "Find Prime Number?",
    answer: `
      <pre>
<code>
// let a=17;</br>
let p=[]</br>
console.log(Math.sqrt(17))</br>
const isPrime=(a)=>{</br>
    if(a<=1){</br>
         return false</br>
    }</br>
    else{</br>
        for(let i=2;i<=Math.sqrt(a);i++){</br>
            if(a%i==0){</br>
               return false</br>
            }</br>
            }</br>
        return true</br>
    }</br>
}</br>

for(let i=0;i<=100;i++){</br>
    if(isPrime(i)){</br>
        p=[...p,i]</br>
    }</br>
}</br>
console.log(p,p.length)

</code>
      </pre>
    `
  },
   {
    id: 10,
    tag: 'Coding',
    question: "Remove Duplicate from array?",
    answer: `
      <pre>
<code>
let a=[1,2,3,9,4,5]</br>
let temp=a[0];</br>
// console.log(Math.max(...a))</br>
 const cal=()=>{</br>
    for(let i=0;i<=a.length-1;i++){</br>
            if(temp a[i]){</br>
            temp=a[i];</br>
        }</br>
    }</br>
    console.log(temp)</br>
 }</br>
cal()
</code>
      </pre>
    `
  },

  {
  id: 11,
  tag: 'Coding',
  question: "Second largest element in an array?",
  answer: `
<pre><code>
let a = [1, 2, 3, 4, 5];<br/><br/>

// Method 1: Remove max and find again<br/>
let b = Math.max(...a);<br/>
let c = a.filter((item) => item != b);<br/>
let d = Math.max(...c);<br/><br/>
console.log("Second Largest:", d);<br/><br/>

// Method 2: Using Set and Sort (Recommended)<br/>
let s = [...new Set(a)];<br/>
let p = s.sort((a, b) => b - a);<br/><br/>
console.log("Second Largest:", p[1]);
</code></pre>
`
},
{
  id: 12,
  tag: 'Coding',
  question: "Check frequency of elements in an array?",
  answer: `
<pre><code>
let a = [1, 2, 2, 3, 1, 4, 3, 2, 1];<br/><br/>

let obj = {};<br/><br/>

for (let i = 0; i <= a.length - 1; i++) {<br/>
  obj[a[i]] = (obj[a[i]] || 0) + 1;<br/>
}<br/><br/>

console.log(obj);<br/><br/>

// Output:<br/>
// { 1: 3, 2: 3, 3: 2, 4: 1 }
</code></pre>
`
},
{
  id: 13,
  tag: 'Coding',
  question: "Check Anagram?",
  answer: `
<pre><code>
let a = "silent";<br/>
let b = "lisent";<br/><br/>

const check = () => {<br/>
  if (a.length !== b.length) {<br/>
    console.log("Not anagram");<br/>
    return;<br/>
  } else {<br/>
    let p = a.toUpperCase().split('').sort().join('');<br/>
    let q = b.toUpperCase().split('').sort().join('');<br/><br/>
    console.log(p == q ? "It is anagram" : "Not anagram");<br/>
  }<br/>
};<br/><br/>

check();
</code></pre>
`
},
{
  id:  14,
  tag: 'Coding',
  question: "Flatten Array?",
  answer: `
<pre><code>
let a = [1, [2, 3], 4];<br/><br/>

// Method 1: Using flat()<br/>
console.log(a.flat());<br/><br/>

// Method 2: Manual flatten<br/>
let b = [];<br/><br/>

for (let i of a) {<br/>
  if (Array.isArray(i)) {<br/>
    b = [...b, ...i];<br/>
  } else {<br/>
    b = [...b, i];<br/>
  }<br/>
}<br/><br/>

console.log(b);
</code></pre>
`
},
{
  id: 15,
  tag: 'Coding',
  question: "Find Missing Number?",
  answer: `
<pre><code>
let a = [1, 2, 4, 5, 6];<br/>
let n = 6;<br/><br/>

let total = n * (n + 1) / 2;<br/>
let sum = a.reduce((x, y) => x + y, 0);<br/><br/>

console.log("Missing Number:", total - sum);
</code></pre>
`
},
{
  id: 16,
  tag: 'Coding',
  question: "Factorial of a Number?",
  answer: `
<pre><code>
let n = 5;<br/><br/>

const fac = (n) => {<br/>
  if (n == 0 || n == 1) {<br/>
    return 1;<br/>
  } else {<br/>
    return n * fac(n - 1);<br/>
  }<br/>
};<br/><br/>

let result = fac(n);<br/>
console.log(result);
</code></pre>
`
},
{
  id: 17,
  tag: 'Coding',
  question: "Bubble Sort?",
  answer: `
<pre><code>
let a = [2, 4, 2, 6, 1, 5, 3, 1];<br/><br/>

for (let i = 0; i <= a.length - 1; i++) {<br/>
  for (let j = 0; j <= a.length - i - 1; j++) {<br/>
    if (a[j] > a[j + 1]) {<br/>
      let temp = a[j];<br/>
      a[j] = a[j + 1];<br/>
      a[j + 1] = temp;<br/>
    }<br/>
  }<br/>
}<br/><br/>

console.log(a);
</code></pre>
`
}








];







