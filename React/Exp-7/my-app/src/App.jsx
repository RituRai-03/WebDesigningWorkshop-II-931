function App() {
 let name = "Alice";
 let age = 30;
  return (
    <div>
      <h1 style={{ color: 'blue' , textAlign: 'center' }}>Hello World</h1>
      <p>This is a simple react app.</p>
      <p>2+2={2 + 2}</p>
      <p> Hello, {name}! You are {age}.</p>
    </div>
  );
}

export default App;