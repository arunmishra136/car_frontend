import { useNavigate } from "react-router-dom";

const CarCard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300">
      <div
        className="bg-black backdrop-blur-lg text-white p-6 rounded-2xl shadow-lg w-70 cursor-pointer hover:scale-105 transition-transform duration-300 border border-white/20"
        onClick={() => navigate("/car")}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNB_YMgmBjV49IxCNEyKzkmsHmzXkcYijd-A&s"
          alt="Hyundai Verna"
          className="w-full h-44 object-cover rounded-lg shadow-md"
        />
        <h2 className="text-2xl font-bold mt-3 text-green-400">Hyundai Verna</h2>
        <p className="text-gray-300 mt-1">₹20 Lakh | Petrol | Automatic</p>

        <div className="mt-4 flex justify-between items-center">
          <button className="bg-green-500 px-4 py-2 rounded-lg font-semibold text-black">
            View Details
          </button>
          <span className="text-gray-400">2025 Model</span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
