const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://placeimg.com/64/64/1",
      name: "김태인",
      birthday: "910422",
      gender: "남자",
      job: "취업준비생"
    },
    {
      id: 2,
      image: "https://placeimg.com/64/64/2",
      name: "어머니",
      birthday: "670707",
      gender: "여자",
      job: "주부"
    },
    {
      id: 3,
      image: "https://placeimg.com/64/64/3",
      name: "최선우",
      birthday: "910505",
      gender: "남자",
      job: "취업준비생"
    }
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
