export const SkillLogo = (props) => {
  console.log(props);
  return (
    <div>
      <img className=" w-16 h-16 object-fill" src={props.Logoo} alt="" />
      <div>{props.Namee}</div>
    </div>
  );
};
