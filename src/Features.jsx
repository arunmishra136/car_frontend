import { useState } from "react";

export default function KeyFeatures() {
  const [activeCategory, setActiveCategory] = useState("Specifications");
  const [activeTab, setActiveTab] = useState(null);

  const categories = {
    Specifications: ["Exterior-Lighting", "Exterior", "Exterior-Wheels"],
    Features: ["Interior", "Seating", "Safety"],
    Dimensions: ["Length", "Width", "Height"],
  };

  return (
    <div className="bg-zinc-900 text-white p-6 rounded-xl w-full mx-auto mt-10 shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
        <span className="text-green-400">🔗</span> Key Features
      </h2>
      
      {/* Category Navigation */}
      <div className="flex gap-4 mb-4 justify-center items-center">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => { setActiveCategory(category); setActiveTab(null); }}
            className={`px-4 py-2 rounded-md font-semibold ${
              activeCategory === category ? "bg-green-700 text-white" : "text-gray-400 hover:bg-gray-800"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div className="flex">
        {/* Sidebar for Subcategories */}
        <div className="w-1/3 border-r border-gray-700 pr-4">
          {categories[activeCategory].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`block w-full text-left px-4 py-2 rounded-md mb-2 ${
                activeTab === tab ? "bg-green-700 text-white" : "text-gray-400 hover:bg-gray-800"
              }`}
            >
              {tab.replace("-", " ")}
            </button>
          ))}
        </div>
        
        {/* Content Display */}
        <div className="w-2/3 pl-4">
          {activeTab && (
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-2">
                {activeTab.replace("-", " ")}
              </h3>
              <ul className="list-none">
                
                {activeTab === "Exterior" && <p>Body design, aerodynamics...</p>}
                {activeTab === "Interior" && <p>Dashboard, infotainment...</p>}
                {activeTab === "Seating" && <p>Leather seats, adjustable...</p>}
                {activeTab === "Safety" && <p>Airbags, ABS, stability control...</p>}
                {activeTab === "Length" && <p>Length: </p>}
                {activeTab === "Width" && <p>Width: </p>}
                {activeTab === "Height" && <p>Height: </p>}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
