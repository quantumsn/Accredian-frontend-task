import photo from "../../assets/photo.png";

export default function HeroSection({ handleOpen }) {
  return (
    <div className="bg-blue-50 w-5/6 md:w-3/4 px-4 md:px-12 md:pt-0 pt-4 rounded-xl flex flex-col md:flex-row shadow-lg items-center justify-between">
      <div className="text-center md:text-left max-w-md">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Let’s Learn & Earn
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Get a chance to win up to{" "}
          <span className="text-blue-600 font-semibold">Rs. 15,000</span>
        </p>
        <button
          onClick={handleOpen}
          className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          Refer Now
        </button>
      </div>

      <div className="mt-6 md:mt-0">
        <img src={photo} />
      </div>
    </div>
  );
}
