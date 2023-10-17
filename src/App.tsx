import React from "react";
import "./App.css";
// import CustomDropdown from "./todo-app/custom-dropdown";
// import CustomSelect from "./todo-app/custome-check";
// import FetchData from "./todo-app/fetch-data" as any;
import FetchData from "./todo-app/fetch-data";
// @ts-ignore

const App: React.FC = () => {
  return (
    <>
      <FetchData />
    </>
  );
};

export default App;
