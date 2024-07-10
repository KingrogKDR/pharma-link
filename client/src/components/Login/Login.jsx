import React from "react";
import logo from "../../images/logo.svg";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const goToSignUP = () => {
    navigate("/sign-up");
  };
  return (
    <div className="h-screen flex justify-center items-center font-primary">
      <div className="w-[400px] h-[80%] border-2 py-8 px-7">
        <div className="flex justify-between">
          <p
            className="text-2xl
            text-gray-600 mb-7"
          >
            Log_In
          </p>
          <img src={logo} alt="logo" className="w-12 h-12" />
        </div>
        <form action="get" className="border-b-2">
          <label htmlFor="username" className="text-sm text-gray-500">
            Username
          </label>
          <input
            type="text"
            className="border-2 w-full h-8 px-4 py-5 my-3 rounded-lg
            focus:outline-none"
          />
          <label htmlFor="password" className="text-sm text-gray-500">
            Password
          </label>
          <input
            type="text"
            className="border-2 w-full h-8 px-4 py-5 my-3 rounded-lg focus:outline-none"
          />
          <input
            type="submit"
            value="Login"
            className="my-5 bg-blue-500 w-full rounded-full px-2 py-4 text-white hover:opacity-80 active:bg-blue-300 cursor-pointer"
          />
        </form>
        <p className="mt-10 text-sm text-center">
          Don't have an account?{" "}
          <button
            className="underline text-sky-600 cursor-pointer"
            onClick={goToSignUP}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
