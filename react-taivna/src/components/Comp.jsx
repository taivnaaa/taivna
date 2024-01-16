export const style = {
  bodyy: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  constainer: {
    padding: "15px",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    boxShadow:
      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  },
  img: {
    width: "300px",
  },
  firstLast: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  },
  genderEmp: {
    display: "flex",
    flexDirection: "row",
    gap: "15px",
  },
};

export const Box = (props) => {
  return (
    <div style={style.constainer}>
      <img style={style.img} src={props.img} alt="" />
      <div style={style.firstLast}>
        <p>{props.firstName}</p>
        <p>{props.lastName}</p>
      </div>
      <div style={style.genderEmp}>
        <p>{props.gender}</p>
        <p>{props.employment}</p>
      </div>
      <div>
        <p>{props.email}</p>
      </div>
    </div>
  );
};
