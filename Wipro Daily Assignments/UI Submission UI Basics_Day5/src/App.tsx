import React, { useState } from "react";

// ✅ 1) Interface for Numbers
interface NumberItem {
  value: number;
}

// ✅ Constructor Demo Class
class NumberCreator {
  value: number;
  constructor(num: number) {
    this.value = num;
  }
  show() {
    return `Constructed Value: ${this.value}`;
  }
}

// ✅ Hoisting Demo Component
// ✅ Hoisting Demo Component
const HoistingDemo = () => {
  // ✅ Function hoisting works
  hoistFunc();
  function hoistFunc() {
    console.log("✅ Function hoisting works — function called before declaration!");
  }

  // ✅ Variable hoisting demo wrapped in a function so TS won't error
  const varHoistingDemo = () => {
     console.log("Value of x before declaration:", x); // undefined due to hoisting
    var x = 10; 
    console.log("Value of x after declaration:", x);   // 10
  };

  varHoistingDemo();

  return (
    <div style={{ border: "1px solid gray", padding: "10px", marginTop: "10px" }}>
      <h4>Hoisting Demo</h4>
      <p>Check console for hoisting output.</p>
    </div>
  );
};


// ✅ Logger Component
const Logger = ({ numbers }: { numbers: NumberItem[] }) => {
  numbers.forEach(n => console.log("Logged Number:", n.value));
  return <p>Numbers logged in console ✅</p>;
};

// ✅ Number List Component
const NumberList = ({ numbers }: { numbers: NumberItem[] }) => (
  <div>
    <h4>Number List</h4>
    <ul>
      {numbers.map((n, idx) => (
        <li key={idx}>{n.value}</li>
      ))}
    </ul>
  </div>
);

// ✅ Filter & Map Buttons
const FilterControls = ({
  onFilterEven,
  onDouble
}: {
  onFilterEven: () => void;
  onDouble: () => void;
}) => (
  <div style={{ margin: "10px 0" }}>
    <button onClick={onFilterEven}>Show Even Numbers</button>
    <button onClick={onDouble} style={{ marginLeft: "10px" }}>
      Double Numbers
    </button>
  </div>
);

// ✅ Main App Component
const App: React.FC = () => {
  const initialNumbers: NumberItem[] = [
    { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 }
  ];

  const [numbers, setNumbers] = useState<NumberItem[]>(initialNumbers);

  const filterEven = () => {
    setNumbers(numbers.filter(n => n.value % 2 === 0));
  };

  const doubleNumbers = () => {
    setNumbers(numbers.map(n => ({ value: n.value * 2 })));
  };

  // Constructor object demo
  const created = new NumberCreator(999);

  return (
    <div style={{ padding: "20px" }}>
      <h2>JSX & JavaScript Concepts Sprint ✅</h2>

      <NumberList numbers={numbers} />

      <FilterControls onFilterEven={filterEven} onDouble={doubleNumbers} />

      <Logger numbers={numbers} />

      <HoistingDemo />

      <div style={{ border: "1px solid green", padding: "10px", marginTop: "10px" }}>
        <h4>Constructor Demo</h4>
        <p>{created.show()}</p>
      </div>
    </div>
  );
};

export default App;
