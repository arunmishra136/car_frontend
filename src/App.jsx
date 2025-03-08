import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarDetails from "./Cardetails"; 
import Car from "./Car";


const Home = () => (
  <div className="bg-black min-h-screen text-white flex items-center justify-center">
    <h1 className="text-3xl font-bold text-green-400">Welcome to Auto Wisdom</h1>
  </div>
);

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Car />} />
          <Route path="/car" element={<CarDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
