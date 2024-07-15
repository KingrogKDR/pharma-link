import { useState } from "react";
import logo from "../../images/logo.svg";
import { useAuth } from "../../hooks/useAuth";
import { useRoute } from "../../hooks/useRoute";
import { redirect } from "react-router-dom";

function Login() {
  const route = useRoute();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { setIsLoggedIn } = useAuth()

  const handleSubmit = (e) => {
    e.preventDefault()

    try {
      fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username, 
          password
        })
      }).then((response) => {
        if(response.ok){
          setIsLoggedIn(true)
          route("/symptom-screening")
        } else {
          setIsLoggedIn(false)
          alert("Invalid username or password!")
          redirect("/login")
        }
        return response;
      }).then((data) => console.log(data.status))
      .catch((error) => console.error("Error: ", error.message))
    } catch (error) {
      console.error("error: ", error.message)
      redirect("/login")
    } 
  }
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
        <form className="border-b-2" onSubmit={handleSubmit}>
          <label htmlFor="username" className="text-sm text-gray-500">
            Username
          </label>
          <input
            type="text"
            value={username}
            className="border-2 w-full h-8 px-4 py-5 my-3 rounded-lg
            focus:outline-none"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password" className="text-sm text-gray-500">
            Password
          </label>
          <input
            type="text"
            value={password}
            className="border-2 w-full h-8 px-4 py-5 my-3 rounded-lg focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            value="Login"
            className="my-5 bg-blue-500 w-full rounded-full px-2 py-4 text-white hover:opacity-80 active:bg-blue-300 cursor-pointer"
          />
        </form>
        <p className="mt-10 text-sm text-center">
          Don&apos;t have an account?{" "}
          <button
            className="underline text-sky-600 cursor-pointer"
            onClick={() => route("/sign-up")}
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;
