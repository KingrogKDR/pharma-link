
function Date() {
  return (
    <div className="sm:flex items-center my-6 text-gray-600">
      <div className="sm:w-[60%] mb-6 sm:mb-0">
        <input
          type="date"
          className="w-[70%] h-[15px] border-2 border-gray-400 px-8 py-6 text-gray-400 rounded-lg"
        />
      </div>
    </div>
  );
}

export default Date;
