import express from "express";
import cors from "cors";
import fs from "fs";

const port = 4080;
const app = express();
let arr = [];
app.use(cors());
app.use(express.json());

try {
  const data = fs.readFileSync("db.json");
  arr = JSON.parse(data);
} catch (error) {
  console.log(error);
}

app.get("/", (request, response) => {
  response.send(arr);
});
app.post("/", (request, response) => {
  arr.push(request.body);
  fs.writeFileSync("db.json", JSON.stringify(arr));
  response.send(arr);
});
app.delete("/", (request , response)=>{
  
})
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
