import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <header>
        <ul>
          <li>home</li>
          <li>about</li>
          <li>activity</li>
          <li>contact</li>
        </ul>
      </header>
      <h1>ACHARIYA COLLEGE OF ENGINEERING TECHNOLOGY</h1>
      <h2>students : {count}</h2>
      <img
        src="https://static.vecteezy.com/system/resources/previews/024/724/633/non_2x/a-happy-smiling-young-college-student-with-a-book-in-hand-isolated-on-a-transparent-background-generative-ai-free-png.png"
        alt="student"
        width="500"
      />
      <br />
      <button onClick={() => setCount(count + 1)}>Add</button>
      
      <button onClick={() => setCount(count - 1)}>minus</button>
    </div>
  );
}

export default App;