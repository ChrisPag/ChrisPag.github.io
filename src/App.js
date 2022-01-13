import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="pageContent">
            <Routes>
              <Route exact path="/" element={<Home />}/>
              <Route path="/dashboard" element ={<Dashboard />}/>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;
