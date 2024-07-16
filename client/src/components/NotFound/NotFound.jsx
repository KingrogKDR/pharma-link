import { Link } from "react-router-dom"
import error from "../../images/error.png"

function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center gap-x-5 bg-green  -100">
        <div className="relative w-[500px] h-[500px]">
            <img src={error} alt="Not Found" className=" absolute"/> 
        </div>
        <div>
            <p className="font-primary text-5xl border-b-2 mb-5 text-green-600">ERROR!</p>
            <Link to="/" className="text-3xl underline font-extralight text-green-500 hover:opacity-70">Go Back Home</Link>
        </div>
    </div>
  )
}

export default NotFound