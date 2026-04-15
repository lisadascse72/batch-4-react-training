import { useState, useRef, useEffect } from "react";

/* =========================
   TASK 1: Functional Components & Props
========================= */

// Component with props + default value
const UserProfile = ({ username, age, isAdmin = false }) => {
  return (
    <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
      <h3>{username}</h3>
      <p>Age: {age}</p>
      <p>{isAdmin ? "Admin 👑" : "User"}</p>
    </div>
  );
};

// Parent component rendering multiple profiles
const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <UserProfile username="Alex" age={25} isAdmin={true} />
      <UserProfile username="Lisa" age={22} isAdmin={false} />
      <UserProfile username="John" age={30} /> {/* default isAdmin */}
    </div>
  );
};

/* =========================
   TASK 2: useState (Counter App)
========================= */

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => {
    if (count > 0) setCount(count - 1); // prevent below 0
  };

  const reset = () => setCount(0);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

/* =========================
   TASK 3: Event Handling (Search Bar)
========================= */

const SearchBar = () => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value); // gets input value
  };

  return (
    <div>
      <h2>Search Bar</h2>
      <input type="text" placeholder="Type here..." onChange={handleChange} />
      <p>Output: {text.toUpperCase()}</p>
    </div>
  );
};

/* =========================
   TASK 4: Conditional Rendering
========================= */

const SecretMessage = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h2>Secret Message</h2>
      <label>
        <input type="checkbox" onChange={() => setShow(!show)} />
        Show Secret
      </label>

      {/* Conditional rendering using && */}
      {show && <p>🤫 This is a secret message!</p>}
    </div>
  );
};

/* =========================
   TASK 5: Lists & Keys (Todo List)
========================= */

const TodoList = () => {
  const tasks = [
    { id: 1, task: "Learn React" },
    { id: 2, task: "Build App" },
    { id: 3, task: "Practice Coding" },
    { id: 4, task: "Revise Concepts" },
  ];

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {tasks.map((item) => (
          <li key={item.id}>
            {item.task}
            <button style={{ marginLeft: "10px" }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

/* =========================
   TASK 6: useRef (Auto Focus)
========================= */

const FocusInput = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // auto focus on load
  }, []);

  return (
    <div>
      <h2>Auto Focus Input</h2>
      <input ref={inputRef} placeholder="Auto focused input" />
    </div>
  );
};

/* =========================
   MAIN APP
========================= */

function App() {
  return (
    <>
      <h1>Week 2 React Tasks</h1>

      {/* Task 1 */}
      <Dashboard />

      {/* Task 2 */}
      <Counter />

      {/* Task 3 */}
      <SearchBar />

      {/* Task 4 */}
      <SecretMessage />

      {/* Task 5 */}
      <TodoList />

      {/* Task 6 */}
      <FocusInput />
    </>
  );
}

export default App;