export const SkillLogo = (props) => {
  console.log(props);
  return (
    <div>
      <img className=" w-16 max-[1280px]:max-¨w-24 h-16 object-contain" src={props.Logoo} alt="" />
      <div>{props.Namee}</div>
    </div>
  );
};
