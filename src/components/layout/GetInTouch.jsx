export const GetInTouch = ({d}) => {
  return (
    
      <div ref={d} className="flex flex-col items-center gap-y-12 mx-20 my-24 px-8">
        <div className="flex flex-col items-center gap-y-6" >
          <div className="bg-gray-200 rounded-xl w-32 justify-center flex text-gray-600 ">
            Work
          </div>
          <div className=" text-gray-600">
            What’s next? Feel free to reach out to me if you're looking for a
            developer, have a query, or simply want to connect.
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <div className="flex gap-x-2 items-baseline">
            <img src="/Message.png" alt="" className=" h-5 w-5 " />
            <h1 className=" font-medium text-xl">taivanjargal.L@gmail.com</h1>
            <img src="Copy.png" alt="" className=" h-5 w-5" />
          </div>
          <div className="flex gap-x-2 items-baseline">
            <img src="/Call.png" alt="" className=" h-5 w-5 " />
            <h1 className="font-medium text-xl">+91 8980500565</h1>
            <img src="Copy.png" alt="" className=" h-5 w-5" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <div className=" text-gray-600">
            You may also find me on these platforms!
          </div>
          <div className="flex gap-x-2">
            <img src="icoon.png" alt="" />
            <img src="iconn.png" alt="" />
            <img src="iccon.png" alt="" />
          </div>
        </div>
      </div>
    
  );
};
