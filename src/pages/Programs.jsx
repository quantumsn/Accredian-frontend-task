import React, { useEffect, useState } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";

const Programs = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const url = import.meta.env.VITE_BACKEND_URL;
    const getData = async () => {
      try {
        let response = await fetch(`${url}/programs`, {
          method: "GET",
          credentials: "include",
        });

        if (!response.ok) {
          console.error("Profile Error:", errorData.message);
        } else {
          let programData = await response.json();
          setPrograms(programData);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    getData();
  }, []);

  return (
    <div className="p-6 flex flex-col items-center justify-center">
      <div className="w-full md:w-2/3 overflow-hidden rounded-lg shadow-lg bg-white">
        <div className="hidden md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-500 text-white text-left">
                <th className="p-4 text-lg font-semibold">Programs</th>
                <th className="p-4 text-lg font-semibold text-center">
                  Referrer Bonus
                </th>
                <th className="p-4 text-lg font-semibold text-center">
                  Referee Bonus
                </th>
              </tr>
            </thead>

            <tbody>
              {programs.map((program, index) => (
                <tr
                  key={index}
                  className={`border-b ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } hover:bg-gray-200 transition`}
                >
                  <td className="p-4 flex items-center gap-2">
                    <FaGraduationCap className="text-blue-600 text-xl" />
                    <span className="text-gray-700 font-medium">
                      {program.name}
                    </span>
                  </td>
                  <td className="p-4 text-center font-semibold text-gray-800">
                    ₹ {program.referrer}
                  </td>
                  <td className="p-4 text-center font-semibold text-gray-800">
                    ₹ {program.referee}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden">
          <h2 className="p-4 text-lg font-semibold text-white bg-blue-500 text-center">
            Programs
          </h2>
          {programs.map((program, index) => (
            <div
              key={index}
              className={`p-4 border-b ${
                index % 2 === 0 ? "bg-gray-100" : "bg-white"
              } hover:bg-gray-200 transition`}
            >
              <div className="flex items-center gap-2">
                <FaGraduationCap className="text-blue-600 text-xl" />
                <span className="text-gray-700 font-medium">
                  {program.name}
                </span>
              </div>
              <div className="mt-2 flex justify-between">
                <div>
                  <span className="text-sm text-gray-600">Referrer Bonus</span>
                  <p className="font-semibold text-gray-800">
                    {program.referrer}
                  </p>
                </div>
                <div>
                  <span className="text-sm text-gray-600">Referee Bonus</span>
                  <p className="font-semibold text-gray-800">
                    {program.referee}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Link to="/">
        <button className="mt-6 w-full md:w-auto bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition">
          Refer Now
        </button>
      </Link>
    </div>
  );
};

export default Programs;
