export const SkillLogo = (props) => {
  console.log(props);
  return (
    <div>
      <img width={50} height={50} src={props.Logoo} alt="" />
      <div>{props.Namee}</div>
    </div>
  );
};
