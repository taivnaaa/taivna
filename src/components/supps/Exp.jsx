export const Repeater = (props) => {
  return (
    <div className=" shadow-xl rounded-xl bg-gray-50 px-8 py-12">
      <div className=" flex gap-x-12 max-[728px]:flex-col max-[728px]:gap-y-4">
        <div className=" max-w-50">
          <img src="/logo-upwork.png" alt="" className=" h-7" />
        </div>
        <div className="max-[728px]:flex max-[728px]:flex-col-reverse max-[728px]:gap-y-4">
          <div className="flex flex-col  leading-7 text-gray-700 max-w-[420px] gap-y-1 ">
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
    </div>
  );
};
