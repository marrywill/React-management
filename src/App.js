import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/Customer";

const customer = {
  name: "김태인",
  birthday: "910422",
  gender: "남자",
  job: "취업준비생"
};

function App() {
  return (
    <Customer
      name={customer.name}
      birthday={customer.birthday}
      gender={customer.gender}
      job={customer.job}
    />
  );
}

export default App;
