import React from "react";

const Profile = () => {
  // Sample user data
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    refersCount: 12,
    earnings: "₹ 25,000",
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full text-5xl flex items-center justify-center bg-blue-500 text-white border-4 border-blue-500">
            <p>{user.name[0]}</p>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {user.name}
          </h2>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>

        <div className="mt-6 flex justify-between">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">
              {user.refersCount}
            </p>
            <p className="text-sm text-gray-600">Refers</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">
              {user.earnings}
            </p>
            <p className="text-sm text-gray-600">Earnings</p>
          </div>
        </div>

        <button className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
