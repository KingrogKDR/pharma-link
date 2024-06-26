import logo from "./../../images/logo.svg"
import right from "./../../images/right.svg"
import { useNavigate } from "react-router-dom"

function LandingPage() {
  const divStyle = {
    width: "100%",
    height: "100dvh",
    backgroundImage: "url(https://plus.unsplash.com/premium_photo-1711524500298-f10d9c00c299?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJsdXJyeSUyMGJhY2tncm91bmQlMjBibHVlfGVufDB8fDB8fHww)",
    backgroundSize: "cover",
  };

  const navigate = useNavigate()

  const goToForm = () => {
    navigate('/symptom-screening')
  }

  return (
    <div style={divStyle}
        className="relative flex py-40 lg:py-12 justify-center"
    >
        <div className="w-[400px] h-[200px] lg:w-[600px] grid absolute justify-center items-center">
            <img src={logo} alt="logo"
                className="mb-12"
            />
            <div className="w-[70%] flex justify-between bg-sky-600 items-center text-white rounded-full px-10 py-4 font-primary font-medium text-xl cursor-pointer ml-20 shadow-md shadow-blue-700">
                <button
                    className="w-3/4 hover:scale-105
                    ease-in 
                    transition
                    duration-300
                    text-center
                    "
                    onClick={goToForm}
                >Enter Your Symptoms</button>
                <button className="w-1/4
                    hover:scale-125
                    ease-out 
                    transition
                    duration-300
                    lg:px-6
                    "
                    onClick={goToForm}
                >
                    <img src={right} alt="enter the site" 
                        className="size-12
                            
                        "
                    />
                </button>
            </div>
        </div>
    </div>
  );
}

export default LandingPage;
