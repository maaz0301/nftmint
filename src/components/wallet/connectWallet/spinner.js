const Spinner = () => {
    return (
      <div className=" bg-grad flex justify-center items-center h-screen fixed inset-0  z-50">
        <div className="w-16 h-16 border-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  };
  
  export default Spinner;
  