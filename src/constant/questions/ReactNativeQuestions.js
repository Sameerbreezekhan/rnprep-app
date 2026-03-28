export const ReactNativeQuestions = [

  {
    id: 1,
    tag: 'ReactNative',
    question: "What is React Native?",
    answer: `
      <p>
        <strong>React Native</strong> is an open-source framework 
        developed by Facebook that allows developers to build 
        mobile applications using JavaScript and React.
      </p>

      <hr/>

      <h2>Key Idea</h2>

      <p>
        React Native allows you to write code once using JavaScript 
        and run it on both <strong>iOS</strong> and <strong>Android</strong>.
      </p>

      <pre>
<code>
JavaScript Code → React Native → Native Components (iOS / Android)
</code>
      </pre>

      <hr/>

      <h2>How It Works</h2>

      <pre>
<code>
- JS runs on JS Thread
- Communicates with Native via Bridge (or JSI in new architecture)
- Native thread renders actual UI components
</code>
      </pre>

      <hr/>

      <h2>Advantages</h2>

      <pre>
<code>
- Cross-platform development
- Reusable code
- Large community support
- Fast development cycle (Hot Reload)
- Uses native components (better performance than hybrid apps)
</code>
      </pre>

      <hr/>

      <h2>Example</h2>

      <pre>
<code>
import { View, Text } from "react-native";

function App() {
  return (
    <View>
      <Text>Hello React Native</Text>
    </View>
  );
}
</code>
      </pre>

      <hr/>

      <h2>Important Note</h2>

      <p>
        React Native is not a webview-based framework.
        It uses real native UI components under the hood.
      </p>
    `
  },
  {
  id: 2,
  tag: 'ReactNative',
  question: "Difference between React and React Native?",
  answer: `
    <p>
      <strong>React</strong> and <strong>React Native</strong> are both 
      developed by Facebook and use similar concepts like components, 
      hooks, and state management. However, they are used for different platforms.
    </p>

    <hr/>

    <h2>1. Platform</h2>

    <pre>
<code>
React:
- Used for building web applications
- Runs in the browser

React Native:
- Used for building mobile applications
- Runs on iOS and Android
</code>
    </pre>

    <hr/>

    <h2>2. Components</h2>

    <pre>
<code>
React:
- Uses HTML elements like div, span, button

React Native:
- Uses native components like View, Text, TouchableOpacity
</code>
    </pre>

    <hr/>

    <h2>3. Styling</h2>

    <pre>
<code>
React:
- Uses CSS

React Native:
- Uses JavaScript objects (StyleSheet)
- Uses Flexbox by default
</code>
    </pre>

    <hr/>

    <h2>4. Rendering</h2>

    <pre>
<code>
React:
- Renders to the DOM

React Native:
- Renders to native UI components
- Uses bridge/JSI to communicate with native side
</code>
    </pre>

    <hr/>

    <h2>5. Example</h2>

    <pre>
<code>
// React (Web)
function App() {
  return <div>Hello</div>;
}

// React Native (Mobile)
function App() {
  return <Text>Hello</Text>;
}
</code>
    </pre>

    <hr/>

    <h2>Summary</h2>

    <pre>
<code>
React → Web Development
React Native → Mobile App Development

React → HTML + CSS
React Native → Native Components + StyleSheet

Both → Same core concepts (components, hooks, state)
</code>
    </pre>
  `
},
{
  id: 3,
  tag: 'ReactNative',
  question: "What are the advantages of React Native?",
  answer: `
    <p>
      React Native provides several advantages for building 
      cross-platform mobile applications efficiently.
    </p>

    <hr/>

    <h2>1. Cross-Platform Development</h2>

    <pre>
<code>
- Single codebase
- Runs on both iOS and Android
- Reduces development time
</code>
    </pre>

    <hr/>

    <h2>2. Code Reusability</h2>

    <pre>
<code>
- Share business logic across platforms
- Reuse components
- Faster feature implementation
</code>
    </pre>

    <hr/>

    <h2>3. Faster Development</h2>

    <pre>
<code>
- Hot Reloading / Fast Refresh
- Large ecosystem of libraries
- Strong community support
</code>
    </pre>

    <hr/>

    <h2>4. Native Performance</h2>

    <pre>
<code>
- Uses real native components
- Better performance than webview-based apps
- Optimized UI rendering
</code>
    </pre>

    <hr/>

    <h2>5. Strong Developer Experience</h2>

    <pre>
<code>
- Uses JavaScript and React concepts
- Easy learning curve for React developers
- Easy debugging tools
</code>
    </pre>

    <hr/>

    <h2>6. Third-Party Plugin Support</h2>

    <pre>
<code>
- Access to device features (Camera, GPS, Storage)
- Native modules support
- Easy integration with existing native apps
</code>
    </pre>

    <hr/>

    <h2>Summary</h2>

    <pre>
<code>
- Write once, run on multiple platforms
- Faster development
- Good performance
- Reusable components
- Large ecosystem
</code>
    </pre>
  `
},
{
  id: 4,
  tag: 'ReactNative',
  question: "What is JSX?",
  answer: `
    <p>
      <strong>JSX</strong> stands for <strong>JavaScript XML</strong>.
      It is a syntax extension for JavaScript that allows us 
      to write UI structure inside JavaScript code.
    </p>

    <hr/>

    <h2>Basic Example</h2>

    <pre>
<code>
function App() {
  return (
    <View>
      <Text>Hello React Native</Text>
    </View>
  );
}
</code>
    </pre>

    <p>
      JSX looks like HTML, but it is actually JavaScript.
    </p>

    <hr/>

    <h2>Behind the Scenes</h2>

    <pre>
<code>
// JSX
<Text>Hello</Text>

// Converted to
React.createElement(Text, null, "Hello");
</code>
    </pre>

    <p>
      JSX is converted into React.createElement() 
      before the code runs.
    </p>

    <hr/>

    <h2>Why JSX is Used</h2>

    <pre>
<code>
- Makes UI code readable
- Combines logic and UI together
- Improves developer experience
</code>
    </pre>

    <hr/>

    <h2>Important Rules</h2>

    <pre>
<code>
- Must return a single parent element
- Use {} to write JavaScript inside JSX
- Use className (React Web) or style object (React Native)
</code>
    </pre>

    <hr/>

    <h2>Example with JavaScript Inside JSX</h2>

    <pre>
<code>
const name = "sameer";

<Text>Hello {name}</Text>
</code>
    </pre>
  `
},
{
  id: 5,
  tag: 'ReactNative',
  question: "What is the difference between View, Text, and Image?",
  answer: `
    <p>
      <strong>View</strong>, <strong>Text</strong>, and <strong>Image</strong> 
      are basic building blocks in React Native used to create UI.
      Each component has a specific purpose.
    </p>

    <hr/>

    <h2>1. View</h2>

    <p>
      View is a container component used to structure the layout.
      It is similar to a div in web development.
    </p>

    <pre>
<code>
import { View } from "react-native";

<View style={{ padding: 10 }}>
  <Text>Hello</Text>
</View>
</code>
    </pre>

    <pre>
<code>
- Used for layout
- Supports Flexbox
- Can contain other components
</code>
    </pre>

    <hr/>

    <h2>2. Text</h2>

    <p>
      Text is used to display text content.
      In React Native, all text must be wrapped inside a Text component.
    </p>

    <pre>
<code>
import { Text } from "react-native";

<Text>Hello React Native</Text>
</code>
    </pre>

    <pre>
<code>
- Displays text
- Supports styling like fontSize, color
- Required for rendering strings
</code>
    </pre>

    <hr/>

    <h2>3. Image</h2>

    <p>
      Image is used to display images in the app.
    </p>

    <pre>
<code>
import { Image } from "react-native";

<Image
  source={{ uri: "https://example.com/image.png" }}
  style={{ width: 100, height: 100 }}
/>
</code>
    </pre>

    <pre>
<code>
- Displays local or remote images
- Requires width and height
- Supports resizeMode
</code>
    </pre>

    <hr/>

    <h2>Key Differences</h2>

    <pre>
<code>
View  → Layout container
Text  → Displays text
Image → Displays images
</code>
    </pre>

    <p>
      These three components are the foundation of building UI in React Native.
    </p>
  `
},
{
  id: 6,
  tag: 'ReactNative',
  question: "How is styling done in React Native?",
  answer: `
    <p>
      In React Native, styling is done using JavaScript objects 
      instead of CSS files.
      Styles are applied using the <strong>style</strong> prop.
    </p>

    <hr/>

    <h2>1. Inline Styling</h2>

    <pre>
<code>
<View style={{ backgroundColor: "blue", padding: 10 }}>
  <Text style={{ color: "white" }}>Hello</Text>
</View>
</code>
    </pre>

    <p>
      Styles are written as JavaScript objects.
      Property names use camelCase instead of CSS syntax.
    </p>

    <hr/>

    <h2>2. Using StyleSheet (Recommended)</h2>

    <pre>
<code>
import { StyleSheet, View, Text } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    padding: 10
  },
  text: {
    color: "white",
    fontSize: 16
  }
});

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
    </View>
  );
}
</code>
    </pre>

    <p>
      StyleSheet.create() improves readability and performance.
    </p>

    <hr/>

    <h2>3. Flexbox Layout</h2>

    <pre>
<code>
container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
}
</code>
    </pre>

    <p>
      React Native uses Flexbox by default for layout.
    </p>

    <hr/>

    <h2>Important Differences from CSS</h2>

    <pre>
<code>
- No separate CSS files
- Uses camelCase properties
- No class selectors
- Units like px are not required
</code>
    </pre>

    <hr/>

    <h2>Summary</h2>

    <pre>
<code>
- Styling is done using JS objects
- Use style prop
- StyleSheet.create() is recommended
- Flexbox is default layout system
</code>
    </pre>
  `
},
{
  id: 7,
  tag: 'ReactNative',
  question: "Difference between StyleSheet and Inline Styles?",
  answer: `
    <p>
      In React Native, styles can be applied using 
      <strong>inline styles</strong> or <strong>StyleSheet.create()</strong>.
      Both work, but they have differences in performance and readability.
    </p>

    <hr/>

    <h2>1. Inline Styles</h2>

    <pre>
<code>
<View style={{ backgroundColor: "blue", padding: 10 }}>
  <Text style={{ color: "white" }}>Hello</Text>
</View>
</code>
    </pre>

    <pre>
<code>
- Written directly inside the component
- Creates new style object on every render
- Harder to maintain in large apps
</code>
    </pre>

    <hr/>

    <h2>2. StyleSheet.create()</h2>

    <pre>
<code>
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    padding: 10
  }
});

<View style={styles.container}>
  <Text>Hello</Text>
</View>
</code>
    </pre>

    <pre>
<code>
- Styles are defined once
- Better performance
- Cleaner and reusable
- Easier to manage large projects
</code>
    </pre>

    <hr/>

    <h2>Performance Difference</h2>

    <pre>
<code>
Inline Styles:
- New object created on each render
- Can affect performance in large lists

StyleSheet:
- Optimized internally
- Reduces unnecessary re-renders
</code>
    </pre>

    <hr/>

    <h2>When to Use</h2>

    <pre>
<code>
Use Inline Styles:
- Dynamic styling
- Small components

Use StyleSheet:
- Large applications
- Reusable styles
- Better maintainability
</code>
    </pre>

    <hr/>

    <h2>Summary</h2>

    <pre>
<code>
Inline → Quick but less optimized
StyleSheet → Structured and better performance
</code>
    </pre>
  `
},
{
  id: 8,
  tag: 'ReactNative',
  question: "What is Metro Bundler?",
  answer: `
    <p>
      <strong>Metro Bundler</strong> is the JavaScript bundler 
      used by React Native.
      It takes your JavaScript code and dependencies 
      and bundles them into a single file that can run on mobile devices.
    </p>

    <hr/>

    <h2>What Metro Does</h2>

    <pre>
<code>
- Bundles JavaScript files
- Resolves dependencies
- Transpiles modern JS (via Babel)
- Enables Fast Refresh
- Optimizes code for production
</code>
    </pre>

    <hr/>

    <h2>How It Works</h2>

    <pre>
<code>
Your Code → Metro Bundler → Single JS Bundle → Runs in JS Engine (Hermes/JSC)
</code>
    </pre>

    <hr/>

    <h2>Key Features</h2>

    <pre>
<code>
- Fast incremental bundling
- Hot Reload / Fast Refresh support
- Caching for better performance
- Works specifically for React Native
</code>
    </pre>

    <hr/>

    <h2>When It Runs</h2>

    <pre>
<code>
npx react-native start
</code>
    </pre>

    <p>
      This command starts the Metro development server.
    </p>

    <hr/>

    <h2>Why It Is Important</h2>

    <pre>
<code>
- Converts modern JS into compatible code
- Handles assets like images
- Creates production bundles
- Essential for running React Native apps
</code>
    </pre>
  `
},
{
  id: 9,
  tag: 'ReactNative',
  question: "What are Props and State?",
  answer: `
    <p>
      <strong>Props</strong> and <strong>State</strong> are used 
      to manage data in React and React Native components.
    </p>

    <hr/>

    <h2>1. Props</h2>

    <p>
      Props (short for properties) are used to pass data 
      from a parent component to a child component.
      Props are read-only.
    </p>

    <pre>
<code>
// Parent Component
<MyComponent name="sameer" />

// Child Component
function MyComponent(props) {
  return <Text>Hello {props.name}</Text>;
}
</code>
    </pre>

    <pre>
<code>
- Passed from parent to child
- Immutable (cannot be changed)
- Used for component communication
</code>
    </pre>

    <hr/>

    <h2>2. State</h2>

    <p>
      State is used to store data that can change 
      inside a component.
      When state updates, the component re-renders.
    </p>

    <pre>
<code>
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
}
</code>
    </pre>

    <pre>
<code>
- Managed inside the component
- Mutable using setState / useState
- Triggers re-render when updated
</code>
    </pre>

    <hr/>

    <h2>Key Differences</h2>

    <pre>
<code>
Props:
- Passed from parent
- Read-only
- Used for configuration

State:
- Managed inside component
- Can change over time
- Controls dynamic behavior
</code>
    </pre>

    <hr/>

    <h2>Summary</h2>

    <pre>
<code>
Props → External data
State → Internal data
</code>
    </pre>
  `
},
{
  id: 10,
  tag: 'ReactNative',
  question: "Difference between Controlled and Uncontrolled Components?",
  answer: `
    <p>
      Controlled and Uncontrolled components refer to 
      how form data is handled in React or React Native.
    </p>

    <hr/>

    <h2>1. Controlled Component</h2>

    <p>
      In a controlled component, form data is controlled 
      by React state.
    </p>

    <pre>
<code>
import { useState } from "react";
import { TextInput } from "react-native";

function Example() {
  const [text, setText] = useState("");

  return (
    <TextInput
      value={text}
      onChangeText={setText}
      placeholder="Enter text"
    />
  );
}
</code>
    </pre>

    <pre>
<code>
- Value is stored in state
- React controls the input
- Single source of truth
</code>
    </pre>

    <hr/>

    <h2>2. Uncontrolled Component</h2>

    <p>
      In an uncontrolled component, form data is handled 
      by the component itself using refs.
    </p>

    <pre>
<code>
import { useRef } from "react";
import { TextInput } from "react-native";

function Example() {
  const inputRef = useRef(null);

  const handlePress = () => {
    console.log(inputRef.current._lastNativeText);
  };

  return (
    <TextInput
      ref={inputRef}
      placeholder="Enter text"
    />
  );
}
</code>
    </pre>

    <pre>
<code>
- Value is not stored in state
- Uses ref to access value
- Less React control
</code>
    </pre>

    <hr/>

    <h2>Key Differences</h2>

    <pre>
<code>
Controlled:
- Managed by React state
- Easier validation
- Predictable behavior

Uncontrolled:
- Managed by DOM / Native
- Accessed using refs
- Less re-rendering
</code>
    </pre>

    <hr/>

    <h2>When to Use</h2>

    <pre>
<code>
Use Controlled:
- Forms
- Validation
- Real-time UI updates

Use Uncontrolled:
- Simple inputs
- Performance-sensitive cases
</code>
    </pre>
  `
},
{
  id: 11,
  tag: 'ReactNative',
  question: "What are Core Components in React Native?",
  answer: `
    <p>
      <strong>Core components</strong> are the basic built-in components 
      provided by React Native to build mobile applications.
      They are platform-independent and map to native UI elements.
    </p>

    <hr/>

    <h2>1. View</h2>

    <pre>
<code>
- Container component
- Used for layout
- Supports Flexbox
</code>
    </pre>

    <hr/>

    <h2>2. Text</h2>

    <pre>
<code>
- Displays text
- Required for rendering strings
- Supports text styling
</code>
    </pre>

    <hr/>

    <h2>3. Image</h2>

    <pre>
<code>
- Displays images
- Supports local and remote images
- Requires width and height
</code>
    </pre>

    <hr/>

    <h2>4. TextInput</h2>

    <pre>
<code>
- Used for user input
- Supports controlled and uncontrolled usage
</code>
    </pre>

    <hr/>

    <h2>5. ScrollView</h2>

    <pre>
<code>
- Scrollable container
- Renders all children at once
</code>
    </pre>

    <hr/>

    <h2>6. FlatList</h2>

    <pre>
<code>
- Optimized list component
- Lazy loads items
- Better performance for large lists
</code>
    </pre>

    <hr/>

    <h2>7. Touchable Components</h2>

    <pre>
<code>
- TouchableOpacity
- TouchableHighlight
- Pressable
</code>
    </pre>

    <p>
      Used for handling user interactions.
    </p>

    <hr/>

    <h2>8. ActivityIndicator</h2>

    <pre>
<code>
- Displays loading spinner
</code>
    </pre>

    <hr/>

    <h2>Summary</h2>

    <pre>
<code>
Layout → View
Text → Text
Images → Image
Input → TextInput
Lists → ScrollView / FlatList
Interaction → Touchable / Pressable
Loading → ActivityIndicator
</code>
    </pre>
  `
},
{
  id: 12,
  tag: 'ReactNative',
  question: "Difference between ScrollView and FlatList?",
  answer: `
    <p>
      <strong>ScrollView</strong> and <strong>FlatList</strong> 
      are used to render scrollable content in React Native,
      but they behave differently in terms of performance.
    </p>

    <hr/>

    <h2>1. ScrollView</h2>

    <p>
      ScrollView renders all its child components at once.
    </p>

    <pre>
<code>
import { ScrollView, Text } from "react-native";

<ScrollView>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
  <Text>Item 3</Text>
</ScrollView>
</code>
    </pre>

    <pre>
<code>
- Renders everything at once
- Suitable for small lists
- Simple to use
- Can cause performance issues with large data
</code>
    </pre>

    <hr/>

    <h2>2. FlatList</h2>

    <p>
      FlatList renders items lazily (only what is visible on screen).
    </p>

    <pre>
<code>
import { FlatList, Text } from "react-native";

<FlatList
  data={[1, 2, 3]}
  renderItem={({ item }) => <Text>{item}</Text>}
  keyExtractor={(item) => item.toString()}
/>
</code>
    </pre>

    <pre>
<code>
- Renders items lazily
- Optimized for large lists
- Supports pagination and pull-to-refresh
- Better memory management
</code>
    </pre>

    <hr/>

    <h2>Performance Difference</h2>

    <pre>
<code>
ScrollView:
- Loads all items in memory
- Slower for large data

FlatList:
- Loads items on demand
- High performance
</code>
    </pre>

    <hr/>

    <h2>When to Use</h2>

    <pre>
<code>
Use ScrollView:
- Small static content
- Forms or simple layouts

Use FlatList:
- Large dynamic lists
- API data rendering
- Infinite scrolling
</code>
    </pre>

    <hr/>

    <h2>Summary</h2>

    <pre>
<code>
ScrollView → Small content, renders all at once
FlatList   → Large data, optimized rendering
</code>
    </pre>
  `
},
{
  id: 13,
  tag: 'ReactNative',
  question: "When should you use SectionList?",
  answer: `
    <p>
      <strong>SectionList</strong> is used when you need to display 
      grouped data in a list with section headers.
      It is useful when your data is divided into categories.
    </p>

    <hr/>

    <h2>When to Use SectionList</h2>

    <pre>
<code>
- Grouped data (e.g., contacts by alphabet)
- Category-based lists
- Chat messages grouped by date
- Settings grouped into sections
</code>
    </pre>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
import { SectionList, Text, View } from "react-native";

const DATA = [
  {
    title: "Fruits",
    data: ["Apple", "Banana"]
  },
  {
    title: "Vegetables",
    data: ["Carrot", "Potato"]
  }
];

<SectionList
  sections={DATA}
  keyExtractor={(item, index) => item + index}
  renderItem={({ item }) => <Text>{item}</Text>}
  renderSectionHeader={({ section }) => (
    <Text>{section.title}</Text>
  )}
/>
</code>
    </pre>

    <hr/>

    <h2>Why Not FlatList?</h2>

    <pre>
<code>
FlatList:
- Best for simple lists
- Single-level data

SectionList:
- Best for grouped or categorized data
- Supports section headers
</code>
    </pre>

    <hr/>

    <h2>Performance</h2>

    <pre>
<code>
- SectionList is built on VirtualizedList
- Supports lazy loading
- Efficient for large grouped data
</code>
    </pre>

    <hr/>

    <h2>Summary</h2>

    <pre>
<code>
Use SectionList:
- When data is grouped
- When you need headers per section
- When rendering categorized lists
</code>
    </pre>
  `
},
{
  id: 14,
  tag: 'ReactNative',
  question: "What is SafeAreaView?",
  answer: `
    <p>
      <strong>SafeAreaView</strong> is a component in React Native 
      that ensures content is rendered within the safe area boundaries 
      of a device.
    </p>

    <p>
      It prevents content from overlapping with:
    </p>

    <pre>
<code>
- Notches
- Status bar
- Home indicator (iPhone)
- Rounded screen corners
</code>
    </pre>

    <hr/>

    <h2>Why It Is Needed</h2>

    <p>
      Modern devices (especially iPhones) have notches 
      and special screen areas where UI can be hidden.
      SafeAreaView adds automatic padding to avoid that.
    </p>

    <hr/>

    <h2>Basic Example</h2>

    <pre>
<code>
import { SafeAreaView, Text } from "react-native";

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text>Hello React Native</Text>
    </SafeAreaView>
  );
}
</code>
    </pre>

    <hr/>

    <h2>Important Note</h2>

    <pre>
<code>
- Works mainly for iOS
- For better cross-platform support,
  use react-native-safe-area-context
</code>
    </pre>

    <hr/>

    <h2>Summary</h2>

    <pre>
<code>
SafeAreaView:
- Prevents UI overlap
- Handles device notches
- Ensures proper layout on modern devices
</code>
    </pre>
  `
},
{
  id: 15,
  tag: 'ReactNative',
  question: "What is KeyboardAvoidingView?",
  answer: `
    <p>
      <strong>KeyboardAvoidingView</strong> is a component in React Native 
      that automatically adjusts the layout when the keyboard appears.
    </p>

    <p>
      It prevents input fields from being hidden behind the keyboard.
    </p>

    <hr/>

    <h2>Why It Is Needed</h2>

    <pre>
<code>
- When TextInput is focused
- Keyboard opens
- Content may get hidden
- KeyboardAvoidingView shifts layout automatically
</code>
    </pre>

    <hr/>

    <h2>Basic Example</h2>

    <pre>
<code>
import {
  KeyboardAvoidingView,
  TextInput,
  Platform
} from "react-native";

function App() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TextInput placeholder="Enter text" />
    </KeyboardAvoidingView>
  );
}
</code>
    </pre>

    <hr/>

    <h2>behavior Prop</h2>

    <pre>
<code>
padding → Adds padding (iOS commonly)
height  → Adjusts height
position → Moves entire view
</code>
    </pre>

    <hr/>

    <h2>Important Notes</h2>

    <pre>
<code>
- Mostly required for forms
- Works better with ScrollView
- For complex layouts, consider 
  react-native-keyboard-aware-scroll-view
</code>
    </pre>

    <hr/>

    <h2>Summary</h2>

    <pre>
<code>
KeyboardAvoidingView:
- Prevents keyboard overlap
- Adjusts UI automatically
- Useful for forms and login screens
</code>
    </pre>
  `
},
{
  id: 16,
  tag: 'ReactNative',
  question: "What is Dimensions API?",
  answer: `
    <p>
      The <strong>Dimensions API</strong> in React Native 
      is used to get the width and height of the device screen.
    </p>

    <p>
      It is commonly used to create responsive layouts.
    </p>

    <hr/>

    <h2>Basic Usage</h2>

    <pre>
<code>
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

console.log(width);
console.log(height);
</code>
    </pre>

    <hr/>

    <h2>Window vs Screen</h2>

    <pre>
<code>
Dimensions.get("window") → Visible screen area
Dimensions.get("screen") → Full device screen
</code>
    </pre>

    <hr/>

    <h2>Example Usage</h2>

    <pre>
<code>
const styles = {
  box: {
    width: width * 0.5,
    height: 100
  }
};
</code>
    </pre>

    <p>
      This makes the component responsive 
      based on screen width.
    </p>

    <hr/>

    <h2>Limitation</h2>

    <pre>
<code>
- Does not automatically update on orientation change
- Needs event listener for dynamic updates
</code>
    </pre>

    <hr/>

    <h2>Better Alternative</h2>

    <pre>
<code>
useWindowDimensions() hook
</code>
    </pre>

    <p>
      useWindowDimensions updates automatically 
      when screen size changes.
    </p>

    <hr/>

    <h2>Summary</h2>

    <pre>
<code>
Dimensions API:
- Gets device width and height
- Used for responsive design
- Static unless manually updated
</code>
    </pre>
  `
},
{
  id: 17,
  tag: 'ReactNative',
  question: "How do you handle responsive design in React Native?",
  answer: `
    <p>
      Responsive design in React Native ensures that the UI 
      adapts properly to different screen sizes, resolutions, 
      and orientations.
    </p>

    <hr/>

    <h2>1. Use Flexbox (Default Layout System)</h2>

    <pre>
<code>
container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center"
}
</code>
    </pre>

    <p>
      Flexbox helps distribute space dynamically 
      across different screen sizes.
    </p>

    <hr/>

    <h2>2. Use Dimensions API</h2>

    <pre>
<code>
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

width: width * 0.8
</code>
    </pre>

    <p>
      Useful for calculating dynamic width and height.
    </p>

    <hr/>

    <h2>3. Use useWindowDimensions (Recommended)</h2>

    <pre>
<code>
import { useWindowDimensions } from "react-native";

const { width } = useWindowDimensions();
</code>
    </pre>

    <p>
      Automatically updates when orientation changes.
    </p>

    <hr/>

    <h2>4. Percentage-Based Layout</h2>

    <pre>
<code>
width: "90%",
height: "50%"
</code>
    </pre>

    <p>
      Using percentages helps scale UI across devices.
    </p>

    <hr/>

    <h2>5. Scalable Utility Functions</h2>

    <pre>
<code>
const scale = size => width / 375 * size;
</code>
    </pre>

    <p>
      Used to scale fonts and spacing based on screen size.
    </p>

    <hr/>

    <h2>6. Platform-Specific Adjustments</h2>

    <pre>
<code>
import { Platform } from "react-native";

Platform.OS === "ios" ? 20 : 10
</code>
    </pre>

    <hr/>

    <h2>Best Practices</h2>

    <pre>
<code>
- Avoid fixed width/height
- Use flex instead of absolute positioning
- Test on multiple screen sizes
- Handle orientation changes
</code>
    </pre>

    <hr/>

    <h2>Summary</h2>

    <pre>
<code>
Responsive Design =
Flexbox + Dynamic Dimensions + Scalable Units + Testing
</code>
    </pre>
  `
},
{
  id: 18,
  tag: 'React',
  question: "What are Hooks?",
  answer: `
    <p>
      <strong>Hooks</strong> are special functions in React 
      that allow functional components to use state 
      and lifecycle features.
    </p>

    <hr/>

    <h2>Why Hooks?</h2>

    <pre>
<code>
- Use state without class components
- Reuse logic across components
- Cleaner and more readable code
</code>
    </pre>

    <hr/>

    <h2>Common Hooks</h2>

    <pre>
<code>
useState
useEffect
useRef
useMemo
useCallback
</code>
    </pre>
  `
},
{
  id: 19,
  tag: 'React',
  question: "Explain useState",
  answer: `
    <p>
      <strong>useState</strong> is a hook used to add state 
      to functional components.
    </p>

    <pre>
<code>
const [count, setCount] = useState(0);
</code>
    </pre>

    <pre>
<code>
- count → current state
- setCount → function to update state
- Triggers re-render when updated
</code>
    </pre>
  `
},
{
  id: 20,
  tag: 'React',
  question: "Explain useEffect",
  answer: `
    <p>
      <strong>useEffect</strong> is used to handle side effects 
      in functional components.
    </p>

    <pre>
<code>
useEffect(() => {
  console.log("Component mounted");
}, []);
</code>
    </pre>

    <pre>
<code>
- Runs after render
- Used for API calls, subscriptions, timers
- Can return cleanup function
</code>
    </pre>
  `
},

{
  id: 21,
  tag: 'React',
  question: "Difference between useEffect, useLayoutEffect, and useFocusEffect",
  answer: `
    <pre>
<code>
useEffect:
- Runs after paint
- Non-blocking

useLayoutEffect:
- Runs before paint
- Blocks UI until complete
- Used for layout measurements

useFocusEffect (React Navigation):
- Runs when screen is focused
- Useful for screen-based logic
</code>
    </pre>
  `
},
{
  id: 22,
  tag: 'React',
  question: "What is Dependency Array?",
  answer: `
    <p>
      The dependency array controls when useEffect runs.
    </p>

    <pre>
<code>
useEffect(() => {
  console.log("Runs once");
}, []);

useEffect(() => {
  console.log("Runs when count changes");
}, [count]);
</code>
    </pre>

    <pre>
<code>
[] → Run once
[variable] → Run when variable changes
No array → Run every render
</code>
    </pre>
  `
},
{
  id: 23,
  tag: 'React',
  question: "What is useCallback?",
  answer: `
    <p>
      <strong>useCallback</strong> memoizes a function 
      so it does not get recreated on every render.
    </p>

    <pre>
<code>
const memoizedFunction = useCallback(() => {
  console.log("Hello");
}, []);
</code>
    </pre>

    <pre>
<code>
- Prevents unnecessary re-renders
- Useful when passing functions to child components
</code>
    </pre>
  `
},
{
  id: 24,
  tag: 'React',
  question: "What is useMemo?",
  answer: `
    <p>
      <strong>useMemo</strong> memoizes a computed value 
      to avoid expensive recalculations.
    </p>

    <pre>
<code>
const result = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
</code>
    </pre>

    <pre>
<code>
- Improves performance
- Runs only when dependency changes
</code>
    </pre>
  `
},
{
  id: 25,
  tag: 'React',
  question: "What is useRef?",
  answer: `
    <p>
      <strong>useRef</strong> creates a mutable reference 
      that persists across renders.
    </p>

    <pre>
<code>
const inputRef = useRef(null);
</code>
    </pre>

    <pre>
<code>
- Access DOM / native elements
- Store mutable values
- Does NOT trigger re-render
</code>
    </pre>
  `
},
{
  id: 26,
  tag: 'React',
  question: "Custom Hooks – What and Why?",
  answer: `
    <p>
      A <strong>Custom Hook</strong> is a reusable function 
      that uses built-in hooks.
    </p>

    <pre>
<code>
function useCounter() {
  const [count, setCount] = useState(0);
  return { count, setCount };
}
</code>
    </pre>

    <pre>
<code>
- Reuse logic
- Keep components clean
- Improve maintainability
</code>
    </pre>
  `
},
{
  id: 27,
  tag: 'ReactNative',
  question: "What is React Navigation?",
  answer: `
    <p>
      <strong>React Navigation</strong> is a popular library 
      used to handle navigation and routing in React Native apps.
    </p>

    <hr/>

    <h2>Why It Is Needed</h2>

    <pre>
<code>
- Navigate between screens
- Manage navigation stack
- Handle headers and gestures
- Support deep linking
</code>
    </pre>

    <hr/>

    <h2>Basic Example</h2>

    <pre>
<code>
navigation.navigate("Home");
</code>
    </pre>
  `
},
{
  id: 28,
  tag: 'ReactNative',
  question: "Difference between Stack, Tab, and Drawer Navigation?",
  answer: `
    <pre>
<code>
Stack Navigation:
- Screens stacked on top of each other
- Follows LIFO (Last In First Out)
- Common for screen-to-screen flow

Tab Navigation:
- Bottom or top tabs
- Switch between main sections
- Common in apps like Instagram

Drawer Navigation:
- Side menu navigation
- Slides from left or right
- Used for app-wide navigation
</code>
    </pre>

    <hr/>

    <h2>Use Case</h2>

    <pre>
<code>
Stack → Details screen
Tab → Main sections
Drawer → Global menu
</code>
    </pre>
  `
},
{
  id: 29,
  tag: 'ReactNative',
  question: "How do you pass data between screens?",
  answer: `
    <p>
      Data is passed using route parameters.
    </p>

    <pre>
<code>
// Passing data
navigation.navigate("Details", { name: "sameer" });

// Receiving data
const route = useRoute();
const { name } = route.params;
</code>
    </pre>

    <pre>
<code>
- Data passed as second argument
- Accessed via route.params
</code>
    </pre>
  `
},
{
  id: 30,
  tag: 'ReactNative',
  question: "How do you go back to the previous screen?",
  answer: `
    <pre>
<code>
navigation.goBack();
</code>
    </pre>

    <pre>
<code>
- Removes current screen from stack
- Returns to previous screen
</code>
    </pre>
  `
},
{
  id: 31,
  tag: 'ReactNative',
  question: "How to prevent going back?",
  answer: `
    <p>
      You can disable back gesture or block navigation.
    </p>

    <pre>
<code>
useEffect(() => {
  navigation.addListener("beforeRemove", (e) => {
    e.preventDefault();
  });
}, [navigation]);
</code>
    </pre>

    <pre>
<code>
- Prevents hardware back button
- Useful for forms or authentication
</code>
    </pre>
  `
},
{
  id: 32,
  tag: 'ReactNative',
  question: "What is Deep Linking?",
  answer: `
    <p>
      <strong>Deep Linking</strong> allows opening a specific screen 
      in the app using a URL.
    </p>

    <pre>
<code>
myapp://profile/123
</code>
    </pre>

    <pre>
<code>
- Opens specific screen
- Used for notifications
- Used for marketing links
</code>
    </pre>
  `
},
{
  id: 33,
  tag: 'ReactNative',
  question: "Difference between navigation.navigate() and navigation.push()?",
  answer: `
    <pre>
<code>
navigation.navigate():
- Goes to screen if exists in stack
- Does not create duplicate screen

navigation.push():
- Always pushes new screen
- Creates duplicate instances
</code>
    </pre>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
navigation.navigate("Details");
navigation.push("Details");
</code>
    </pre>

    <p>
      push() always adds a new screen to stack.
    </p>
  `
},
{
  id: 34,
  tag: 'React',
  question: "Difference between Local State and Global State",
  answer: `
    <pre>
<code>
Local State:
- Managed inside a component
- Uses useState
- Used for UI-specific data

Global State:
- Shared across multiple components
- Managed using Context or Redux
- Used for app-wide data (auth, theme)
</code>
    </pre>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
// Local
const [count, setCount] = useState(0);

// Global
const user = useSelector(state => state.user);
</code>
    </pre>
  `
},
{
  id: 35,
  tag: 'React',
  question: "What is Context API?",
  answer: `
    <p>
      <strong>Context API</strong> is a built-in React feature 
      used to share data globally without passing props manually.
    </p>

    <pre>
<code>
const ThemeContext = createContext();

<ThemeContext.Provider value="dark">
  <App />
</ThemeContext.Provider>
</code>
    </pre>

    <pre>
<code>
- Avoids prop drilling
- Best for small to medium apps
- Good for theme, auth, language
</code>
    </pre>
  `
},
{
  id: 36,
  tag: 'React',
  question: "Redux vs Context API",
  answer: `
    <pre>
<code>
Context API:
- Built-in
- Simple global state
- No middleware
- Less boilerplate

Redux:
- External library
- Advanced state management
- Middleware support
- Better for large apps
</code>
    </pre>

    <hr/>

    <h2>When to Use</h2>

    <pre>
<code>
Context → Small apps
Redux → Large, complex apps
</code>
    </pre>
  `
},
{
  id: 37,
  tag: 'React',
  question: "What is Redux?",
  answer: `
    <p>
      <strong>Redux</strong> is a predictable state management library 
      for JavaScript applications.
    </p>

    <pre>
<code>
- Single source of truth
- Centralized store
- State updated via actions
</code>
    </pre>
  `
},
{
  id: 38,
  tag: 'React',
  question: "What are Actions, Reducers, and Store?",
  answer: `
    <h2>Action</h2>
    <pre>
<code>
{ type: "INCREMENT" }
</code>
    </pre>

    <h2>Reducer</h2>
    <pre>
<code>
function counter(state = 0, action) {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
}
</code>
    </pre>

    <h2>Store</h2>
    <pre>
<code>
const store = createStore(counter);
</code>
    </pre>

    <pre>
<code>
Action → Describes change
Reducer → Updates state
Store → Holds global state
</code>
    </pre>
  `
},
{
  id: 39,
  tag: 'React',
  question: "What is Redux Thunk or Redux Saga?",
  answer: `
    <p>
      Both are middleware used to handle asynchronous logic in Redux.
    </p>

    <hr/>

    <h2>Redux Thunk</h2>
    <pre>
<code>
- Allows functions inside actions
- Simple async handling
</code>
    </pre>

    <h2>Redux Saga</h2>
    <pre>
<code>
- Uses generators
- More powerful
- Better for complex async flows
</code>
    </pre>
  `
},
{
  id: 40,
  tag: 'React',
  question: "What is RTK (Redux Toolkit)?",
  answer: `
    <p>
      <strong>Redux Toolkit (RTK)</strong> is the official 
      recommended way to write Redux logic.
    </p>

    <pre>
<code>
- Reduces boilerplate
- Uses createSlice
- Built-in Redux Thunk
- Simplifies store setup
</code>
    </pre>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: state => state + 1
  }
});
</code>
    </pre>
  `
},
{
  id: 41,
  tag: 'ReactNative',
  question: "How do you optimize performance in React Native?",
  answer: `
    <pre>
<code>
- Use FlatList for large data
- Use React.memo
- Use useCallback and useMemo
- Avoid inline functions in lists
- Avoid blocking JS thread
- Optimize images
- Use Hermes engine
</code>
    </pre>

    <hr/>

    <p>
      Performance optimization focuses on reducing re-renders,
      minimizing bridge calls, and keeping JS thread free.
    </p>
  `
},
{
  id: 42,
  tag: 'React',
  question: "What is React.memo?",
  answer: `
    <p>
      <strong>React.memo</strong> is a higher-order component 
      that prevents re-rendering if props have not changed.
    </p>

    <pre>
<code>
const MyComponent = React.memo(({ name }) => {
  return <Text>{name}</Text>;
});
</code>
    </pre>

    <pre>
<code>
- Memoizes functional components
- Uses shallow comparison
- Improves performance
</code>
    </pre>
  `
},
{
  id: 43,
  tag: 'React',
  question: "What is PureComponent?",
  answer: `
    <p>
      <strong>PureComponent</strong> is a class component 
      that prevents unnecessary re-renders 
      using shallow comparison of props and state.
    </p>

    <pre>
<code>
class MyComponent extends React.PureComponent {
  render() {
    return <Text>Hello</Text>;
  }
}
</code>
    </pre>

    <pre>
<code>
PureComponent → Class version of React.memo
</code>
    </pre>
  `
},
{
  id: 44,
  tag: 'React',
  question: "How to avoid unnecessary re-renders?",
  answer: `
    <pre>
<code>
- Use React.memo
- Use useCallback for functions
- Use useMemo for expensive calculations
- Avoid inline objects/functions
- Keep state minimal
- Use keyExtractor in lists
</code>
    </pre>

    <hr/>

    <p>
      Re-renders happen when props or state change.
      Optimizing dependency and reference equality is important.
    </p>
  `
},
{
  id: 45,
  tag: 'ReactNative',
  question: "Why FlatList is better than ScrollView?",
  answer: `
    <pre>
<code>
ScrollView:
- Renders all items at once
- High memory usage

FlatList:
- Lazy loads items
- Virtualized rendering
- Better performance for large lists
</code>
    </pre>

    <p>
      FlatList is optimized for large dynamic data.
    </p>
  `
},
{
  id: 46,
  tag: 'ReactNative',
  question: "What is keyExtractor?",
  answer: `
    <p>
      <strong>keyExtractor</strong> is a function used in FlatList 
      to assign a unique key to each item.
    </p>

    <pre>
<code>
<FlatList
  data={data}
  keyExtractor={(item) => item.id.toString()}
/>
</code>
    </pre>

    <pre>
<code>
- Helps React track list items
- Prevents unnecessary re-renders
- Must be unique
</code>
    </pre>
  `
},
{
  id: 47,
  tag: 'ReactNative',
  question: "How to handle large lists efficiently?",
  answer: `
    <pre>
<code>
- Use FlatList or SectionList
- Provide keyExtractor
- Use getItemLayout
- Use initialNumToRender
- Use windowSize
- Memoize renderItem
</code>
    </pre>

    <hr/>

    <h2>Example Optimization</h2>

    <pre>
<code>
const renderItem = useCallback(({ item }) => (
  <Item data={item} />
), []);
</code>
    </pre>

    <pre>
<code>
- Avoid heavy logic inside renderItem
- Keep components lightweight
</code>
    </pre>
  `
},
{
  id: 48,
  tag: 'ReactNative',
  question: "What is the Bridge in React Native?",
  answer: `
    <p>
      The <strong>Bridge</strong> is a communication layer 
      between JavaScript and Native code in React Native.
    </p>

    <hr/>

    <h2>How It Works</h2>

    <pre>
<code>
JS Thread ↔ Bridge ↔ Native Thread
</code>
    </pre>

    <pre>
<code>
- Communication is asynchronous
- Data is serialized (JSON format)
- Can become a performance bottleneck
</code>
    </pre>

    <p>
      Too many bridge calls can slow down the app.
    </p>
  `
},
{
  id: 49,
  tag: 'ReactNative',
  question: "Difference between JS Thread and UI Thread",
  answer: `
    <pre>
<code>
JS Thread:
- Runs JavaScript code
- Handles state, API calls, logic
- Single-threaded

UI Thread (Main Thread):
- Renders native UI
- Handles gestures and animations
- Platform-controlled
</code>
    </pre>

    <hr/>

    <pre>
<code>
If JS thread blocks → App freezes
If UI thread blocks → UI stutters
</code>
    </pre>
  `
},
{
  id: 50,
  tag: 'ReactNative',
  question: "What are Native Modules?",
  answer: `
    <p>
      <strong>Native Modules</strong> are custom modules 
      written in Java (Android) or Swift/Objective-C (iOS) 
      that expose native functionality to JavaScript.
    </p>

    <pre>
<code>
- Access device features
- Camera, GPS, Bluetooth
- High-performance operations
</code>
    </pre>

    <p>
      They communicate with JS through the bridge.
    </p>
  `
},
{
  id: 51,
  tag: 'ReactNative',
  question: "What are Native UI Components?",
  answer: `
    <p>
      Native UI Components are platform-specific UI elements 
      written in native code and exposed to React Native.
    </p>

    <pre>
<code>
Example:
- Android RecyclerView
- iOS MapView
</code>
    </pre>

    <pre>
<code>
- Used when custom native UI is needed
- Integrated via bridge or Fabric
</code>
    </pre>
  `
},
{
  id: 52,
  tag: 'ReactNative',
  question: "What is Hermes Engine?",
  answer: `
    <p>
      <strong>Hermes</strong> is a lightweight JavaScript engine 
      optimized for React Native.
    </p>

    <pre>
<code>
- Faster app startup
- Reduced memory usage
- Smaller bundle size
</code>
    </pre>

    <pre>
<code>
JS Code → Hermes → Native Execution
</code>
    </pre>

    <p>
      Hermes improves performance especially on Android.
    </p>
  `
},
{
  id: 53,
  tag: 'ReactNative',
  question: "Difference between Expo and CLI",
  answer: `
    <pre>
<code>
Expo:
- Managed workflow
- No native code needed
- Easy setup
- Limited native customization

React Native CLI:
- Full native access
- Can write custom native modules
- More setup required
- More flexibility
</code>
    </pre>

    <hr/>

    <pre>
<code>
Expo → Faster start
CLI → More control
</code>
    </pre>
  `
},
{
  id: 54,
  tag: 'ReactNative',
  question: "What is Fabric and TurboModules?",
  answer: `
    <p>
      Fabric and TurboModules are part of the 
      <strong>React Native New Architecture</strong>.
    </p>

    <hr/>

    <h2>Fabric</h2>
    <pre>
<code>
- New rendering system
- Faster UI updates
- Better synchronization with JS
</code>
    </pre>

    <h2>TurboModules</h2>
    <pre>
<code>
- Replaces old bridge modules
- Lazy loading
- Direct JSI communication
- Faster performance
</code>
    </pre>

    <pre>
<code>
Old Architecture → Bridge-based
New Architecture → JSI-based (No Bridge bottleneck)
</code>
    </pre>
  `
},
{
  id: 55,
  tag: 'ReactNative',
  question: "How do you make API calls in React Native?",
  answer: `
    <p>
      API calls in React Native are made using 
      <strong>fetch</strong> or third-party libraries like <strong>axios</strong>.
    </p>

    <hr/>

    <h2>Using fetch</h2>

    <pre>
<code>
async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
</code>
    </pre>

    <hr/>

    <h2>Using axios</h2>

    <pre>
<code>
import axios from "axios";

async function getData() {
  try {
    const response = await axios.get("https://api.example.com/data");
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
}
</code>
    </pre>
  `
},
{
  id: 56,
  tag: 'ReactNative',
  question: "Axios vs Fetch",
  answer: `
    <pre>
<code>
Fetch:
- Built-in
- Needs manual JSON conversion
- No automatic error handling

Axios:
- External library
- Automatic JSON parsing
- Better error handling
- Supports interceptors
- Easier cancellation
</code>
    </pre>

    <hr/>

    <pre>
<code>
Fetch → Lightweight
Axios → More features
</code>
    </pre>
  `
},
{
  id: 57,
  tag: 'ReactNative',
  question: "How do you handle API errors?",
  answer: `
    <pre>
<code>
try {
  const res = await fetch(url);
  
  if (!res.ok) {
    throw new Error("Network error");
  }

  const data = await res.json();
} catch (error) {
  console.log(error.message);
}
</code>
    </pre>

    <hr/>

    <pre>
<code>
- Use try/catch
- Check response.ok
- Show fallback UI
- Handle network & server errors separately
</code>
    </pre>
  `
},
{
  id: 58,
  tag: 'ReactNative',
  question: "How do you implement pagination?",
  answer: `
    <p>
      Pagination loads data in chunks instead of all at once.
    </p>

    <hr/>

    <h2>Using FlatList</h2>

    <pre>
<code>
<FlatList
  data={data}
  onEndReached={loadMore}
  onEndReachedThreshold={0.5}
/>
</code>
    </pre>

    <pre>
<code>
- Keep page number in state
- Append new data
- Show loading indicator
</code>
    </pre>
  `
},
{
  id: 59,
  tag: 'JavaScript',
  question: "What is async/await?",
  answer: `
    <p>
      async/await is a modern way to handle asynchronous operations.
      It makes async code look like synchronous code.
    </p>

    <pre>
<code>
async function fetchData() {
  const response = await fetch(url);
  const data = await response.json();
}
</code>
    </pre>

    <pre>
<code>
- Built on top of Promises
- Cleaner syntax
- Uses try/catch for errors
</code>
    </pre>
  `
},
{
  id: 60,
  tag: 'ReactNative',
  question: "How to cancel API calls?",
  answer: `
    <h2>Using AbortController (Fetch)</h2>

    <pre>
<code>
const controller = new AbortController();

fetch(url, { signal: controller.signal });

controller.abort();
</code>
    </pre>

    <hr/>

    <h2>Using Axios Cancel Token</h2>

    <pre>
<code>
const source = axios.CancelToken.source();

axios.get(url, { cancelToken: source.token });

source.cancel();
</code>
    </pre>

    <pre>
<code>
- Prevent memory leaks
- Avoid updating unmounted components
</code>
    </pre>
  `
},
{
  id: 61,
  tag: 'ReactNative',
  question: "What is AsyncStorage?",
  answer: `
    <p>
      <strong>AsyncStorage</strong> is a simple, asynchronous, 
      key-value storage system used in React Native.
    </p>

    <hr/>

    <h2>Features</h2>

    <pre>
<code>
- Persistent storage
- Asynchronous
- Stores data as strings
- Works like localStorage (Web)
</code>
    </pre>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
import AsyncStorage from "@react-native-async-storage/async-storage";

// Store
await AsyncStorage.setItem("token", "12345");

// Get
const token = await AsyncStorage.getItem("token");

// Remove
await AsyncStorage.removeItem("token");
</code>
    </pre>

    <hr/>

    <h2>Important Note</h2>

    <pre>
<code>
- Not encrypted
- Not secure for sensitive data
</code>
    </pre>
  `
},
{
  id: 62,
  tag: 'ReactNative',
  question: "Difference between AsyncStorage and Secure Storage",
  answer: `
    <pre>
<code>
AsyncStorage:
- Stores plain text
- Not encrypted
- Used for non-sensitive data
- Example: theme, settings

Secure Storage (Keychain / Keystore):
- Encrypted storage
- Used for tokens & passwords
- OS-level security
- Example: react-native-keychain
</code>
    </pre>

    <hr/>

    <pre>
<code>
AsyncStorage → Simple storage
Secure Storage → Sensitive data protection
</code>
    </pre>
  `
},
{
  id: 63,
  tag: 'ReactNative',
  question: "How do you store tokens securely?",
  answer: `
    <p>
      Tokens should never be stored in plain AsyncStorage.
      Use secure storage solutions.
    </p>

    <hr/>

    <h2>Recommended Methods</h2>

    <pre>
<code>
- react-native-keychain
- Expo SecureStore
- Android Keystore
- iOS Keychain
</code>
    </pre>

    <hr/>

    <h2>Example (Keychain)</h2>

    <pre>
<code>
import * as Keychain from "react-native-keychain";

await Keychain.setGenericPassword("user", "token123");

const credentials = await Keychain.getGenericPassword();
</code>
    </pre>

    <pre>
<code>
- Encrypted
- OS-level protection
- Safer for authentication tokens
</code>
    </pre>
  `
},
{
  id: 64,
  tag: 'ReactNative',
  question: "What is MMKV?",
  answer: `
    <p>
      <strong>MMKV</strong> is a high-performance key-value storage 
      library for React Native.
    </p>

    <hr/>

    <h2>Why Use MMKV?</h2>

    <pre>
<code>
- Much faster than AsyncStorage
- Synchronous
- Written in C++
- Supports encryption
</code>
    </pre>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
import { MMKV } from "react-native-mmkv";

const storage = new MMKV();

storage.set("token", "12345");

const token = storage.getString("token");
</code>
    </pre>

    <hr/>

    <h2>Comparison</h2>

    <pre>
<code>
AsyncStorage → Async, slower
MMKV → Sync, very fast
Secure Storage → Encrypted, secure
</code>
    </pre>
  `
},
{
  id: 65,
  tag: 'ReactNative',
  question: "How do you handle forms?",
  answer: `
    <p>
      Forms in React Native are handled using controlled components 
      with useState or libraries like Formik.
    </p>

    <hr/>

    <h2>Basic Example (useState)</h2>

    <pre>
<code>
const [email, setEmail] = useState("");

<TextInput
  value={email}
  onChangeText={setEmail}
  placeholder="Enter email"
/>
</code>
    </pre>

    <pre>
<code>
- Store input in state
- Validate input
- Handle submit
</code>
    </pre>

    <hr/>

    <h2>Best Practices</h2>

    <pre>
<code>
- Use controlled inputs
- Validate before submit
- Show error messages
- Disable button while loading
</code>
    </pre>
  `
},
{
  id: 66,
  tag: 'ReactNative',
  question: "What is Formik?",
  answer: `
    <p>
      <strong>Formik</strong> is a popular library for managing 
      forms in React and React Native.
    </p>

    <hr/>

    <h2>Why Use Formik?</h2>

    <pre>
<code>
- Handles form state
- Handles validation
- Handles submission
- Reduces boilerplate
</code>
    </pre>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
import { Formik } from "formik";

<Formik
  initialValues={{ email: "" }}
  onSubmit={(values) => console.log(values)}
>
  {({ handleChange, handleSubmit, values }) => (
    <>
      <TextInput
        value={values.email}
        onChangeText={handleChange("email")}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </>
  )}
</Formik>
</code>
    </pre>
  `
},
{
  id: 67,
  tag: 'ReactNative',
  question: "What is Yup?",
  answer: `
    <p>
      <strong>Yup</strong> is a JavaScript schema validation library 
      often used with Formik.
    </p>

    <hr/>

    <h2>Why Use Yup?</h2>

    <pre>
<code>
- Validate form fields
- Define rules easily
- Show custom error messages
</code>
    </pre>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
});
</code>
    </pre>
  `
},
{
  id: 68,
  tag: 'ReactNative',
  question: "How do you handle keyboard issues?",
  answer: `
    <p>
      Keyboard issues occur when the keyboard hides input fields.
    </p>

    <hr/>

    <h2>1. Use KeyboardAvoidingView</h2>

    <pre>
<code>
<KeyboardAvoidingView
  behavior={Platform.OS === "ios" ? "padding" : "height"}
  style={{ flex: 1 }}
>
</KeyboardAvoidingView>
</code>
    </pre>

    <hr/>

    <h2>2. Use ScrollView</h2>

    <pre>
<code>
<ScrollView keyboardShouldPersistTaps="handled">
</ScrollView>
</code>
    </pre>

    <hr/>

    <h2>3. Use Keyboard Aware Library</h2>

    <pre>
<code>
react-native-keyboard-aware-scroll-view
</code>
    </pre>

    <hr/>

    <h2>Best Practices</h2>

    <pre>
<code>
- Dismiss keyboard on submit
- Avoid fixed height layouts
- Test on both iOS and Android
</code>
    </pre>
  `
},
{
  id: 69,
  tag: 'ReactNative',
  question: "How do you debug React Native apps?",
  answer: `
    <p>
      Debugging in React Native can be done using multiple tools.
    </p>

    <hr/>

    <h2>Common Debugging Methods</h2>

    <pre>
<code>
- console.log()
- React Native Debugger
- Flipper
- Chrome DevTools
- Hermes debugging
</code>
    </pre>

    <hr/>

    <h2>Using Flipper</h2>

    <pre>
<code>
- Inspect network requests
- View logs
- Debug layout
- Check performance
</code>
    </pre>

    <hr/>

    <h2>Best Practices</h2>

    <pre>
<code>
- Remove console logs in production
- Use error boundaries
- Monitor performance
</code>
    </pre>
  `
},
{
  id: 70,
  tag: 'ReactNative',
  question: "What is Flipper?",
  answer: `
    <p>
      <strong>Flipper</strong> is a debugging platform 
      used for React Native apps.
    </p>

    <hr/>

    <h2>Features</h2>

    <pre>
<code>
- Network inspector
- Layout inspector
- Logs viewer
- Redux debugger
- Performance monitoring
</code>
    </pre>

    <hr/>

    <p>
      It helps inspect app behavior in real time.
    </p>
  `
},
{
  id: 71,
  tag: 'React',
  question: "What is Jest?",
  answer: `
    <p>
      <strong>Jest</strong> is a JavaScript testing framework 
      commonly used for testing React and React Native apps.
    </p>

    <hr/>

    <h2>Features</h2>

    <pre>
<code>
- Unit testing
- Snapshot testing
- Mocking functions
- Fast test execution
</code>
    </pre>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
test("adds numbers", () => {
  expect(1 + 1).toBe(2);
});
</code>
    </pre>
  `
},
{
  id: 72,
  tag: 'ReactNative',
  question: "What is React Native Testing Library?",
  answer: `
    <p>
      <strong>React Native Testing Library</strong> 
      is used to test React Native components 
      by simulating user behavior.
    </p>

    <hr/>

    <h2>Why Use It?</h2>

    <pre>
<code>
- Test components like users interact
- Focus on UI behavior
- Works well with Jest
</code>
    </pre>

    <hr/>

    <h2>Example</h2>

    <pre>
<code>
import { render } from "@testing-library/react-native";

const { getByText } = render(<MyComponent />);
expect(getByText("Hello")).toBeTruthy();
</code>
    </pre>
  `
},
{
  id: 73,
  tag: 'React',
  question: "Difference between Unit Testing and Integration Testing?",
  answer: `
    <pre>
<code>
Unit Testing:
- Tests individual functions/components
- Isolated testing
- Fast execution

Integration Testing:
- Tests multiple components together
- Tests interaction between modules
- Slightly slower
</code>
    </pre>

    <hr/>

    <pre>
<code>
Unit → Small pieces
Integration → Combined workflow
</code>
    </pre>
  `
},
{
  id: 74,
  tag: 'ReactNative',
  question: "Steps to generate APK / AAB",
  answer: `
    <p>
      To generate a production build in React Native (Android):
    </p>

    <hr/>

    <h2>1. Generate Keystore</h2>

    <pre>
<code>
keytool -genkeypair -v -storetype PKCS12 -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
</code>
    </pre>

    <hr/>

    <h2>2. Configure android/gradle.properties</h2>

    <pre>
<code>
MYAPP_UPLOAD_STORE_FILE=my-release-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
</code>
    </pre>

    <hr/>

    <h2>3. Build APK</h2>

    <pre>
<code>
cd android
./gradlew assembleRelease
</code>
    </pre>

    <hr/>

    <h2>4. Build AAB (Recommended for Play Store)</h2>

    <pre>
<code>
cd android
./gradlew bundleRelease
</code>
    </pre>

    <pre>
<code>
APK → Direct install file
AAB → Upload to Play Store
</code>
    </pre>
  `
},
{
  id: 75,
  tag: 'ReactNative',
  question: "Difference between Debug and Release Build",
  answer: `
    <pre>
<code>
Debug Build:
- Used during development
- Includes debugging tools
- Larger size
- Slower performance

Release Build:
- Optimized for production
- Smaller size
- Better performance
- No debugging tools
</code>
    </pre>

    <hr/>

    <pre>
<code>
Debug → Development
Release → Production
</code>
    </pre>
  `
},
{
  id: 76,
  tag: 'ReactNative',
  question: "What is Code Signing?",
  answer: `
    <p>
      <strong>Code signing</strong> is the process of digitally signing 
      your app to verify its authenticity and integrity.
    </p>

    <hr/>

    <pre>
<code>
- Ensures app is from trusted developer
- Required for Play Store and App Store
- Prevents tampering
</code>
    </pre>

    <pre>
<code>
Android → Keystore
iOS → Certificates & Provisioning Profiles
</code>
    </pre>
  `
},
{
  id: 77,
  tag: 'ReactNative',
  question: "How do you handle environment variables?",
  answer: `
    <p>
      Environment variables are used to manage 
      different API URLs or configurations.
    </p>

    <hr/>

    <h2>Using react-native-config</h2>

    <pre>
<code>
API_URL=https://dev.api.com
</code>
    </pre>

    <pre>
<code>
import Config from "react-native-config";

Config.API_URL
</code>
    </pre>

    <pre>
<code>
- Keeps sensitive data separate
- Easy environment switching
</code>
    </pre>
  `
},
{
  id: 78,
  tag: 'ReactNative',
  question: "How do you manage multiple environments (dev, staging, prod)?",
  answer: `
    <pre>
<code>
- Use separate .env files
  .env.dev
  .env.staging
  .env.prod

- Use react-native-config
- Use different build flavors (Android)
- Use different schemes (iOS)
</code>
    </pre>

    <hr/>

    <pre>
<code>
Dev → Local API
Staging → Testing server
Prod → Live server
</code>
    </pre>

    <p>
      This helps isolate configurations and avoid production mistakes.
    </p>
  `
},
{
  id: 79,
  tag: 'ReactNative',
  question: "App is slow – how will you debug?",
  answer: `
    <p>
      First identify whether the issue is in JS thread or UI thread.
    </p>

    <hr/>

    <h2>Steps to Debug</h2>

    <pre>
<code>
- Use Flipper performance plugin
- Check JS thread blocking
- Profile with React DevTools
- Remove unnecessary re-renders
- Optimize FlatList
- Check heavy calculations
</code>
    </pre>

    <pre>
<code>
If JS thread blocked → Optimize logic
If UI thread lagging → Optimize layout/animations
</code>
    </pre>
  `
},
{
  id: 80,
  tag: 'ReactNative',
  question: "API is called multiple times – how will you fix it?",
  answer: `
    <pre>
<code>
- Check useEffect dependency array
- Ensure empty dependency array if needed
- Avoid inline functions triggering re-render
- Use useCallback
- Prevent duplicate button clicks
</code>
    </pre>

    <hr/>

    <h2>Common Mistake</h2>

    <pre>
<code>
useEffect(() => {
  fetchData();
}, []);  // Correct

// Without dependency → Runs every render
</code>
    </pre>
  `
},
{
  id: 81,
  tag: 'ReactNative',
  question: "FlatList scrolling is lagging – what will you do?",
  answer: `
    <pre>
<code>
- Use keyExtractor properly
- Memoize renderItem with useCallback
- Use React.memo for list items
- Avoid inline styles/functions
- Use getItemLayout
- Adjust initialNumToRender
- Use windowSize
</code>
    </pre>

    <hr/>

    <pre>
<code>
Avoid heavy logic inside renderItem
</code>
    </pre>
  `
},
{
  id: 82,
  tag: 'ReactNative',
  question: "App crashes only in release mode – how to debug?",
  answer: `
    <pre>
<code>
- Enable release logs
- Use adb logcat (Android)
- Check Proguard rules
- Check missing environment variables
- Check console warnings ignored in debug
- Verify native modules properly linked
</code>
    </pre>

    <hr/>

    <pre>
<code>
Debug mode hides some production errors
</code>
    </pre>
  `
},
{
  id: 83,
  tag: 'ReactNative',
  question: "How to handle network failure?",
  answer: `
    <pre>
<code>
- Use try/catch
- Check response.ok
- Show error message
- Retry mechanism
- Use NetInfo to detect connectivity
</code>
    </pre>

    <hr/>

    <h2>Using NetInfo</h2>

    <pre>
<code>
import NetInfo from "@react-native-community/netinfo";

NetInfo.fetch().then(state => {
  console.log(state.isConnected);
});
</code>
    </pre>
  `
},
{
  id: 84,
  tag: 'ReactNative',
  question: "How to prevent memory leaks?",
  answer: `
    <pre>
<code>
- Clean up useEffect
- Cancel API calls
- Clear timers
- Remove event listeners
- Avoid updating unmounted component
</code>
    </pre>

    <hr/>

    <h2>Cleanup Example</h2>

    <pre>
<code>
useEffect(() => {
  const timer = setTimeout(() => {}, 1000);
  return () => clearTimeout(timer);
}, []);
</code>
    </pre>
  `
},
{
  id: 85,
  tag: 'ReactNative',
  question: "How do you handle app background & foreground states?",
  answer: `
    <p>
      Use the AppState API to detect app lifecycle changes.
    </p>

    <hr/>

    <pre>
<code>
import { AppState } from "react-native";

useEffect(() => {
  const subscription = AppState.addEventListener(
    "change",
    nextState => {
      console.log(nextState);
    }
  );

  return () => subscription.remove();
}, []);
</code>
    </pre>

    <pre>
<code>
active → App in foreground
background → App in background
inactive → Transition state
</code>
    </pre>
  `
},












































































































































];
