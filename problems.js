// let arr = ["Hello", 1, 2, 8, 3, -1, -2, -3, "Baaa", true];
// let newArr = 0;

// let newNumber = 0;

// arr.map((el) => {
//   if (typeof el === "number") {
//     newArr += el;
//   }
// });
// console.log(newArr);

// let arr = ["Hello", 1, 2, 8, 3, -1, -2, -3, "Baaa", true];
// let odd = [];
// let even = [];

//  let result = arr.filter((el) => {
//   if (typeof el === "number" && el % 2 && el>=0) {
//     odd +=el+ ", ";
//     return odd
//   } else if (typeof el === "number" && el>=0) {
//     even+=el+ ", ";
//     return even
//   }
// });
// console.log("odd:"+odd, "even: "+even);
// console.log(result);

export default function Home() {
  const API_ENDPOINT = "http://localhost:4080";
  const [data, setData] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    sex: "",
    id: "",
  });

  const fetchData = async () => {
    try {
      const res = await fetch(API_ENDPOINT);
      const fetchedData = await res.json();
      setData(fetchedData);
    } catch (err) {
      console.log("err fetch: ", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const createData = async () => {
    try {
      const response = await fetch(API_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const newData = await response.json();
      setData(newData);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const respond = await fetch(`${API_ENDPOINT}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchData();
    } catch (error) {
      console.log("Error deleting data:", error);
    }
  };

  const clickSubmit = async (event) => {
    event.preventDefault();
    await createData();
  };

  return (
    <div className="mt-10 ml-10">
      <div className="flex gap-x-3 ml-2">
        <input
          onChange={(event) =>
            setUserData({ ...userData, name: event.target.value })
          }
          placeholder="Ner"
          value={userData.name}
          className="border-2 rounded-md pl-1"
        />
        <input
          onChange={(event) =>
            setUserData({ ...userData, age: event.target.value })
          }
          type="number"
          placeholder="Age"
          value={userData.age}
          className="border-2 rounded-md pl-1 w-32"
        />
        <input
          onChange={(event) =>
            setUserData({ ...userData, sex: event.target.value })
          }
          type="text"
          placeholder="Gender"
          value={userData.sex}
          className="border-2 rounded-md pl-1"
        />

        <button
          className="bg-slate-500 text-white px-3 rounded"
          onClick={clickSubmit}
        >
          Submit
        </button>
      </div>
      <div className="mt-3 pl-2 border-2 max-w-[1000px]">
        <div className="flex">
          <p>Name</p> <p className="ml-[263px] ">Age</p>{" "}
          <p className="ml-[120px]"> Gender</p>
        </div>
        {data.map((element, id) => (
          <div className="flex border-2 mt-2" key={element.id}>
            <div className="w-[200px] border-r-2 overflow-x-scroll px-1">
              <div>{element.name}</div>
            </div>
            <div className="ml-[103px] border-l-2 border-r-2 px-1 overflow-x-scroll w-[60px]">
              {element.age}
            </div>
            <div className="ml-[103px] px-1 border-l-2 border-r-2">
              {element.sex}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
