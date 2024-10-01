
export default function Preview({ formData, handlePrevious, handleSubmit }) {

  return (
    <div>
      <h1 className="font-bold text-center text-3xl pb-10 pt-10">
        Preview Page
      </h1>
      <div className="max-w-3xl mx-auto">

        
        <div className=" mt-4 flex justify-between">
        <button 
        onClick={handlePrevious} 
        className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
>        
Previous
        </button>
        <button 
        onClick={handleSubmit} 
        className=" text-white bg-black hover:bg-slate-700 focus:ring-4 focus:outline-none focus:ring-slate-500 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
>        Submit
        </button>
      </div>
      </div>
    </div>
  );
}
