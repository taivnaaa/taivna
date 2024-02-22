// const http = require("http")

// const port  = 8000

// const  server = http.createServer((request, response)=>{
//     response.statusCode = 200;
//     response.setHeader("Content-type", "text/plain");
//     response.end("<h1>helloo world</h1>\n");
// })
// server.listen(port , () =>{
//     console.log(`Server is listening ${port}`);
// })
import express from "express";
const port = 8080;
const app = express();
const arr = [
  {
    name: "Dasha ",
    age: 29,
    lastname: "hello",
    id: 1,
  },
  {
    name: "Duul ",
    age: 29,
    lastname: "hello",
    id: 3,
  },
  {
    name: "Duul ",
    age: 29,
    lastname: "hello",
    id: 2,
  },
];

function deleteTheSame(){
    arr.filter((el)=>{
        
    })
}

app.get("/", (request, response) => {
  response.send();
});

app.delete("/", (request, response) => {
  response.json(arr.id);
});

app.post("/", (request, response) => {
  response.json(
    arr.push({
      name: "Duuuuul ",
      age: 29467467,
      lastname: "helloououuuu",
      id: 7,
    })
  );
});

app.listen(port, () => {
  console.log(` end nm http://localhost:${port}`);
});
