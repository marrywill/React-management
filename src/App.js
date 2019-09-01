import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";

const customers = [
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
];

function App() {
  return (
    <div>
      {customers.map(customer => {
        return (
          <Customer
            key={customer.id}
            id={customer.id}
            image={customer.image}
            name={customer.name}
            gender={customer.gender}
            birthday={customer.birthday}
          />
        );
      })}
    </div>
  );
}

export default App;
