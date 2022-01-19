import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    
      <div className="App">
        <Navbar />
          <div className="pageContent">
            <Dashboard />
          </div>
      </div>
  );
}

export default App;
