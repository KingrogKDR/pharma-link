import logo from "./../../images/logo.svg"

function Title() {
  return (
    <div className="px-12 py-8 font-primary flex justify-between items-center">
      <div>
        <p className="sm:text-4xl text-2xl font-semibold mb-2">
          Symptom Screening Form
        </p>
        <p className="text-sm text-gray-500 mb-2">
          Please fill this form accordingly
        </p>
      </div>
      <div>
        <img src={logo} alt="logo" className="w-[200px] h-[150px]" />
      </div>
    </div>
  );
}

export default Title;
