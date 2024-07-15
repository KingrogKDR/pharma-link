import Date from "./Date";
import FormField from "./FormField";
import Selection from "./Selection";
import Title from "./Title";



function SymptomForm() {
  return (
    <>
      {/* title div */}
      <Title />

      {/* patient-detail */}
      <form action="post" className="flex justify-center mb-10">
      <div className="px-8 py-6 sm:border-x-2 lg:w-[55%] border-y-2 font-primary">
        <p className="my-6 ml-1">Patient Name</p>

        {/* name */}
        <div className="sm:flex items-center space-y-6 sm:space-y-0 mr-3 sm:space-x-6 text-gray-600">
          <div>
            <input
              type="text"
              className="w-[90%] h-[15px] border-2 border-gray-400 px-6 py-4 rounded-lg mr-4"
            />
            <p className="mt-3 text-sm">First Name</p>
          </div>
          <div>
            <input
              type="text"
              className="w-[90%] h-[15px] border-2 border-gray-400 px-6 py-4 rounded-lg mr-4"
            />
            <p className="mt-3 text-sm">Last Name</p>
          </div>
        </div>

        {/* date div */}
        <p className="mt-6 mb-4 ml-1">Date</p>
        <Date />

        {/* gender div */}
        <p className="mt-6 mb-4 ml-1">Gender</p>
        <div>
          <input
            type="text"
            className="w-[50%] h-[15px] border-2 border-gray-400 px-6 py-4 rounded-lg mr-4"
          />
          <p className="mt-3 text-sm text-gray-600">Male/Female/Others</p>
        </div>

        {/* age div */}
        <p className="mt-6 mb-4 ml-1">Age</p>
        <div>
          <input
            type="number"
            className="w-[20%] h-[15px] border-2 border-gray-400 px-6 py-4 rounded-lg mr-4"
          />
        </div>
        
        {/* symptoms experienced div */}
        
        <p className="mt-6 mb-4 ml-1">
          What symptoms have you experienced?
        </p>

        <FormField placeholder="Fever, dizzines, nausea, etc." />

        {/* type of sactivities div */}
        <p className="mt-6 mb-4 ml-1">
          What type of activities have you done? Please briefly explain?
        </p>

        <FormField placeholder="Sitting, Running, Working on computer, etc." />
        {/* eaten/drank div */}
        <p className="mt-6 mb-4 ml-1">What have you eaten/drank on this period?</p>

        <FormField />

        {/* if on medication check div */}
        <p className="mt-6 mb-4 ml-1">If you are on medication, did you take your medication?</p>

        <Selection />

        {/* other triggers/symptoms if exists*/}
        <p className="mt-6 mb-4 ml-1">If exists, explain other triggers that affect your health</p>

        <FormField />
        {/* submit div */}
      <div className="mt-4 mb-20 font-primary">
        <label>
          <input type="submit"  
            value="Submit"
            className="w-[30%] px-6 py-4 bg-green-500 text-white rounded-full
            hover:opacity-80
            active:bg-green-700
            cursor-pointer
            "
          />
        </label>
      </div>
      </div>
      </form>
    </>
  );
}

export default SymptomForm;
