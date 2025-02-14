import React, { useEffect, useState } from "react";
import { useAuth } from "../Context/AuthProvidor";

const Profile = () => {
  const [user, setUser] = useState({});

  const { logout } = useAuth();
  const handleLogout = async () => {
    const url = import.meta.env.VITE_BACKEND_URL;
    try {
      let response = await fetch(`${url}/user/logout`, {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        console.error("Logout Error:", errorData.message);
      } else {
        let message = await response.json();
        logout();
        console.log(message);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL;
    const fetchUser = async () => {
      try {
        let response = await fetch(`${url}/user/profile`, {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          console.error("Profile Error:", errorData.message);
        } else {
          let userData = await response.json();
          setUser(userData);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchUser();
  }, []);

  // const user = {
  //   name: "John Doe",
  //   email: "johndoe@example.com",
  //   refersCount: 12,
  //   earnings: "₹ 25,000",
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full text-5xl flex items-center justify-center bg-blue-500 text-white border-4 border-blue-500">
            <p>{user.username ? user.username[0].toUpperCase() : null}</p>
          </div>
          <h2 className="mt-4 text-xl font-semibold text-gray-800">
            {user.username}
          </h2>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>

        <div className="mt-6 flex justify-between">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">10</p>
            <p className="text-sm text-gray-600">Refers</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-800">₹ 15,000</p>
            <p className="text-sm text-gray-600">Earnings</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
