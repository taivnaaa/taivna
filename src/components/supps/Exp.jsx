export const Repeater = (props) => {
  return (
    <div className=" w-2/4 h-80 shadow-xl rounded-lg bg-gray-50 px-8 py-8">
      <div className=" flex gap-x-12">
        <div className=" w-52">
          <img src="/logo-upwork.png" alt="" className=" h-8" />
        </div>
        <div className="flex flex-col  leading-7 text-gray-700 w-[450px] gap-y-1 ">
          <p className="  font-semibold text-xl text-gray-900 mb-3">
            {props.Neg}
          </p>
          <p> &#x2022; {props.Hoyr}</p>
          <p> &#x2022; {props.Gurav}</p>
          <p>&#x2022; {props.Duruv}</p>
          <p> &#x2022; {props.Tav}</p>
        </div>
        <div className=" text-gray-700">{props.Zurgaa}</div>
      </div>
    </div>
  );
};
