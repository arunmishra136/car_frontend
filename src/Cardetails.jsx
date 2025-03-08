import { useState } from "react";
import KeyFeatures from "./Features";

const CarDetails = () => {
  const [selectedModel, setSelectedModel] = useState("Verna-MPI-EX-2025");
  const availableColors = ["#FFFFFF", "#D22B2B", "#4A4A4A"]; // White, Red, Grey

  return (
    <div className="bg-blue-500 min-h-screen text-white p-6">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-6">
        <h1 className="text-green-400 text-xl font-bold">Auto Wisdom</h1>
        <div className="flex gap-6">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">Cars</a>
          <a href="#" className="text-white">Consult</a>
          <a href="#" className="text-white">News & Blogs</a>
          <a href="#" className="text-white">About Us</a>
          <button className="bg-red-500 px-4 py-2 rounded-md">Logout</button>
        </div>
      </nav>

      {/* Car Information */}
      <div className="flex flex-col md:flex-row gap-16 ml-20 mt-20">
        <div>
          <h2 className="text-2xl font-bold">Hyundai Verna</h2>
          <div className="flex items-center gap-3 mt-2">
            <span className="bg-green-500 px-2 py-1 rounded text-black">₹0</span>
            <span className="bg-green-500 px-2 py-1 rounded text-black">Year: 2025</span>
          </div>

          <div className="grid grid-cols-2 gap-2 mt-4">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc5xk_wRuoC-8Yy22yEi2VNrj4X259t8YWRQ&s" 
              alt="Car Front View" 
              className="w-40 h-40 object-cover rounded"
            />
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDMfy4d89BGYmzyiQhkm0TBDg-jyIK5zWs4Q&s" 
              alt="Car Side View" 
              className="w-40 h-40 object-cover rounded"
            />
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRBuOirruHRCE2hE-pDWaKiCXPQ5BURn0esA&s" 
              alt="Car Front View" 
              className="w-40 h-40 object-cover rounded"
            />
          </div>

          {/* Available Colors */}
          <div className="mt-6">
            <h3 className="text-lg">Available Colors</h3>
            <div className="flex gap-3 mt-2">
              {availableColors.map((color, index) => (
                <div
                  key={index}
                  className="w-8 h-8 rounded-full border-2"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Car Details Card */}
        <div className="bg-gray-800 p-4 rounded-lg w-80 pt-14 ml-24">
          <h3 className="text-xl">Hyundai Verna</h3>
          <p className="text-gray-400">₹0 Ex-showroom Price</p>
          <select
            className="bg-gray-700 p-2 mt-2 w-full rounded"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
          >
            <option value="Verna-MPI-EX-2025">Verna-MPI-EX-2025</option>
            <option value="Verna-Diesel-2025">Verna-Diesel-2025</option>
          </select>
          <p className="mt-2">⭐ N/A | 0 Reviews</p>
        </div>
      </div>

      {/* Key Features Component */}
      <KeyFeatures />
    </div>
  );
};

export default CarDetails;
