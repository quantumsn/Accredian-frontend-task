import { useState } from "react";
import { InputBox } from "../Components";
import { Link, useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
// import { useAuth } from "../../contexts/AuthProvidor";
// import { useFlashMsg } from "../../contexts/FlashMsgProvidor";

export default function SignUp() {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  //   const [errMsg, setErrMsg] = useState(null);
  //   const navigate = useNavigate();
  //   const { login } = useAuth();
  //   const { addFlashMsg } = useFlashMsg();

  const handleOnChange = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    // const url = import.meta.env.VITE_BACKEND_API_URL;
    // try {
    //   let response = await fetch(`${url}/user/signup`, {
    //     method: "POST",
    //     credentials: "include",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(userData),
    //   });
    //   if (!response.ok) {
    //     let errorData = await response.json();
    //     console.error("Signup Error:", errorData.error);
    //     setErrMsg("Username is already exist");
    //   } else {
    //     login("authenticated");
    //     let successMsg = await response.json();
    //     addFlashMsg(successMsg.message);
    //     navigate("/");
    //   }
    // } catch (err) {
    //   console.log("Error to Signup : ", err.message);
    // }
    console.log(userData);
    setUserData({ username: "", email: "", password: "" });
  };

  return (
    <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen lg:py-4">
      {/* {errMsg != null && (
        <div className="md:w-1/3 my-8 flex justify-between bg-red-200 rounded-md p-4">
          <p className="text-red-900">{errMsg}.</p>
          <CloseIcon
            className="text-red-900 cursor-pointer"
            onClick={() => setErrMsg(null)}
          />
        </div>
      )} */}
      <div className="w-full bg-white rounded-lg shadow md:mt-10 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Create your account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSumbit}>
            <div>
              <InputBox
                id={"username"}
                label={"Write your username"}
                type={"text"}
                name={"username"}
                placeholder={"quantum_sn20"}
                value={userData.username}
                handleOnChange={handleOnChange}
              />
            </div>
            <div>
              <InputBox
                id={"email"}
                label={"Write your email"}
                type={"text"}
                name={"email"}
                placeholder={"quantum1234@gmail.com"}
                value={userData.email}
                handleOnChange={handleOnChange}
              />
            </div>
            <div>
              <InputBox
                id={"password"}
                label={"Write your password"}
                type={"password"}
                name={"password"}
                placeholder={"********"}
                value={userData.password}
                handleOnChange={handleOnChange}
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            >
              Sign Up
            </button>
            <p className="text-sm font-light text-gray-500">
              Already have an account ?{" "}
              <Link
                to="/login"
                className="font-medium text-blue-600 hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
